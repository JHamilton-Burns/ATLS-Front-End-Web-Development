
function quiz() { 
	let score = 0;
	let num;
	let question;
    let answer;
    var randomNumber;
	const quizQuestions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'];

	const quizAnswers = [1, 82, 0];
	
	//get total number of questions
	var totalQuestion = quizQuestions.length;
		
	for(count = 1; count <= totalQuestion; count++){
        randomNumber= Math.floor(Math.random() * 3) + 0;
		question = quizQuestions[randomNumber];
        console.log(question);
		answer = prompt(question);
        console.log(quizAnswers[randomNumber]);
        console.log(answer);
		if (answer == quizAnswers[randomNumber]) {
			score++;
			alert("Correct!");
		} else {
			alert("Wrong");
		}

        num++;
        if (num == totalQuestion) {
                num = 0;
            }
    }

  document.write(`You got ${score} out of ${totalQuestion} questions correct.`);
}