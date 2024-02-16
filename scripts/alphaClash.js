// function play(){
//     //step1:hidding the home screen . to add hidden class to the home section
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //step:showing the playground
//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

// }

function handlekeyboardButtonPress(event){
    const playerPressed=event.key;
    if(playerPressed==='Escape'){
        gameOver();
    }

    // the expected key to press
const currentAlphabetElement=document.getElementById('current-alphabet');
const currentAlphabet=currentAlphabetElement.innerText;
const expectedAlphabet=currentAlphabet.toLowerCase();
console.log(playerPressed,expectedAlphabet);
//check matched or not
if(playerPressed===expectedAlphabet){
    console.log('You got a point.');

//     //update score
   //const currentScoreElement=document.getElementById('current-score');
//     const currentScoreText=currentScoreElement.innerText;
//    const currentScore=parseInt(currentScoreText);
const currentScore=getTextElementValueById('current-score');
   const newScore=currentScore+1;
//    // set updated score
 setTextElementValueById('current-score',newScore);
   

    removeBackgroundColorById(expectedAlphabet);
    continueGame();

}
else{
    // const currentLifeElement=document.getElementById('current-life');
    // const initialLifeText=currentLifeElement.innerText;
    // const currentLife=parseInt(initialLifeText);
    const currentLife=getTextElementValueById('current-life');
    const updatedLife=currentLife-1;
    setTextElementValueById('current-life',updatedLife);
    if(updatedLife===0){
       gameOver();
    }
   
}
}
//capture keyboard key pressed
document.addEventListener('keyup',handlekeyboardButtonPress);



    



function continueGame(){
    //generate a random alphabet.
    const alphabet=getARandomAlphabet();
    // console.log('Your random alphabet='+alphabet);
    //set randomly generated alphabet to the screen
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    setBackgroundColorById(alphabet);
   
    

}
function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();
    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
}

function gameOver(){
 hideElementById('play-ground');
 showElementById('final-score');
 //update final score
 //1.get the final score
 const lastScore=getTextElementValueById('current-score');
 setTextElementValueById('last-score',lastScore);
 // clear the last selected alphabet
 const currentAlphabet=getElementTextById('current-alphabet');
 removeBackgroundColorById(currentAlphabet);
}


