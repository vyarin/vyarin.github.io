const data = [
    {
        "category": "RANDOMNESS, PROBABILITY, AND SIMULATION",
        "questions": [
            {
                "type": "frq",
                "question": "Shino is choosing random numbers from 01–25 from a table of random digits without replacement. What is the fifth random number she chooses?<br>68417 35013 15529 72765 85089 57067 50211 47487",
                "has-image": false,
                "answer": "14"
            },
            {
                "type": "mcq",
                "question": "In 2023, about thirty percent of people who took the AP® Human Geography exam received a 1 (on a scale of 1–5). If you want to simulate choosing somebody who took the exam last year and recording “Yes” if they received a 1, which of these is the correct assignment of digits for this simulation?<br><ol type=\"A\"><li>00–04</li><li>00–05</li><li>0–4</li><li>1–5</li><li>01–05</li></ol>",
                "has-image": false,
                "options": [
                    "A. 00–04",
                    "B. 00–05",
                    "C. 0–4",
                    "D. 1–5",
                    "E. 01–05"
                ],
                "answer": 3
            },
            {
                "type": "mcq",
                "question": "Dotty rolls a fair die five times and gets a one, two, three, four, and five, what is the probability that she gets a six on the next roll?<br><ol type=\"A\"><li>1</li><li>3</li><li>1/2</li><li>1/3</li><li>1/6</li></ol>",
                "has-image": false,
                "options": [
                    "A. 1",
                    "B. 3",
                    "C. 1/2",
                    "D. 1/3",
                    "E. 1/6"
                ],
                "answer": 4
            },
            {
                "type": "frq",
                "question": "Audie has not studied for the MCAT® and has to guess every question. A dot plot shows a simulated MCAT® score in 50 trials of simulation below. If Cyd scored a 494 on the MCAT®, is there convincing evidence that he had studied for the MCAT®? Explain.",
                "has-image": true,
                "image": "cat1-800.svg",
                "answer": "It is highly unlikely that Cyd would score higher than 375 on the MCAT® purely by guessing the scores. As Cyd's score does not appear on the right side of the distribution, there is convincing evidence that he had studied for the MCAT®."
            },
            {
                "type": "mcq",
                "question": "A market research company reports that the probability that US adults think that they can beat a grizzly bear in a fight is 0.06. Marshall claims that this means that out of 100 selected US adults, 6 will believe they can beat a grizzly bear in a fight. Is Marshall interpreting this probability correctly?<br><ol type=\"A\"><li>Yes, the proportion 6/100 is equal to 6%. 100 is equal to the sample of adults and 6 is equal to those that think they can beat a grizzly bear, which is 6%.</li><li>No, dividing 6 people by 100 gives 0.06%, not 6%. This is not the correct calculation and there would be 600 people who believe they can beat a grizzly bear for the interpretation to be correct.</li><li>Yes, since 100 is a large, random, independent sample of US adults, it is plausible to claim that there would be exactly 6 people who believe they can bear a grizzly bear, given a 0.06 proportion.</li><li>No, this probability represents the probability for many US adults in the long run.</li></ol>",
                "has-image": false,
                "options": [
                    "a. Yes, the proportion 6/100 is equal to 6%. 100 is equal to the sample of adults and 6 is equal to those that think they can beat a grizzly bear, which is 6%.",
                    "b. No, dividing 6 people by 100 gives 0.06%, not 6%. This is not the correct calculation and there would be 600 people who believe they can beat a grizzly bear for the interpretation to be correct.",
                    "c. Yes, since 100 is a large, random, independent sample of US adults, it is plausible to claim that there would be exactly 6 people who believe they can bear a grizzly bear, given a 0.06 proportion.",
                    "d. No, this probability represents the probability for many US adults in the long run."
                ],
                "answer": 3
            }
        ]
    },
    {
        "category": "PROBABILITY RULES",
        "questions": [
            {
                "type": "frq",
                "question": "If events N (P(N) = 0.004) and M (P(M) = 0.67) are mutually exclusive, what is the probability of P(N ∩ M)?",
                "answer": "P(N ∩ M) = 0"
            },
            {
                "type": "frq",
                "question": "Fauna has five coins: 1 dime, 3 quarters, and 1 loonie. Cephalobot has four coins: 1 quarter, 2 loonies, and 1 nickel. Each person randomly draws one of their coins, and the winner is the person with the highest valued coin. If both coins have the same value then they tie. Who is more likely to win this game?",
                "answer": "Creating a probability model of this game shows that Cephalobot wins more times than Fauna. Therefore, Cephalobot is more likely to win this game."
            },
            {
                "type": "frq",
                "question": "A survey conducted by OnePoll and Life Storage on US adults asked, “Do you have a stuffed animal you still interact with?” The resulting data are shown in the table below. Define F as getting a Female and Y as getting a person who has a stuffed animal they still interact with. Find P(F ∪ Y<sup>C</sup>)",
                "has-image": true,
                "image": "cat2-600.svg",
                "answer": "P(F ∪ Y<sup>C</sup>) = P(F) + P(Y<sup>C</sup>) - P(F ∩ Y<sup>C</sup>) = 1002/2007 + 349/2007 - 228/2007 = 1123/2007 = 0.5595"
            },
            {
                "type": "frq",
                "question": "Diana, Bones, and Henry are each buying a CD from a store. If every person is equally likely to buy any of the 211 CDs from the Jazz section, what is the probability that at least two people in the group buy the same CD?",
                "has-image": false,
                "answer": "The complement of this event is that all CDs are different = 211 * 210 * 209 outcomes out of 211^3 possible outcomes = 0.9858. 1 - 0.9858 = 0.01417"
            },
            {
                "type": "frq",
                "question": "Peewee gathered data on shoppers at his local supermarket. Let R = buying rice, N = buying noodles, and B = buying bean sprouts:<br><ul><li>P(R) = 17%</li><li>P(N) = 13%</li><li>P(B) = 3%</li><li>P(R ∩ N) = 2%</li><li>P(R ∩ B) = 18%</li><li>P(N ∩ B) = 24%</li><li>P(R ∩ N ∩ B) = 19%</li></ul><br>What is the probability that the shopper is not buying bean sprouts and the shopper is buying rice or noodles, P(B<sup>C</sup> ∩ (R ∪ N))?",
                "has-image": false,
                "answer": "P(B<sup>C</sup> ∩ (R ∪ N)) = 0.19"
            }
        ]
    },
    {
        "category": "CONDITIONAL PROBABILITY AND INDEPENDENCE",
        "questions": [
            {
                "type": "frq",
                "question": "What is the formula for conditional probability? P(A | B) =",
                "has-image": false,
                "answer": "P(A | B) = P(A ∩ B)/P(B)"
            },
            {
                "type": "mcq",
                "question": "If P(A) = 0.54, P(B) = 0.12, and A and B are independent events, what is P(A or B)?<br><ol type=\"A\"><li>0.0648</li><li>0.5952</li><li>0.66</li><li>The answer cannot be determined.</li></ol>",
                "has-image": false,
                "options": [
                    "A. 0.0648",
                    "B. 0.5952",
                    "C. 0.66",
                    "D. The answer cannot be determined."
                ],
                "answer": 3
            },
            {
                "type": "frq",
                "question": "Suppose you shuffle a standard deck (52 cards, 13 cards of each suit) of playing cards thoroughly and deal 4 cards face-up onto a table. What is the probability of dealing 4 clubs in a row?",
                "has-image": false,
                "answer": "P(4 clubs) = 13/52 * 12/51 * 11/50 * 10/49 = 0.0026"
            },
            {
                "type": "frq",
                "question": "P(A) = 0.25, P(B) = 0.20, and P(A ∪ B) = 0.4. Are events A and B independent?",
                "has-image": false,
                "answer": "P(A) * P(B) = 0.05. Since P(A ∪ B) = P(A) + P(B) - P(A ∩ B), this means that P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0.05. Since both the products of the probabilities and P(A ∩ B) are the same, Events A and B are independent."
            },
            {
                "type": "frq",
                "question": "In a population of mice, 9/16 have an agouti coat, 3/16 have a black coat, and 4/16 are albino. The mice can either have black or pink eyes. 71% of the agouti mice, 12% of the black mice, and 0% of the albino mice have black eyes. Suppose we select one mouse at random and record their coat and eye colour. Given that the chosen mouse has pink eyes, what is the probability that the mouse has a black coat?",
                "has-image": false,
                "answer": "P(agouti | pink eyes) = 0.1657"
            }
        ]
    },
    {
        "category": "DISCRETE AND CONTINUOUS RANDOM VARIABLES",
        "questions": [
            {
                "type": "mcq",
                "question": "What is the formula for calculating the expected value, E(X) of a random variable?<br><ol type=\"A\"><li><span>E(X) = (ΣX<sub>i</sub>)/n</span></li><li><span>E(X) = 1/(ΣP<sub>X</sub>)</span></li><li><span>E(X) = ΣX<sub>i</sub>p<sub>i</sub></span></li><li><span>E(X) =(Σ(X<sub>i</sub> - P<sub>i</sub>))/σ<sub>X</sub></span></li><li><span>E(X) = np</span></li></ol>",
                "has-image": false,
                "options": [
                    "A. <span>E(X) = (ΣX<sub>i</sub>)/n</span>",
                    "B. <span>E(X) = 1/(ΣP<sub>X</sub>)</span>",
                    "C. <span>E(X) = ΣX<sub>i</sub>p<sub>i</sub></span>",
                    "D. <span>E(X) =(Σ(X<sub>i</sub> - P<sub>i</sub>))/σ<sub>X</sub></span>",
                    "E. <span>E(X) = np</span>"
                ],
                "answer": 2
            },
            {
                "type": "frq",
                "question": "Conrad is playing a virtual game popular among AP® Statistics students in which he opens geodes until he finds a red crystal, or when 4 geodes have been opened. The table below shows the probability distribution for the random variable, X = the number of geodes Conrad will open. What is the standard deviation of X?",
                "has-image": true,
                "image": "cat4-400.svg",
                "answer": "<span>σ</span><sub>X</sub> = 0.9355"
            },
            {},
            {},
            {}
        ]
    },
    {
        "category": "TRANSFORMING AND COMBINING RANDOM VARIABLES",
        "questions": [
            {
                "type": "mcq",
                "question": "What happens to the variability of the probability distribution after adding or subtracting a constant?<br><ol type=\"A\"><li>It stays the same</li><li>It gets larger by the factor of the constant</li><li>It gets larger or smaller depending on if the constant is subtracted or added</li></ol>",
                "has-image": false,
                "options": [
                    "A. It stays the same",
                    "B. It gets larger by the factor of the constant",
                    "C. It gets larger or smaller depending on if the constant is subtracted or added"
                ],
                "answer": 0
            },
            {},
            {
                "type": "frq",
                "question": "The mean SAT score in Texas for high school seniors is 1020 points with a standard deviation of 193. A class of 30 students wants to estimate their combined SAT score without sharing theirs. What is the standard deviation of their combined score?",
                "has-image": false,
                "answer": "Let X = the SAT score of a randomly selected student in Texas.<br>Let Y = the SAT score of 30 randomly selected students combined.<br><span>σ</span><sub>Y</sub> = √(30<span>σ</span><sub>X</sub><sup>2</sup>) = √(30(193)<sup>2</sup>) = 1057.1045 points"
            },
            {
                "type": "frq",
                "question": "Pekoe conducted a scientific experiment to determine the relationship between gas temperature and pressure. To ensure her measurements were accurate, for each interval of pressure, she measured the temperature of the gas multiple times, and sent them to her friend, Sylvana to analyze. Upon receiving her first set of data, Sylvana was appalled to find that the data was in Fahrenheit! The original gas temperature data, X in a randomly selected measurement, follows a normal distribution with a mean of -376.89°F and a standard deviation of 3.5°F. Let Y be the gas temperature in Kelvin for the randomly selected measurement. What is the mean temperature of Y? (K = (F - 32) * 5/9 + 273.15)",
                "has-image": false,
                "answer": "<span>μ</span><sub>X</sub> = -376.89°F. Transforming the mean of a random variable involves multiplying the mean by the constant provided and the added or subtracted constant. The formula for Fahrenheit to Kelvin follows this, therefore, <span>μ</span><sub>Y</sub> = (-376.89 - 32) * 5/9 + 273.15 = 45.989 K"
            },
            {
                "type": "frq",
                "question": "Hornsby and Wolfgang compete in England's annual cheese rolling contest. As a local to England, the time it takes for Hornsby to finish the race, H, on a randomly selected cheese roll has a mean of 15 seconds, with a standard deviation of 2.3 seconds. The time it takes Wolfgang to finish the race, W, on a randomly selected cheese roll has a mean of 21 seconds, with a standard deviation of 3.4 seconds. Suppose we select at random one of Hornsby's race times and one of Wolfgang's. Find the mean and interpret the standard deviation of the difference, S = W - H in their times.",
                "has-image": false,
                "answer": "<span>μ</span><sub>S</sub> = <span>μ</span><sub>W</sub> - <span>μ</span><sub>H</sub> = 21 - 15 = 6 seconds.<br><span>σ</span><sub>S</sub> = √(<span>σ</span><sub>W</sub><sup>2</sup> + <span>σ</span><sub>H</sub><sup>2</sup>) = √(3.4<sup>2</sup> + 2.3<sup>2</sup>) = 4.105 seconds.<br>After many cheese rolls are randomly selected, the difference between Wolfgang's and Hornsby's times will typically vary by about 4.105 seconds from the mean of 6 seconds."
            }
        ]
    },
    {
        "category": "BINOMIAL AND GEOMETRIC RANDOM VARIABLES",
        "questions": [
            {
                "type": "frq",
                "question": "What are the four conditions for a binomial setting?",
                "has-image": false,
                "answer": "Binary (success or failure), independent, fixed probability, fixed trials."
            },
            {},
            {
                "type": "frq",
                "question": "During the start of the French Revolution, Ketchup kept fifty pieces of bread on his table. Each day, there is a 0.008849 probability for a rat to gobble up an entire piece of bread. By the time the revolution ends, 3841 days later, how many pieces of bread are expected to be on his table?",
                "has-image": false,
                "answer": " Binary: Success = bread eaten, Failure = bread not eaten.<br>Independent: Knowing the outcome of one piece of bread does not tell us anything about the other pieces.<br>Fixed Probability: 0.008849.<br>Fixed Trials: 3841 trials.<br><span>np</span> = 3841(0.008849) = 33.989009 pieces eaten. Therefore, there are 19.196631 pieces of bread left on the table."
            },
            {
                "type": "frq",
                "question": "Lolly and Bob are playing a video game where they can gamble with a suspicious wizard to double all their money. However, the wizard has a 2.18% chance of stealing all their money. Lolly lost all her money after 83 tries and Bob lost all of his money after 221 tries. Lolly accuses Bob of using cheats to decrease his chances of losing. What is the probability that Bob lost his money after 221 tries or more and is there convincing evidence that he is using cheats?",
                "has-image": false,
                "answer": "Using <span>geomCdf</span> gives P(X ≥ 221) = 0.007836.<br>Because this probability is so small to realistically happen by chance, there is convincing evidence that Bob is using cheats to decrease his chances of losing."
            },
            {}

        ]
    }
]