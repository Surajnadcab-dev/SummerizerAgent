import 'dotenv/config';
import { Pipe } from '@baseai/core';
import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import summarizerAgent from './baseai/pipes/summarizer';

const pipe = new Pipe(summarizerAgent());

const userMsg = `
Langbase studio is your playground to build, collaborate, and deploy AI. It allows you to experiment with your pipes in real-time, with real data, store messages, version your prompts, and truly helps you take your idea from building prototypes to deployed in production with LLMOps on usage, cost, and quality.
A complete AI developers platform.
- Collaborate: Invite all team members to collaborate on the pipe. Build AI together.
- Developers & Stakeholders: All your R&D team, engineering, product, GTM (marketing and sales), literally invlove every stakeholder can collaborate on the same pipe. It's like a powerful version of GitHub x Google Docs for AI. A complete AI developers platform.
`;
async function main() {
   
   const initialSpinner = ora('Conversation with Memory agent...').start();
   try {
       const { completion: calculatorTool} = await pipe.run({
           messages: [{ role: 'user', content: userMsg }],
       });
       initialSpinner.stop();
       console.log(chalk.cyan('Report Generator Agent response...'));
       console.log(calculatorTool);
   } catch (error) {
       initialSpinner.stop();
       console.error(chalk.red('Error processing initial request:'), error);
   }

   while (true) {
       const { userMsg } = await inquirer.prompt([
           {
               type: 'input',
               name: 'userMsg',
               message: chalk.blue('Enter your query (or type "exit" to quit):'),
           },
       ]);


       if (userMsg.toLowerCase() === 'exit') {
           console.log(chalk.green('Goodbye!'));
           break;
       }


       const spinner = ora('Processing your request...').start();


       try {
           const { completion: reportAgentResponse } = await pipe.run({
               messages: [{ role: 'user', content: userMsg }],
           });


           spinner.stop();
           console.log(chalk.cyan('Agent:'));
           console.log(reportAgentResponse);
       } catch (error) {
           spinner.stop();
           console.error(chalk.red('Error processing your request:'), error);
       }
   }
}
main();