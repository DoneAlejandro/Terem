'use strict';

// Определение типа устройства
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};
// Добавление соответствующего класса для определённого устройства
if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}
// Скрытие первого блока
const btnBlock = document.querySelector('.btn-warning');
if (btnBlock) {
	const titleBlock = document.querySelector('.block-1');
	btnBlock.addEventListener("click", function (e) {
		titleBlock.classList.toggle('_active');
	})
}

// Изменение мест блоков
const btnOrder = document.querySelector('.btn-success');
if (btnOrder) {
	const dashedBlock = document.querySelector('.dashed');
	btnOrder.addEventListener("click", function (e) {
		dashedBlock.classList.toggle('_order');
	})
}

// Попап
const applyClose = document.getElementById('apply');
let apply_popup = 2000;
setTimeout("document.getElementById('apply').style.display = 'block'", apply_popup);
document.querySelector('.close').onclick = function () {
	applyClose.style.display = "none";
}





