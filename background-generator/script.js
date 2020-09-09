app = (function () {

	var DOMElements = {
		colorInputs: 'input',
		firstInput: '.color1',
		secondInput: '.color2',
		gradientPlacement: '#gradient'
	}

	var generateBackground = function () {
		var firstInputBackground = document.querySelector(DOMElements.firstInput).value,
			secondInputBackground = document.querySelector(DOMElements.secondInput).value,
			newBackground = `linear-gradient(to right, ${firstInputBackground} , ${secondInputBackground})`;

		document.querySelector(DOMElements.gradientPlacement).style.background = newBackground;
	}

	return {
		setEventListeners: function () {

			document.querySelectorAll(DOMElements.colorInputs).forEach(function (input) {

				input.addEventListener('input', function () {
					generateBackground();
					console.log('hi');
				});

			});

		}
	}

})();

app.setEventListeners();