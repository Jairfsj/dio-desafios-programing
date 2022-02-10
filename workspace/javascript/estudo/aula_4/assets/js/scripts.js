var gamer1 = 1;
var gamer2 = 0;
var placar;


//if ternário
gamer1 != -1 &&  gamer2 != -1 ? console.log('Os gamers são validos') : console.log('Gamers Invalidos');

//If
if(gamer1 > 0 && gamer2 == 0) {
    console.log('Gamer 1 marcou ponto!');
    placar = gamer1 > gamer2;
} 

//ElseIf
else if (gamer2 > 0 && gamer1 == 0 ) {
    console.log('Gamer2 marcou ponto!');
    placar = gamer2 > gamer2;
}

//Else
else {
    console.log('Ninguêm marcou ponto!');
}

