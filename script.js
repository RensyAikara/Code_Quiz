var div1Tag = document.createElement("div");
var h2Tag = document.createElement("h6");
var aTag = document.createElement("a");
var div2Tag = document.createElement("div");
var h1Tag = document.createElement("h3");
var pTag = document.createElement("p");
var buttonTag = document.createElement("button");

var questionArray = [
    {q:"Inside which HTML element do we put the JavaScript?", answers:{a: "<script>", b: "<scripting>", c: "<js>", d:"<javascript>"}, correct: "a"}];
// Create link to index2.html which shows the highest Score
div1Tag.setAttribute("style", "margin:10px;");
document.body.appendChild(div1Tag);
aTag.setAttribute("href", "./index2.html");
aTag.setAttribute("style", "float: left;");
aTag.textContent = "View HighScore";
console.log(aTag);
div1Tag.appendChild(aTag);
// Timer
h2Tag.textContent = "Time : 60 seconds";
console.log(h2Tag);
h2Tag.setAttribute("style", "float: right;");
div1Tag.appendChild(h2Tag);
// Display the text and button for starting quiz
div2Tag.setAttribute("style", "text-align : center;  padding: 120px;");
document.body.appendChild(div2Tag);
h1Tag.textContent = "Quiz Coding Challenge!";
div2Tag.appendChild(h1Tag);
pTag.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by 10 seconds."
div2Tag.appendChild(pTag);
buttonTag.textContent = "Start Quiz";
buttonTag.setAttribute("style", "background-color: #ba7ce8;");
buttonTag.setAttribute("class", "btn btn-primary");
div2Tag.appendChild(buttonTag);
//when start quiz button is clicked open index1.html, which contains questions
buttonTag.addEventListener("click",newPage);
// function to open index1.html
function newPage(){
    window.open("./index1.html", "_self");
}
