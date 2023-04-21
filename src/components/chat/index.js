import express from 'express';
import Conversation from '../../langchain/setup.js';

const chat = express.Router();

// template route
chat.post('/', (req, res) => {
	const { message } = req.body;
	Conversation(message).then((result) => {
		res.status(200).send(result);
	});
});

export default chat;
