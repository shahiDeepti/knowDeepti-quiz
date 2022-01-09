var chalk= require("chalk");
function log(data){
 console.log((data));
}


var readlineSync= require("readline-sync");
 


var questionsL0=[{ques:"Where is Deepti From? ", answer:"gorakhpur" },
{ques:" Where does Deepti work?", answer:"TCS"},
{ques:"From which college did Deepti graduate from?", answer:"GLBITM"},
{ques:"What is Deepti's favourite color?", answer:"yellow"},
{ques:"Who is Deepti's favourite actor?", answer:"nawazzudin"},
{ques:"Who is Deepti's closest friend? ", answer:"ruchi"},
{ques:"What is the Deepti's favourite cuisine?", answer:"mughlai"},
{ques:"When is Deepti's Birthday?", answer:"22july"},
{ques:"How many pets does Deepti have? ", answer:"1"},
{ques:"Out of evrything what does Deepti enjoy doing?", answer:"dance"}];



var username= readlineSync.question(chalk.blue("Hey! What's your name? "));
log(chalk.black.bold.italic.bgYellowBright.bold("Welcome "+username));
if( readlineSync.keyInYN(chalk.blue("do you want to play? "))){
  log(chalk.green.italic("Let's see how well do you know Deepti"));
   score=0;
  for(i=0; i<questionsL0.length;i++){
  play(questionsL0[i].ques,questionsL0[i].answer);
  }
  highestScore(score,10);
}
else{
  log(chalk.yellow("Thankyou!byebye "));}
  var score=0;

function play(ques, answer){
  var userans = readlineSync.question(chalk.blue(ques));
  if ( userans.toLowerCase()===answer.toLowerCase() ){
  log(chalk.green.italic.bold("right answer"));
  score++;
  }
  else{
  log(chalk.red.italic.bold("wrong answer"));}
}

function highestScore( score,highest){
   log(chalk.red.bold("Your Score is: "+score));
   if(score > highest){
   log(chalk.black.bgYellow.italic.bold("Congrats! You have crossed the highest score"));}
}



