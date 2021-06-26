const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', (req, res) => {
	const { message = 'No Message' } = req.body;

	console.log(message);

	res.status(200).json({ message });
});

app.get('*', (req, res) => {
	res.send('Not Found');
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Server started!');
});
