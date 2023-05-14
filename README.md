# Otter Chat

Based on React framwork, Otter Chat is your companion, your friend, and so much more.

### Build Instructions

#### Setting up OPEN_AI_KEYS

This project uses ChatGPT API, please configure your API key before building.

1. Create an `.env.keys` file under `./react-chatgpt/` folder.
2. Inside the file, add a line `REACT_APP_OPENAI_KEYS="YOUR_KEYS"`
3. Build the app using below shell commands

```bash
cd react-chatgpt
npm install 
npm run build
```



### Functionalities

<img src="https://s2.loli.net/2023/05/15/MwcxtpjnIhWmTN5.png" alt="image-20230514114024606" style="zoom:50%;" />

1. Otter chat support basic ChatGPT based functionalities, but we made some modification to the prompt.

   1. Act as an Otter
   2. The `temperature` (Or mood index?) parameter is based on Otter’s health. 

   ![image-20230514114039278](https://s2.loli.net/2023/05/15/jpVSbzvZg2KHlNa.png)

2. Mini Game system & Shop system

   Mr. Otter currently has 2 different properties, `health` and `money`. He can buy food with money to restore health and play mini-game to obtain money. `health` will gradually runs out by default.

   * The food list is under `/data/foodlist.json`
   * Initial otter properties are under `/data/otter.js`

<img src="https://s2.loli.net/2023/05/15/w7xWCl3s46feFjR.png" alt="image-20230514114250562" style="zoom:33%;" />

<img src="https://s2.loli.net/2023/05/15/I1VCsGW6iOoe8gU.png" alt="image-20230514114324850" style="zoom:33%;" />

3. Audio and Animation

​	Mr. Otter has his personality! He speaks and moves just like us! If you have ever played Animal Crossing, he speaks just like that. And When he was idling, he loves drinking water and so on.

* This project uses `animalese.js` to generate Animal Crossing voice.
  * `https://github.com/Acedio/animalese.js/blob/master/index.html`
