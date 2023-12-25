window.onload = function(){
    leftEntry(1);
    rightEntry(1);
}

function leftEntry (num) {
    var entry = document.createElement("div");
    entry.setAttribute("class", "l_entry");
    entry.setAttribute("id", "topic_" + num);

    var subtitles = document.createElement("p");
    subtitles.setAttribute("class", "subtitles");
    subtitles.innerHTML= "Topic " + num;
    entry.append(subtitles);

    entry.append(document.createElement("br"));

    var entryText = document.createElement("p");
    entryText.setAttribute("class", "entry_text");
    entryText.setAttribute("id", "entryOutput");
    entryText.innerHTML = "entry infromation";
    entry.append(entryText);

    var entryImage = document.createElement("figure");
    entryImage.setAttribute("title", "image");
    entryImage.innerHTML = "input someitng";
    entry.append(entryImage);

    document.getElementById("l_side").append(entry);
}

function rightEntry (num) {
    var entry = document.createElement("div");
    entry.setAttribute("class", "r_entry");
    entry.setAttribute("id", "topic_" + num);

    var subtitles = document.createElement("p");
    subtitles.setAttribute("class", "subtitles");
    subtitles.innerHTML= "Topic " + num;
    entry.append(subtitles);

    entry.append(document.createElement("br"));

    var entryText = document.createElement("p");
    entryText.setAttribute("class", "entry_text");
    entryText.setAttribute("id", "entryOutput");
    entryText.innerHTML = "entry infromation";
    entry.append(entryText);

    var entryImage = document.createElement("figure");
    entryImage.setAttribute("title", "image");
    entryImage.innerHTML = "input someitng";
    entry.append(entryImage);

    document.getElementById("r_side").append(entry);
}