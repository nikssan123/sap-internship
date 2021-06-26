//$(document).ready(() => {...})

const input = $('#msgInput');

$('#btn').on('click', e => {
	e.preventDefault();
	const message = input.val();

	// console.log(message);

	$.ajax({ type: 'POST', url: '/', data: { message } });
});
