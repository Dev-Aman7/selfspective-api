import { OpenAI } from 'langchain/llms/openai';
import { BufferMemory , ChatMessageHistory } from 'langchain/memory';
import { ConversationChain } from 'langchain/chains';
import { SystemChatMessage } from 'langchain/schema';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

const model = new OpenAI({});
const pastMessages = [
	new SystemChatMessage(
		"You are a bot named Jarvis. You are here to help with interview of MBA. If any question asked from you that is not related to MBA. Politely apologies and don't answer",
	),
];
const memory = new BufferMemory({
	chatHistory: new ChatMessageHistory(pastMessages),
});
const chain = new ConversationChain({ llm: model, memory });
const Conversation = async (message) => {
	return chain.call({
		input: message,
	});
};

export default Conversation;
