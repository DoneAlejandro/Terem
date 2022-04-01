'use strict';
// Запрещаем перезагрузку страницы и выводим в блок форму в формате json
const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
	event.preventDefault();

	const one = form.querySelector('[name="one"]'),
		two = form.querySelector('[name="two"]'),
		three = form.querySelector('[name="three"]'),
		four = form.querySelector('[name="four"]'),
		five = form.querySelector('[name="five"]'),
		left = form.querySelector('[name="left"]'),
		right = form.querySelector('[name="right"]');


	const data = {
		one: one.value,
		two: two.value,
		three: three.value,
		four: four.value,
		five: five.value,
		left: left.value,
		right: right.value
	};


	document.getElementById("newForm").innerHTML = JSON.stringify(data);
	// Не сообразил как отправить на обстрактный сервер в файл server.js
	// const newData = serializeForm(event.target);
	// const response = await sendData(newData);
	// async function sendData(newData) {
	// 	return await fetch('/js/server.js', {
	// 		method: 'GET',
	// 		headers: { 'Content-Type': 'multipart/form-data' },
	// 		body: data,
	// 	})
	// };
	// function onSuccess() {
	// 	alert('Ваша заявка отправлена!');
	// }
};



