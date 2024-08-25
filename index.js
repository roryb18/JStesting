function startBuzzFizz(){
    let answer = parseInt(prompt('Please enter the number you would like to BuzzFizz up to:'));

    let resultsDiv = document.getElementById('results');

    let results = '';

    for (let i = 1; i <= answer; i++){
        if (i % 3 === 0 && i % 5 === 0){
            results += 'FizzBuzz, ';
        }else if(i % 3 === 0){
            results += 'Fizz, ';
        }else if(i % 5 === 0){
            results += 'Buzz, ';
        }else{
            results += i +", ";
        }
    }

    resultsDiv.textContent = results;
}

document.getElementById('startButton').addEventListener('click', startBuzzFizz);


