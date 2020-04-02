# Code_Quiz

*                        PseudoCode
*   ********************************************************************

* 1. Create 3 html pages
* 2. In the first html page, create the first window for the quiz, which contains,
*             1. A link to view highest score
*             2. A timer which start countng down, once the start quiz button is clicked
*             3. Text displaying instructions for the text
*             4. Button to start quiz
* 
* 3. Once start quiz button is clicked, it takes user to second html page
* 
* 4. second html page
*         1. A link to view highest score
*         2. A timer which starts counting down when user opens this page
*         3. Create an array for questions, answer options and correct answer. This array contains each element as object, which consists of three keys,each key for  question, answer options and correct answer
*         4. Create a function "setTime" calling setInterval function  for timer. When the timer value reaches zero, it should go to index2.html, which shows result. Create the setTime function to decrement the timer value by 10, if user clicks a wrong answer.
*         5. Create "setQuestion" function, which display question and corresponding answer options using buttons. Also create event listener for click on each button
*         6. Create "checkAnswer" function for checking user selected answer. If it is same as the saved correct answer, display the message "Correct Answer". else display "Incorrect Answer"
*         7. Call setTime function
*         8. Call setQuestion function for all the elements in the questions array, which also calls "checkAnswer" function, after listening to click event
*         9. The final score is the time left, when user finish attending all questions. 
*        10. Use local storage to store the highest score, so that you can get the previously stored highest score.


