# adaptive-memory
**Adaptive Memory (Research Experiment):**
This repository contains the source code for a questionnaire, to be run locally, based on an experiment conducted by Nairne, Pandeirada and Thompson in 2008. The experiment aims to verify the hypothesis that human memory systems are ‘tuned’ to remember information that is processed for survival.

The original study can be found at SAGE journals.
A replication study is available at OSF.


**Background:**
The code was developed as part of a student project at the Universidad Pompeu Fabra, Barcelona by Marc Biemer, Alexander Holmes, Julie Ruyter and Vivian Yuen. The student group extended the second experiment of the original study by measuring arousal levels throughout the word rating task, objectively utilizing EDA sensors and subjectively utilizing the Affective Slider.


**Experimental Setup:**
Subjects conduct a word rating task (using the code provided here).
EDA levels are measured using bitalino sensors.
Subjects conduct a disctraction task (offline).
Subjects are asked to recall as many words as possible and note them on a blank paper (offline).

**Hypotheses:**
Words seen in a survival scenario will be remembered more often than others.
Words which increase arousal in subjects will be remembered more often.


**How to use it:**
Fork or download the repo
Set words and word block variants in script.js
Add scenario descriptions in script.js
Create keyevents in OpenSignals (r)evolution to set markers in the EDA signal
Open index.html in your browser
Download the csv provided at the end of each session for data analysis


**Further Sources:**
Affective Slider by Alberto Betella.
