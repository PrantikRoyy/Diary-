var entryAmount = 0;
window.onload = function() {

}

function diary_tab (num){
    var tab = document.createElement("div");
    tab.setAttribute("class", "inner_tab");
    tab.setAttribute("id", "entry_" + num);

    var tabName = document.createElement("span");
    tabName.setAttribute("id", "entryName_" + num);
    tabName.innerHTML = "entry";
    tab.append(tabName);

    tab.append(document.createElement("br"));

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "edit entry name";
    button.setAttribute("onclick", "entryName(" + num + ")"); //
    tab.append(button);

    var link = document.createElement("a");
    link.setAttribute("href", "diaryEntryPageAv.html");

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "go to entry";
    link.append(button);

    tab.append(link);

    tab.append(document.createElement("br"));

    var lock = document.createElement("img");
    lock.setAttribute("src", "images/Lock.png");
    lock.setAttribute("onclick", "");
    lock.style= "width: 30pt; height: 30pt;";
    tab.append(lock);

    var terminate = document.createElement("img");
    terminate.setAttribute("src", "images/x-mark.png");
    terminate.setAttribute("onclick", "delte_tab("+num+")");
    terminate.style= "width: 30pt; height: 30pt;";
    tab.append(terminate);

    document.getElementById("entry_list").append(tab);
}

function delte_tab(num) {
    var tab = document.getElementById("entry_" + num);
    document.getElementById("entry_list").removeChild(tab);
}


function newEntry () {
    entryAmount++;
    diary_tab(entryAmount);
}

function entryName(num) {
    var input = prompt("enter a new name");
    var output = document.getElementById("entryName_" + num);
    output.innerHTML = input;
}

function editDiaryName () {
    document.getElementById("diaryName").innerHTML = prompt("enter a new diary name: ");
}

function editAuthorName () {
    document.getElementById("authorName").innerHTML = prompt("enter a new author name: ");
}