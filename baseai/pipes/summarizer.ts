import { PipeI } from '@baseai/core';
import getCurrentWeatherTool from '../tools/get-current-weather';
// import EamilgeneratorMemory from "../memory/summarizer-agent-memory";

const pipeSummarizer = (): PipeI => {
	const weatherTool = getCurrentWeatherTool();
	console.log('getCurrentWeatherTool():', weatherTool); 
	
	
	return {
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
	messages: [
		{ role: 'system', 
			content: `You are a content summarizer. You will summarize content without losing context into a shorter version.
			If the content includes a location, outdoor activity, or time-sensitive information, ALWAYS use the 'getCurrentWeather' tool to enhance the summary with current weather data.` 
},
	],
	variables: [],
	memory: [],
	tools: [getCurrentWeatherTool()]
  };
}


export default pipeSummarizer;
