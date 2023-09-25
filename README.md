# LangChain with Typescript

1. Create and navigate to new directory

   ```cmd
   mkdir 01-Guidelines
   cd 01-Guidelines
   ```

2. Initiate a node project in the directory

   ```cmd
   npm init -y
   ```

3. Install required packages

   ```cmd
   npm install -S langchain
   npm i dotenv
   npm i --save-dev @types/node
   ```

4. Initiate typescript in the project

   ```cmd
   tsc --init
   ```

5. Update `tsconfig.json` by changing properties as follows    //optional

   ```json
   {
     "compilerOptions": {
        ...
       "target": "ES2020", // or higher
       "module": "nodenext"
     }
   }
   ```

6. Update `package.json` and following to it before `scripts`

   ```json
   "type": "module",
   ```

7. Create API key from `open AI`

   1. Login to [Open AI](https://openai.com/)
   2. Navigate to API page
   3. Click your `profile` on the top right corner
   4. Check your free limit from `Usage` tab, if limit expired buy credits or use some different account
   5. Click `View API Keys`
   6. From the left sidebar open `Api Keys`
   7. Create new secret key
   8. Save your generated key

8. Create `app.ts` file

    ```ts
    import { OpenAI } from "langchain/llms/openai";
    const llm = new OpenAI({
      openAIApiKey: "<OPEN_KEYS_PASTE_HERE>",    // past your open ai secret key here or you can store in env
      temperature: 0.9,
    });
    async function main(question) {
      const result = await llm.predict(question);
      console.log(result);
      return result
    }
    main();     //call this function on clicking button pass it value of input field that user entered question and show its reponse on ui using innertext or appenchild
    ```
9. Vite For Server

   ```
      npm i vite
   ```

   make its script in package.json file then 
   ```
      "start":"vite"
   ```
   run you server like this
   ```
      npm start
   ```

10. Install tailwind css using guide [Tailwind css](https://tailwindcss.com/docs/installation)

---