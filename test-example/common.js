(function() {
	var a = document.getElementsByClassName('a')[0];
	var b = document.getElementsByClassName('b')[0];
	var c = document.getElementsByClassName('c')[0];

	var inputA = document.getElementById('inputA');
	var inputB = document.getElementById('inputB');
	var inputC = document.getElementById('inputC');

	var answerA = document.getElementById('answerA');
	var answerB = document.getElementById('answerB');

	inputA.oninput = function() {
		if (a.innerHTML === inputA.value) {
			inputA.style.display = 'none';
			answerA.innerHTML = inputA.value;
			//console.log(inputA.value);
			a.style.backgroundColor = '#fff';
			inputB.style.display = 'inline-block';
		} else {
			a.style.backgroundColor = '#F9AA47';
			inputA.style.color = 'red';
		}
	}

	inputB.oninput = function() {
		if (b.innerHTML === inputB.value) {
			inputB.style.display = 'none';
			answerB.innerHTML = inputB.value;
			//console.log(inputA.value);
			b.style.backgroundColor = '#fff';
			c.innerHTML = ' ';
			inputC.style.display = 'inline-block';
		} else {
			b.style.backgroundColor = '#F9AA47';
			inputB.style.color = 'red';
		}
	}

	inputC.oninput = function() {
		if (+a.innerHTML + +b.innerHTML === +inputC.value) {
			inputC.style.display = 'none';
			c.innerHTML = inputC.value;
		} else {
			inputC.style.color = 'red';
		}
	}
})();