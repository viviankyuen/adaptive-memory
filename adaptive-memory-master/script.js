//Arrays for Setup & UserInputs
var subjectId;
var subject = [];
var wordSet = [];
var descriptionSet = [];
var recallSet = [];

//Counter Variables for Iteration
var blockCounter = 0;
var itemCounter = 0;
var distractionCounter = 0;
var cloneCounter = 0;

//Timeout Values
var wordOnShow = 5; //Time the subject can see a word - default 5
var breakTime = 10; //Time to calm EDA level down after a word - default 10
var digitCount = 7; //Digits shown in a row (each one second) - default 7
var distractions = 10; //Amount of distraction tasks to be conducted by subject - default 10

//Possible Word Blocks
var practiceWordsOne = ["cocaine", "cruise", "shoe"];
var practiceWordsTwo = ["cobra", "basketball", "dollar"];
var blockOne = ["carrot", "apartment", "steel", "cotton", "salt", "eagle", "cancer", "oxygen"];
var blockTwo = ["sword", "truck", "spider", "shirt", "lawyer", "hammer", "temple", "drum"];
var blockThree = ["diesel", "hurricane", "orange", "fork", "newspaper", "chair", "maple", "milk"];
var blockFour = ["doll", "salmon", "pope", "ocean", "horse", "daisy", "wine", "senator"];

//Scenario Descriptions
var scenarioSurvivalTest = "In this task, we would like you to imagine that you are stranded in the grasslands of a foreign land, without any basic survival materials. Over the next few months, you’ll need to find steady supplies of food and water and protect yourself from predators. Please rate how relevant each of these words would be for you in this survival situation. Some of the words may be relevant and others may not - it’s up to you to decide. Remember, the scale of relevance ranges from one to five, with one indicating totally irrelevant and five signifying extremely relevant; please try to use the whole scale. Be careful: each word will appear for only five seconds so you’ll need to make your decisions rather quickly. We’ll begin with some practice words.";
var scenarioSurvivalFirst = "Remember, in this task, we want you to imagine that you are stranded in the grasslands of a foreign land, without any basic survival materials. Over the next few months, you’ll need to find steady supplies of food and water and protect yourself from predators. We are going to show you a list of words, and we would like you to rate how relevant each of these words would be for you in this survival situation. Do you have any questions about the experiment? If not, you may press 'continue'.";
var scenarioSurvivalSecond = "In this task, once again we would like you to imagine that you are stranded in the grasslands of a foreign land, without any basic survival materials. Over the next few months, you’ll need to find steady supplies of food and water and protect yourself from predators. Please rate how relevant each of these words would be for you in this survival situation. Some of the words may be relevant and others may not - it’s up to you to decide. Remember, the scale of relevance ranges from one to five, with one indicating totally irrelevant and five signifying extremely relevant; please try to use the whole scale.";
var scenarioVacationTest = "In this task, we would like you to imagine that you are enjoying an extended vacation at a fancy resort with all your basic needs taken care of. Over the next few months, you'll want to find different activities to pass the time and maximize your enjoyment of the vacation. Please rate how relevant each of these words would be for you in this vacation situation. Some of the words may be relevant and others may not - it’s up to you to decide. Remember, the scale of relevance ranges from one to five, with one indicating totally irrelevant and five signifying extremely relevant; please try to use the whole scale. Be careful: each word will appear for only five seconds so you’ll need to make your decisions rather quickly. We’ll begin with some practice words.";
var scenarioVacationFirst = "Remember, in this task, we want you to imagine that you are enjoying an extended vacation at a fancy resort with all your basic needs taken care of. Over the next few months, you'll want to find different activities to pass the time and maximize your enjoyment of the vacation. We are going to show you a list of words, and we would like you to rate how relevant each of these words would be for you in this vacation situation. Do you have any questions about the experiment? If not, you may press 'continue'.";
var scenarioVacationSecond = "In this task, once again we would like you to imagine that you are enjoying an extended vacation at a fancy resort with all your basic needs taken care of. Over the next few months, you'll want to find different activities to pass the time and maximize your enjoyment of the vacation. Please rate how relevant each of these words would be for you in this vacation situation. Some of the words may be relevant and others may not - it’s up to you to decide. Remember, the scale of relevance ranges from one to five, with one indicating totally irrelevant and five signifying extremely relevant; please try to use the whole scale.";

//Task Descriptions
var initalBriefing = "We are going to show you a list of words, and we would like you to rate the words on one of two dimensions. For each group of words, we will provide you with a task and a rating scale, and we ask that you rate the words according to the task you are given at that particular time. The words may fall on any point of the scale-it’s up to you to decide where. The scale will always range from one to five and will be clearly labeled; please try to use the whole scale. Be careful: each word will appear for only five seconds so you will need to make your decisions rather quickly.";
var distractionTask = "You will now complete a digit memory task. The computer will display, one at a time, seven digits. After the digits have been displayed, we ask that you type in the digits that you saw in the order you saw them. If you cannot remember all seven digits just enter as many digits as you can remember.  The computer will tell you when you have completed the task.";
var recallTask = "Now we would like to see if you can remember the words you rated at the beginning of the experiment. Please write down the words from both tasks on your response sheet. You may write them down in any order that you wish. You will have ten minutes to complete this task. Once you are ready to begin, press the continue button; you instructor will tell you how much time you have remaining.";

//Put together the Word Set from Word Block 
wordSet.push(practiceWordsOne);
wordSet.push(practiceWordsTwo);
wordSet.push(blockOne);
wordSet.push(blockTwo);
// wordSet.push(blockThree);
// wordSet.push(blockFour);

//Hide or show Elements
function hide(id) {
    document.getElementById(id).style.display = "none";
};
function show(id) {
    document.getElementById(id).style.display = "flex";
};
function showBlock(id){
    document.getElementById(id).style.display = "block";
};

//Eventlisteners for KeyControls
document.addEventListener('keydown', function(event) {

    if (event.code == 'KeyP') {
        rateWord();
    } else if (event.code == 'KeyQ') {
        validateForm()
    }

});

//Set up the System
function admin() {

    subjectId = document.getElementById("subjectId").value;
    
    if (document.getElementById('varA').checked) {
        descriptionSet.push(scenarioVacationTest);
        descriptionSet.push(scenarioSurvivalTest);

        descriptionSet.push(scenarioSurvivalFirst);
        descriptionSet.push(scenarioVacationFirst);
        descriptionSet.push(scenarioSurvivalSecond);
        descriptionSet.push(scenarioVacationSecond);
    }
    else if (document.getElementById('varB').checked) {
        descriptionSet.push(scenarioVacationTest);
        descriptionSet.push(scenarioSurvivalTest);

        descriptionSet.push(scenarioVacationFirst);
        descriptionSet.push(scenarioSurvivalFirst);
        descriptionSet.push(scenarioVacationSecond);
        descriptionSet.push(scenarioSurvivalSecond);
    }

    hide("adminPanel");
    document.getElementById("initialBriefing").innerHTML = initalBriefing;
    show("start");

};

//Initiating a new Word Block
function initiate() {

    hide("start");
    hide("wordRating");

    document.getElementById("description").innerHTML = descriptionSet[blockCounter];
    show("scenario");

};

//Start the next Word
function rateWord() {

    hide("scenario");
    hide("hint");
    hide("countdown");

    document.getElementById("word").innerHTML = wordSet[blockCounter][itemCounter];
    show("word");
    hide("controls");
    show("wordRating");

    ratingTimer();

};

//Switch Word for Controls
function ratingTimer(){

    var timeleft = wordOnShow;
    var downloadTimer = setInterval(function(){
      timeleft -= 1;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        hide("word");
        showBlock("controls");
      }
    }, 1000);

};

//Submit a Rating
function setup() {   
    
    getValues();
    
    if (itemCounter < wordSet[blockCounter].length-1) {
        itemCounter++;
        hide("wordRating");
        show("countdown");
        timeout();
    } else {
        blockCounter++;
        itemCounter = 0;
        if (blockCounter == wordSet.length) {
            finishTask();
        } else {
            initiate();
        }
    }
    
    resetControls();

    //Randomize Order of Affective Slider
    var aff_slider = document.getElementById('AffectiveSlider');
    var arousal_part = 'Level of arousal \n<div class="arousal"> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS_sleepy.svg"></object> \n<input type="range" name="AS-arousal" id="AS-arousal" value=".5" min="0" max="1" step=".01" /> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS_wideawake.svg"></object> \n<object class="intensity_cue_svg" type="image/svg+xml" data="images/AS_intensity_cue.svg"></object></div>';
    var pleasure_part = 'Level of pleasure \n<div class="pleasure"> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS_unhappy.svg"></object> \n<input type="range" name="AS-pleasure" id="AS-pleasure" value=".5" min="0" max="1" step=".01" /> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS_happy.svg"></object> \n<object class="intensity_cue_svg" type="image/svg+xml" data="images/AS_intensity_cue.svg"></object> \n</div>';
    if (Math.random() > 0.5) {
        aff_slider.innerHTML = arousal_part+pleasure_part;
    }
    else {
        aff_slider.innerHTML = pleasure_part+arousal_part;
    }

};

//Get User Input Values on Submit
function getValues() {

    for (i=1; i<=5; i++) {
        var radioId = "r" + i;
        if (document.getElementById(radioId).checked) {
            var relevance = document.getElementById(radioId).value;
        }
    }

    var word = document.getElementById("word").innerHTML;
    var pleasure = document.getElementById("AS-pleasure").value;
    var arousal = document.getElementById("AS-arousal").value;

    addValuePairs(word, relevance, pleasure, arousal);

};

//Add an Entry to the User Array
function addValuePairs(word, relevance, pleasure, arousal) {
    
    var newEntry = {};
    newEntry.word = word;
    newEntry.relevance = relevance;
    newEntry.pleasure = pleasure;
    newEntry.arousal = arousal;
    subject.push(newEntry);

};

//Countdown for Timeout after a Word
function timeout() {

    var timeleft = breakTime;
    var downloadTimer = setInterval(function(){
      document.getElementById("seconds").innerHTML = timeleft;
      timeleft -= 1;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("seconds").innerHTML = "&nbsp;";
        showBlock("hint");
      }
    }, 1000);

};

//Reset all Controls & update Word
function resetControls() {

    document.getElementById("word").innerHTML = wordSet[blockCounter][itemCounter];
    
    for (i=1; i<=5; i++) {
        document.getElementById('r'+i).checked = false;   
    }
    
    document.getElementById("AS-pleasure").value = .5;
    document.getElementById("AS-arousal").value = .5;

};

//Form Validation for Radio Buttons on Word Rating
function validateForm() {

    var radio1 = document.getElementById('r1').checked;
    var radio2 = document.getElementById('r2').checked;
    var radio3 = document.getElementById('r3').checked;
    var radio4 = document.getElementById('r4').checked;
    var radio5 = document.getElementById('r5').checked;

    if (radio1 || radio2 || radio3 || radio4 || radio5) {
        setup();
    } else {
        alert("Please rate the relevance of this word before submitting.");
        return false;
    }

};

//Finish the Rating Task
function finishTask() {

    hide("wordRating");
    document.getElementById("distractionTaskDescription").innerHTML = distractionTask;
    show("endRating");

};

//Start the Distraction Task
function startDistraction() {

    hide("endRating");
    show("distraction");
    nextDistraction();

};

//Initiate the next Distraction Round
function nextDistraction() {

    if(distractionCounter < distractions) {
        show("digit");
        hide("distractionForm");
        var timeleft = digitCount;
            var downloadTimer = setInterval(function(){
                var prevNumber = document.getElementById("digit").innerHTML
                document.getElementById("digit").innerHTML = Math.floor((Math.random() * 9)+1);
                var newNumber = document.getElementById("digit").innerHTML
                //Avoid showing the same number twice
                if (prevNumber == newNumber) {
                    document.getElementById("digit").innerHTML = Math.floor((Math.random() * 9)+1);
                }
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    document.getElementById("digit").innerHTML = "&nbsp;";
                    document.getElementById("distractionInput").value = "";
                    showBlock("distractionForm");
                    document.getElementById("distractionInput").focus();
                }
                timeleft -= 1;
            }, 1000);
    }
    else {
        hide("distraction");
        document.getElementById("recallTaskDescription").innerHTML = recallTask;
        show("recallTask");
        document.getElementById("recallInstructions").style.display = "contents";
    }

    distractionCounter++;

};

//Start Recall Task
function startRecall() {

    hide("recallInstructions");
    show("recallForm");
    showBlock("recallControls");
    document.getElementById("recall0").focus();

    //Stop Key Listeners
    document.removeEventListener('keydown');

};

//Add another Word to Recall Form
function addInput() {
    
    cloneCounter++;
    let clone = document.querySelector('#recall0').cloneNode( true );
    var cloneId = "recall" + cloneCounter
    clone.setAttribute( 'id', cloneId );
    document.querySelector('#recallForm').appendChild( clone );
    document.getElementById(cloneId).value = "";
    document.getElementById(cloneId).focus();

};

//End Recall Task
function finishRecall() {
    
    for (i = 0; i <= cloneCounter; i++) {
        var cloneId = "recall" + i;
        var recalledWord = document.getElementById(cloneId).value;
        recallSet.push(recalledWord);
    }

    hide("recallTask");
    show("success");

};

//Convert Object to CSV
function convertArrayOfObjectsToCSV(args) {
    
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;

};

// Download CSV for Word Ratings
function downloadRatings(args) {

    var data, filename, link;

    var csv = convertArrayOfObjectsToCSV({
        data: subject
    });
    if (csv == null) return;

    filename = "subject" + subjectId + ".csv" || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();

};

//Download CSV for Recalled Words
function downloadRecall(args) {

    var csv = recallSet.toString();

    if (csv == null) return;

    filename = "recall" + subjectId + ".csv" || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();

};