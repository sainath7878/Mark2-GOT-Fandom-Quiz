var readlineSync = require('readline-sync');

var chalk = require('chalk');

var score = 0;

var userName = readlineSync.question("What is your name? ");
console.log(chalk.bgBlueBright("Welcome " + userName + " to the GOT quiz !!"));

var questionsAndAnswers = [
  {
    question:"How many times has Sansa Stark been married? \n a.1 \n b.2 \n c.3",
    answer:"b"
  },
  {
    question:"How are Jon Snow and Daenerys Targaryen related? \n a.Mom-son \n b.Brother-Sister \n c.Aunt-Nephew",
    answer:"c"
  },
  {
    question:"How did Tywin Lannister die? \n a.Crossbow \n b.Poison \n c.War",
    answer: "a"
  },
  {
    question:"Who killed Ygritte? \n a.Olly \n b.Snow \n c.White-Walkers",
    answer: "a",
  }];

var highScores = [
  {
    name:"sainath",
    score:4
  }
];

function displayQuestions(){
  for(var i=0;i<questionsAndAnswers.length;i++){
    play(questionsAndAnswers[i].question , questionsAndAnswers[i].answer);
  }
}

function play(question , answer){
  console.log(question);
  var userAnswer = readlineSync.keyIn("Enter your option ");
  if(userAnswer === answer){
    score++;
    console.log(chalk.bgGreen("You got it right !!\n"));
  }
  else{
    console.log(chalk.bgRed("You were wrong !!\n"));
  }
}

function showLeaderBoard(){
  for(var i=0;i<highScores.length;i++){
    console.log(highScores[i].name + " " + chalk.blueBright(highScores[i].score));
  }
  console.log(chalk.bgBlue("If you happen to be a highscorer, ping me with a screenshot and I will update the leaderboard !!"));
}

function showScore(){
  console.log(chalk.bgYellow("Your total score is " + score));
}

displayQuestions();
showScore();
console.log("-----------------------------------------------------")
console.log("LEADERBOARD");
console.log("-----------------------------------------------------")
showLeaderBoard();

