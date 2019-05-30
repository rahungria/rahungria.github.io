var usedNums = new Array(76);

var Frases = ["Arrei",
"Estamos com cronograma em dia",
"Posso dormir em Paz?",
"Encostou em algum aluno",
"Está tendo aula aí do lado",
"Vocês estão bem?",
"Vou falar mais baixo",
"Mencionou que sabemos C",
"Estou falando muito alto?",
"Vocês estão entendendo?",
"Ha-Haaaa!",
"Deu duas voltas na duas primeiras fileiras", 
"Precisam de mais tempo pessoal?", 
"Rapha viu stream ou video na aula", 
"Foi perguntar o nome do aluno na carteira", 
"questionou a classe 3 vezes ou mais", 
"Libório tirou dúvida e questionou o professor", 
"Mencionou o livro do Cormen", 
"Um passarinho me contou...", 
"Presta atenção que é a parte mais importante da aula"];

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
		newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = Frases[getFrasesIndex()];
}

function getNewNum() {
	return Math.floor(Math.random() * 75);
}

function getFrasesIndex(){
	return Math.floor(Math.random() * Frases.length);
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}