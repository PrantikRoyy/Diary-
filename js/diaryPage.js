var entryAmount = 0;
window.onload = function() {
    diary_tab(1);
    diary_tab(2);
    diary_tab(3);
    diary_tab(4);
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

    var link = document.createElement("a");
    link.setAttribute("href", "diaryEntryPage.html");

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "go to entry";
    link.append(button);

    tab.append(link);

    tab.append(document.createElement("br"));

    var images = document.createElement("img");
    images.setAttribute("src", "images/page_turn.png");
    images.style = "width: 50pt; height: 40pt;";
    tab.append(images);
    document.getElementById("entry_list").append(tab);
}