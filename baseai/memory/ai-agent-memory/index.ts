import {MemoryI} from '@baseai/core';

const memoryAiAgentMemory = (): MemoryI => ({
	name: 'ai-agent-memory',
	description: "This is the Memory of the Ai Agent which can hold some data",
	git: {
		enabled: false,
		include: ['documents/**/*.pdf'],
		gitignore: false,
		deployedAt: '',
		embeddedAt: ''
	}
});

export default memoryAiAgentMemory;