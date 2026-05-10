import React, { useState, useEffect, useMemo, useRef } from "react";
import { generateSolution } from "./services/geminiService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Layout, 
  BarChart3, 
  ShieldAlert, 
  HeartHandshake, 
  Calculator,
  Search,
  CheckCircle2,
  FileText,
  X,
  Menu,
  TableProperties,
  BrainCircuit,
  Zap,
  Sparkles,
  RefreshCcw,
  AlertCircle,
  Target,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface Question {
  id: number;
  chapter: string;
  examTerm: string;
  originalQ: string;
  title: string;
  text: string;
  solution: string;
  hint: string;
  frameworks: string;
  marks?: string;
  totalMarks?: number;
  chapterName: string;
}

interface Chapter {
  id: string;
  name: string;
  questions: number[];
}

const CHAPTERS: Chapter[] = [
  { id: "chapter-1", name: "Derivatives & Hedging", questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 100, 106, 116] },
  { id: "chapter-2", name: "Theory & SAA", questions: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 99, 101, 108, 109, 117] },
  { id: "chapter-3", name: "Risk Management", questions: [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 102, 114] },
  { id: "chapter-4", name: "Behavioural & ESG", questions: [73, 74, 75, 76, 77, 78, 104, 111, 112, 115] },
  { id: "chapter-5", name: "Taxation & Regulation", questions: [79, 80, 81, 82, 83, 103, 113, 120] },
  { id: "chapter-6", name: "Performance & ALM", questions: [84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 105, 107, 110, 118, 119, 121] },
];

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showFiles, setShowFiles] = useState(false);
  const [paperSearchQuery, setPaperSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"revision" | "mapping">("revision");
  const [showJumpMenu, setShowJumpMenu] = useState(false);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  
  // --- New Features State ---
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("sp5_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [masteredIds, setMasteredIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("sp5_mastered");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [timerFullSeconds, setTimerFullSeconds] = useState(0);
  const [timerRemaining, setTimerRemaining] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const toggleBookmark = (id: number) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleMastered = (id: number) => {
    setMasteredIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    localStorage.setItem("sp5_bookmarks", JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  useEffect(() => {
    localStorage.setItem("sp5_mastered", JSON.stringify(masteredIds));
  }, [masteredIds]);

  // Timer Logic
  const startTimer = (marks: number) => {
    const minutes = marks * 1.8;
    const seconds = Math.floor(minutes * 60);
    setTimerFullSeconds(seconds);
    setTimerRemaining(seconds);
    setIsTimerActive(true);
  };

  useEffect(() => {
    if (isTimerActive && timerRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimerRemaining(prev => prev - 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      if (timerRemaining === 0) setIsTimerActive(false);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerActive, timerRemaining]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const [aiSolution, setAiSolution] = useState<string | null>(null);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiCache, setAiCache] = useState<{ [key: number]: string }>(() => {
    try {
      const saved = localStorage.getItem("sp5_ai_cache");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Failed to parse AI cache", e);
      return {};
    }
  });

  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("sp5_ai_cache", JSON.stringify(aiCache));
  }, [aiCache]);

  useEffect(() => {
    if (questions.length > 0 && questions[currentIndex]) {
      const q = questions[currentIndex];
      setAiSolution(aiCache[q.id] || null);
    }
  }, [currentIndex, questions, aiCache]);

  const generateAiSolution = async () => {
    if (!currentQuestion || isGeneratingAi) return;
    
    if (aiCache[currentQuestion.id]) {
      setAiSolution(aiCache[currentQuestion.id]);
      setShowAnswer(true);
      setTimeout(() => {
        solutionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    setIsGeneratingAi(true);
    setAiSolution(null);
    setShowAnswer(true);

    try {
      const text = await generateSolution(
        currentQuestion.text,
        currentQuestion.examTerm,
        currentQuestion.totalMarks || ""
      );

      setAiSolution(text);
      setAiCache(prev => ({ ...prev, [currentQuestion.id]: text }));
      
      // Scroll to solution
      setTimeout(() => {
        solutionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error: any) {
      console.error("AI Generation Error:", error);
      setAiSolution(error.message || "An error occurred while generating the AI solution. Please check your connectivity.");
    } finally {
      setIsGeneratingAi(false);
    }
  };

  useEffect(() => {
    if (showAnswer && solutionRef.current) {
      solutionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showAnswer]);

  useEffect(() => {
    async function fetchAndParseMD() {
      try {
        const response = await fetch("SP5_Master_Revision.md");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const text = await response.text();
        
        const qBlocks = text.split("### Question ").slice(1);
        const parsedQs: Question[] = qBlocks.map((block) => {
          const lines = block.split("\n");
          const firstLine = lines[0];
          const id = parseInt(firstLine.split(" | ")[0]);
          
          // Cleaner term parsing to remove "Original Q.2" etc from settings
          let examTerm = firstLine.split(" | ")[1]?.replace("Exam Term: ", "").trim() || "";
          const originalQ = firstLine.split(" | ")[2]?.replace("Original Q.", "").trim() || "";

          // Canonicalize term (e.g. "May 2024" instead of "May 24" if mixed)
          examTerm = examTerm.replace(/(\w+) (\d{2})$/, (match, m, y) => `${m} 20${y}`);
          
          const questionTextMatch = block.match(/\*\*Question:\*\*\n([\s\S]*?)\n\n\*\*Full Model Solution:\*\*/);
          const questionText = questionTextMatch ? questionTextMatch[1].trim() : "";

          // Better solution parsing: capture until Hint or Frameworks or end
          const solutionContentMatch = block.split("**Full Model Solution:**")[1] || "";
          const solution = solutionContentMatch.split(/\n\n\*\*(ActEd Exam Hint|Mnemonics\/Frameworks Applied|---)/)[0].trim();

          const hintMatch = block.match(/\*\*ActEd Exam Hint:\*\*\n([\s\S]*?)(\n\n\*\*(Mnemonics\/Frameworks Applied|---)|$)/);
          const hint = hintMatch ? hintMatch[1].trim() : "";

          const frameworksMatch = block.match(/\*\*Mnemonics\/Frameworks Applied:\*\*\n([\s\S]*?)(\n\n---|---|$)/);
          const frameworks = frameworksMatch ? frameworksMatch[1].trim() : "";

          const chapter = CHAPTERS.find(c => c.questions.includes(id));

          // Sum marks
          const marksInText = questionText.matchAll(/[\(\[](\d+)[\)\]]/g);
          let total = 0;
          for (const m of marksInText) {
            total += parseInt(m[1]);
          }
          
          return {
            id,
            chapter: chapter?.id || "other",
            chapterName: chapter?.name || "Other",
            examTerm,
            originalQ,
            title: `Question ${id} — ${examTerm}`,
            text: questionText,
            solution,
            hint,
            frameworks,
            marks: total > 0 ? `[${total} Marks]` : "",
            totalMarks: total
          };
        });

        setQuestions(parsedQs);
      } catch (error) {
        console.error("Error loading revision bank:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAndParseMD();
  }, []);

  useEffect(() => {
    if (showAnswer && solutionRef.current) {
      setTimeout(() => {
        solutionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [showAnswer]);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesSearch = 
        q.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.id.toString().includes(searchQuery) ||
        q.examTerm.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesChapter = true;
      if (selectedChapter === "bookmarked") {
        matchesChapter = bookmarkedIds.includes(q.id);
      } else if (selectedChapter) {
        matchesChapter = q.chapter === selectedChapter;
      }
      
      return matchesSearch && matchesChapter;
    });
  }, [questions, searchQuery, selectedChapter, bookmarkedIds]);

  const chapterProgress = useMemo(() => {
    const progress: { [key: string]: number } = {};
    CHAPTERS.forEach(chap => {
      const chapQs = questions.filter(q => chap.questions.includes(q.id));
      if (chapQs.length === 0) {
        progress[chap.id] = 0;
        return;
      }
      const masteredInChap = chapQs.filter(q => masteredIds.includes(q.id)).length;
      progress[chap.id] = Math.round((masteredInChap / chapQs.length) * 100);
    });
    return progress;
  }, [questions, masteredIds]);

  const totalProgress = useMemo(() => {
    if (questions.length === 0) return 0;
    return Math.round((masteredIds.length / questions.length) * 100);
  }, [questions, masteredIds]);

  const mappingSummary = useMemo(() => {
    const map: { [key: string]: number[] } = {};
    questions.forEach(q => {
      const term = q.examTerm || "Misc";
      if (!map[term]) map[term] = [];
      map[term].push(q.id);
    });

    const getTermValue = (term: string) => {
      const parts = term.split(" ");
      const year = parseInt(parts[parts.length - 1]);
      if (isNaN(year)) return 0;
      const monthStr = parts[0].toLowerCase();
      let monthValue = 0;
      if (monthStr.startsWith("mar")) monthValue = 3;
      else if (monthStr.startsWith("may")) monthValue = 5;
      else if (monthStr.startsWith("jun")) monthValue = 6;
      else if (monthStr.startsWith("jul")) monthValue = 7;
      else if (monthStr.startsWith("sep")) monthValue = 9;
      else if (monthStr.startsWith("nov")) monthValue = 11;
      else if (monthStr.startsWith("dec")) monthValue = 12;
      return year * 100 + monthValue;
    };

    return Object.entries(map).sort((a, b) => getTermValue(a[0]) - getTermValue(b[0]));
  }, [questions]);

  const currentQuestion = filteredQuestions[currentIndex] || questions[currentIndex];

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  const getChapterIcon = (id: string) => {
    switch (id) {
      case "chapter-1": return <Zap size={14} />;
      case "chapter-2": return <Target size={14} />;
      case "chapter-3": return <ShieldAlert size={14} />;
      case "chapter-4": return <BrainCircuit size={14} />;
      case "chapter-5": return <Calculator size={14} />;
      case "chapter-6": return <BarChart3 size={14} />;
      default: return <BookOpen size={14} />;
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <BookOpen className="w-12 h-12 text-indigo-600 animate-pulse" />
          <p className="text-slate-500 font-medium tracking-tight">Initializing Master Question Bank...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="app-root" className="h-screen w-full bg-[#F1F5F9] flex overflow-hidden font-sans text-[#1E293B]">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        id="sidebar" 
        className={`fixed lg:relative w-80 h-full bg-[#0F172A] text-white flex flex-col flex-shrink-0 shadow-2xl z-40 transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-1">Senior Actuarial Tutor</div>
            <h1 className="text-xl font-bold leading-tight tracking-tight">
              SP5 (Investment Specialist)
            </h1>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-slate-400 hover:text-white">
            <ChevronLeft size={20} />
          </button>
        </div>

        {activeTab === "revision" && (
          <div className="px-6 py-4 bg-slate-800/50 border-b border-slate-700/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Overall Mastery</span>
              <span className="text-xs font-black text-indigo-400">{totalProgress}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${totalProgress}%` }}
                className="h-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              />
            </div>
            <p className="text-[9px] text-slate-500 mt-2 font-medium">
              {masteredIds.length} of {questions.length} questions completed
            </p>
          </div>
        )}

        <div className="p-4 border-b border-slate-700/50 flex flex-col gap-3">
          <div className="flex bg-slate-800 rounded-lg p-1">
            <button 
              onClick={() => setActiveTab("revision")}
              className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded ${activeTab === "revision" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"}`}
            >
              <BookOpen size={14} />
              Bank
            </button>
            <button 
              onClick={() => setActiveTab("mapping")}
              className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded ${activeTab === "mapping" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-200"}`}
            >
              <TableProperties size={14} />
              Mapping
            </button>
          </div>

          <div className="p-4 border-t border-slate-700/50">
            <button 
              onClick={() => {
                setActiveTab("revision");
                setIsSidebarOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black shadow-lg shadow-indigo-500/20 transition-all uppercase tracking-widest"
            >
              Start Revision
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              id="search-input"
              type="text"
              placeholder="Search concepts or Term..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 pl-9 pr-8 text-xs focus:ring-1 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-white placeholder:text-slate-500"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
                setActiveTab("revision");
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-white transition-colors"
                title="Clear Search"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-2 custom-scrollbar">
          <div className="px-5 py-4 text-[10px] uppercase tracking-wider text-slate-500 font-bold">Curriculum Categories</div>
          <ul className="px-3 space-y-1">
            <li 
              id="chapter-all"
              onClick={() => {
                setSelectedChapter(null);
                setCurrentIndex(0);
                setActiveTab("revision");
              }}
              className={`p-3 rounded-lg cursor-pointer transition-all flex items-center justify-between text-xs ${!selectedChapter ? "bg-indigo-600 font-bold shadow-lg text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
            >
              <div className="flex items-center gap-3">
                <Layout size={14} />
                <span>Full Library</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded ${!selectedChapter ? "bg-white/20" : "bg-slate-700 text-slate-300"}`}>{questions.length}</span>
            </li>
            <li 
              id="chapter-bookmark"
              onClick={() => {
                setSelectedChapter("bookmarked");
                setCurrentIndex(0);
                setActiveTab("revision");
              }}
              className={`p-3 rounded-lg cursor-pointer transition-all flex items-center justify-between text-xs ${selectedChapter === "bookmarked" ? "bg-amber-600 font-bold shadow-lg text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
            >
              <div className="flex items-center gap-3">
                <Star size={14} className={bookmarkedIds.length > 0 ? "fill-amber-400 text-amber-400" : ""} />
                <span>Bookmarked</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded ${selectedChapter === "bookmarked" ? "bg-white/20" : "bg-slate-700 text-slate-300"}`}>{bookmarkedIds.length}</span>
            </li>
            {CHAPTERS.map((chap) => (
              <li 
                id={`chapter-${chap.id}`}
                key={chap.id}
                onClick={() => {
                  setSelectedChapter(chap.id);
                  setCurrentIndex(0);
                  setActiveTab("revision");
                }}
                className={`p-3 rounded-lg cursor-pointer transition-all flex flex-col gap-2 ${selectedChapter === chap.id ? "bg-indigo-600 text-white font-bold shadow-lg" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
              >
                <div className="flex items-center justify-between w-full text-xs">
                  <div className="flex items-center gap-3">
                    {getChapterIcon(chap.id)}
                    <span>{chap.name}</span>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded ${selectedChapter === chap.id ? "bg-white/20 text-white" : "bg-slate-700 text-slate-300"}`}>
                    {chapterProgress[chap.id]}%
                  </span>
                </div>
                <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${chapterProgress[chap.id]}%` }}
                    className={`h-full ${selectedChapter === chap.id ? "bg-white" : "bg-indigo-500"}`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main id="main-content" className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-20 bg-white border-b border-slate-200 flex flex-col z-20">
          <div className="flex-1 flex items-center justify-between px-4 lg:px-8 border-b border-slate-50">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200"
              >
                <Menu size={20} />
              </button>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                  {activeTab === "revision" ? "Question Bank" : "Exam Seat Mapping"}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-900">
                    {activeTab === "revision" ? `Q# ${currentIndex + 1} / ${filteredQuestions.length || 0}` : `Showing ${mappingSummary.length} Terms`}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button 
                onClick={() => setIsFlashcardMode(!isFlashcardMode)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all shadow-sm border ${
                  isFlashcardMode 
                    ? "bg-amber-600 text-white border-amber-500" 
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <RefreshCcw size={14} className={isFlashcardMode ? "animate-spin-slow" : ""} />
                <span className="hidden sm:inline">{isFlashcardMode ? "Revision Mode" : "Flashcard Mode"}</span>
                <span className="sm:hidden">Study</span>
              </button>

              <button 
                onClick={() => setShowJumpMenu(true)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all shadow-sm"
              >
                <TableProperties size={14} />
                <span className="hidden sm:inline">Jump To Q</span>
                <span className="sm:hidden">Jump</span>
              </button>

              {activeTab === "revision" && (
                <div className="flex gap-2">
                  <button 
                    id="prev-btn"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="p-2 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-30 transition-all shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    id="next-btn"
                    onClick={handleNext}
                    disabled={currentIndex >= (filteredQuestions.length - 1)}
                    className="group flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-md shadow-indigo-600/20 disabled:opacity-30 transition-all"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {activeTab === "revision" && filteredQuestions.length > 0 && (
            <div className="h-8 bg-slate-50/50 flex items-center px-4 lg:px-8 gap-2 overflow-x-auto no-scrollbar border-b border-slate-100">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap mr-2">Quick Nav:</span>
              <div className="flex items-center gap-2">
                {Array.from({ length: 11 }, (_, i) => currentIndex - 5 + i)
                  .filter(idx => idx >= 0 && idx < filteredQuestions.length)
                  .map(idx => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setShowAnswer(false);
                      }}
                      className={`min-w-[28px] h-6 rounded flex items-center justify-center text-[10px] font-bold transition-all ${
                        idx === currentIndex 
                          ? "bg-indigo-600 text-white shadow-sm" 
                          : "bg-white text-slate-500 hover:bg-indigo-50 border border-slate-200"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))
                }
              </div>
              <button 
                onClick={() => setShowJumpMenu(true)}
                className="ml-auto flex items-center justify-center w-6 h-6 rounded bg-indigo-50 text-indigo-600 border border-indigo-100 hover:bg-indigo-100 transition-all shadow-sm"
                title="Jump to specific question"
              >
                <TableProperties size={12} />
              </button>
            </div>
          )}
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#F8FAFC]">
          <AnimatePresence mode="wait">
            {activeTab === "revision" ? (
              <motion.div 
                key="revision-pane"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="min-h-full p-4 lg:p-8"
              >
                {filteredQuestions.length > 0 ? (
                  <div className="max-w-5xl mx-auto space-y-6">
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden">
                      <div className="p-6 lg:p-10 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50/30">
                        <div className="flex flex-col mb-6">
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="text-[9px] font-black bg-indigo-600 text-white px-2 py-1 rounded shadow-sm tracking-widest uppercase">{currentQuestion.chapterName}</span>
                              <span className="text-[9px] font-black bg-slate-900 text-white px-2 py-1 rounded shadow-sm tracking-widest uppercase">Term: {currentQuestion.examTerm}</span>
                              {currentQuestion.originalQ && (
                                <span className="text-[9px] font-black bg-slate-500 text-white px-2 py-1 rounded shadow-sm tracking-widest uppercase">Original Q.{currentQuestion.originalQ}</span>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => toggleBookmark(currentQuestion.id)}
                                className={`p-2 rounded-lg border transition-all ${bookmarkedIds.includes(currentQuestion.id) ? "bg-amber-50 border-amber-200 text-amber-500 shadow-sm" : "bg-white border-slate-200 text-slate-400 hover:bg-slate-50"}`}
                                title={bookmarkedIds.includes(currentQuestion.id) ? "Remove Bookmark" : "Bookmark Question"}
                              >
                                <Star size={18} className={bookmarkedIds.includes(currentQuestion.id) ? "fill-current" : ""} />
                              </button>
                              <button 
                                onClick={() => toggleMastered(currentQuestion.id)}
                                className={`p-2 rounded-lg border transition-all ${masteredIds.includes(currentQuestion.id) ? "bg-emerald-50 border-emerald-200 text-emerald-600 shadow-sm" : "bg-white border-slate-200 text-slate-400 hover:bg-slate-50"}`}
                                title={masteredIds.includes(currentQuestion.id) ? "Mark as Not Mastered" : "Mark as Mastered"}
                              >
                                <CheckCircle2 size={18} />
                              </button>
                            </div>
                          </div>
                          
                          {currentQuestion.marks && (
                            <div className="flex items-center gap-4 mb-2">
                              <span className="h-px flex-1 bg-orange-100"></span>
                              <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full border-2 border-orange-200 uppercase tracking-[0.15em] shadow-sm">
                                  {currentQuestion.marks}
                                </span>
                                {currentQuestion.totalMarks && (
                                  <button 
                                    onClick={() => startTimer(currentQuestion.totalMarks!)}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white rounded-full text-[9px] font-bold uppercase tracking-tight hover:bg-indigo-600 transition-all shadow-md group"
                                  >
                                    <Calculator size={12} className="group-hover:animate-pulse" />
                                    Exam Timer Mode
                                  </button>
                                )}
                              </div>
                              <span className="h-px flex-1 bg-orange-100"></span>
                            </div>
                          )}
                        </div>
                        <h2 className="text-xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-6">
                          {currentQuestion.title}
                        </h2>
                        
                        {isFlashcardMode && !showAnswer ? (
                          <div className="p-12 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center bg-slate-50/50">
                            <BrainCircuit size={48} className="text-slate-300 mb-4" />
                            <h3 className="text-lg font-bold text-slate-500 mb-2">Question Hidden (Flashcard Mode)</h3>
                            <p className="text-sm text-slate-400 max-w-xs mb-6">Recall the context of {currentQuestion.title} before revealing.</p>
                            <button 
                              onClick={() => setShowAnswer(true)}
                              className="px-6 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all"
                            >
                              Show Question & Answer
                            </button>
                          </div>
                        ) : (
                          <div className="prose prose-slate prose-lg max-w-none prose-p:text-slate-700 prose-p:font-medium prose-p:leading-relaxed">
                            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {currentQuestion.text}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col lg:flex-row">
                        <div className="flex-1 p-6 lg:p-10 border-r border-slate-100" ref={solutionRef}>
                          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                            <button 
                              onClick={generateAiSolution}
                              disabled={isGeneratingAi}
                              className={`w-full sm:flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-2 ${
                                isGeneratingAi 
                                  ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed" 
                                  : "bg-white border-indigo-600 text-indigo-600 hover:bg-indigo-50 shadow-lg shadow-indigo-600/5"
                              }`}
                            >
                              {isGeneratingAi ? (
                                <>
                                  <RefreshCcw size={16} className="animate-spin" />
                                  AI Processing...
                                </>
                              ) : (
                                <>
                                  <BrainCircuit size={16} />
                                  AI Professional Solution
                                </>
                              )}
                            </button>
                            
                            <button 
                              onClick={() => {
                                setShowAnswer(!showAnswer);
                                setAiSolution(null);
                              }}
                              className="w-full sm:flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 shadow-xl shadow-slate-900/10 transition-all"
                            >
                              <Sparkles size={16} className={showAnswer ? "rotate-180" : ""} />
                              {showAnswer ? "Hide Content" : "Reveal Original Answer"}
                            </button>
                          </div>

                          <AnimatePresence mode="wait">
                            {showAnswer && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                              >
                                {aiSolution ? (
                                  <div className="space-y-8">
                                    <div className="flex items-center gap-3 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-lg w-fit">
                                      <Zap size={14} className="text-indigo-600 fill-indigo-600" />
                                      <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">AI Expert Insight</span>
                                    </div>
                                    <div className="markdown-body text-slate-600 bg-white p-8 lg:p-12 rounded-2xl border-2 border-indigo-100 shadow-xl shadow-indigo-500/5">
                                      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                                        {aiSolution}
                                      </ReactMarkdown>
                                    </div>
                                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                                      <AlertCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
                                      <p className="text-xs text-slate-500 leading-relaxed italic">
                                        Disclaimer: Generated by Gemini. Professional actuarial judgment should be applied. Align your answers with IFoA/ActEd core reading.
                                      </p>
                                    </div>
                                    <button 
                                      onClick={() => setAiSolution(null)}
                                      className="text-[10px] font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest flex items-center gap-2 transition-colors mx-auto"
                                    >
                                      <RefreshCcw size={12} />
                                      Switch to Original Model Solution
                                    </button>
                                  </div>
                                ) : (
                                  <div className="space-y-8">
                                    <div className="flex items-center gap-3 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-lg w-fit">
                                      <CheckCircle2 size={14} className="text-emerald-600" />
                                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Official Model Solution</span>
                                    </div>
                                    <div className="markdown-body text-slate-600 bg-white p-8 lg:p-12 rounded-2xl border border-slate-100 shadow-sm">
                                      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                                        {currentQuestion.solution}
                                      </ReactMarkdown>
                                    </div>

                                    {(currentQuestion.hint || currentQuestion.frameworks) && (
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                        {currentQuestion.hint && (
                                          <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                                            <div className="flex items-center gap-3 mb-4">
                                              <Zap size={18} className="text-amber-500 fill-amber-500" />
                                              <h4 className="text-xs font-black text-amber-900 uppercase tracking-widest">ActEd Hint</h4>
                                            </div>
                                            <div className="prose prose-amber prose-sm max-w-none text-amber-900/80">
                                              <ReactMarkdown>{currentQuestion.hint}</ReactMarkdown>
                                            </div>
                                          </div>
                                        )}
                                        {currentQuestion.frameworks && (
                                          <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                                            <div className="flex items-center gap-3 mb-4">
                                              <Award size={18} className="text-emerald-600" />
                                              <h4 className="text-xs font-black text-emerald-900 uppercase tracking-widest">Frameworks</h4>
                                            </div>
                                            <div className="prose prose-emerald prose-sm max-w-none text-emerald-900/80">
                                              <ReactMarkdown>{currentQuestion.frameworks}</ReactMarkdown>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center py-40 grayscale opacity-20">
                    <Search size={64} className="mb-6" />
                    <p className="text-lg font-black italic">Search result: Nil</p>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div 
                key="mapping-pane"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="p-4 lg:p-10 max-w-5xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                  <div className="p-8 border-b border-slate-100">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                      <TableProperties className="text-indigo-600" />
                      Exam Paper Mapping Summary
                    </h2>
                    <p className="text-sm text-slate-500 mt-2 font-medium">Quickly locate questions by their original examination sitting.</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                          <th className="px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">Exam Sitting</th>
                          <th className="px-8 py-4 text-left text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">Portal ID Mapping</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {mappingSummary.map(([term, ids]) => (
                          <tr key={term} className="hover:bg-indigo-50/30 transition-colors">
                            <td className="px-8 py-6 align-top">
                              <span className="text-sm font-black text-slate-900">{term}</span>
                            </td>
                            <td className="px-8 py-6 flex flex-wrap gap-2">
                              {ids.map(id => (
                                <button
                                  key={id}
                                  onClick={() => {
                                    setSearchQuery("");
                                    setSelectedChapter(null);
                                    const fullIdx = questions.findIndex(q => q.id === id);
                                    if (fullIdx !== -1) {
                                      setCurrentIndex(fullIdx);
                                    }
                                    setActiveTab("revision");
                                  }}
                                  className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all hover:shadow-sm"
                                >
                                  Q{id}
                                </button>
                              ))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Exam Timer Overlay */}
        <AnimatePresence>
          {isTimerActive && (
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
            >
              <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-8 min-w-[300px]">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Exam Simulation</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black tabular-nums">{formatTime(timerRemaining)}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Left</span>
                  </div>
                </div>
                <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: `${(timerRemaining / timerFullSeconds) * 100}%` }}
                    className={`h-full ${timerRemaining < 60 ? "bg-red-500 animate-pulse" : "bg-indigo-500"}`}
                  />
                </div>
                <button 
                  onClick={() => setIsTimerActive(false)}
                  className="p-3 bg-red-600/20 text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-lg"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* All Questions Jump Menu Modal */}
        <AnimatePresence>
          {showJumpMenu && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[110] flex items-center justify-end"
              onClick={() => setShowJumpMenu(false)}
            >
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="bg-white w-full max-w-lg h-full shadow-2xl flex flex-col"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6 bg-[#0F172A] text-white flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <TableProperties size={20} className="text-indigo-400" />
                    <div>
                      <h3 className="font-black tracking-tight text-lg">Question Index</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Select to jump directly</p>
                    </div>
                  </div>
                  <button onClick={() => setShowJumpMenu(false)} className="p-2 hover:bg-white/10 rounded-lg transition-all">
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 flex-1 overflow-y-auto custom-scrollbar bg-slate-50">
                  <div className="mb-6 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Jump to Q # (e.g. 42)..."
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm font-bold focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm"
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) {
                          const targetIdx = filteredQuestions.findIndex(q => q.id === val);
                          if (targetIdx !== -1) {
                            setCurrentIndex(targetIdx);
                            setShowAnswer(false);
                            setSearchQuery(""); // Clear search to enable navigation
                            // Don't close immediately to let them see selection if they want
                          }
                        }
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                    {filteredQuestions.map((q, idx) => (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setShowAnswer(false);
                          setSearchQuery(""); // Clear search to enable navigation
                          setShowJumpMenu(false);
                        }}
                        className={`h-12 rounded-xl flex flex-col items-center justify-center transition-all border ${
                          idx === currentIndex 
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/30" 
                            : "bg-white border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600"
                        }`}
                      >
                        <span className="text-[10px] font-black uppercase opacity-60">Q</span>
                        <span className="text-sm font-black">{idx + 1}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-white">
                  <button 
                    onClick={() => setShowJumpMenu(false)}
                    className="w-full py-3 bg-slate-900 text-white text-xs font-black rounded-xl"
                  >
                    Close Menu
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <style>{`
        #app-root {
          scrollbar-gutter: stable;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.5);
        }
        
        .markdown-body ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .markdown-body li {
          margin-bottom: 2rem;
          position: relative;
          padding-left: 3rem;
          line-height: 1.8;
          color: #475569;
          display: block;
        }
        .markdown-body li::before {
          content: '→';
          position: absolute;
          left: 0.5rem;
          top: 0;
          color: #4f46e5;
          font-weight: 900;
          font-size: 1.25rem;
        }
        .markdown-body p {
          margin-bottom: 1.5rem;
        }
        .markdown-body strong {
          color: #0f172a;
          font-weight: 900;
          display: inline-block;
          margin-bottom: 0.25rem;
          border-bottom: 2px solid rgba(79, 70, 229, 0.1);
        }
        .markdown-body em {
          color: #6366f1;
          font-style: italic;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
