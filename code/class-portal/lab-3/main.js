
function quiz() { 
	let score = 0;
	let num;
	let question;
    let answer;
	var quizQuestions = [
	  'How many moons does Earth have?',
	  'How many moons does Saturn have?',
	  'How many moons does Venus have?'];

	var quizAnswers = [1, 82, 0];
	
 	//get total number of questions
	const totalQuestion = quizQuestions.length;

    let randomNumber = Math.floor(Math.random() * 3);

	for(randomNumber = 0; randomNumber < totalQuestion; randomNumber++){
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
        if (num === totalQuestion) {
                num = 0;
            }
    }

  document.write(`You got ${score} out of ${totalQuestion} questions correct.`);
}