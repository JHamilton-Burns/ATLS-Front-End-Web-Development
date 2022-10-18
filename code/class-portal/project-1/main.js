// //NIKE GALLERY
const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");

		let current = 0;
        let prev = 11;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 11 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

            if (next == 12) {
				next = 0;
			}

			if (prev == -1) {
				prev = 11;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}
        
//ADIDAS GALLERY
const adidasSlider = document.querySelector(".adidasItems");
		const adidasSlides = document.querySelectorAll(".adidas");
		const adidasButton = document.querySelectorAll(".adidasButton");

		let now = 0;
        let back = 11;
		let then = 1;

		for (let i = 0; i < adidasButton.length; i++) {
			adidasButton[i].addEventListener("click", () => i == 0 ? gotoBack() : gotoThen());
		}

		const gotoBack = () => now > 0 ? gotoNumA(now - 1) : gotoNumA(adidasSlides.length - 1);

		const gotoThen = () => now < 11 ? gotoNumA(now + 1) : gotoNumA(0);

		const gotoNumA = numberA => {
			now = numberA;
			back = now - 1;
			then = now + 1;

			for (let i = 0; i < adidasSlides.length; i++) {
				adidasSlides[i].classList.remove("now");
				adidasSlides[i].classList.remove("back");
				adidasSlides[i].classList.remove("then");
			}

            if (then == 12) {
				then = 0;
			}

			if (back == -1) {
				back = 11;
			}

			adidasSlides[now].classList.add("now");
			adidasSlides[back].classList.add("back");
			adidasSlides[then].classList.add("then");
		}