var right_amount = 0, left_amount = 0;

window.onload = function(){

}

function newEntry() {
    
}

function leftEntryName () {
    var input = prompt("enter a new entry name: ");
    var output = document.getElementById("leftEntryName");
    output.innerHTML = input;
}

function rightEntryName () {
    var input = prompt("enter a new entry name: ");
    var output = document.getElementById("rightEntryName");
    output.innerHTML = input;
}

function leftTopic (num) {
    var entry = document.createElement("div");
    entry.setAttribute("class", "l_entry");
    entry.setAttribute("id", "leftTopic_" + num);

    var subtitles = document.createElement("p");
    subtitles.setAttribute("class", "subtitles");
    subtitles.setAttribute("id", "leftTopicName_" + num);
    subtitles.innerHTML= "Topic " + num;

    var Button = document.createElement("button");
    Button.setAttribute("id", "topicName");
    Button.innerHTML = "edit topic name";
    Button.setAttribute("onclick", "leftTopicName(" + num + ")");
    entry.append(Button);
    
    entry.append(subtitles);

    entry.append(document.createElement("br"));

    var entryText = document.createElement("p");
    entryText.setAttribute("class", "entry_text");
    entryText.setAttribute("id", "leftEntryOutput_" + num);
    entryText.innerHTML = "entry infromation";

    entry.append(entryText);

    var Button = document.createElement("button");
    Button.setAttribute("id", "entryButton");
    Button.innerHTML = "edit entry";
    Button.style = "float: none";
    Button.setAttribute("onclick", "leftEntryInfo(" + num + ")");
    entry.append(Button);

    var entryImage = document.createElement("figure");
    entryImage.setAttribute("title", "image");
    entryImage.innerHTML = "input someitng";
    Button.setAttribute("id", "leftEntryImage_" + num);

    entry.append(entryImage);

    var Button = document.createElement("button");
    Button.setAttribute("id", "imageButton");
    Button.innerHTML = "edit image";
    Button.style = "float: none";
    Button.setAttribute("onclick", "leftEntryImage(" + num + ")");
    entry.append(Button);

    entry.append(document.createElement("br"));
    entry.append(document.createElement("br"));

    var lock = document.createElement("img");
    lock.setAttribute("src", "images/Lock.png");
    lock.setAttribute("onclick", "");
    lock.style= "width: 30pt; height: 30pt;";
    entry.append(lock);

    var terminate = document.createElement("img");
    terminate.setAttribute("src", "images/x-mark.png");
    terminate.setAttribute("onclick", "left_delte_tab("+num+")");
    terminate.style= "width: 30pt; height: 30pt;";
    entry.append(terminate);

    document.getElementById("l_side").append(entry);
}

function left_delte_tab(num) {
    var tab = document.getElementById("leftTopic_" + num);
    document.getElementById("l_side").removeChild(tab);
}

function newLeftTopic() {
    left_amount++;
    leftTopic(left_amount);
    leftTopicName(left_amount);
    leftEntryInfo(left_amount);
    leftImage(left_amount);
}

function leftTopicName (num) {
    var input = prompt("enter a new topic name: ");
    var output = document.getElementById("leftTopicName_" + num);
    output.innerHTML = input;
}

function leftEntryInfo (num) {
    var input = prompt("enter a new entry text: ");
    var output = document.getElementById("leftEntryOutput_" + num);
    output.innerHTML = input;
}

function leftImage (num) {
    var input = prompt("enter a new image Url: ");
    var output = document.getElementById("leftEntryImage_" + num);
    output.src = input;
}

function rightTopic (num) {
    var entry = document.createElement("div");
    entry.setAttribute("class", "r_entry");
    entry.setAttribute("id", "rightTopic_" + num);

    var subtitles = document.createElement("p");
    subtitles.setAttribute("class", "subtitles");
    subtitles.setAttribute("id", "rightTopicName_" + num);
    subtitles.innerHTML= "Topic " + num;

    var Button = document.createElement("button");
    Button.innerHTML = "edit topic name";
    Button.setAttribute("onclick", "rightTopicName(" + num + ")"); 
    entry.append(Button);

    entry.append(subtitles);

    entry.append(document.createElement("br"));

    var entryText = document.createElement("p");
    entryText.setAttribute("class", "entry_text");
    entryText.setAttribute("id", "rightEntryOutput_" + num);
    entryText.innerHTML = "entry infromation";
    entry.append(entryText);

    var Button = document.createElement("button");
    Button.setAttribute("id", "entryButton");
    Button.innerHTML = "edit entry";
    Button.style = "float: none";
    Button.setAttribute("onclick", "rightEntryInfo(" + num + ")");
    entry.append(Button);

    var entryImage = document.createElement("figure");
    entryImage.setAttribute("title", "image");
    entryImage.innerHTML = "input something";
    Button.setAttribute("id", "rightEntryImage_" + num);
    entry.append(entryImage);

    var Button = document.createElement("button");
    Button.setAttribute("id", "imageButton");
    Button.innerHTML = "edit image";
    Button.style = "float: none";
    Button.setAttribute("onclick", "rightImage( " + num  + ")");
    entry.append(Button);

    entry.append(document.createElement("br"));
    entry.append(document.createElement("br"));

    var lock = document.createElement("img");
    lock.setAttribute("src", "images/Lock.png");
    lock.setAttribute("onclick", "");
    lock.style= "width: 30pt; height: 30pt;";
    entry.append(lock);

    var terminate = document.createElement("img");
    terminate.setAttribute("src", "images/x-mark.png");
    terminate.setAttribute("onclick", "right_delte_tab("+num+")");
    terminate.style= "width: 30pt; height: 30pt;";
    entry.append(terminate);

    document.getElementById("r_side").append(entry);
}

function right_delte_tab(num) {
    var tab = document.getElementById("rightTopic_" + num);
    document.getElementById("r_side").removeChild(tab);
}

function newRightTopic() {
    right_amount++;
    rightTopic(right_amount);
    rightTopicName(right_amount);
    rightEntryInfo(right_amount);
    rightImage(right_amount);
}

function rightTopicName (num) {
    var input = prompt("enter a new topic name: ");
    var output = document.getElementById("rightTopicName_" + num);
    output.innerHTML = input;
}

function rightEntryInfo (num) {
    var input = prompt("enter a new entry text: ");
    var output = document.getElementById("rightEntryOutput_" + num);
    output.innerHTML = input;
}

function rightImage (num) {
    var input = prompt("enter a new image Url: ");
    var output = document.getElementById("rightEntryImage_" + num);
    output.src = input;
}