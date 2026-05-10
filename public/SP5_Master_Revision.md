# SP5 Master Revision & Question Bank
## IAI/IFoA Subject SP5: Investment and Finance Strategy

### Table of Contents
1. [How to Pass SP5: The Six Habits of Highly Effective Students](#how-to-pass-sp5)
2. [Actuarial Frameworks for Investment Strategy](#actuarial-frameworks)
3. [Chapter 1: Derivatives & Hedging (Q1 – Q32)](#chapter-1)
4. [Chapter 2: Portfolio Theory & ALM (Q33 – Q61)](#chapter-2)
5. [Chapter 3: Risk Management (Q62 – Q72)](#chapter-3)
6. [Chapter 4: Behavioural Finance & ESG (Q73 – Q78)](#chapter-4)
7. [Chapter 5: Taxation & Regulation (Q79 – Q83)](#chapter-5)
8. [Chapter 6: Performance Measurement (Q84 – Q98)](#chapter-6)

---

<a name="how-to-pass-sp5"></a>
### How to Pass SP5: The Six Habits of Highly Effective Students
To secure full marks in SP5, students must transition from "rote learning" to "strategic application." Based on the ActEd guide, here are the core habits:

1.  **Habit 1: Master the Core Reading Early**
    Don't just read; summarize. Create "Flashcards" for definitions of complex instruments like Swaptions, Credit Default Swaps, and exotic options.
2.  **Habit 2: Practice Under Exam Conditions**
    Subject SP5 is time-pressured (1.8 minutes per mark). Practice writing out full bullet points rather than just "noting" the answer.
3.  **Habit 3: Think Like a Consultant**
    Examiners look for the "Why." If you recommend a hedge, explain the *impact* on the solvency ratio and the *risk* of the hedge failing (e.g., basis risk).
4.  **Habit 4: Use Mnemonics Proactively**
    Apply **SOUNDER TRACTORS** or **NTCC** to every "Design a Strategy" question to ensure breadth of coverage.
5.  **Habit 5: Integrate ESG and Behavioural Finance**
    The modern SP5 syllabus gives significant weight to ESG. Always consider "Social Responsibility" and "Climate Risk" alongside financial returns.
6.  **Habit 6: Analysis of Past Papers (IAI & IFoA)**
    Patterns emerge in how the Board of Examiners tests certain areas. This Master Bank covers 98 questions to expose you to those patterns.

---

<a name="actuarial-frameworks"></a>
### Actuarial Frameworks for Investment Strategy

#### **SOUNDER TRACTORS** (Factors Affecting Investment Policy)
*   **S**: **Size** of assets and liabilities relative to the market.
*   **O**: **Overall** objectives (Return vs. Risk).
*   **U**: **Uncertainty** of liability outgo (Amount and Timing).
*   **N**: **Nature** of liabilities (Real vs. Fixed).
*   **D**: **Diversification** requirements.
*   **E**: **Expenses** and management costs.
*   **R**: **Restriction** on investments (Legal or Internal).
*   **T**: **Taxation** (Capital Gains vs. Income Tax).
*   **R**: **Risk** appetite of the stakeholders.
*   **A**: **Accounting** standards (IFRS 9/17).
*   **C**: **Competitors'** actions and industry benchmarks.
*   **T**: **Term** of the liabilities.
*   **O**: **Other** factors (e.g., ESG, Currency).
*   **R**: **Reputation** risk.
*   **S**: **Solvency** capital requirements (RBC).

#### **NTCC** (Matching Liabilities)
*   **N**: **Nature** (matching real liabilities with real assets).
*   **T**: **Term** (matching duration).
*   **C**: **Currency** (matching the currency of outgo).
*   **C**: **Certainty** (matching the probability of payment).

---

<a name="chapter-1"></a>
## Chapter 1 – Derivatives & Hedging

### Question 1 | Exam Term: Dec 22 | Original Q.3
**Question:**
You are a non-executive director on the remuneration committee of Sporting Inc. Sporting Inc. started out providing equipment and sportswear for athletes, but in recent years the company has expanded rapidly to now offer a wide range of services such as management of professional sportspersons and organising tournaments.

The executives’ earnings include share options linked with sales volumes. You have been approached to consider other options for incentives, such as bonuses related to profits or risk-adjusted return on capital (RAROC).

Explain how you would consider these options and make changes if necessary. [10]

**Full Model Solution:**
*   **Assessment of Current Scheme (Share Options):**
    *   *Advantages:* Aligns executive interests with shareholders (growth focus).
    *   *Disadvantages:* Linking to *sales volume* alone may encourage aggressive growth without regard for profitability or risk. This is a common agency problem.
    *   *Risk:* It might lead to "over-trading" or taking on high-risk projects just to boost top-line numbers.
*   **Evaluation of Profit-Related Bonuses:**
    *   *Advantages:* Focuses on bottom-line results.
    *   *Disadvantages:* Can be manipulated by accounting choices (accruals). Encourages short-termism at the expense of long-term investment (R&D).
*   **Evaluation of RAROC (Risk-Adjusted Return on Capital):**
    *   *Why it fits:* It is the most actuarially sound metric. It ensures that executives are only rewarded if the returns they generate exceed the risk-weighted cost of capital.
    *   *Impact:* Discourages "gambling" with company assets and promotes sustainable shareholder value.
*   **Recommended Changes:**
    *   Move towards a "Balanced Scorecard" approach.
    *   Replace sales-linked options with a mix of RAROC-linked bonuses and long-term vestings.
    *   Introduce "Clawback" provisions to mitigate moral hazard.

**ActEd Exam Hint:**
In remuneration questions, always mention **Agency Theory** and **Moral Hazard**. The examiner wants to see that you understand that incentives drive behavior, often in unintended ways.

**Mnemonics/Frameworks Applied:**
*   **POMS**: Consider the **Objectives** of the stakeholders (shareholders want long-term value, executives want a high payout).

---

### Question 2 | Exam Term: Dec 22 | Original Q.6
**Question:**
XYZ is an established insurance company and is launching a new single premium pension product which offers the policy holder an immediate annuity payable annually till the time the annuitant is alive. The annuity payments increase at a guaranteed rate of 3% annually. On death of the annuitant, the payments would cease.

The assets for this product are majorly invested in index linked Government securities and corporate bonds to meet the liabilities.

i) An analyst has suggested that the product is exposed to significant interest rate risk. Comment on this. (4)

ii) Discuss the use of swaps to hedge the payments from the products. (3)

iii) Express how you would model the asset-liability mismatch reserve for the above product. (7)

**Full Model Solution:**
*   **i) Interest Rate Risk Exposure:**
    *   The liabilities are long-term (annuity for life) with a 3% guaranteed increase.
    *   Index-linked bonds match inflation-linked liabilities, but here the increase is *fixed* (3%), not inflation-linked.
    *   Therefore, there is a **mismatch**. If interest rates fall, the value of the fixed 3% liability increases more than the assets.
    *   Reinvestment risk exists if the corporate bond coupons cannot be reinvested at the assumed 3% target.
*   **ii) Use of Swaps:**
    *   An **Interest Rate Swap (IRS)** could be used where XYZ pays a floating rate and receives a fixed 3% (or equivalent) to match the guaranteed increase.
    *   This converts floating-rate asset income into fixed-rate liability matching.
    *   *Benefit:* Reduces volatility in the solvency ratio.
*   **iii) Modeling the ALM Reserve:**
    *   Use a **Stochastic Model** (e.g., Monte Carlo simulations).
    *   Project cash flows for both assets and liabilities under 1,000+ scenarios of yield curve shifts.
    *   Calculate the Net Present Value (NPV) for each scenario: $NPV = PV(Assets) - PV(Liabilities)$.
    *   The reserve should be set at a specific percentile (e.g., Value at Risk at 99.5% level over 1 year, consistent with Solvency II/RBC).
    *   Include a "Market Value Margin" for non-hedgeable risks (longevity).

**ActEd Exam Hint:**
For annuity questions, always check if the increase is *fixed* or *inflation-linked*. Matching a fixed increase with index-linked bonds is a common trap.

**Mnemonics/Frameworks Applied:**
*   **NTCC**: The **Nature** of the liability is fixed-increase (non-inflation), but the **Certainty** is affected by longevity risk.

---

### Question 3 | Exam Term: Jul 22
**Question:**
Consider a 10-year Interest Rate Swap (IRS) based on a notional principal of 100 million. Under the terms of the swap, Company A agrees to make interest payments annually in arrears based on a fixed interest rate in return for which Company B (or C or D) makes corresponding floating interest rate payments based on the 1-year spot Inter Bank Offer Rate (IBOR). The investment bank arranging the swap needs 5 bps (0.05%) p.a. of notional principal as its fee.

Below table shows interest rates in the market at which Company A, B, C and D can issue bonds based on their credit rating profile:

| Company | Fixed rate | Floating rate |
| :--- | :--- | :--- |
| A | 9% p.a. | IBOR + 0.60% |
| B | 8% p.a. | IBOR – 0.25% |
| C | 10% p.a. | IBOR + 1.55% |
| D | 11% p.a. | IBOR + 2.45% |

i) Should Company A swap interest cash flows with Company B, C or D? Justify your answer. (4)

ii) Define credit risk and mention two ways to control it. (2)

iii) Discuss how the credit risk exposure of an IRS will be expected to change over the life of the swap for the receiver of the fixed rate when the yield curve is downward sloping. Assume that interest rates will evolve as implied by current yield curve. (3)

iv) In the context of mean-variance portfolio theory, explain briefly the following terms:
*   opportunity set
*   efficient frontier
*   indifference curves
*   optimum portfolio
(4)

**Full Model Solution:**
*   **i) Choice of Counterparty:**
    *   Co A should look for **Comparative Advantage**.
    *   Compare the spreads between fixed and floating for all parties.
    *   Select the counterparty that generates the highest "Net Gain" (Total Savings minus the 5bps bank fee).
    *   *Calculation logic:* Sum of best rates available to each separately vs. sum of rates in the swap.
*   **ii) Credit Risk Management:**
    *   *Definition:* The risk that the counterparty fails to make payments.
    *   *Controls:* 1. **Collateral Management** (CSA agreements). 2. **Netting** (ISDA Master Agreement).
*   **iii) Credit Risk in Downward Sloping Yield Curve:**
    *   In a downward sloping curve, future expected floating rates (IBOR) are lower than current rates.
    *   For the fixed-rate *receiver*, the swap has a positive mark-to-market value (asset).
    *   As time passes, if rates follow the curve, the "replacement cost" increases, hence credit exposure *rises* initially before the "amortization effect" takes over near maturity.
*   **iv) Portfolio Theory Definitions:**
    *   **Opportunity Set:** The set of all possible combinations of risky assets.
    *   **Efficient Frontier:** The subset of the opportunity set that provides the maximum return for a given level of risk.
    *   **Indifference Curves:** Curves representing the risk-return trade-off for a specific investor; all points on a curve provide equal utility.
    *   **Optimum Portfolio:** The point where the investor's highest indifference curve is tangent to the Efficient Frontier.

**ActEd Exam Hint:**
When discussing yield curves and swaps, use the term **Expected Future Spot Rates**.

---

### Question 4 | Exam Term: Jul 22
**Question:**
ABC Ltd. is a non-dividend paying company whose current share price is 1000. The following table shows the current market prices of four exchange traded European-style call options available on ABC shares.

| S. No. | Strike Price | Term to Maturity | Premium |
| :--- | :--- | :--- | :--- |
| 1 | 925 | 1 month | 85 |
| 2 | 1000 | 1 month | 30 |
| 3 | 1050 | 1 month | 10 |
| 4 | 1000 | 2 months | 45 |

An options trader has one-month investment horizon. At the month end, he will close out his positions in any call options (long or short) available in his portfolio.

Strategy A: The trader intends to buy one call with a strike price of 1050 and sell one call with a strike price of 1000 both having one month to expiry.

Strategy B: The trader intends to buy one call with a strike price of 1000 having two months to expiry and sell one call with a strike price of 1000 having one month to expiry.

Strategy C: The trader takes the following positions:
- buys one call with a strike price of 1050 having one month to expiry
- sells two calls with a strike price of 1000 having one month to expiry
- buys one call with a strike price of 1000 having two months to expiry

i) Explain briefly, when strategy A might make sense. (3)

ii) Discuss briefly, when strategy B might make sense. (6)

iii) Identify strategy C and state the trader’s view on ABC share price. (2)

iv) State the adjustments required to Strategy C on the day of the news, buying / selling only the last two tabulated call options (i.e. call options with premium 10 and 45), if the new information is bad news and ABC share price fell down to 980. (2)

**Full Model Solution:**
*   **i) Strategy A (Buy 1050 Call, Sell 1000 Call):**
    *   This is a **Bear Call Spread**.
    *   *Logic:* It makes sense when the trader expects the share price to *fall* or stay below 1000. 
    *   The trader collects a net premium (income) and has limited downside if the price stays low.
*   **ii) Strategy B (Buy 1000 Call 2-month, Sell 1000 Call 1-month):**
    *   This is a **Calendar Spread (horizontal spread)**.
    *   *Logic:* Makes sense if the market is expected to be stable in the short term (decay of the short 1-month option) but volatile in the second month.
    *   Maximum profit occurs if the stock price is at the strike (1000) at the first expiration.
*   **iii) Strategy C (Complex Position):**
    *   This is a **Butterfly Spread** or a variation of a **Ratio Spread** depending on the specific quantities.
    *   *Trader's View:* Neutral. They expect the price to stay within a tight range around the middle strike price.
*   **iv) Adjustments (Price falls to 980):**
    *   If bad news hits, the delta of the position changes.
    *   To maintain the hedge or profit from the new direction, the trader would need to **Buy Put Options** or **Sell more Calls** to become "Delta Negative."
    *   Specifically, they might close the 1050 leg and open lower strike positions.

**Mnemonics/Frameworks Applied:**
*   **Risk Mitigation**: Constant monitoring of "Greeks" ($\Delta, \gamma, \nu, \theta$).

---

---

### Question 5 | Exam Term: Jul 22 | Original Q.3
**Question:**
In a developing country ABC, twenty years ago, insurance sector was opened up for private players that have become profitable from past few years. Currently many life insurers are coming up for Initial Public Offerings (IPOs) and their major task is to set an appropriate value of the company.

The above country (ABC) was dependent upon two other countries for importing crude oil and coal. A war broke out between those two countries – hence severely impacting country ABC’s crude oil and coal imports. This shook the economy of ABC and inflation increased significantly. The central bank of ABC immediately raised base interest rate by 0.50% p.a. in order to control inflation.

The Government intends to reduce dependency on crude oil and other fossil fuels that increase the economy’s carbon emissions in to the atmosphere. Carbon emissions include gases like carbon dioxide (CO2), methane (CH4) etc. that causes global warming. Along with a host of countries, the Government has recently announced major commitments to significantly cut carbon emissions with an aim to reach "net zero" carbon footprint in the coming years.

i) Discuss the challenges in valuing life insurance companies as compared to valuing companies from other industries using fundamental analysis and tools like Price to earnings ratio. (4)

ii) Suggest various ways to value life insurance companies. Your answer should include key metrics for comparison that will help a prospective investor in choosing one life insurer over another life insurer. (5)

iii) Mention other ways to control inflation by the Government / central bank in addition to the 0.50% p.a. increase in interest rate. (4)

iv) Suggest possible ways to reduce the net carbon emissions to zero by considering environmental issues (ESG) at an individual level as well as at the Government level with more emphasis on individual level. (6)

v) In the context of behavioural finance, write the name of the behaviour / property displayed in following cases:
a) Top five equity mutual funds have more than 50% of their funds invested in these 15 stocks. I will also invest in these 15 stocks.
b) Today is full moon day, so market should move up as this happened many times in the past. I will buy call option on the equity index.
c) Today my favourite equity analyst in business TV channel said that Banking sector would perform well. I will buy Bank stocks.
d) During the past month, these three stocks came more than ten times in the list of daily top five gainers. I will buy these three stocks.
e) Gold prices are rising every month for the past six months. I will buy gold ETF (exchange traded funds).
(5)

**Full Model Solution:**
*   **i) Challenges in Valuation (Life vs. Other Industries):**
    *   *Long-term Nature:* Unlike retail or tech, life insurance profits are realized over decades. A single year's "Earnings" (P/E) is heavily dependent on actuarial assumptions (mortality, discount rates).
    *   *Prudence:* Accounting profits are often distorted by statutory prudence requirements.
    *   *LTC:* The "Cost of Capital" and "Solvency Requirements" are much more complex and affect the cash available to shareholders.
*   **ii) Alternative Valuation Methods & Metrics:**
    *   **Embedded Value (EV):** The present value of future profits from existing business plus adjusted net worth. This is the industry standard.
    *   **Value of New Business (VNB):** Measures the profitability of new policies sold in the year.
    *   **Metrics for Comparison:** 1. **VNB Margin** (VNB/APE). 2. **Persistency Ratio** (Customer retention). 3. **Solvency Ratio** (Capital strength).
*   **iii) Controlling Inflation (Non-Interest Rate Methods):**
    *   **Fiscal Policy:** Increase taxes or reduce government spending to reduce aggregate demand.
    *   **Supply-Side Policies:** Improvements in productivity or infrastructure to reduce production costs.
    *   **Direct Controls:** Price and wage controls (though often ineffective long-term).
    *   **Exchange Rate Policy:** Strengthening the local currency to reduce the cost of imports.
*   **iv) Reducing Carbon Emissions (ESG):**
    *   *Individual Level:* 1. Shift to electric vehicles. 2. Adoption of renewable energy (solar). 3. Reduced meat consumption.
    *   *Government Level:* 1. Carbon Taxes. 2. Subsidies for Green Tech. 3. "Net Zero" legislation and reporting requirements (TCFD).
*   **v) Behavioural Finance Identification:**
    *   a) **Herding**: Investing because "Top funds" are doing it.
    *   b) **Superstition / Magical Thinking**: Linking market moves to the lunar cycle.
    *   c) **Authority Bias**: Blindly following a "famous analyst."
    *   d) **Availability / Recency Bias**: Buying stocks just because they appeared frequently in recent news/gainer lists.
    *   e) **Momentum / Extrapolation**: Buying gold because prices are currently rising, assuming the trend continues.

**ActEd Exam Hint:**
For life insurance valuation questions, the "Gold Standard" answer must include **Embedded Value (EV)**. If you don't mention EV, you lose the easy marks.

---

### Question 6 | Exam Term: Jun 19 | Original Q.3
**Question:**
Your neighbour, an accountant who just retired, has some amount of money for investment. He is a risk-averse investor with a four-year investment horizon. He is considering few investment alternatives: Corporate Bonds (CBs); Fixed Deposits (FDs) and Fixed Maturity Plans (FMPs).

An FMCG (fast-moving consumer goods) manufacturing company issues CB1 bond; and a Cement producing company issues CB2 bond. Both the bond issues have offered a choice to have annual coupons or a cumulative return option. FD has only one payment of principal and interest combined at maturity. FMPs are close-ended debt funds that have a fixed tenure and invest in instruments whose term is similar to its maturity. The FMP also has only one payment at maturity.

i) Discuss the approach to credit rating of the two companies by rating agencies. (10)

ii) Discuss the key features of CBs, FDs and FMPs. (3)

iii) Stating any assumptions used, suggest your neighbor the most suitable investment among CB1, FD and FMP. (5)

iv) He heard the recent news about FMPs payments were withheld. What would be the potential reasons for the same and in the light of this possibility would your advice to him will change? (3)

**Full Model Solution:**
*   **i) Credit Rating Approach:**
    *   The agency looks at **Business Risk** (Industry position, competitive advantage) and **Financial Risk** (Gearing, Interest coverage, Liquidity).
    *   For CB1 (FMCG): They look at brand loyalty, defensive nature of the sector, and cash flow stability.
    *   For CB2 (Cement): They look at the cyclicality of the construction sector and capital intensity.
    *   *Specifics:* Analysis of management quality, governance, and the "Ability vs. Willingness" to pay.
*   **ii) Key Differences:**
    *   **FDs:** Safest, usually insured up to a limit, fixed return, liquid (with penalty).
    *   **CBs:** Listed on exchange, tradable (liquid), but subject to market price risk and credit risk.
    *   **FMPs:** Tax-efficient (indexation benefit), close-ended (low liquidity), credit risk depends on the underlying portfolio.
*   **iii) Suitability Recommendation:**
    *   For a risk-averse investor, **Fixed Deposits** or **FMP (AAA-rated)** are best.
    *   If the FMP offers indexation (as per the table's indexation at 4% p.a.), the **After-Tax Return** on the FMP will likely be higher than the FD or CB1, making it the "Efficient" choice for a sophisticated risk-averse investor.
*   **iv) Withheld Payments in FMPs:**
    *   Usually due to **Liquidity Crisis** or "Side-Pocketing" of bad debt in the underlying portfolio (e.g., defaults in infrastructure sectors).
    *   The fund manager cannot sell the illiquid/defaulted paper and thus freezes redemptions to protect remaining investors.

**Mnemonics/Frameworks Applied:**
*   **SOUNDER TRACTORS**: Specifically **T** (Taxation) and **R** (Risk) drive the choice here.

---

### Question 7 | Exam Term: Jun 19 | Original Q.4
**Question:**
ABC Company is available for trade in cash as well as FnO (Futures and Options) segment of the stock exchange. ABC FnOs are available for term to expiry of one, two and three months.

During an inspection of the facilities of ABC, the industry Regulator issued a warning letter to ABC. On the same day immediately after the news came out on a TV channel, a trader took short position in one lot of future on shares of ABC with a one-month time to expiry.

Within few minutes after the trade, the future traded at 2% below the level of short position took by the trader. For two days, the future continued to trade at around 2% below the level of short position. After two days, the share price of ABC started moving up slowly and in a week’s time, the future traded at around 1% above the level of short position.

i) Use Behavioral Finance arguments to explain why the trader holds the future persistently for the week rather than closing out the future earlier either by booking profits in first two days or book modest losses in last few days. (3)

ii) Discuss the steps to mitigate losses where the trader intends to hold the short future until expiry. (4)

**Full Model Solution:**
*   **i) Behavioral Explanation:**
    *   **Loss Aversion:** The pain of realizing a loss is greater than the joy of a similar gain. The trader holds on hoping for a "break-even."
    *   **Disposition Effect:** The tendency to "cut winners" and "ride losers."
    *   **Cognitive Dissonance:** Ignoring the news that the market has recovered and sticking to the original "Regulation is bad" thesis.
*   **ii) Loss Mitigation:**
    *   **Stop-Loss Orders:** Set a hard exit point to prevent total capital wipeout.
    *   **Hedging with Options:** Buy an "Out-of-the-Money" (OTM) Call option. If the price spikes further, the call gain offsets the future loss (creating a synthetic put).
    *   **Position Sizing:** Reduce the lot size to lower the emotional and financial impact.

---

### Question 8 | Exam Term: Jun 19 | Original Q.5
**Question:**
i) Describe the following indices:
a) FTSE 100 Index
b) Chicago Board Option Exchange Volatility Index
c) Markit iTraxx Europe Index
(9)

ii) A friend of yours wants to invest in equities in an overseas emerging market. He has asked for your suggestion in deciding whether to use local indices of that market or Global index series for researching into the relative merits of investing in different countries. Discuss your suggestion. (6)

**Full Model Solution:**
*   **i) Index Descriptions:**
    *   **FTSE 100:** Market-cap weighted index of the 100 largest companies on the LSE. Highly representative of the UK economy and global sectors (mining, banking).
    *   **VIX:** "The Fear Gauge." Measures the market's expectation of 30-day volatility based on S&P 500 option prices.
    *   **iTraxx Europe:** A CDS index representing a basket of 125 investment-grade European corporate entities. Used to hedge or speculate on credit spreads.
*   **ii) Local vs. Global Indices:**
    *   **Local Indices:** Capture domestic nuances but may lack liquidity or standardized reporting. Better for "Niche" strategies.
    *   **Global Series (MSCI, FTSE Russell):** Provide **Investability Guards** (ensure foreigners can buy), consistency in valuation, and allow for easier cross-country comparison.
    *   *Recommendation:* Use Global indices for strategic allocation and Local indices for the final tactical stock selection.

---

### Question 9 | Exam Term: Mar 21 | Original Q.4
**Question:**
Suppose that the term structure of interest rates is flat in both India and the UK. The interest rate in India is 5% per annum and that in the UK is 2% per annum, both continuously compounded. The spot rate between the Indian rupee (INR) and UK’s pound sterling (GBP) is INR 90 per GBP.

i) Calculate the one year forward exchange rate. (1)

ii) Explain how you would make arbitrage profit, if any, in case the one year forward exchange rate is INR 85 per GBP. (3)

iii) Explain how you would make arbitrage profit, if any, in case the one year forward exchange rate is INR 95 per GBP. (3)
iv) Calculate value of a 4-year currency swap (Co XYZ receives 6% INR, pays 3% GBP). (5)
v) Discuss currency hedging using forwards. (5)

**Full Model Solution:**
*   **i) Forward Rate Calculation:**
    *   Using Interest Rate Parity (IRP): $F = S \times e^{(r_{INR} - r_{GBP})t}$
    *   $F = 90 \times e^{(0.05 - 0.02) \times 1} \approx 90 \times 1.03045 = 92.74 \text{ INR/GBP}$.
*   **ii) Arbitrage (Forward = 85):**
    *   Forward is "Underpriced" compared to parity.
    *   *Strategy:* Borrow GBP at 2%, convert to INR at 90, invest in India at 5%. Simultaneously buy GBP forward at 85 to "lock in" the exit.
    *   *Profit:* At t=1, you have $90e^{0.05}$ INR. You need $e^{0.02}$ GBP to repay debt. Converting INR to GBP at 85 gives you more than enough to repay.
*   **iii) Arbitrage (Forward = 95):**
    *   Opposite of above. Borrow INR, invest in GBP, sell GBP forward at 95.
*   **iv) Currency Swap Valuation:**
    *   Calculate the value of two bonds: $V_{swap} = P_{INR} - S \times P_{GBP}$.
    *   $P_{INR}$ is the value of an INR bond paying 6% coupons.
    *   $P_{GBP}$ is the value of a GBP bond paying 3% coupons.
    *   Discount all cash flows at the respective continuous rates (5% and 2%).
*   **v) Currency Hedging with Forwards:**
    *   *Advantages:* No upfront cost (unlike options), provides certainty, eliminates downside.
    *   *Disadvantages:* Obligatory (cannot benefit from favorable moves), creates "Opportunity Cost."

**ActEd Exam Hint:**
In currency questions, always specify if you are quoting **Direct** or **Indirect**. Use the formula $F/S = (1+r_d)/(1+r_f)$ for discrete or $e^{(r_d-r_f)}$ for continuous.

---

### Question 10 | Exam Term: Mar 22 | Original Q.3
**Question:**
The manager of a large bond fund is expecting a significant inflow of cash in the near future.

i) Describe how the manager would protect the fund against volatility in bond yields in this situation. (3)

ii) Describe the residual risks that remain with the strategy you have described. (4)

iii) Suggest alternative reasons why the manager might want to hedge the portfolio. (2)

**Full Model Solution:**
*   **i) Protection Strategy:**
    *   The manager is worried about **falling yields** (rising bond prices) before they can invest the cash.
    *   *Strategy:* Buy **Bond Futures** or **Interest Rate Swaps** (pay floating, receive fixed). This "locks in" the current high yields.
    *   When the cash arrives, they buy physical bonds and close the future position.
*   **ii) Residual Risks:**
    *   **Basis Risk:** The yields on the futures/swaps may move differently than the specific bonds the manager intended to buy.
    *   **Duration Mismatch:** If the hedge duration doesn't perfectly match the target bond duration.
    *   **Cash Flow Timing:** If the inflow happens earlier or later than expected.
*   **iii) Alternative Hedging Reasons:**
    *   To adjust the portfolio's **Duration** without selling physical bonds (reducing transaction costs).
    *   To meet a specific **ALM** target mandated by the client.

---

### Question 11 | Exam Term: Mar 22 | Original Q.4
**Question:**
A fund management firm covering both bonds and equities is analysing the performance of its funds over the last year.

i) An investor is planning to make a switch between the following two bonds:
*   Treasury 6% Apr 2026, clean price 122.5, Gross Redemption Yield = 1.35%
*   Treasury 5.5% Sep 2025, clean price 118.3, Gross Redemption Yield = 1.41%
Describe the type of switch the investor is undertaking and the investigations to be considered before making this switch. (5)

Several colleagues in the company have been using technical analysis, whereas one of the equity fund managers has not used this technique in the past and is weighing her options.

ii) Outline the possible advantages and disadvantages of technical analysis. (4)

The equity fund manager also noticed that two of her funds has experienced significantly different returns over the past year.

iii) Outline why the performance of two portfolios managed by the same fund manager might differ. (4)

iv) The fund manager is required to produce the following information (Actual quarterly and yearly returns for each asset class in the portfolio, and for the total portfolio; Yearly benchmark returns; Outperformance/Underperformance versus the benchmark). (9)

**Full Model Solution:**
*   **i) Bond Switch:**
    *   This is a **Yield-Pick-Up Switch** (moving from 1.35% to 1.41%). It could also be a **Policy Switch** if the duration profiles are different.
    *   *Investigations:* 1. Relative liquidity. 2. Accrued interest and transaction costs. 3. Tax implications (is the capital gain/income split different?). 4. Expected future yield curve shifts.
*   **ii) Technical Analysis:**
    *   *Pros:* Captures market psychology and trends; objective (based on data); good for short-term timing.
    *   *Cons:* "Past performance is no guarantee"; can give false signals in choppy markets; ignores fundamental value.
*   **iii) Performance Differences (Same Manager):**
    *   **Different Mandates:** One might have tighter risk constraints.
    *   **Cash Flow Timing:** Impact of "Market Timing" on the specific dates cash entered/left.
    *   **Universe Restrictions:** Different clients might ban certain sectors (ESG/Tobacco).
*   **iv) Return Calculations:**
    *   **Time-Weighted Return (TWR):** Sub-divide the year into periods where cash flows occurred. Neutralizes manager's influence on cash flow timing. $\text{TWR} = (1+r_1)(1+r_2)... - 1$.

**ActEd Exam Hint:**
In performance attribution, distinguish between **Allocation Effect** (being in the right asset class) and **Selection Effect** (choosing the right stocks).

---

### Question 12 | Exam Term: Mar 22 | Original Q.6
**Question:**
A hedge fund launched a new product to its clients (retail investors) that provides variable monthly income. At every month end, after deducting fees from the fund, any amount in excess of capital invested is paid as income for the month to investors. The fund would charge a monthly management fee of 0.2% on AUM and a performance fee of 20% on fund return in excess of 1% per month net of management fee.

The product has a lock-in period of three years post which investors can liquidate their investment anytime by giving one-month notice. Initially, a list of good performing stocks is prepared. The product works in two stages:
Stage one: sell OTM put options to collect premium as income until exercise. 
Stage two: sell covered call options on the stock held to collect premium as income.

i) List the reasons why institutional investors might not be interested to invest in hedge funds. (2)

ii) Discuss possible regulations on the operational (non-investment) aspects of hedge funds. (5)

iii) Discuss the financial / investment risks associated with the hedge fund’s new product. (10)

**Full Model Solution:**
*   **i) Institutional Disinterest:**
    *   **High Fees:** The "2 and 20" structure is often considered excessive.
    *   **Lack of Transparency:** Many hedge funds are "black boxes."
    *   **Illiquidity:** Lock-in periods don't suit funds with frequent outgo.
*   **ii) Operational Regulation:**
    *   **Reporting:** Mandatory disclosure of leverage and counterparty exposure.
    *   **Capital Requirements:** Ensuring the fund has enough skin in the game.
    *   **Separation of Duties:** Independent custodians and third-party auditors.
*   **iii) Risks of Option-Selling Strategy:**
    *   **Gamma Risk:** A sharp move against the position requires rapid rebalancing which may be impossible in illiquid markets.
    *   **Counterparty Risk:** If the option exchange or clearinghouse fails.
    *   **Capped Upside:** Covered calls limit the gain in a bull market while leaving downside open.

---

### Question 13 | Exam Term: Mar 22 | Original Q.7
**Question:**
A trader has a view that stock markets would fall in a month and medium term (3 to 7 years) bond yields would fall in six months time. He is considering shorting an equity index future and buying a call option on a Zero Coupon Bond (ZCB).

i) Describe the role of margin in the context of futures market. (3)

ii) Calculate variation margins in the first two days for the trader who short an equity index futures at 17,500 level and the index returns were 0.75% and -1.25% for the first two days. Contract (Market lot) size is 50 units. (2)

iii) State in words the relation between forward price volatility of a bond and forward yield volatility. (1)

iv) In a developed economy, yield on a Government bond is lower than that of a similar bond in a developing economy. Does that mean the Government bond with lower yield has more interest rate risk? Justify your answer. (3)

v) Calculate the price of a six-month European call option with strike price of CU 80 available on a 5-year ZCB with face value CU 100, given spot yields are 5% pa and forward yield volatility is 20%. (5)

**Full Model Solution:**
*   **i) Role of Margin:**
    *   To acts as a **Performance Bond**.
    *   To prevent the accumulation of losses (Daily Mark-to-Market).
    *   *Initial Margin:* Upfront deposit. *Variation Margin:* Daily adjustment.
*   **ii) Variation Margin Logic:**
    *   If index falls 0.75%, the short position *gains* money. If it falls further, more gains.
    *   $\text{Margin} = \Delta \text{Price} \times \text{Lot Size}$.
*   **iii) Volatility Relation:**
    *   Forward price volatility is approximately equal to forward yield volatility multiplied by the **Modified Duration** of the bond.
*   **iv) Duration and Yield:**
    *   Lower yield = Higher Duration ($D = \sum \frac{t \times CF_t}{(1+y)^t}$).
    *   A bond in a developed economy (low yield) is theoretically *more* sensitive to a 1bp change in rates than a high-yield developing bond.
*   **v) ZCB Call Price:**
    *   Use Black’s Model for bond options: $C = P(0,T) [F_\text{yield} N(d_1) - K N(d_2)]$. (Or a similar adaptation of Black-Scholes).

---

### Question 14 | Exam Term: May 23
**Question:**
International diversification via Futures, Options, and Swaps.
i) Advantages/Disadvantages of each for diversification. (10)
ii) Selecting distributions for asset prices (beyond Normal). (10)
iii) Profit from poor market performing using futures. (4)

**Full Model Solution:**
*   **i) Derivative Comparison:**
    *   **Futures:** *Pros:* High liquidity, low cost, no upfront premium. *Cons:* Linear risk (unlimited loss), requires daily margin management.
    *   **Options:** *Pros:* Capped downside, allows for "Asymmetric" returns. *Cons:* Cost (Premium), time decay ($\theta$).
    *   **Swaps:** *Pros:* Customized term and currency. *Cons:* Counterparty risk, harder to unwind.
*   **ii) Beyond the Normal Distribution:**
    *   **Student's t-distribution:** Captures "Fat Tails" (Kurtosis).
    *   **Log-Normal:** Prevents negative prices (though not ideal for returns).
    *   **Stable Paretian:** For extreme events.
*   **iii) Profiting from Bear Markets:**
    *   Short the **Index Future**. If the market falls, you buy back cheaper.
    *   *Why better?* Avoids the borrow-cost of physical short selling and is much faster to execute.

---

### Question 15 | Exam Term: May 23
**Question:**
Mr. Hoffer sold puts on Thai banks in 1997.
**Task:** Identify Emotional and Cognitive Biases. [5]

**Full Model Solution:**
*   **Overconfidence:** Believing his team had a "special relationship" or superior insight into Thai government intentions.
*   **Confirmation Bias:** Seeking out Thai officials who confirmed his view that default was impossible while ignoring market signals (waning liquidity).
*   **Representativeness:** Assuming past Thai banking stability would represent the future, despite the regional crisis.
*   **Illusion of Control:** Selling deep-out-of-the-money puts thinking he could manage the risk, ignoring "Tail Risk."

---

### Question 16 | Exam Term: May 23
**Question:**
i) Tech analysis pros/cons. (2)
ii) 40-day MA crossover above 20-day MA. (2)
iii) Relative Strength approaches. (3)
iv) Risk in Wheat Future hedge vs. Brent Put hedge. (2)

**Full Model Solution:**
*   **ii) Moving Average Crossover:**
    *   If the *Long-term* (40-day) crosses *above* the *Short-term* (20-day), it is often a **Bearish** signal. It indicates that the recent downward momentum is accelerating compared to the longer trend.
*   **iii) Relative Strength:**
    *   **Top-down:** Identify outperforming sectors, then outperforming stocks within those sectors.
    *   **Bottom-up:** Relative Strength Index (RSI). Buy if RSI < 30 (oversold), sell if > 70 (overbought).
*   **iv) Risk Comparison:**
    *   **Wheat Future (Short):** Basis risk (price of specific wheat grade vs. future grade) and linear exposure.
    *   **Brent Put (Long):** Basis risk (Brent vs. Russian Oil). Downside risk is capped at the premium, but the "hedge" fails if the price spread between Brent and Russian oil widens significantly.

**Mnemonics/Frameworks Applied:**
*   **POMS**: The farmer's **Objectives** are price certainty; the oil producer's **Objectives** are downside protection with upside participation.

---

---

### Question 17 | Exam Term: May 24
**Question:**
Actuarial and Legal Fundamentals.
i) What is the central bank statement on future policy called? (1)
ii) What policy addresses monopolizing tech? (1)
iii) Term for an individual with rights to possession under Trust Law. (1.5)
iv) Which regulation form has the fastest response? (1)
v) ESG objective of buying fair trade. (1.5)
vi) Premier League fit and proper scrutiny. (1.5)
vii) Principle explaining the need for qualifications. (1.5)
viii) Which investor class finds expertise a bottleneck? (1)

**Full Model Solution:**
*   i) **Forward Guidance**: High-frequency Central Bank terminology.
*   ii) **Competition Policy** (or Anti-Trust Policy).
*   iii) **The Beneficiary** (or the life tenant in specific trust contexts).
*   iv) **Self-Regulation**: Industry participants can change rules faster than legislation.
*   v) **Social Responsibility** (The 'S' in ESG).
*   vi) **Statutory Regulation** (applied by a governing body).
*   vii) **Competence and Care**: Part of the core principles of institutional investment.
*   viii) **Retail Investors**: They often lack the scale to hire specialized investment expertise.

---

### Question 18 | Exam Term: May 25 | Original Q.5
**Question:**
International diversification for a US investor.
**Task:** Describe achieving exposure via Futures, Options and Equity Swaps. [13]

**Full Model Solution:**
*   **i) Potential Benefits of International Diversification:**
    *   **Risk Reduction:** Foreign markets often have lower correlation with domestic equities. Reduces overall portfolio volatility through diversification across different economic cycles, political environments, and currency zones.
    *   **Return Enhancement:** Access to new growth markets (e.g., emerging markets, frontier economies). Potential to capture higher returns where domestic markets are stagnant or underperforming.
    *   **Currency Diversification:** Exposure to foreign currencies can act as a natural hedge if domestic currency depreciates.
    *   **Broader Opportunity Set:** Ability to invest in sectors or industries underrepresented in the domestic market (e.g., tech giants, luxury goods, renewable energy leaders).
*   **ii) Achieving Exposure via Derivatives:**
    *   **Futures:** The manager would find a domestic equity market index future that closely matches the equities in their client’s portfolio. The equity exposure could then be reduced by selling domestic futures, while simultaneously buying futures in a variety of international equity markets.
    *   **Options:** The simplest way is to buy call options on overseas equity indices. Sufficient exposure depends on the delta of the options. Exposure is measured as $\text{delta} \times \text{nominal exposure}$. It's possible to simultaneously sell call options in the domestic market to hedge domestic exposure.
    *   **Equity Swaps:** A contract under which the proceeds of a notional domestic equity index portfolio are exchanged for the proceeds of an index portfolio based on a basket of international equity indices over an agreed time period.
*   **iii) Critical Factors to Evaluate:**
    *   **Correlation Analysis:** Need to verify that international equities are truly less correlated — during global crises, correlations often spike ("correlation breakdown").
    *   **Currency Risk:** FX fluctuations can amplify or erode returns. Need decision: hedge currency exposure or leave unhedged?
    *   **Market Selection:** Developed markets (US, Europe) or emerging markets (India, Brazil)? Different risk/return dynamics.
    *   **Political/Regulatory Risks:** High regulatory uncertainty, capital controls, or unstable environments in some jurisdictions.
    *   **Cost of Access:** Higher transaction costs, custody fees, and tax inefficiencies (e.g., withholding tax).
    *   **Liquidity Concerns:** Lower liquidity in some markets can lead to higher trading costs or exit risks.
    *   **Operational Readiness:** Evaluate whether existing systems, custody, and compliance can handle international securities.

**ActEd Exam Hint:**
Diversification is the only "Free Lunch" in finance, but only if correlations remain stable. In crises, correlations often go to 1.0.

---

### Question 19 | Exam Term: Nov 19 | Original Q.1
**Question:**
Calculate swaption value (right to enter 4-year pay-fixed swap in 2 years).
**Data:** 3-year spot (6.5%), 4-year (6.6%), 5-year (6.75%), 6-year (7%). Volatility 25%. [8]

**Full Model Solution:**
*   **Data Highlights:** Principal $L = 100$ Cr, Fixed $R = 6\%$, Forward Swap Rate $F = 7\%$, Volatility $\sigma = 25\%$, Strike $T = 2$.
    *   **Annuity Factor:** Calculated as $\sum e^{-rt} = 2.9614$ (for years 3 to 6).
    *   **Black's Model Parameters:** $d_1 = 0.6128$, $d_2 = 0.2592$. $\Phi(d_1) = 0.7300, \Phi(d_2) = 0.6023$.
    *   **Final Value:** $L \times \text{Annuity Factor} \times [F \Phi(d_1) - R \Phi(d_2)] = 4.43$ crore.
*   **Concept:** This represents a "Payer Swaption" – the right to pay fixed (6%) and receive floating in a future environment where the expected market rate is 7%.

---

### Question 20 | Exam Term: Nov 19
**Question:**
Unit-linked product with capital guarantee. Equity crash happens.
i) Discuss how to carry out "equities to bonds" switch at minimum cost. (4)
ii) Liability hedging approaches. (8)

**Full Model Solution:**
*   **i) Minimum Cost Switch:**
    *   **Internal Crossing:** Trading between different internal funds to avoid external bid-offer spreads and brokerage.
    *   **Phased Implementation:** Reducing price impact by switching in stages.
    *   **Derivatives Strategy:** Using long bond forwards or call options on bonds to gain immediate exposure while exiting equities.
    *   **Cash Flow Direction:** Using new premiums and investment income to buy target assets (bonds) instead of reinvesting in current ones (equities).
*   **ii) Liability Hedging Approaches:**
    *   **Absolute Matching:** Using 4.75-year Zero Coupon Bonds (ZCBs) to match exact cash flow timing and amount.
    *   **Immunization:** Using coupon-paying bonds to match durations and reduce interest rate sensitivity.
    *   **Swaps:** Using interest rate/inflation swaps to hedge guarantees without requiring full asset cover (ISDA needed).
    *   **Yield Curve Strategies:** 
        *   *Upward Sloping:* Buy long-dated bonds + OTC put options to protect fund value.
        *   *Downward Sloping:* Buy short-dated bonds and roll-over (higher yield but reinvestment uncertainty).
    *   **Mark-to-Market Risk:** Occurs between bond asset value and PV of liabilities discounted using the bond yield curve.

---

### Question 21 | Exam Term: Nov 19 | Original Q.6
**Question:**
Travel company needs funding.
i) Describe Private Debt. (6)
ii) Private Equity vs. Private Debt suitability. (8)
iii) Tax incentives for startups. (4)
iv) Behavioral finance of the owner (High return vs. interest). (6)

**Full Model Solution:**
*   **i) Private Debt Features:**
    *   Non-bank transaction with **Covenant Protection** (similar to bank loans).
    *   Not actively traded ("Buy and hold").
    *   No formal long-term debt rating required (though external ratings can improve bargaining).
    *   Typically medium to long-term ($>$3 years).
*   **ii) Debt vs Equity Suitability:**
    *   **Private Debt:** Issuer keeps management rights; cost higher than bank loans due to illiquidity/lack of info; restrictive covenants.
    *   **Private Equity:** Shared management rights; no additional interest cost; includes **Developmental Capital** (for mature expansion) and **Venture Capital** (conceptual/high growth).
*   **iii) Startup Incentives:** 1. Tax holidays for set-up. 2. LTCG exemptions. 3. Exemptions on investments above Fair Market Value (FMV).
*   **iv) Behavioral Factors:**
    *   **Anchoring:** Success probability influenced by specific reports despite varying manager profiles.
    *   **Prospect Theory:** Confusion and risk-seeking behavior when comparing certain FD interest with uncertain (but higher) startup potential.

---

### Question 22 | Exam Term: Nov 20 | Original Q.2
**Question:**
Product with "X% of highest recorded NAV" guarantee.
i) Key contents in presentation of ALM results. (6)
ii) Use of dynamic liability benchmarks. (2)

**Full Model Solution:**
*   **i) ALM Presentation (The 3 Dimensions):**
    *   **Time Dimension:** Projections of asset/liability values, mismatch reserves, and shortfalls at monthly/annual intervals.
    *   **Probabilistic Dimension:** Range of likely outcomes; ruin probability (probability of shortfalls exceeding reserves).
    *   **Asset Mix Dimension:** Effect of changing investment strategy or fees (FMC). Summarize in tables mapping return vs. risk (VaR).
*   **ii) Dynamic Liability Benchmarks:**
    *   Benchmarks that vary continually with the nature of liabilities.
    *   Intermediate position between static benchmarks and full hedging.
    *   Vital for unpredictable contexts like currency or high-water mark guarantees.

---

### Question 23 | Exam Term: Nov 20 | Original Q.4
**Question:**
Option Payoffs and Strategies.
i) European vs. American cost. (3)
ii) Strategy (Put at 1000, Call at 1100). Explain payoff. (3)
iii) Rationale for the strategy. (1)
iv) Complex payoff (Long Call 1100, Long Call 1000, Short 2 Calls 1050). (3)
v) Rationale. (1)

**Full Model Solution:**
*   **i) Option Comparison:** American options must cost at least as much as European ones because they grant identical rights plus the **Early Exercise** right.
*   **ii) Strangle (Long Put 1000, Long Call 1100) Payoff:** 
    *   Unprofitable between 1000-1100 (Loss = premiums).
    *   Profitable outside this range. Indicates high volatility expectation.
*   **iii) Iron Butterfly (Strategy C):** 
    *   Position: Long Call 1100, Long Call 1000, Short 2 Calls 1050 (or similar structure).
    *   **Rationale:** Trader expects the price to stay close to 1050 (Neutral view).

---

### Question 24 | Exam Term: Nov 20 | Original Q.5
**Question:**
Stock options for executives.
i) Merits/Demerits. (6)
ii) Corporate Governance objectives. (2)
iii) Impact of dividend tax changes. (5)
iv) Macro behavioral finance behavior. (10)

**Full Model Solution:**
*   **i) Executive Options:** 
    *   *Merit:* Alignment of interests; **Retention** (surrender on leaving).
    *   *Demerit:* Encourages short-term behavior to boost stock price at expense of long-term sustainability.
*   **ii) Governance:** Management must decide based on interests of *all* stakeholders (pensioners, employees, etc.), not just personal gain.
*   **iii) Macro Behavioral Finance (Sentiment):**
    *   When **Sentiment is Low:** High future returns are expected on small-cap, volatile, and unprofitable/distressed stocks.
    *   **Herding:** Copying others perceived as "better informed"; intrinsic desire to confirm; manager incentive structures.
    *   **Indicators:** VIX increases (higher demand for puts), IPO activity falls, turnover falls.

---

### Question 25| Exam Term: Nov 23 | Original Q.2
**Question:**
Sell ATM call/put, buy OTM call/put.
i) Main rationale. (2)
ii) Payoff diagram inflection points. (3)

**Full Model Solution:**
*   **i) Iron Butterfly Strategy:** This involves selling an ATM call and put while buying an OTM call and put. This results in a **Net Positive Premium** at the start of the contract.
*   **ii) Rationale:** The trader Expects a **Neutral Outlook** (range-bound stock). They benefit if the price stays within a specific range at expiry but face limited loss if it breaks out.

---

### Question 26 | Exam Term: Nov 23 | Original Q.3
**Question:**
Futures pricing.
i) What is Cost of Carry? (1)
ii) What is Convenience Yield? (1)
iii) Impact of Export Ban and Repo rate hike on futures. (4)

**Full Model Solution:**
*   **i) Cost of Carry:** The cost of holding a security/commodity over time. Includes insurance, storage, and interest on invested funds.
*   **ii) Convenience Yield:** The benefit associated with holding the physical good rather than a derivative (e.g., meeting immediate demand).
*   **iii) Pricing Dynamics:** $F = S \times e^{(r+s-c)t}$ ($r$: risk-free, $s$: storage, $c$: convenience).
    *   **Backwardation:** If $F_{3m} > F_{12m}$, cost of carry < convenience yield. Indicates supply side constraints.
    *   **Repo Rate Hike:** Increases the cost of borrowing (r), thus increasing the cost of carry and the futures-spot spread.

---

### Question 27 | Exam Term: Nov 23 | Original Q.4
**Question:**
Calculate price of a European call on a 5-year bond.
**Data:** 18% coupon, 1.5 year option life, Strike 135, Volatility 25%, Spot yield 5%. [10]

**Full Model Solution:**
*   **Calculations:**
    *   **Cash Price of Bond:** 155.53 (based on discounting 18% coupons and principal at 5% spot yield).
    *   **PV of Interest during Call Life:** 17.12.
    *   **Forward Price ($F$):** $(155.53 - 17.12) \times e^{0.05 \times 1.5} = 149.19$.
    *   **Duration at Expiry:** 2.81 years.
    *   **Bond Price Volatility:** $\text{Duration} \times \sigma \times \text{Yield} = 2.81 \times 0.25 \times 0.05 = 3.52\%$.
    *   **Final Call Value:** 13.18 (using Black's Model parameters $d_1 = 2.3398$).

---

### Question 28 | Exam Term: Nov 23 | Original Q.10
**Question:**
Liability Hedging.
i) Definition. (2)
ii) Six problems with the strategy. (3)
iii) Revenue hedging across regions A, B, C. (6)

**Full Model Solution:**
*   **i) Objective:** Align investment portfolio with anticipated future liabilities to mitigate funding gaps.
*   **ii) Practical Problems:**
    *   **Underfunded Scheme:** Assets don't fully cover liabilities.
    *   **Term Mismatch:** Asset duration shorter than liability duration.
    *   **Gaps in Bond Maturity:** Cash flows from assets don't align with liability timing.
    *   **Credit/Tax Risk:** Heavy reliance on Gov bonds exposed to creditworthiness changes or tax law alterations.
    *   **MTM/Mismatch Risk:** Volatility in reported status if correlation isn't perfect.
    *   **Liquidity Risk:** Difficulty selling hedging assets (long bonds) during stress without losses.
*   **iii) Currency Swap Analysis:** Evaluating NPV of future revenue streams across regions A, B, C; **Region A** typically shows the highest positive difference/benefit.

---

### Question 29 | Exam Term: Nov 25 | Original Q.5
**Question:**
ALM for participating whole-life.
i) Discuss key ALM risks (Mismatch, Optionality, Capital). (5)
ii) Propose ALM strategy (Duration/Swaps/Immunization). (14)
iii) Impact on profitability and solvency. (6)
iv) Limitations of traditional ALM (Non-parallel shifts/Behavioral). (5)

**Full Model Solution:**
*   **i) Risks:**
    *   **Optionality:** Policyholders have the "Surrender Option" which they exercise if rates rise (to invest elsewhere).
    *   **Mismatch:** 25-year duration liabilities vs 10-year assets.
*   **iv) Limitations:** Traditional ALM often assumes **Parallel Shifts** in the yield curve and ignores that "Policyholder Behavior" (surrenders) is not static—it is a function of the interest rate environment.

---

### Question 30 | Exam Term: Sep 21 | Original Q.1
**Question:**
Write short notes: i) Cross-border tax schemes. ii) Role of NEDs. iii) Herding. iv) Options on decision making. v) Tax issues in investment. [13]

**Full Model Solution:**
*   **i) Cross-border Tax Schemes:** Involves shifting profits to low-tax jurisdictions via **Transfer Mispricing** (intra-group transactions at non-market rates) or **Hybrid Instruments** (deductible in one country, non-taxable in another).
*   **ii) Role of NEDs:** Provide an impartial view; challenge and contribute to strategy; monitor management; set executive pay; oversee audits (Audit Committee).
*   **iii) Herding Behavior:** Buying/selling based on others' actions. Driven by: 1. Perceiving others as better informed. 2. Reputational safety ("No one gets fired for buying IBM"). 3. FOMO. 4. Intrinsic desire to conform.
*   **iv) Framing & Options:**
    *   **Framing Effect:** Presentation of choices (wording) impacts decisions.
    *   **Primary Effect:** Preference for the first option.
    *   **Recency Effect:** Preference for the last discussion point.
    *   **Decision Paralysis:** Too many options can discourage choosing.
*   **v) Investment Tax Issues:** Considerations include total tax rate, split between income/capital gains, timing of payments (realization vs accrual), and ability to reclaim withholding tax or aggregate losses.

---

### Question 31 | Exam Term: Sep 21 | Original Q.2
**Question:**
CDS working.
**Scenario:** Bank buys corporate bond with 1% spread over Gov. Buys CDS from XYZ.
i) Working description. (4)
ii) Estimate cost. (4)
iii) Regulations. (6)

**Full Model Solution:**
*   **i) CDS Working:**
    *   ABC bank (Buyer) pays a premium to XYZ (Seller) for protection.
    *   In a **Credit Event** (insolvency, downgrade), XYZ pays ABC.
    *   **Settlement:** *Physical* (exchange defaulted bond for full notional) or *Cash* (payment of the dip in market value).
*   **ii) Cost Calculation:**
    *   Estimated as the difference between the G-Sec price and the higher-yielding Infrastructure bond price.
    *   $Value = 134.24 - 124.18 = 10.06$.
    *   *Limitations:* Assumes zero arbitrage; ignores transaction costs and XYZ's profit margin; assumes spread is 100% credit risk.
*   **iii) Regulations:** 
    *   Standardized trades cleared through a **CCP**.
    *   Transactions recorded in a Trade Depository for transparency.
    *   Limits on "Naked CDS" (buying without owning the bond) to prevent speculation.
    *   Market-wide position limits based on the issuer's total outstanding debt.

---

### Question 32 | Exam Term: Sep 21 | Original Q.3
**Question:**
3-year forward on equity index.
i) Calculate return from forward vs. index. (13)
ii) Option strategy with 7 key points (Iron Condor logic). (10)

**Full Model Solution:**
*   **i) Forward Price Estimation:** 
    *   Accumulate index using forward rates ($f_{1,1}, f_{2,1}$ etc.) and deduct Assumed dividends.
    *   Initial Forward Price: 8,579.53. One-year later: 9,671.75.
    *   **Return Comparison:** Forward return (12.73%) vs Index return (12.50%). Higher because risk-free rates rose and dividend yields fell, making the "delay" of purchase more valuable.
*   **ii) Option Strategy View (Complex butterfly/condor):**
    *   **View:** Investor expects a large price move but is uncertain of direction.
    *   **Key Points on Chart:** (750, 0) and (850, 0) are break-even points; (800, 40,000) and (900, 40,000) are local maxima.
    *   **Rationale:** Profitable if the share price moves significantly (e.g. 6%) to the peak regions, while the collected premium (32,000) provides a buffer.

---

---

<a name="chapter-2"></a>
## Chapter 2 – Portfolio Theory & ALM

### Question 33 | Exam Term: Dec 22 | Original Q.7
**Question:**
i) A bond investor is considering switching between the following two bonds:
*   10-year 5% G-Sec, Maturing on September 2030, Price = 105, GRY = 7.8%
*   10-year 4.8% G-Sec, Maturing on April 2030, Price = 95, GRY = 8.6%
Describe the type of switch the investor is undertaking and investigations that the investor may make before undertaking this switch. (4)

ii) The investor is also considering another switch between the following bonds:
*   Switch from 10-year 5% G-Sec maturing on September 2030, Price = 105, GRY = 7.8%
*   Into 20-year G-Sec 4.5% G-Sec maturing on July 2040, Price = 96, GRY = 9.1%
Describe the type of switch the investor is undertaking and the reasons why this investor may be considering this switch? (4)

iii) Explain the advantages and disadvantages of passive management for a bond portfolio compared to active management. (3)

iv) An insurance company has acquired a large annuity business and is reviewing the investment policy for the bond portfolio that backs these annuity policies. Discuss whether the insurance company should adopt an active or passive management approach to manage the bond portfolio. (5)

**Full Model Solution:**
*   **i) Yield-Pick-Up Switch:** Moving from a lower yield (7.8%) to a higher yield (8.6%) for similar duration.
*   **ii) Policy Switch:** Moving from a 10-year to a 20-year bond significantly changes the **Duration** of the portfolio. This is a bet on the *slope* of the yield curve or a strategic ALM shift.
*   **iii) Management Comparison:**
    *   **Passive:** Low cost, transparency, no "Manager Risk."
    *   **Active:** Potential for alpha, ability to defensive position in bear markets.
*   **iv) For Annuity Portfolio:**
    *   **Passive** (Cash flow matching) is generally preferred to ensure the guaranteed payments (NTCC) are met. Active management adds "Mismatch Risk" which may incur higher capital charges.

---

### Question 34 | Exam Term: Jul 22 | Original Q.6
**Question:**
i) Explain in detail what asset pricing models are used for and the main types of asset pricing models. (6)

ii) The trustees of a pension scheme would like to hedge the longevity risk associated with the scheme’s pensions in payment. The suggestion is to invest in a longevity bond that offers coupons linked to survival according to a life table for annuitants. The bond would be issued by an investment bank solely to the pension scheme. Outline the advantages and disadvantages of hedging the longevity risk. (6)

iii) A Global equity unit trust manages its portfolio as follows:
*   75% of the fund is invested passively to track a global equities benchmark
*   25% of the fund is actively invested in a range of equities.
Give possible reasons why the fund may have been structured in the above way. (6)

**Full Model Solution:**
*   **i) Asset Pricing Models:**
    *   **CAPM:** $E(R_i) = R_f + \beta_i(E(R_m) - R_f)$. Focuses on systematic risk.
    *   **APT / Multi-factor Models:** Consider multiple sources of risk (Inflation, GDP, Size).
*   **ii) Longevity Bond:**
    *   *Pros:* Perfect hedge for longevity risk; removes "Tail Risk" of people living longer than expected.
    *   *Cons:* High cost/premium; limited market supply; counterparty risk if the issuer is not highly rated.
*   **iii) Core-Satellite Approach:**
    *   **75% Passive (Core):** Low-cost exposure to the broad market.
    *   **25% Active (Satellite):** Concentrated bets to generate alpha.
    *   *Reason:* Balances the need for market returns with the goal of outperformance while keeping overall costs manageable.

---

### Question 35 | Exam Term: Jul 22 | Original Q.7
**Question:**
i) You have been asked to design a suitable investment strategy for a charitable fund that awards scholarships each year to promising young Actuaries and Accountants. Describe the process of risk budgeting and explain how it could help you to achieve the above task. (8)

ii) You are also advising the fund to consider the risk-adjustment performance of two trusts, one of which can be the model investment strategy for the fund. You have been given the following information on the performance of the two investments and the benchmark index over the last five years. The risk-free rate of return over the period was 1%.

| Measure | Trust A | Trust B | Benchmark Index |
| :--- | :--- | :--- | :--- |
| Average Return | 4% pa | 5% pa | 2% pa |
| Standard Deviation | 55% pa | 25% pa | 15% pa |
| Correlation Coefficient with Benchmark | 0.33 | 0.87 | 1.00 |

Calculate four different risk-adjusted performance measures for each fund. (5)

iii) Discuss which of the two investment trusts the fund should choose to invest in, on the basis of your calculations in (ii), noting any assumptions and limitations. (7)

**Full Model Solution:**
*   **i) Risk Budgeting:** Determining how much "Total Risk" (VaR or Tracking Error) the fund can afford to take to meet its objectives (scholarships) and allocating that risk across different asset classes or managers.
*   **ii) Performance Formulas:**
    *   **Sharpe Ratio:** $(R_p - R_f) / \sigma_p$
    *   **Treynor Ratio:** $(R_p - R_f) / \beta_p$
    *   **Jensen's Alpha:** $R_p - [R_f + \beta_p(R_m - R_f)]$
    *   **Information Ratio:** $(\text{Active Return}) / (\text{Tracking Error})$
*   **iii) Trust Choice:** Select the one with the higher **Risk-Adjusted** return. If the fund is the investor's *entire* portfolio, use Sharpe. If it is part of a diversified portfolio, use Treynor/Alpha.

---

### Question 36 | Exam Term: Mar 21 | Original Q.1
**Question:**
You met a newly joined colleague, who was earlier providing portfolio management service to a few HNI clients. He told you that he had beaten the stock market index every year for past fifteen years by actively managing clients’ investments. He shared his special formula of investing as follows:
*   At start of every year, for all listed companies, he will get price to earnings ratio (P/E) and estimates risk adjusted return on capital (RAROC).
*   Rank P/E (ascending order); RAROC (descending order) and sum the two ranks.
*   Invest 10% of portfolio in each of the top ten companies based on aggregate rank.
*   At the end of the year, sell all the ten stocks.

i) Describe and discuss the most common active management “styles” in portfolio management. (5)

ii) Describe and discuss the estimation of RAROC. (6)

iii) Mention the merits and demerits of the special formula stated by your colleague. (4)

iv) Suggest ways to improve the special formula that addresses the demerits stated by you. (6)

**Full Model Solution:**
*   **i) Styles:** Value (low P/E), Growth (high earnings growth), Momentum (past winners), Small-cap.
*   **ii) RAROC:** $\text{Expected Return} / \text{Economic Capital}$. Economic capital is the amount of capital needed to cover potential losses at a given confidence level.
*   **iii) Merits:** Quantitative and disciplined. **Demerits:** P/E can be misleading if earnings are temporary; RAROC depends heavily on the risk model accuracy.

---

### Question 37 | Exam Term: Mar 21 | Original Q.2
**Question:**
i) Explain the method of chain linking in the context of investment indices. (2)

ii) Give two examples where chain linking might be required in the calculation of a bond index, given that there are no new bond issues or redemptions. (1)

iii) An investment bank publishes a weighted arithmetic average index consisting of three stocks namely ITCO, RETAILCO and TRAVELCO1. Below table summarizes the number of shares and prices at start of the first month when the index was 3000.

| Name | No. of Shares | Price |
| :--- | :--- | :--- |
| ITCO | 1000 | 1000 |
| RETAILCO | 2000 | 200 |
| TRAVELCO1 | 3000 | 30 |

Below table summarizes prices at the end of first and second month:

| Prices of | Month 1 | Month 2 |
| :--- | :--- | :--- |
| ITCO | 1200 | 1250 |
| RETAILCO | 180 | 110 |
| TRAVELCO1 | 10 | 12 |
| TRAVELCO2 | 20 | 25 |

At the end of the first month: ITCO buyback 200 shares; RETAILCO issued stock dividends i.e. bonus shares 1:2; TRAVELCO1 was replaced by TRAVELCO2 (2000 shares).

Stating any assumptions made, calculate the index value at the end of the first and second month. (6)

**Full Model Solution:**
*   **i) Chain Linking:** The process of joining two different index series (e.g., when a stock is replaced) by using a "Link Factor" so the index value remains continuous.
*   **ii) Examples:** 1. When a bond matures and is replaced. 2. When a bond's rating changes (e.g., falls below Investment Grade).

---

### Question 38 | Exam Term: Mar 21 | Original Q.3
**Question:**
You are an ALM analyst in a general insurance company. You are responsible for: developing investment strategies using ALM models; and monitoring and controlling liquidity risk.

i) Discuss the ALM modeling process and key issues in developing an appropriate investment strategy for a general insurance company. (12)

ii) Discuss using Modern Portfolio Theory framework to determine efficient investment strategies for a general insurance company. (3)

iii) Discuss regarding monitoring and controlling liquidity risk for general insurance companies. (5)

**Full Model Solution:**
*   **i) ALM Process:** 1. Liability projection. 2. Asset allocation modeling. 3. Stochastic simulation of surplus. 4. Optimization of risk-return. **Key Issues:** Correlation between assets and liabilities; inflation sensitivity.
*   **iii) Liquidity Monitoring:** **Liquidity Ratios** (Cash/Total Assets); **Stress Testing** (What if 20% of policyholders surrender?).

---

### Question 39 | Exam Term: Mar 21 | Original Q.5
**Question:**
i) Outline various regulatory regimes normally seen in financial markets worldwide. (5)

ii) Describe, in brief, the three main corporation tax systems. (3)

iii) Set out the process of long-term financial planning for a fast food joint. (3)

iv) In the context of behavioral finance, explain the main behavior being exhibited in each of the following cases:
a) An investor choosing the same mutual fund despite internet research showing others with better performance.
b) A football coach unhappy about a zero-goal scored, blaming a player for not passing despite prior strategy.
c) Dance students rating themselves in the top quartile while asking to rate their own skills in quartiles.
(6)

**Full Model Solution:**
*   **ii) Tax Systems:**
    *   **Classical:** Double taxation of dividends (at corporate and individual level).
    *   **Imputation:** Provides a tax credit to shareholders for tax already paid by the company.
    *   **Partial Integration:** Lower tax rates for dividend income.
*   **Behavioral cases:**
    *   a) **Status Quo Bias / Familiarity Bias**: Re-investing in the same fund despite other better options.
    *   b) **Hindsight Bias**: The coach claiming he "knew" what should have happened after the event.
    *   c) **Overconfidence / Better-than-average effect**: Most students rating themselves in the top quartile.

---

### Question 40 | Exam Term: Mar 22 | Original Q.2
**Question:**
You have been hired to work for the Chief Investment Officer of a medium sized insurance company, selling life and pensions products. You are responsible for setting the ALM strategy including consideration of any risks.

i) Define Value at Risk (VaR). (2)

ii) Summarise the stages of an ALM exercise. (3)

iii) Describe how a stochastic model can be used in asset liability modelling to determine the long term solvency position of a pension fund. (4)

**Full Model Solution:**
*   **i) VaR:** The maximum loss expected over a given time period at a specific confidence level (e.g., $10m loss at 95% confidence over 1 month).

---

### Question 41 | Exam Term: May 23
**Question:**
i) IFRS motives. (6)
ii) IFRS 9 requirements. (2)
iii) Market risk monitoring system. (5)
iv) Economic factors of success. (2)
v) Mean-variance assumptions. (4)

**Full Model Solution:**
*   **v) MPT Assumptions:** 1. Investors are rational and risk-averse. 2. Markets are efficient. 3. No transaction costs or taxes. 4. Returns are normally distributed.

---

### Question 42 | Exam Term: May 23
**Question:**
Matching office rental payments with bonds.
**Task:** Identify practical problems. [5]

**Full Model Solution:**
*   **Non-matching amounts:** Zero-coupon bonds might not be available in the exact denominations needed.
*   **Inflation risk:** If rent is linked to CPI but bonds are fixed-interest.
*   **Counterparty risk:** Default on the government bond (low but non-zero).
*   **Reinvestment risk:** If coupons from coupon-paying bonds cannot be reinvested at the target rate.

---

### Question 43 | Exam Term: May 23
**Question:**
i) Securities transaction tax (STT) implications. (4)
ii) Withholding taxes note. (3)

**Full Model Solution:**
*   **i) STT:** Increases transaction costs; reduces market turnover/liquidity; may lead to wider bid-offer spreads.
*   **ii) Withholding Tax:** Tax deducted at source on cross-border dividends/interest. Can lead to "Tax Drag" if a treaty doesn't allow for a full reclaim.

---

### Question 44 | Exam Term: May 23
**Question:**
i) Calculate returns. (2)
ii) Attribution analysis (Selection vs. Allocation). (6)
iii) Comment on results. (2)

**Full Model Solution:**
*   **Attribution Formula:**
    *   **Allocation Effect:** $\sum (w_p - w_b) \times R_b$
    *   **Selection Effect:** $\sum w_b \times (R_p - R_b)$
    *   **Interaction Effect:** $\sum (w_p - w_b) \times (R_p - R_b)$

---

### Question 45 | Exam Term: May 24
**Question:**
i) Five key risks in bank loan portfolio. (7)
ii) What is LDI? (1)
iii) Pros/Cons of LDI. (5)
iv) LDI scenarios. (2)

**Full Model Solution:**
*   **i) Bank Risks:** Credit risk (default), Interest rate risk (mismatch), Liquidity risk, Operational risk, Concentration risk.
*   **ii) LDI:** Liability-Driven Investment. Strategy where the primary goal is to match assets to the timing and amount of liabilities.

---

### Question 46 | Exam Term: May 24
**Question:**
i) Active money calculation. (2)
ii) Information Ratio and Strategic Risk. (6)
iii) Expected Shortfall (ES) vs VaR. (7)

**Full Model Solution:**
*   **iii) ES vs VaR:** VaR tells you the "barrier" but not the "depth" of the loss beyond the barrier. **Expected Shortfall** (Tail VaR) provides the average loss given that the loss exceeds the VaR threshold.

---

### Question 47 | Exam Term: May 24
**Question:**
i) Time vs Money Weighted Return. (5)
ii) Relative strength trading rule. (3)

**Full Model Solution:**
*   **Money-Weighted Return (MWR):** It is the IRR of the portfolio. Highly sensitive to the *timing* of cash flows. If the manager has no control over when the client adds/removes money, MWR is an unfair measure of the manager's skill.

---

### Question 48 | Exam Term: May 24
**Question:**
i) Absolute vs Relative pricing. (2)
ii) PV01 utility. (2)
iii) DV01 calculation. (6)

**Full Model Solution:**
*   **ii) PV01:** The change in the value of an asset for a 1 basis point (0.01%) move in interest rates. Essential for precisely hedging interest rate sensitivity.

---

---

### Question 49 | Exam Term: May 25 | Original Q.1
**Question:**
Bond Forwards vs. FRAs.
i) What is a Bond forward? (2)
ii) Difference between Bond forwards and FRAs? (6)
iii) Liquidity risks in FRA portfolio and mitigation. (6)

**Full Model Solution:**
*   **i) Bond Forward:** A contract between two parties to buy or sell a specific bond at a fixed price on a future date. It is like agreeing today to buy (or sell) a bond later at a price you both lock in now. No money usually changes hands until the settlement date. The bond itself could be a government bond, corporate bond, etc.
*   **ii) Bond Forward vs. FRA:**
    | Aspect | Bond Forward | FRA (Forward Rate Agreement) |
    | :--- | :--- | :--- |
    | **What it is** | Contract to buy/sell a specific bond at a future date for a fixed price. | Contract to lock in an interest rate on a notional amount for a future borrowing/lending period. |
    | **Underlying asset** | A specific bond (e.g., 10-year G-Sec). | Interest rate (e.g., 6-month OIS). |
    | **Purpose** | To hedge or speculate on bond prices (and indirectly, interest rates). | To hedge or speculate on future interest rates. |
    | **Settlement** | Deliver or cash-settle the bond (or cash difference). | Cash settlement based on the difference between agreed rate and actual market rate. No bond or loan is exchanged. |
    | **Risk exposure** | Bond price moves (duration, credit risk if applicable). | Interest rate moves only. |
    | **Market** | OTC (over-the-counter) contract. | OTC contract. |
*   **iii) Liquidity Risks in an FRA Portfolio:**
    *   **Market Liquidity Risk:** FRAs are OTC contracts, not traded on an exchange. It can be hard to find a counterparty willing to enter or exit a position quickly, especially in stressed markets.
    *   **Exit Difficulties Before Maturity:** Since FRAs are customized, unwinding a position before maturity may be expensive or impossible without significant price concessions.
    *   **Valuation Uncertainty:** Lack of a centralized market can cause pricing discrepancies. Bid-ask spreads widen during volatile periods.
    *   **Counterparty Liquidity Risk:** If the counterparty faces financial trouble, they might fail to meet settlement obligations.
    *   **Margin Call Pressure (Cleared FRAs):** For centrally cleared FRAs, margin calls must be met daily. High volatility can create liquidity stress if there are rapid mark-to-market losses.
*   **Mitigation Strategy:**
    *   **Contract Standardization:** Structuring FRAs using market standard terms improves their tradability.
    *   **Central Clearing:** Benefit from standardized terms and netting, reducing the need for bilateral negotiations.
    *   **Careful Counterparty Management:** Spreading contracts across multiple counterparties reduces concentration risk.
    *   **Strategic Liquidity Planning:** Keeping sufficient cash available for unexpected settlement or margin calls.
    *   **Proactive Market Monitoring:** Active monitoring of market spreads and counterparty creditworthiness.

---

### Question 50 | Exam Term: Nov 19 | Original Q.4
**Question:**
Portfolio Performance and CAPM.
i) Definitions: Efficient frontier, Optimal portfolio. (2)
ii) Plot efficient frontier points and minimum variance portfolio. (7)
iii) Show market price of risk is 32.06%. (1)
iv) Risk adjusted measures for Manager X and Y. Which is better? (6)

**Full Model Solution:**
*   **iii) Market Price of Risk (Sharpe Ratio of Market):** $(R_m - R_f) / \sigma_m$. Using the sample data, this equates to 32.06%.
*   **iv) Manager Selection:** Choose **Manager X** if the Treynor ratio or Alpha is higher, assuming the investor is well-diversified. If this is the *only* fund, Manager Y might be better if their Sharpe is higher.

---

### Question 51 | Exam Term: Nov 19 | Original Q.5
**Question:**
i) Describe strategies to exploit interest rate expectations (Level, Slope, Spread). (5)
ii) Protect equity portfolio from expected fall using derivatives. (5)
iii) Competitive benchmarking difficulties. (8)

**Full Model Solution:**
*   **i) Exploiting Expectations:**
    *   **Level:** If rates fall, increase duration (buy long bonds).
    *   **Slope:** If curve steepens, buy short-dated and sell long-dated bonds (Bullet vs. Barbell).
    *   **Spread:** If spreads narrow, buy corporate bonds and sell Gov bonds.
*   **iii) Benchmarking Difficulties:** 1. Mismatch in risk appetite. 2. Difficulty in obtaining real-time competitor data. 3. "Survivorship Bias" in published indices.

---

### Question 52 | Exam Term: Nov 20 | Original Q.1
**Question:**
Diversification and Credit Risk.
i) Show benefits of diversification with 4 assets. (2)
ii) Factors ignored by MPT. (3)
iii) Key factors in managing credit risk. (5)

**Full Model Solution:**
*   **i) Diversification Math:** $\sigma_p^2 = \frac{1}{n} \sigma^2$. As $n$ increases, the portfolio variance approaches zero if assets are independent.
*   **ii) MPT Ignoring:** Taxes, Transaction costs, non-normal distributions (fat tails), and investor behavior/irrationality.
*   **iii) Credit Risk Factors:** Credit ratings, Covenants in bond documents, Sector concentration, and Collateral quality.

---

### Question 53 | Exam Term: Nov 20 | Original Q.3
**Question:**
Fixed Interest Portfolio Management.
i) Actions to alter portfolio for high inflation view. (4)
ii) Reasons for deviation from benchmark. (3)
iii) Calculate tracking error. (4)
iv) Performace comment. (4)
v) Usefulness of forward-looking tracking error. (3)

**Full Model Solution:**
*   **i) Inflation View:** To hedge against *high* inflation, the manager should **Decrease Duration** (inflation often leads to rising rates, which hurts long bonds) or switch to **Index-Linked Bonds**.
*   **v) Forward-looking Tracking Error:** Uses a risk model to anticipate potential deviation before it happens, allowing for proactive risk management rather than "Post-mortem" analysis.

---

### Question 54 | Exam Term: Nov 23 | Original Q.1
**Question:**
ESG Stance.
i) Justify why ESG can generate better long-term returns. (6)
ii) Bad corporate governance flags. (3)

**Full Model Solution:**
*   **i) ESG Justification:** 1. Lower regulatory risk (e.g., carbon taxes). 2. Better reputation and brand value. 3. Lower cost of capital due to reduced litigation risk. 4. Better operational efficiency (lower energy usage).
*   **ii) Flags:** Lack of board independence; opaque executive compensation; history of environmental fines; "Poison Pillar" anti-takeover provisions.

---

### Question 55 | Exam Term: Nov 23 | Original Q.6
**Question:**
Identify Behavioural Biases:
i) Contrarian buying losers. (1)
ii) Trend trader on small caps. (1)
iii) Retail day trader following TV. (1)
iv) Middle-aged salary choosing 12% loan over 7% deposit. (1)
v) Alpha-blaming manager. (1)

**Full Model Solution:**
*   iv) **Mental Accounting**: Treating the loan and the deposit as separate "buckets" rather than looking at the net interest loss of 5%.
*   v) **Self-Serving Bias**: Attributing success to skill and failure to "poor research" or bad luck.

---

### Question 56 | Exam Term: Nov 23 | Original Q.8
**Question:**
Active Bond Management.
i) Define Active bond management. (1)
ii) Two approaches. (2)
iii) Three techniques to identify each. (3)
iv) Switch analysis (XGB 3.5% vs. 3% vs. 2.75%). (6)

**Full Model Solution:**
*   **i) Active Management:** Continual adjustment of the portfolio to outperform a benchmark by exploiting market inefficiencies or anticipating yield curve moves.
*   **ii) Approaches:** 1. **Yield Curve Anticipation**. 2. **Sector Overlay** (identifying undervalued credit).

---

### Question 57 | Exam Term: Nov 23 | Original Q.11
**Question:**
Asset Pricing Models.
i) Main assumption behind models. (1)
ii) Calculate expected return using SMB and HML (Fama-French). (2)
iii) Compare with standard CAPM result. (3)

**Full Model Solution:**
*   **i) Assumption:** Investors are risk-averse and require a premium for taking on **Systematic (non-diversifiable) Risk**.
*   **ii) Fama-French Calculation:** $E(R) = R_f + \beta (R_m - R_f) + s(SMB) + h(HML)$.

---

### Question 58 | Exam Term: Nov 23 | Original Q.12
**Question:**
Cosmic Wealth Fund.
i) Difference in returns between actual and benchmark. (4)
ii) Excess return from minerals. (2)
iii) Comment on CIO's decision. (4)

**Full Model Solution:**
*   **CIO's Decision:** By allocating to "Cosmic Minerals," the CIO added a **Diversifying Asset Class** with a different return profile than bonds. This likely increased the **Sharpe Ratio** of the total fund.

---

### Question 59 | Exam Term: Nov 25 | Original Q.2
**Question:**
SAA Policy Review.
i) Explain theories (MPT, CAPM, EMH, LDI). (8)
ii) Real-world factors (M frictions, behavior, regulation). (6)
iii) Practical balance of return vs. matching. (6)

**Full Model Solution:**
*   **ii) Real-world Frictions:** Transaction costs make "Continuous Rebalancing" (as assumed in MPT) impossible. **Behavioral Biases** (like framing) affect the board's risk appetite.

---

### Question 60 | Exam Term: Nov 25 | Original Q.3
**Question:**
Attribution.
i) Calculate Allocation, Selection, and Interaction effect. (12)
ii) Asset class contribution. (4)
iii) Incentive fees and bonus pool fairness. (4)

**Full Model Solution:**
*   **iii) Incentive Fees:** Should be based on the **Selection Effect** (the manager's skill in picking stocks) rather than the **Allocation Effect** (which might be a lucky bet on the sector).

---

### Question 61 | Exam Term: Nov 25 | Original Q.4
**Question:**
ESG Mandates.
i) Importance of ESG. (3)
ii) Calculate ESG-adjusted Sharpe ratio. (3)
iii) specialized vs. overall mandates pros/cons. (7)

**Full Model Solution:**
*   **Specialized Mandates:** *Pro:* High expertise in a specific area (e.g., Green Energy). *Con:* Higher total fees and the "Silo" effect.

---

---

<a name="chapter-3"></a>
## Chapter 3 – Risk Management

### Question 62 | Exam Term: Dec 22 | Original Q.1
**Question:**
The central bank of a developing nation is discussing various measures to influence and regulate the domestic economic activity with the Government.

i) Describe how a hike in interest rates is likely to affect the economy. (5)

ii) List the principal aims of Regulation. (2)

Various investors in leading financial services companies have expressed reservations about an emphasis on ESG (Environmental Social Governance), as it could harm investment performance.

iii) Explain how ESG factors can improve the performance of investments. (4)

A multinational construction firm has agreed with the Government to construct a metro rail network in the capital city. The investment will be financed as an infrastructure project. The construction firm will supply and operate the metro trains and complete the construction in ten years at a cost of 100 billion of the local currency (“LCU”). The company is responsible for 100% of the operating and maintenance costs and will receive 85% of the revenues from the metro network. The Government (Local/Central/City) will share the remaining 15% of the revenues.

iv) Describe the main risks that the construction firm faces in undertaking this project. (10)

**Full Model Solution:**
*   **i) Rate Hike Impact:** 1. Increases borrowing costs for firms (reduces investment). 2. Increases mortgage payments for households (reduces consumption). 3. Strengthens local currency (hurts exports). 4. Lowers inflation by reducing aggregate demand.
*   **ii) Aims of Regulation:** 1. Protect consumers (investors). 2. Maintain market confidence. 3. Ensure financial stability (prevent systemic risk). 4. Reduce financial crime.
*   **iv) Project Risks:** Construction risk (delays/cost overruns); Revenue/Traffic risk (utilization rate); Regulatory/Political risk; Force Majeure (environmental); Interest rate risk on project financing.

---

### Question 63 | Exam Term: Dec 22 | Original Q.4
**Question:**
ABC is a fund management company which currently operates an investment fund investing into equity and bonds. The company is planning to launch a new fund which introduces investment into two new asset classes: crypto assets and private equity.

i) Describe the main types of financial risks to which ABC would be exposed to under the new fund. (5)

ii) Also, describe how ABC can monitor and control the fund’s risks, as described in part (i). (5)

**Full Model Solution:**
*   **i) Financial Risks:**
    *   **Crypto:** High volatility; Lack of fundamental valuation; Custody risk (hacking); Regulatory risk (bans).
    *   **Private Equity:** Illiquidity (long lock-in); J-curve effect; Opaque valuation (stale pricing).
*   **ii) Monitoring:** Frequent stress testing; Concentration limits (e.g., max 2% in crypto); Independent valuation committees; Use of "Cold Storage" for crypto assets.

---

### Question 64 | Exam Term: Jun 19 | Original Q.2
**Question:**
You are the investment manager of a large pension fund that has substantial assets under management and invests a significant proportion of these assets in alternative investments. A sales person from a reinsurance company approaches you regarding the purchase of a Cat-Bond, an insurance linked security, originated by a general insurance company.

i) Explain the process for creating Cat-Bonds using a diagram showing the potential cash flows. (4)

ii) List the key questions regarding Cat-Bond that you would ask the sales person. (3)

iii) Discuss the advantages and risks associated with Cat-Bonds to the general insurance company and the investors. (7)

**Full Model Solution:**
*   **i) Process:** 1. Insurer (Sponsor) sets up an SPV. 2. Investors buy bonds from SPV. 3. SPV invests cash in safe Treasuries. 4. If no disaster occurs, investors get coupons + principal. 5. If disaster occurs, cash is released to Sponsor; investors lose principal.
*   **iii) Advantages (Investor):** Zero correlation with financial markets; high yield for "taking environmental risk." **Risks:** Total loss of principal if trigger event occurs.

---

### Question 65 | Exam Term: Jun 19 | Original Q.6
**Question:**
XYZ is a large Life Insurance Company. It offers group superannuation and group gratuity policies to corporate clients. Based on the scheme rules, the product offers benefits in the event of death, withdrawal, retirement or any other exit of the members. Each client has a policy account which represent the balance amount as on that date. The policy account is credited with the premiums paid net of all applicable charges and interest amount. The Company declares the interest rate at the end of each financial year, and it is applied to the policy account on a pro-rata basis. Any payment made to the policyholder is debited from the policy account. The client can also surrender the policy without incurring any surrender charge. The assets are majorly invested in Government securities and Corporate bonds.

i) An investment analyst has suggested that this fund is exposed to risk arising out of increase in bond yields. Comment on this. (4)

ii) Recommend with reasons some product conditions which the Company can add to its product to limit the risk of increase in bond yields. (8)

iii) Express how would you model the asset liability mismatch reserve for the above product. (8)

**Full Model Solution:**
*   **i) Yield Increase Risk:** If yields rise, the market value of the bonds (Assets) falls. If policyholders surrender (to get better rates elsewhere) and there's no surrender charge, the insurer incurs a loss.
*   **ii) Product Conditions:**
    *   **Market Value Adjustment (MVA):** Reduce the surrender value if market rates have risen.
    *   **Exit Penalties:** Discourage early withdrawal.
    *   **Deferred Pay-out:** Prevent "Bank Runs" by delaying liquidity.

---

### Question 66 | Exam Term: Jun 19 | Original Q.7
**Question:**
You have been appointed as a senior Investment Officer of an investment Company which is going to start its operations soon. Your CEO has assigned you with the task to establish how much investment risk should be taken and where it is most efficient to take the risk in order to maximize the returns once the Company starts operations.

i) Outline the main types of financial risks to which your Company would be exposed to once it starts operations. (5)

ii) Explain the process which you would undertake to complete the assigned task. (8)

iii) Describe the advantages of risk budgeting process. (2)

**Full Model Solution:**
*   **ii) Process:** 1. Define high-level risk appetite. 2. Identify all risk sources. 3. Rank sources by "Reward per unit of risk." 4. Allocate risk limits (VaR/TE) to the most rewarding areas. 5. Establish monitoring and breach protocols.

---

### Question 67 | Exam Term: May 24
**Question:**
i) Similarities between CFDs and Forwards. (2)
ii) Differences. (4)
iii) Two main non-market risks of CFDs. (3)

**Full Model Solution:**
*   **i) Similarities:** Both are OTC derivatives; both allow for leveraged exposure to price movements without physical ownership.
*   **ii) Differences:** CFDs have no fixed expiry date (can be held indefinitely); CFDs are usually settled daily (like futures margin).
*   **iii) Non-market risks:** **Counterparty Risk** (OTC nature); **Margin Call risk** (liquidity needed to cover daily moves).

---

### Question 68 | Exam Term: May 25 | Original Q.2
**Question:**
Role of RBI and repo rate cut impact.
i) Role of Central Bank. (3)
ii) Non-market (direct) controls. (5)
iii) Impact of RBI 25bps rate cut. (9)
iv) Areas of concern for a Life Insurance Investment Actuary. (9)

**Full Model Solution:**
*   **i) Central Bank Interests:** 
    *   Monetary, interest rate and inflation policy.
    *   Banking regulation.
    *   Implementation of government borrowing.
    *   Performance and integrity of financial markets.
    *   Intervention in currency markets.
    *   Printing and minting of notes/coins, and taxation.
*   **ii) Direct Controls:**
    *   **Minimum liquid reserve ratios:** Restricts the ability of banks to expand the money supply by restricting the money multiplier.
    *   **Interest rate ceilings for bank deposits:** Restricts the ability of banks to compete for investors’ money, limiting bank lending expansion.
    *   **Directives on types of lending:** Restricting expansion by directly limiting credit availability (e.g. mortgage lending limits).
*   **iii) RBI Repo Rate Cut Effects:**
    *   **Cheaper Bank Funding:** Banks borrow at a cheaper rate, reducing their own funding costs and transmitting savings to customers.
    *   **Stimulus to Credit Growth:** Boost to corporate and retail borrowing. Businesses invest in expansion; consumers finance big-ticket purchases. Higher aggregate demand supports GDP growth.
    *   **Impact on Inflation:** Upward pressure on prices. RBI watches CPI matches to ensure they stay within tolerance bands.
    *   **Exchange Rate:** Weaker currency (short run) as domestic rates are less attractive to foreign investors.
    *   **Impact on Savers:** Lower deposit rates squeeze retail savers' returns, potentially pushing them toward riskier assets like equity or real estate.
    *   **Financial Markets:** Bond yields fall (prices rise). Equity markets rally on cheaper finance and stronger profit expectations.
*   **iv) Impact on Insurance ALM:**
    *   **Investment Returns Drop:** Lower repo rates push down yields on new investments, reducing overall portfolio yield. Future income falls, causing mismatches if liabilities (guaranteed payouts) are high.
    *   **Liability Valuation Increases:** Lower discount rates increase the Present Value (PV) of future liabilities, widening the funding gap.
    *   **Duration Mismatch Risk:** Introduces risk if liabilities move differently from assets. Rebalancing is required to match durations and hedge risks.
    *   **Product Pricing:** Guaranteed return products priced on higher yields face a squeeze. Need to reprice, reduce guarantees, or push ULIPs.
    *   **Regulatory Pressure:** Regulators watch ALM gaps closely; sustained low-rates may trigger more scrutiny on solvency positions.

---

### Question 69 | Exam Term: Nov 23 | Original Q.5
**Question:**
Commercial bank credit risk.
i) 4 distinct sources of credit risk. (2)
ii) How to create a credit VaR model. (6)

**Full Model Solution:**
*   **i) Sources:** Default risk; Credit migration (downgrade) risk; Concentration risk; Counterparty risk on derivatives.
*   **ii) VaR Model:** 1. Data on Default Probabilities (PD). 2. Data on Loss Given Default (LGD). 3. Modeling correlations between borrowers. 4. Monte Carlo simulation of total portfolio losses.

---

### Question 70 | Exam Term: Nov 23 | Original Q.9
**Question:**
Hedge fund performance analysis.
i) Compute Sharpe, Treynor, Alpha, IR for Fund 1 and 2. (7)
ii) Target fund for investment. (2)

**Full Model Solution:**
*   **Calculation Logic:** Use the standard formulas. Always use the *Arithmetic Mean* for average returns and the *Standard Deviation* of returns for risk.

---

### Question 71 | Exam Term: Sep 21 | Original Q.4
**Question:**
NIFTY 50 tracker fund market risk.
**Task:** Outline process to monitor and control market risk. [10]

**Full Model Solution:**
*   **Risk Monitoring Framework:**
    *   **Define Market Risk:** Establish suitable measures, such as tracking error relative to a benchmark (e.g., NIFTY 50).
    *   **Mathematical Modeling:** Set out models using easily understandable risk factors.
    *   **Automation:** Implement automated systems to capture daily/weekly changes in asset values relative to the benchmark.
    *   **Independent Oversight:** Monitoring must be performed by personnel independent of fund managers.
    *   **Reporting & Governance:** Frequent reporting to senior management; clear limits for departure from benchmarks (load ratios); documented rationales for investment decisions.

---

### Question 72 | Exam Term: Sep 21 | Original Q.7
**Question:**
i) Asset pricing models. (2)
ii) Absolute vs. Relative pricing. (4)
iii) Risk budgeting process. (5)

**Full Model Solution:**
*   **i) Asset Pricing Models:** Derivatives from the concept that price equals expected discounted payoffs.
*   **ii) Pricing Methodologies:**
    *   **Absolute models:** Price assets based on exposure to fundamental macroeconomic risks (inflation, GDP growth, interest rates). Examples: CAPM, Consumption-based models.
    *   **Relative models:** Determine value given the price of other assets, ignoring fundamental factors (e.g., Black-Scholes, Arbitrage Pricing Theory).
*   **iii) Risk Budgeting Process:**
    *   Define the **Feasible Set** of asset classes and estimate volatilities/covariances.
    *   Optimization: Select initial allocation using a risk/return and VaR assessment consistent with risk tolerance.
    *   Monitoring: Track daily changes in exposures and correlations.
    *   **Rebalancing:** Adjust portfolio in response to short-term conditional volatility shifts to keep overall risk at intolerable levels.

---

---

<a name="chapter-4"></a>
## Chapter 4 – Behavioural Finance & ESG

### Question 73 | Exam Term: Dec 22 | Original Q.5
**Question:**
The equity markets in India have witnessed very high volatility during the last two year with the following sequence of events taking place:
*   40% fall in equity markets at the onset of Covid-19 in March 2020.
*   120% recovery from the March 2020 lows as of September 2022.

i) Describe these events in relation to theories and biases covered under behavioural finance. (7)

ii) Explain why herding is a concern for financial markets. (3)

**Full Model Solution:**
*   **i) Behavioral Interpretation:**
    *   **Panic Selling / Availability Bias:** The initial 40% fall was driven by extreme fear and the "Recency" of the pandemic news. Investors extrapolated the current disaster into a total economic collapse.
    *   **Fear Of Missing Out (FOMO) / Recovery:** The 120% recovery was driven by a reversal in sentiment, liquidity injections, and investors rushing back in as they saw others profiting.
    *   **Overreaction:** Markets typically overreact to negative news (downwards) and then "Mean Revert" upwards.
*   **ii) Herding Concern:**
    *   **Instability:** It leads to asset bubbles and sudden crashes.
    *   **Price Inefficiency:** Assets move away from their fundamental values because everyone is following the trend rather than information.
    *   **Systemic Risk:** If everyone is "Long" the same trade, a reversal can lead to a liquidity crunch as all try to exit at once.

---

### Question 74 | Exam Term: Jul 22 | Original Q.5
**Question:**
In the nation of Actuaria, inflation and interest rates used to be far higher in the 1990s compared with most developed nations. Many insurance companies had issued contracts in the past 20-30 years which included guaranteed annuity rates irrespective of interest rate movements. However, since the year 2000, interest rates have been falling. In fact, the interest rates are so low that most of these guarantees have started to bite, causing financial challenges to the insurance companies.

Describe how the ideas of behavioural finance can be used to explain this situation. [5]

**Full Model Solution:**
*   **Anchoring:** Insurers in the 90s "anchored" their expectations to then-current high interest rates (10%+), failing to imagine a zero-rate world.
*   **Extrapolation Bias:** Assuming the historical trend of high rates would continue indefinitely.
*   **Status Quo Bias:** Continuing to offer the same products because "that's what we've always done," failing to adjust to the regime shift.

---

### Question 75 | Exam Term: Mar 21 | Original Q.6
**Question:**
You work as an equity analyst in investment department of a mutual fund company. Your manager has asked you to value a listed ‘virtual event’ company which specializes in providing curated solutions for webinars and meetings. The Company has been in operation for last 7 years and has been profitable for last 5 years. In the last three years, the company has declared dividend of 20%, 25% and 30%, respectively.

i) Explain the points you would look to evaluate while carrying out fundamental analysis. (12)

Your company has launched a fund which invests in only the companies that follow sustainable ESG model. Accordingly, the fund manager has decided not to invest in a global retail company which has outperformed the industry in major financial parameters. The marketing manager of your company is unhappy with this decision.

ii) Comment on the opinion of the marketing manager. (4)

**Full Model Solution:**
*   **i) Fundamental Points:** 1. **Industry Growth** (demand for remote work/events). 2. **Scalability** (low marginal cost). 3. **Moat** (switching costs/proprietary tech). 4. **Financials** (Cash flow, debt levels). 5. **Quality of Management**.
*   **ii) Marketing Manager View:**
    *   The manager argues for **Fiduciary Duty** to maximize returns.
    *   *Counter-argument:* ESG is not just "Ethical"—it's a **Risk Management** tool. A high-performing retailer with poor ESG (e.g., labor violations) faces significant future regulatory and litigation risk that could destroy shareholder value.

---

### Question 76 | Exam Term: Mar 22 | Original Q.1
**Question:**
In a developing economy, the following features are observed:
*   disinvestment of public sector - manufacturing as well as services
*   establishment of large chains of shopping malls and e-commerce online marts having mergers with multinational companies leading to concentration of pricing power

i) Mention the major economic objectives of a Government’s economic policy. (2)

ii) What is a natural monopoly? Give an example. (1)

iii) Discuss key issues the Government should consider in regulating upcoming monopolies. (2)

iv) You have been asked to advise the Government of the developing nation on making changes to the tax system, with the objectives of encouraging entrepreneurial activity and investment to redistribute wealth from the rich to the poor. Explain the considerations required, in terms of the tax rates for capital gains, investment income and earned income, in order to meet these objectives. (5)

v) In the context of market behaviour at a macro level, when sentiment is LOW, what would you expect to observe with respect to: VIX, share turnover, bid-offer spread, IPO activity and the demand for high dividend paying shares. (3)

vi) Write short notes on noise traders’ impact on market prices. (2)

**Full Model Solution:**
*   **iv) Tax for Redistribution:** 1. **Earned Income:** Progressive rates (higher for high earners). 2. **CGT/Investment Income:** Higher rates to target wealth accumulation from capital rather than labor.
*   **v) Low Sentiment:** High VIX (high fear); Low share turnover (apathetic market); Wide bid-offer spreads; Nil to low IPO activity; High demand for defensive high-dividend shares.

---

### Question 77 | Exam Term: May 25 | Original Q.4
**Question:**
Taxation effect on investment decision-making. [4]

**Full Model Solution:**
*   **Expected After-Tax Returns:** Taxation significantly impacts decisions by affecting the net income an investor keeps.
*   **Incentives vs. Discouragement:** Higher taxes on income, capital gains, or profits can discourage investment, while incentives (credits, deductions) can encourage it.
*   **Structure and Incidence:** Understanding the tax burden, timing of payments, and legal structure is essential for strategic investment optimization.
*   **Jurisdictional Factors:** Cross-border investment requires considering double taxation and access to tax treaties.
*   **Analysis Models:** Impact is often analyzed using the "user cost of capital" and empirically assessed through regression of firm behavior around tax reforms.

---

### Question 78 | Exam Term: Nov 25 | Original Q.1
**Question:**
Training session concepts: i) Herding. ii) Cross-sectional momentum. iii) Mood influence. iv) Belief preservation. [12]

**Full Model Solution:**
*   **ii) Cross-sectional Momentum:** The strategy of buying recent "Winner" stocks and selling "Losers" within the same universe. Implication: Can lead to overvaluation as price drifts from fundamentals.
*   **iv) Belief Preservation:** The tendency to ignore evidence that contradicts existing beliefs (Confirmation Bias). Implication: Managers may stay in losing trades too long because they refuse to admit their original thesis was wrong.

---

---

<a name="chapter-5"></a>
## Chapter 5 – Taxation & Regulation

### Question 79 | Exam Term: Jul 22 | Original Q.4
**Question:**
i) Explain how a company’s corporate dividend policy might be affected by the tax system. (3) 

ii) Outline the factors an investor should consider when deciding an investment strategy to maximise net of tax returns. (4)

**Full Model Solution:**
*   **i) Dividend Policy:** If dividends are taxed higher than capital gains, firms may prefer **Share Buybacks** or reinvesting profits to encourage share price growth.
*   **ii) Investor Max Returns:** 1. Utilizing tax-free allowances. 2. Timing the sale of assets to utilize CGT exemptions. 3. Matching income with lower-bracket tax years. 4. Investing through tax-advantaged vehicles (Pension/ISA).

---

### Question 80 | Exam Term: Jun 19 | Original Q.1
**Question:**
Describe the principles underlying the legislation and regulation of institutional investment practices for the Trustees of a pension fund dealing with external investment managers. [8]

**Full Model Solution:**
*   **Duty of Care:** Trustees must exercise the same care as a "prudent person" would with their own money.
*   **Fiduciary Responsibility:** Solely acting in the interest of the beneficiaries.
*   **Appropriate Allocation:** Ensuring the external manager's mandate fits the scheme's SAA.
*   **Monitoring:** Regular performance review and the power to terminate underperforming managers.

---

### Question 81 | Exam Term: May 24
**Question:**
Dividend vs. Buyback under tax: Income Tax (10-45%), STCG (20%), LCG (10%).
i) Advantages/Disadvantages of both. (8)
ii) Other factors influencing the decision. (2)

**Full Model Solution:**
*   **i) Dividend vs. Share Buyback (Tax Perspective - 8 Marks):**
    *   **Dividend Payments:**
        *   Taxed as income in the hands of the shareholder.
        *   Higher tax rates for high-income earners (e.g., up to 45% in some jurisdictions).
        *   May be subject to Dividend Distribution Tax (DDT) at the corporate level if applicable.
        *   Perceived as a "regular" commitment; market penalizes cuts heavily (Dividend Stickiness).
    *   **Share Buybacks:**
        *   Treated as Capital Gains (STCG or LTCG).
        *   Often benefit from lower tax rates (e.g., 10-20%) compared to income tax.
        *   Optional for shareholders; only those who sell realize the tax event.
        *   Increases EPS (Earnings Per Share) by reducing the denominator, often supporting the share price.
        *   Signals the board believes shares are undervalued.
*   **ii) Other Factors Influencing the Decision (2 Marks):**
    *   **External Benchmarking:** Comparison with competitors in the financial sector.
    *   **Future Capital Needs:** Buybacks are flexible (can be stopped), whereas dividends are seen as an implicit promise for the future.
    *   **Control:** Buybacks can consolidate promotor holdings without direct investment.

---

### Question 82 | Exam Term: Nov 19 | Original Q.3
**Question:**
i) RBI repo rate cut objective and BoP impact. (8)
ii) Rationale for linking lending rates to external benchmarks. (4)

**Full Model Solution:**
*   **i) Repo Cut Objective:** Stimulate growth by lowering the cost of credit. **BoP Impact:** Lower rates may lead to capital outflows (investors seek higher yields elsewhere), weakening the currency.
*   **ii) External Benchmarking:** Ensures faster **Monetary Transmission**. Banks used to be slow to pass rate cuts to consumers; an external link forces synchronous adjustments.

---

### Question 83 | Exam Term: Nov 23 | Original Q.7
**Question:**
i) Tax considerations for international investing. (2)
ii) Flaws in "Tax Foreign Income at higher rate" strategy. (4)

**Full Model Solution:**
*   **i) International Tax:** Double Taxation Treaties (DTAA); Withholding taxes on foreign coupons; Reclaim procedures.
*   **ii) Flaws:** 1. **Capital Flight:** Wealthy individuals move capital to jurisdictions where it isn't penalized. 2. **Retaliation:** Other countries might raise taxes on the country's own exports. 3. **Reduced Diversification:** Discourages local investors from risk-sharing globally, increasing domestic systemic risk.

---

---

<a name="chapter-6"></a>
## Chapter 6 – Performance Measurement

### Question 84 | Exam Term: Dec 22 | Original Q.2
**Question:**
You have recently been hired as the Chief Investment Officer for a large insurance company. The CEO has asked you to consider making significant changes to the strategic asset allocation of the company.

i) List the key issues when making changes to the asset allocation. (4)

The CEO has also asked for you to increase the allocation to public share offerings and train the Finance and Investment departments to think of new ways to value the price of any potential investments.

ii) As part of the training, list the information that you will advise the team to request, before they value any company. (5)

iii) Describe the process by which you will ask the team to determine the price range of any share offer. (7)

iv) Explain why you might advise your team to recommend a price different from the fair market price based on any financial models. (3)

**Full Model Solution:**
*   **i) SAA Issues:** 1. **Liquidity:** Can the move be made without huge market impact? 2. **Transaction Costs:** Will the cost wipe out the expected gain? 3. **Time Horizon:** Is the shift consistent with long-term goals? 4. **Risk Profile:** Does the new SAA breach internal or regulatory risk limits?
*   **iv) Price Deviation Reasons:** 1. **Strategic Value:** The acquisition offers synergies not captured in market price. 2. **Marketing:** Underselling an IPO to ensure "Pop" and success. 3. **Liquidity Discount:** Buying a large block at a discount.

---

### Question 85 | Exam Term: Mar 22 | Original Q.5
**Question:**
You are an analyst in a stock broking firm responsible for the services sector within India. The growing consensus in the market is that the outlook for the national economy is pessimistic, and the growth rates are likely to be negative for the coming quarter with consumer demand being low.

However, within the company the executives feel that this outlook is likely to change. The company's internal view is that consumers will begin to spend more, and economic growth within the nation will be strong in the coming year or two, although the international outlook continues to be low growth.

Explain how your preferred selection of stocks within the Indian services sector might change based on the company's view. [4]

**Full Model Solution:**
*   **Cyclical Pivot:** Shift from "Defensive" (Utilities, Staples) to **"Cyclical"** (Consumer Discretionary, Banking). 
*   **Domestic Focus:** Since international growth is low, favor firms with 100% domestic revenue rather than global exporters.

---

### Question 86 | Exam Term: May 23 | Original Q.5
**Question:**
Limitations of resilience testing. [5]

**Full Model Solution:**
*   **Scenario Selection Bias:** Only tests "Imagined" crises, not the "Unknown Unkowns."
*   **Correlation Breakdown:** In a crisis, standard correlations converge to 1, which testing may not capture.
*   **Static Nature:** Ignores management actions that might be taken *during* the stress event.

---

### Question 87 | Exam Term: May 23 | Original Q.6
**Question:**
Individual with "perfect" ALM still has a cashflow shortage. What technique solves this? [5]

**Full Model Solution:**
*   **Cash Flow Budgeting & Liquidity Modeling:** ALM often focuses on *Price* or *Value* matching. The individual failed to match **Term** (liquidity needs for education/vacation).
*   *Technique:* Keep a "Cash Buffer" or "Sinking Fund" for known short-term outflows, matching long-term assets only to long-term liabilities (retirement).

---

### Question 88 | Exam Term: May 23 | Original Q.10
**Question:**
Calculate Period and Yearly TWR and MWR. [9]

**Full Model Solution:**
*   **TWR Logic:** Link the returns of sub-periods between cash flows.
*   **MWR Logic:** Find the $r$ such that $PV(\text{Inflows}) = PV(\text{Outflows})$.

---

### Question 89 | Exam Term: May 24
**Question:**
Caution in using P/B, Dividend payout, and P/E for undervaluation. [10]

**Full Model Solution:**
*   **Value Traps:** Low P/E might signal a company in permanent decline (obsolete tech).
*   **Accounting Quality:** P/B can be distorted by intangible assets or "Goodwill" write-downs.
*   **Dividend Sustainability:** High payout may be funded by debt, which is unsustainable and leads to future crashes.

---

### Question 90 | Exam Term: May 24
**Question:**
i) What is an Arbitrage fund? (2)
ii) Pros/Cons. (4)

**Full Model Solution:**
*   **i) Arbitrage Fund:** A fund that simultaneously buys in the cash market and sells in the futures market to capture the "Spread" (Risk-free return).
*   **ii) Pros:** Low risk; tax-efficient (treated as equity fund returns in many jurisdictions). **Cons:** Returns are typically low (near cash-rates); sensitive to market turnover.

---

### Question 91 | Exam Term: May 24
**Question:**
Distinctive features of companies in the financial sector. [5]

**Full Model Solution:**
*   **High Gearing:** Banks operate with very high leverage.
*   **Regulatory Capital:** Restricted by Basel III / Solvency II.
*   **Opaque Balance Sheets:** Difficulty in valuing "Level 3" assets.
*   **Interest Rate Sensitivity:** Direct impact on Net Interest Margins (NIM).

---

### Question 92 | Exam Term: May 25 | Original Q.3
**Question:**
i) What is Information Ratio (IR)? (2)
ii) Why use IR for assessment, and why is it flawed? (8)
iii) Performance calculation and comment. (8)

**Full Model Solution:**
*   **i) Definition:** Information ratio (IR) = mean relative return / standard deviation of relative return.
*   **ii) Why use IR:** Evaluates how efficiently a manager converts risk into active returns. Used for comparing funds, performance attribution (skill vs. risk), portfolio construction (capital allocation), and setting manager incentives/bonuses.
*   **Drawbacks:**
    *   **Assumes Normal Distribution:** Ignores fat tails, skewness, and outliers.
    *   **Volatility Symmetry:** Treats both positive and negative swings equally as "risk."
    *   **Sample Stability:** Highly unstable over short periods (1-2 years).
    *   **Gamble/Gaming:** Managers can take tiny active positions to maintain low tracking error and "game" the ratio.
    *   **Backward-looking:** Purely historical; doesn't guarantee future skill.
    *   **Benchmark Sensitive:** Meaningless if the benchmark doesn't represent the manager style.
*   **iii) Calculation Results:**
    *   Fund Manager X: Information Ratio = 0.73
    *   Fund Manager Y: Information Ratio = -0.26
    *   **Comment:** Fund Manager X clearly outperformed with a positive active return. Fund Y was more consistent (lower tracking error) but systematically underperformed the benchmark.

---

### Question 93 | Exam Term: May 25 | Original Q.6
**Question:**
i) What is a Commodity? (2)
ii) Institutional investment ways. (4)
iii) High returns vs. capital requirement discussion. (14)
iv) Reasons to avoid VC money. (5)

**Full Model Solution:**
*   **i) Definition:** Products used in commerce, internationally traded agricultural goods, fuels, or raw materials.
*   **ii) Investment Methods:** Rarely direct (storage). Usually institutional investment is via derivatives, commodity ETFs, or companies whose prices are interdependent with commodities (e.g. mining).
*   **iii) Merits & Capital Impact:**
    *   **Merit:** Significant real returns from economic work; accrual without active management; unique diversification benefits. Performs well during rising inflation and global supply disruptions.
    *   **Disadvantages:** No strong historical evidence for long-term real return; volatile markets; requires specialist expertise; liquidity/lock-in constraints; regulatory/political risk; high storage/insurance costs for physicals.
    *   **Impact on Capital:** Higher volatility requires larger capital buffers to withstand price swings. Illiquid markets may require additional capital for exit risks. Commodity exposures often attract higher regulatory capital charges due to their risk profile.
*   **iv) Reasons to avoid VC / VC Risks:**
    *   **Loss of Control:** VC funding requires giving up significant equity and board seats.
    *   **Pressure for Rapid Growth:** Can force unsustainable scaling and lead to operational risks.
    *   **Dilution of Equity:** Reduces long-term financial gains for founders/employees.
    *   **Down-rounds:** Failing ambitious milestones can lead to lower valuations or forced sales.
    *   **Loss of flexibility:** Must align with VC exit goals (IPO/Acquistion).
    *   **Fundraising Distraction:** Immense time required for pitching and due diligence.

---

### Question 94 | Exam Term: Nov 20 | Original Q.6
**Question:**
i) 5-year zero rate calculation. (4)
ii) 3-year par yield calculation. (2)
iii) FRA value. (3)

**Full Model Solution:**
*   **i) Bootstrapping:** Use the coupon bonds to extract the zero-curve. $Price = \sum CF_t e^{-z_t t}$.

---

### Question 95 | Exam Term: Nov 20 | Original Q.7
**Question:**
Role of commodities in an Economy. [7]

**Full Model Solution:**
*   **Input to Production:** Energy/Metals drive industrial growth.
*   **Inflation Hedge:** Commodity prices typically rise when the currency devalues.
*   **Price Discovery:** Futures markets provide signals for farmers/miners to plan production levels.

---

### Question 96 | Exam Term: Sep 21 | Original Q.5
**Question:**
Fund Manager I vs II. Attribution and IR.
i) Overall performance, stock selection, sector selection. (10)
ii) Performance comment. (4)
iii) IR calculation for both. (5)
iv) Final recommendation. (2)

**Full Model Solution:**
*   **i) Performance Attribution:**
    *   **Outperformance:** Both managers outperformed the benchmark. Manager I outperformed Manager II in total return.
    *   **Stock vs Sector:** Manager I was superior in **Stock Selection** (especially in equities). Manager II showed better **Sector Selection** skill but gave negative returns in bond stock selection.
*   **ii) Information Ratio (IR) Results:**
    *   **Fund Manager I:** Average relative return 0.9%; Tracking error 1.8%; **IR = 0.49**.
    *   **Fund Manager II:** Average relative return 0.3%; Tracking error 1.5%; **IR = 0.24**.
*   **iii) Recommendation:** Choose **Fund Manager I**. Even with higher volatility (tracking error), they are roughly twice as efficient as Manager II at converting risk into active returns.

---

### Question 97 | Exam Term: Sep 21 | Original Q.6
**Question:**
Evaluating LDI for an inflation-linked annuity (Ages 50-55). [8]

**Full Model Solution:**
*   **i) Liability Risk Profile (Annuity at 50-55):**
    *   **Interest Rate Risk:** Higher duration due to long life expectancy at early ages (50) increases sensitivity to rate changes.
    *   **Inflation Risk:** Future annuities are linked to inflation; PV is highly sensitive to inflation expectations.
    *   **Longevity Risk:** The risk that annuitants live longer than predicted by life tables.
*   **ii) Mitigation Strategies:**
    *   **Duration Matching:** Match base annuity cash flows using long-term bonds or interest rate swaps.
    *   **Inflation Hedging:** Invest in inflation-linked bonds or inflation swaps.
    *   **Longevity Hedging:** Use longevity swaps or insurance policies that exchange fixed expected payments for actual life-contingent ones.

---

**[END OF MASTER QUESTION BANK]**

**Full Model Solution:**
*   **i) IFRS Motives:**
    *   **Reliability:** Encouraging reliable and consistent accounting data.
    *   **Transparency:** Transparency of accounting data.
    *   **Global Access:** Single set of standards world-wide enabling access to financial markets.
    *   **Bias Prevention:** Prevention of companies having to produce results based on biases.
    *   **Comparability:** Making it easier for companies to obtain listing on different stock exchanges as one set of standards become acceptable globally.
    *   **Crisis Mitigation:** Mitigation of issues faced in past crises due to perceived lack of transparent info.
    *   **Investor Protection:** Helping investors make informed choices and reducing their risk.
    *   **Cost of Capital:** Reducing cost of capital by providing easier confidence to investors.
*   **ii) IFRS 9 Requirements:**
    *   Showing instruments at fair value in the statement of financial position.
    *   Showing any resultant profit or loss on revaluation in the statement of comprehensive income.
*   **iii) Market Risk Monitoring System:**
    *   **Metrics:** Determine suitable measures (e.g., VaR, tracker error).
    *   **Reporting:** Setup regular reporting system and agree frequency with management.
    *   **Automation:** Automate data input to capture changes in asset values or mix quickly.
    *   **Impact Analysis:** Ability to measure the impact of proposed management actions.
    *   **Simplicity:** System should be simple enough for users/fund managers to operate.
    *   **Independence:** Monitoring should be done by personnel independent of fund managers.
    *   **Quantifiable Output:** Thresholds and risk limits should be agreed upon.
    *   **Mitigation Actions:** Define standard set of actions for when thresholds are breached.
*   **iv) Gov Policy Success Factors:** Unemployment, Inflation, Balance of Payments, Economic Growth.
*   **v) MPT Definition:** Specifies a method constructed to give maximum expected return for a specified level of risk, or minimum risk for a specified expected return.
*   **vi) MPT Assumptions:**
    *   Expected returns, variances and covariances are known.
    *   Rational decision making based purely on return/variance.
    *   Investors are non-satiated and risk-averse.
    *   Fixed single-step time period.
    *   No taxes or transaction costs.

---

### Question 106 | Exam Term: Nov 24
**Question:**
i) Reinvestment risks managed by derivatives. (4)
ii) Risks of using derivatives for hedging. (9)
iii) Advantages of FRAs. (4)

**Full Model Solution:**
*   **i) Reinvestment Risks:** 1. Future contractual premiums (declining rates squeeze profits). 2. Maturity value of bonds (reinvesting proceeds at lower yields). 3. Callable bonds (issuers calling bonds when rates fall). 4. Annuity product guarantees (difficulty meeting payouts).
*   **ii) Derivative Risks:** 1. Market risk (fluctuations in underlying). 2. Counterparty risk (default). 3. Liquidity risk (difficulty exiting position). 4. Operational risk (human error/systems). 5. Model risk (faulty assumptions). 6. Basis risk (mismatch between hedge and underlying). 7. Leverage risk (amplified losses). 8. Collateral/Margin risk. 9. Regulatory risk. 10. Valuation risk (difficult to price OTC).
*   **iii) FRA Advantages:** Effective hedging; customization; no upfront costs; cash settlement; high liquidity; predictable cash flows.

---

### Question 107 | Exam Term: Nov 24 | Original Q.2
**Question:**
Areas covered in Factsheet to understand composition and risk. [4]

**Full Model Solution:**
*   **Factsheet Contents:** Fund objective; Inception date; NAV; AUM split by asset class; Benchmark; Manager details (number of funds managed); Asset classes (objective vs actual); Sector allocation; Returns (fund vs benchmark over 1, 3, 5, 10 years); Rating profile (for debt); Risk parameters (yield, duration); Commentary on drivers.

---

### Question 108 | Exam Term: Nov 24 | Original Q.3
**Question:**
i) Long-only non-leveraged strategy vs Hedge fund. (2)
ii) Hedge fund definition & features. (8)
iii) Benefits to family office & strategy types. (7)

**Full Model Solution:**
*   **i) Strategy Comparison:** Long-only means no short selling or borrowing. Prevents downside profit potential and gearing.
*   **ii) Hedge Fund Features:** Absolute return focus; less regulated; use of borrowing/short-selling/derivatives; aggressive positions; high risk tolerance. Types: Global Macro, Event-driven, Market-neutral, Multi-strategy.
*   **iii) Family Office considerations:** Risk appetite; tax status; liquidity needs; manager expertise; alignment with values (ESG).

---

### Question 109 | Exam Term: Nov 24 | Original Q.4
**Question:**
i) Impact of retention on ALM. (12)
ii) MPT assumptions. (5)
iii) MPT limitations. (4)

**Full Model Solution:**
*   **i) Retention Impact:** 1. Depends on average Sum Assured vs threshold. 2. Duration risk (higher retention increases liability duration). 3. Interest rate risk (especially for protection portfolio). 4. Liquidity risk (higher cash needs). 5. Credit risk (investing retained block). 6. Solvency risk (capital charge for mismatch). 7. Reinvestment risk. 8. P&L impact (cost of derivatives).
*   **ii) MPT Assumptions:** Rational investors; risk-averison; mean-variance focus; fixed time period; no taxes/costs; perfectly divisible assets.
*   **iii) MPT Limitations:** Ignores actuarial risk; only looks at return/variance; ignores liquidity/marketing/tax; doesn't specify time horizon length.

---

### Question 110 | Exam Term: Nov 24 | Original Q.5
**Question:**
Formula for investment index (chain-linking). [6]

**Full Model Solution:**
*   **Formula:** $I(t) = \frac{\sum N_{i,t} P_{i,t}}{B(t)}$.
*   **Divisor Management:** $B(t)$ is the base value, adjusted via chain-linking when the constituents change to ensure the index value doesn't jump due to corporate actions.

---

### Question 111 | Exam Term: Nov 24 | Original Q.6
**Question:**
i) Maximization of net of tax returns. (4)
ii) Anchoring in estimates. (8)

**Full Model Solution:**
*   **i) Tax Maximization Factors:** Total tax rate; split (income vs gain); timing (accrual vs realization); deduction at source; offset/aggregate losses; alternate asset tax rates.
*   **ii) Anchoring:** Starting with an initial "anchor" (past experience/expert opinion) and adjusting away from it. Robust effect even when the anchor is known to be ridiculous. Other behaviors: Framing, Representative heuristics, Overconfidence, Disposition effect.

---

### Question 112 | Exam Term: Nov 24 | Original Q.7
**Question:**
i) ESG components (E, S, G). (3)
ii) Reasons for ESG integration. (4)
iii) Launching ESG ULIP fund (factors to consider). (16)

**Full Model Solution:**
*   **i) Components:** E (Environment - emissions, waste); S (Social - labor, community); G (Governance - pay, transparency).
*   **ii) Integration Reasons:** Risk management; regulatory pressure; investor demand (millennials); evidence of higher long-term returns; reputation; stakeholder pressure.
*   **iii) ESG ULIP implementation:** Define criteria/benchmarks; select credible data sources; materiality assessment; screening model (negative vs positive); thematic focus; marketing (responsible investment); regulatory compliance (SEBI/SFDR); impact reporting.

---

**[END OF MASTER QUESTION BANK]**
