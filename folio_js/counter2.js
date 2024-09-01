var number2 = document.querySelector('.counter2'),
number2Top = number2.getBoundingClientRect().top,
start2 = +number2.innerHTML, end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
	if(window.scrollY > number2Top - window.innerHeight / 2) {
		this.removeEventListener('scroll', onScroll);
		var interval2 = setInterval(function() {
			number2.innerHTML = ++start2;
			if(start2 == end2) {
				clearInterval(interval2);
			}
		}, 30);
	}
});