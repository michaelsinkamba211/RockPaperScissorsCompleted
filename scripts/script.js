let finalComputerMove = '';

        var computer_move = '';

        function computerMove(){
            const move = Math.random();
            if(move >= 0 && move <= 0.3) {

                computer_move = document.querySelector('.computer-move').innerHTML = 'rock';
                finalComputerMove = computer_move;

            } else if(move > 0.3 && move <= 0.6) {

                computer_move = document.querySelector('.computer-move').innerHTML= 'paper';
                finalComputerMove = computer_move;

            } else if(move > 0.6 && move <= 1) {

                computer_move = document.querySelector('.computer-move').innerHTML= 'scissors';
                finalComputerMove = computer_move;

            }
        }

        // computer move done

        // now we record persons move

        var player_move = '';

        let finalPersonMove = '';

        // get images



        function personsMove(opt){

            if(opt === 'rock'){
                player_move = document.querySelector('.player-move').innerHTML = 'rock';
                finalPersonMove = player_move;

            } else if(opt === 'paper'){
                player_move = document.querySelector('.player-move').innerHTML = 'paper';
                finalPersonMove = player_move;

            } else if(opt === 'scissors'){
                player_move =document.querySelector('.player-move').innerHTML = 'scissors';
                finalPersonMove = player_move;

            }
        }


        // function reset scores
        function resetScores(){
            scores.wins = 0;
            scores.looses = 0;
            scores.ties = 0;

            updateScores();

        localStorage.removeItem(scores);

        }

        var finalResults = '';

        function updateScores(){
            // document.querySelector('.scores').innerHTML = 'scores have been reset' + '<br>' + 
            // 'Wins: ' + scores.wins+ ' Looses: ' + scores.looses + '  Ties: ' + scores.ties;
            finalResults ='Scores reset ' + ' Wins: ' + scores.wins+ ' Looses: ' + scores.looses + '  Ties: ' + scores.ties;

            document.querySelector('.total_scores').innerHTML = finalResults;

            
        }


        //retrieving scores from localStorage

        let resultScores = localStorage.getItem('scores');

        // convert back to read
        let scores = JSON.parse(resultScores) || {
                wins : 0,
                looses : 0,
                ties : 0
            }
        var result = '';

        function compareMoves(){
            
            if(finalComputerMove ===  finalPersonMove ){
                scores.ties+=1;
                result = 'Its a Tie';
            } else if(finalComputerMove === 'paper' && finalPersonMove === 'rock'){
                scores.looses+=1;
                result = 'you loose';
            } else if(finalComputerMove === 'scissors' && finalPersonMove === 'rock'){
                scores.wins+=1;
                result = 'You Win!';
            }
            else if(finalComputerMove === 'paper' && finalPersonMove === 'scissors'){
                scores.wins+=1;
                result = 'You Win!';
            } else if(finalComputerMove === 'rock' && finalPersonMove === 'scissors'){
                scores.looses+=1;
                result = 'You Loose!';
            }  else if(finalComputerMove === 'rock' && finalPersonMove === 'paper'){
                scores.wins+=1;
                result = 'You Win!';
            } else if(finalComputerMove === 'scissors' && finalPersonMove === 'paper'){
                scores.looses+=1;
                result = 'You Loose!';
            }


            localStorage.setItem('scores', JSON.stringify(scores));

            updateResults();
        }


        function updateResults(){
            let endResult =result;
            let resultsCheck = 'Computer: ' + finalComputerMove + '<br>' + 'You: ' + finalPersonMove;


            let scoress = 'Wins: ' + scores.wins+ ' Looses: ' + scores.looses + '  Ties: ' + scores.ties;
            
            // document.querySelector('.scores').innerHTML = endResult +'<br>' + resultsCheck +'<br>' + scoress; 

            document.querySelector('.records').innerHTML = scoress;

            // let endResult = result;
            document.querySelector('.total_scores').innerHTML = endResult;
        }
