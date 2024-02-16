// function play(){
//     //step1:hidding the home screen . to add hidden class to the home section
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //step:showing the playground
//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

// }

function continueGame(){
    //generate a random alphabet.
    const alphabet=getARandomAlphabet();
    console.log('Your random alphabet='+alphabet);
    //set randomly generated alphabet to the screen
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    setBackgroundColorById(alphabet);
    

}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
    
}

