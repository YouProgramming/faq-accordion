function changeImageAndShowAnswer(elementID,answerID){
    let plusMinusIcon = document.getElementById(elementID);
    let answerElement = document.getElementsByClassName(answerID);
    let clickState = false;
    plusMinusIcon.addEventListener("click",(e) => {
        if(!clickState){
            closeAllAsnwers();
            changeAllImagesToPlus();
            plusMinusIcon.src = "assets/images/icon-minus.svg";
            answerElement[0].style.display = "block";
            clickState = true;
        }else{
            closeAllAsnwers();
            changeAllImagesToPlus();
            plusMinusIcon.src = "assets/images/icon-plus.svg";
            answerElement[0].style.display = "none"
            clickState = false;
        }
    });
}

function closeAllAsnwers(){
    let answerElement = document.getElementsByClassName("answer");
    for (const element of answerElement) {
        element.style.display = "none";
    }
    // answerElement.forEach((element) => {
    //     element.style.display = "none";
    // })
}
function changeAllImagesToPlus(){
    let imageElement = document.getElementsByClassName("icon");
    for (const element of imageElement) {
        element.src = "assets/images/icon-plus.svg";
    }
}

changeImageAndShowAnswer("first-answer","answer1");
changeImageAndShowAnswer("second-answer","answer2");
changeImageAndShowAnswer("third-answer","answer3");
changeImageAndShowAnswer("fourth-answer","answer4");
