app = (function () {

	var DOMElements = {
		colorInputs: 'input',
		firstInput: '.color1',
		secondInput: '.color2',
		gradientPlacement: '#gradient',
		cssOutputPlacement: '.js-css-output'
	}

	var generateBackground = function () {
		var firstInputBackground = document.querySelector(DOMElements.firstInput).value,
			secondInputBackground = document.querySelector(DOMElements.secondInput).value,
			newBackground = `linear-gradient(to right, ${firstInputBackground} , ${secondInputBackground})`;

		document.querySelector(DOMElements.gradientPlacement).style.background = newBackground;

		outputCss(newBackground);
	}

	var outputCss = function (backgroundCSS) {
		document.querySelector(DOMElements.cssOutputPlacement).textContent = backgroundCSS;
	}

	return {
		init: function () {

			document.querySelectorAll(DOMElements.colorInputs).forEach(function (input) {

				input.addEventListener('input', function () {
					generateBackground();
				});

			});

		}
	}

})();

app.init();