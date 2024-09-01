var number1 = document.querySelector('.counter1'),
number1Top = number1.getBoundingClientRect().top,
start1 = +number1.innerHTML, end1 = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {
	if(window.scrollY > number1Top - window.innerHeight / 2) {
		this.removeEventListener('scroll', onScroll);
		var interval1 = setInterval(function() {
			number1.innerHTML = ++start1;
			if(start1 == end1) {
				clearInterval(interval1);
			}
		}, 50);
	}
});