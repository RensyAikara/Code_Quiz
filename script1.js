var div1Tag = document.createElement("div");
var h2Tag = document.createElement("h6");
var aTag = document.createElement("a");
var div2Tag = document.createElement("div");
var h1Tag = document.createElement("h3");
var pTag = document.createElement("p");
var div3Tag = document.createElement("div");
var div4Tag = document.createElement("div");
var div5Tag = document.createElement("div");
var div6Tag = document.createElement("div");
var buttonTag = document.createElement("button");
var button2Tag = document.createElement("button");
var button3Tag = document.createElement("button");
var button4Tag = document.createElement("button");
var div7Tag = document.createElement("div");
var hTag = document.createElement("hr");
// Array which contains objects, each oject having question, answer options and correct answer
var questionArray = [
    { q: "Inside which HTML element do we put the JavaScript?", answers: { a: "<script>", b: "<scripting>", c: "<js>", d: "<javascript>" }, correct: "<script>" },
    { q: "How do you write \"Hello World\" in an alert box?", answers:{a: "alertBox(\"Hello World\")\;", b: "alert(\"Hello World\")\;", c: "msgBox(\"Hello World\")", d: "msg(\"Hello World\")"}, correct: "alert(\"Hello World\")\;"},
    { q: "How to write an IF statement in JavaScript?", answers:{ a: "if(i == 5)", b: "if i == 5 then", c: "if i = 5", d: "if i = 5 then"}, correct: "if(i == 5)"},
    { q: "How does a FOR loop start?", answers:{ a: "for i = 1 to 5", b: "for (i=0; i<=5)", c: "for (i=0; i<=5; i++)", d: "for (i<=5; i++)"}, correct: "for (i=0; i<=5; i++)"}];

// Create link to index2.html which shows the highest Score
div1Tag.setAttribute("style", "margin:10px;");
document.body.appendChild(div1Tag);
aTag.setAttribute("href", "./index2.html");
aTag.setAttribute("style", "float: left;");
aTag.textContent = "View HighScore";
div1Tag.appendChild(aTag);
// Timer
h2Tag.textContent = "Time : 60 seconds";
h2Tag.setAttribute("style", "float: right;");
div1Tag.appendChild(h2Tag);

// Display questions and answer choices at the center of the browser
div2Tag.setAttribute("style", "text-align : center;  padding: 120px; font-size: 25px");
document.body.appendChild(div2Tag);
var fullDetails = "";
//calling setTime function to start the timer
setTime();
var i;
// call setQuestion function to display question and answer options in the order
setQuestion(0);
// function setQuestion
function setQuestion(i) {
        // display question
        pTag.textContent = questionArray[i].q;
        div2Tag.appendChild(pTag);
        //create button for displaying answer option -1
        div2Tag.appendChild(div3Tag);
        buttonTag.setAttribute("class", "btn btn-secondary button");
        buttonTag.setAttribute("id", "button1");
        buttonTag.setAttribute("type", "button;");
        buttonTag.setAttribute("style", "background-color: #ba7ce8; width:400px;");
        buttonTag.textContent = questionArray[i].answers.a;
        div3Tag.appendChild(buttonTag);
        //create button for displaying answer option -2
        div2Tag.appendChild(div4Tag);
        button2Tag.setAttribute("class", "btn btn-secondary button");
        button2Tag.setAttribute("id", "button2");
        button2Tag.setAttribute("type", "button;");
        button2Tag.setAttribute("style", "background-color: #ba7ce8; margin-top: 10px; width:400px;");
        button2Tag.textContent = questionArray[i].answers.b;
        div4Tag.appendChild(button2Tag);
        //create button for displaying answer option -3
        div2Tag.appendChild(div5Tag);
        button3Tag.setAttribute("class", "btn btn-secondary button");
        button3Tag.setAttribute("id", "button3");
        button3Tag.setAttribute("type", "button;");
        button3Tag.setAttribute("style", "background-color: #ba7ce8; margin-top: 10px; width:400px;");
        button3Tag.textContent = questionArray[i].answers.c;
        div5Tag.appendChild(button3Tag);
        //create button for displaying answer option -4
        div2Tag.appendChild(div6Tag);
        button4Tag.setAttribute("class", "btn btn-secondary button");
        button4Tag.setAttribute("id", "button4");
        button4Tag.setAttribute("type", "button;");
        button4Tag.setAttribute("style", "background-color: #ba7ce8; margin-top: 10px; width:400px;");
        button4Tag.textContent = questionArray[i].answers.d;
        div6Tag.appendChild(button4Tag);

        //Listen to event listener for click on button -1
        document.getElementById("button1").addEventListener("click",function(){
            console.log("id is: " +this.id);  
            //take text content
            fullDetails = this.textContent;
            console.log("text content is: " +fullDetails);
            //call check answer function to check whether the answer is correct or not
            checkAnswer(i);
        })
        //Listen to event listener for click on button -2
        document.getElementById("button2").addEventListener("click",function(){
            console.log("id is: " +this.id);  
            //take text content
            fullDetails = this.textContent;
            console.log("text content is: " +fullDetails);
            //call check answer function to check whether the answer is correct or not
            checkAnswer(i);           
        })
        //Listen to event listener for click on button -3
        document.getElementById("button3").addEventListener("click",function(){
            console.log("id is: " +this.id);  
             //take text content
            fullDetails = this.textContent;
            console.log("text content is: " +fullDetails);
            //call check answer function to check whether the answer is correct or not
            checkAnswer(i);       
        })
        //Listen to event listener for click on button -4
        document.getElementById("button4").addEventListener("click",function(){
            console.log("id is: " +this.id);  
             //take text content
            fullDetails = this.textContent;
            console.log("text content is: " +fullDetails);
            //call check answer function to check whether the answer is correct or not
            checkAnswer(i);      
        })
}

div2Tag.appendChild(hTag);

function checkAnswer(i){
    // if user selected answer is same as the answer stored with each element of the array, display "correct"
        if(fullDetails == questionArray[i].correct){
        div7Tag.textContent = "Correct";
        }
        // else display "wrong"
        else{
        div7Tag.textContent = "Wrong";
        }
        div2Tag.appendChild(div7Tag);
}

// setTime function
var secondsLeft = 60;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        h2Tag.textContent = "Time : " + secondsLeft + " seconds";
        // when  secondsleft value is less than or equal to 0, then open index2.html page to display result
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

// sendMessage function
function sendMessage(){
    window.open("./index2.html", "_self");
}