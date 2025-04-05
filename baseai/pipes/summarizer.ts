import { PipeI } from '@baseai/core';
// import EamilgeneratorMemory from "../memory/summarizer-agent-memory";

const pipeSummarizer = (): PipeI => ({
	// Replace with your API key https://langbase.com/docs/api-reference/api-keys
	apiKey: process.env.LANGBASE_API_KEY!,
	name: 'summarizer',
	description: 'This is the summerizer of the something',
	status: 'public',
	model: 'fireworks:llama-v3p1-405b-instruct',
	stream: true,
	json: false,
	store: true,
	moderate: true,
	top_p: 1,
	max_tokens: 1000,
	temperature: 0.7,
	presence_penalty: 1,
	frequency_penalty: 1,
	stop: [],
	tool_choice: 'auto',
	parallel_tool_calls: true,
	messages: [{ role: 'system', content: `You are a helpful AI assistant.` }],
	variables: [],
	memory: [],
	tools: []
});

export default pipeSummarizer;
