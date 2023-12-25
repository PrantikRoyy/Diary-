var number_of_diaries = 0;

window.onload = function () {

}

function create_diary (num) {
    var diary = document.createElement("div");
    diary.setAttribute("id", "diary_" + num);
    diary.setAttribute("class", "diary_tab");

    var diaryName = document.createElement("div");
    diaryName.setAttribute("id", "diaryName_" + num);
    diaryName.innerHTML = "Diary #" + num;
    diary.append(diaryName);

    diary.append(document.createElement("br"));

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "editDiaryName(" + num +")");
    button.innerHTML = "change diary name";
    diary.append(button);

    diary.append(document.createElement("br"));

    var lock = document.createElement("img");
    lock.setAttribute("src", "images/Lock.png");
    lock.setAttribute("onclick", "");
    lock.style= "width: 50pt; height: 50pt;";
    diary.append(lock);

    var terminate = document.createElement("img");
    terminate.setAttribute("src", "images/x-mark.png");
    terminate.setAttribute("onclick", "delte_tab("+num+")");
    terminate.style= "width: 50pt; height: 50pt;";
    diary.append(terminate);

    diary.append(document.createElement("br"));

    var link = document.createElement("a");
    link.setAttribute("href", "diaryPageAV.html");

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "go to entry";
    link.append(button);

    diary.append(link);

    document.getElementById("user_diaries").append(diary);
}

function delte_tab(num) {
    var tab = document.getElementById("diary_" + num);
    document.getElementById("user_diaries").removeChild(tab);
}

function newDiary() {
    number_of_diaries++;
    create_diary(number_of_diaries); 
}

function editDiaryName (num) {
    var input = prompt("Enter a new name for your diary: ");
    var output = document.getElementById("diaryName_" + num);
    output.innerHTML = input;
}