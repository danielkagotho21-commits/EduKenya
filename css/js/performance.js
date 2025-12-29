function saveAnswer(subject, questionNumber, answer){
    let username = localStorage.getItem("username");
    if(!username) return;
    let data = JSON.parse(localStorage.getItem(username)) || {};
    data[subject] = data[subject] || {};
    data[subject][questionNumber] = answer;
    localStorage.setItem(username, JSON.stringify(data));
}

function getAnswers(subject){
    let username = localStorage.getItem("username");
    if(!username) return {};
    let data = JSON.parse(localStorage.getItem(username)) || {};
    return data[subject] || {};
}
