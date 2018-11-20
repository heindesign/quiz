var btnShowResult = document.querySelector('.btn__show-result');

btnShowResult.disabled = true;



var	questionOne = document.querySelector('.questionOne'),
	questionTwo = document.querySelector('.questionTwo'),
	questionThree = document.querySelector('.questionThree'),
	answerListOne = document.querySelectorAll('input[name="answerOne"]'),
	answerListTwo = document.querySelectorAll('input[name="answerTwo"]'),
	answerListThree = document.querySelectorAll('input[name="answerThree"]'),
	i;

for (i = 0; i < answerListOne.length; i++) {
	answerListOne[i].onclick = function() {
		if (questionOne.classList.contains('done')) {
			questionOne.classList.remove('done');
		}
		questionOne.classList.add('done');
	};
}

for (i = 0; i < answerListTwo.length; i++) {
	answerListTwo[i].onclick = function() {
		if (questionTwo.classList.contains('done')) {
			questionTwo.classList.remove('done');
		}
		questionTwo.classList.add('done');
	};
}

for (i = 0; i < answerListThree.length; i++) {
	answerListThree[i].onclick = function() {
		if (questionThree.classList.contains('done')) {
			questionThree.classList.remove('done');
		}
		questionThree.classList.add('done');
	};
}



var answerList = document.querySelectorAll('input[type="radio"]');

for (i = 0; i < answerList.length; i++) {
	answerList[i].addEventListener('click', function() {
		var doneCount = document.querySelectorAll('.done');

		if (doneCount.length == 3) {
			btnShowResult.classList.remove('btn_active');
			btnShowResult.disabled = false;
		}
	});
}



btnShowResult.addEventListener('click', function() {



	btnShowResult.classList.add('btn_active');
	btnShowResult.disabled = true;



	var	modalOpen = document.querySelector('.score');
	
	modalOpen.style.display = 'block';

	var	modalClose = document.querySelector('.score__close');

	modalClose.addEventListener('click', function() {
		modalOpen.style.display = 'none';
	});



	var	toResult = document.querySelector('.btn_to-result'),
		toStart = document.querySelector('.btn_to-start');

	toResult.addEventListener('click', function() {
		modalOpen.style.display = 'none';
	});

	toStart.addEventListener('click', function() {
		location.reload();
	});



	quiz = document.querySelector('.quiz');

	quiz.insertAdjacentHTML('afterbegin', '<div class="score__to"></div>');

	var toScore = document.querySelector('.score__to');
	
	toScore.addEventListener('click', function() {
		modalOpen.style.display = 'block';
	});



	for (var i = 0; i < answerList.length; i++) {
		answerList[i].disabled = true;
	}



	/* Выделение цветом */



	var answerFromOne = document.querySelector('input[name="answerOne"]:checked'),
		answerFromTwo = document.querySelector('input[name="answerTwo"]:checked'),
		answerFromThree = document.querySelector('input[name="answerThree"]:checked'),
		correct = 0,
		correctAnswers = document.querySelector('.correct-answers'),
		range = 0,
		colorList = ['#47d284', '#ffb17f', '#ff7c7c'];


	if (answerFromOne == answerListOne[0]) {
		correct++;
	}

	if (answerFromTwo == answerListTwo[0]) {
		correct++;
	}

	if (answerFromThree == answerListThree[3]) {
		correct++;
	}

	if (correct < 1) {
		range = 2;
	}

	if (correct > 0 && correct < 3) {
		range = 1;
	}

	if (correct > 2) {
		range = 0;
	}

	correctAnswers.insertAdjacentHTML('afterend', '<div class="score__number"></div>');

	scoreNumber = document.querySelector('.score__number');

	scoreNumber.style.backgroundColor = colorList[range];

	scoreNumber.textContent = correct;



	var scoreMessage = document.querySelector('.score__message'),
		messageList = ['Отличная работа!', 'Средненько!', 'Могло быть и лучше!'];

	

	scoreMessage.textContent = messageList[range];


	
	var	imgList = ['win.gif', 'meh.gif', 'lose.gif'],
		imgUrl = 'img/',
		scoreImg = document.querySelector('.score__img');

	scoreImg.style.backgroundImage = 'url(' + imgUrl + imgList[range] + ')';	



});