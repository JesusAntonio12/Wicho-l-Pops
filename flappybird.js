

let board;
let boardWidth = 1024;
let boardHeight = 640;
let context;
let boardtwo;


let birdWidth = 40; 
let birdHeight = 80;

let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImg;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}



let pipeArray = [];
let pipeWidth = 100; 
let pipeHeight = 400;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;


let velocityX = -4; 
let velocityY = 0; 
let gravity = 0.4;

let gameOver = false;
let score = 0;

const audio = new Audio('./Audio.mp3');
const audio2 = new Audio('./muerte.mp3');
const audio3 = new Audio('./w.mp3');
const audio4 = new Audio('./rojo.mp3');
const audio5 = new Audio('./ansioso.mp3');

let cancion = 0
audio3.play()


window.onload = function(){
    
    
    board = document.getElementById("board");
    board.classList.remove('display2')
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); 

    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload = function() {
        
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
        
    }
    
    

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottompipe.png";

    context.fillStyle = "white";
    context.font="50px sans-serif";
    context.fillText("Wicho'L Pops", 350, 160);
    context.font="20px sans-serif";
    context.strokeStyle = "black"; 
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(320, 220,360,50); 
    context.fillText("Presiona m para empezar", 400, 250);
    context.strokeStyle = "black"; 
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(320, 300,360,50); 
    context.fillText("Presiona 2 para otro nivel", 400, 330);
    context.strokeStyle = "black"; 
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(320, 380,360,50); 
    context.fillText("Presiona 3 para ultimo nivel", 390, 410);
    cancion = 1
    document.addEventListener('keydown', function(event) {  
        if (event.key === 'm') {  
            
            setInterval(placePipes, 1500); 
            document.addEventListener("keydown", moveBird);
            requestAnimationFrame(update);
            audio3.pause()
            
        }  
        if (event.key === '2') {  
            if(gameOver == false){

                nivel2()
            }
            
        } 
        if (event.key === '3') {  
            if(gameOver == false){

                nivel3()
            }
            
        } 
    }); 
    


    
    
    
}

let nivel2 = function(){

    board = document.getElementById("board");
    boardtwo = document.getElementById("boardtwo");
    board.classList.add('display')
    boardthree.classList.add('display')
    boardtwo.classList.remove('display')
    boardtwo.height = 640;
    boardtwo.width = 1024;
    context = boardtwo.getContext("2d"); 

    birdImg = new Image();
    birdImg.src = "./flappybird2.png";
    birdImg.nivel2 = function() {
        context.drawImage(birdImg, birdtwo.x, birdtwo.y, birdtwo.width, birdtwo.height);
        
    }

    



    context.fillStyle = "white";
    context.font="50px sans-serif";
    context.fillText("Wicho'L Pops", 350, 160);
    context.font="20px sans-serif";
    context.strokeStyle = "black"; 
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(320, 220,360,50); 
    context.fillText("Presiona 1 para otro nivel", 400, 250);
    context.strokeStyle = "black"; 
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(320, 300,360,50); 
    context.fillText("Presiona m para empezar", 400, 330);
    context.strokeStyle = "black"; 
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(320, 380,360,50); 
    context.fillText("Presiona 3 para ultimo nivel", 390, 410);
    cancion = 2
    document.addEventListener('keydown', function(event) {  
        if (event.key === '1') {  
            
            if(gameOver == false){
                location.reload(true)
            }
        }  
        if (event.key === '2') {  
            if(gameOver == false){
    
                nivel2()
            }
            
        } 
        if (event.key === '3') {  
            if(gameOver == false){
                cancion = 3
                nivel3()
            }
            
        } 
    }); 
    


    
    
    
}


let nivel3 = function(){

    board = document.getElementById("board");
    boardtwo = document.getElementById("boardtwo");
    boardthree = document.getElementById("boardthree");
    board.classList.add('display')
    boardtwo.classList.add('display')
    boardthree.classList.remove('display')
    boardthree.height = 640;
    boardthree.width = 1024;
    context = boardthree.getContext("2d"); 

    birdImg = new Image();
    birdImg.src = "./flappybird3.png";
    birdImg.nivel3 = function() {
        context.drawImage(birdImg, birdtwo.x, birdtwo.y, birdtwo.width, birdtwo.height);
    }

    



    context.fillStyle = "white";
    context.font="50px sans-serif";
    context.fillText("Wicho'L Pops", 350, 160);
    context.font="20px sans-serif";
    context.strokeStyle = "black"; 
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(320, 220,360,50); 
    context.fillText("Presiona 1 para otro nivel", 400, 250);
    context.strokeStyle = "black"; 
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.strokeRect(320, 300,360,50); 
    context.fillText("Presiona 2 para otro nivel", 400, 330);
    context.strokeStyle = "black"; 
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.fillStyle = "nlack";
    context.strokeRect(320, 380,360,50); 
    context.fillText("Presiona m para empezar", 390, 410);
    cancion = 3
    document.addEventListener('keydown', function(event) {  
        if (event.key === '1') {  
            
            if(gameOver == false){
                location.reload(true)
            }
        }  
        if (event.key === '2') {  
            if(gameOver == false){
                
                nivel2()
            }
            
        } 
        if (event.key === '3') {  
            if(gameOver == false){
                nivel3()
            }
            
        } 
    }); 
    


    
    
    
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);


    velocityY += gravity;

    bird.y = Math.max(bird.y + velocityY, 0); 
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if (bird.y > board.height) {
        gameOver = true;
        if(cancion == 1){
            audio.play()
            audio.pause()
            audio2.play()
            audio3.play()
        }else if(cancion == 2){
            audio4.play()
            audio4.pause()
            audio2.play()
            audio3.play()
        }else if(cancion == 3){
            audio5.play()
            audio5.pause()
            audio2.play()
            audio3.play()
        }
    }


    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5;
            pipe.passed = true;
        }

        if (detectCollision(bird, pipe)) {
            gameOver = true;
           
            
            if(cancion == 1){
                audio.play()
                audio.pause()
                audio2.play()
                audio3.play()
            }else if(cancion == 2){
                audio4.play()
                audio4.pause()
                audio2.play()
                audio3.play()
            }else if(cancion == 3){
                audio5.play()
                audio5.pause()
                audio2.play()
                audio3.play()
            }

            
        }
    }


    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); 
    }

    context.fillStyle = "white";
    context.font="45px sans-serif";
    context.fillText(score, 5, 45);
    if(gameOver){

        context.font="30px sans-serif";
        context.fillText("Pulsa R para reiniciar.", 350, 200);
        document.body.style.backgroundImage = "url('./fondo.jpg')";  

    }


}

function placePipes() {
    if (gameOver) {
        return;
        
    }


    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
    let openingSpace = board.height/4;

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(topPipe);

    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(bottomPipe);
}
let j = 0;
function moveBird(e) {
    
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
            
        velocityY = -6;
        
        
        
    }else{
        if(e.code == "KeyR"){
            if (gameOver) {
                bird.y = birdY;
                pipeArray = [];
                score = 0;
                
                gameOver = false;
                location.reload(true)
                
            }
        }
    }
    if(j == 0){
        if(cancion == 1){
            console.log(cancion)
            audio.play()
            j = j + 1
        }else if(cancion == 2){
            console.log(cancion)
            audio4.play()
            j = j + 1
        }else if(cancion == 3){
            audio5.play()
            j = j + 1
        }

        
        
    }
    
    
}

function detectCollision(a, b) {
    
    return a.x < b.x + b.width &&   
           a.x + a.width > b.x &&   
           a.y < b.y + b.height &&  
           a.y + a.height > b.y;   
    
           
}