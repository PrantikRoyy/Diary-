var url = "http://localhost:3000/post";
var number_of_diaries = 17;

window.onload = function () {

    for (var i = 1; i <= number_of_diaries; i++) {

        create_diary(i, i + 1);

    }
}

function create_diary(diary_name, author_name) {
    var diary = document.createElement("div");
    diary.setAttribute("id", "diary_" + diary_name);
    diary.setAttribute("class", "diary_tab");
    diary.setAttribute("onclick", "");
    diary.innerHTML = "Diary Name: " + diary_name + "<br>" + "Author Name: " + author_name + " <br>";

    var icon = document.createElement("img");
    icon.setAttribute("src", "images/diary.png");
    icon.style = "width: 40pt; height: 40pt;";
    diary.append(icon);

    diary.append(document.createElement("br"));

    var link = document.createElement("a");
    link.setAttribute("href", "diaryPage.html");

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "go to entry";
    link.append(button);

    diary.append(link);

    document.getElementById("user_diaries").append(diary);
}

function Make_new_Account() {
    var name = prompt("input new username/authorname: ");
    var password = prompt("input new password: ");
    $.post(
        url + '?data=' + JSON.stringify({
            'action': 'save',
            'name': name,
            'password': password
        }),
        response
    );
}

function response(data, status) {
    var response = JSON.parse(data);
    console.log(data);
    
}

function author_login() {
    var username = prompt("enter your username to login: ");
    var password = prompt("enter your password to login: ");
}