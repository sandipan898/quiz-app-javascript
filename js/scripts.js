function submitAnswers() {
    let total = 5;
    let score = 0;

    // Get the user input 
    let q1 = document.forms['quizForm']['q1'].value;
    // console.log(document.forms['quizForm']);
    let q2 = document.forms['quizForm']['q2'].value;
    let q3 = document.forms['quizForm']['q3'].value;
    let q4 = document.forms['quizForm']['q4'].value;
    let q5 = document.forms['quizForm']['q5'].value;
    // alert(q1);

    // Validation

    for(i = 1; i<=total; i++) {
        if(eval('q'+i) == null || eval('q'+i) == "") {
            alert('Ops! You missed question ' + i);
            return false;
        }
    }

    // Set Correct Answers
    var answers = ['b', 'a', 'd', 'b', 'd'];

    // Check the Answers
    for(i = 1; i<=total; i++) {
        if(eval('q'+i) == answers[i-1]) {
            score++;
        }
    }

    // Display result
    alert("You scored " + score + " out of " + total);
}