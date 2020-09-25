//pink dango
let circleX1 = 450;
let circleY1 = 100;
let dangoColor1 = '#f5b0c6';

//yellow dango
let circleX2 = 400;
let circleY2 = 175;
let dangoColor2 = '#fdea7d';

//green dango
let circleX3 = 350;
let circleY3 = 250;
let dangoColor3 = '#81ff8f';

//expressions
let faceColor = '#382e2e';

//toggle colors
let toggleColors = true;

let fireworksBg;

function preload(){
    fireworksBg=loadImage("https:jhoangmuzic.github.io/jhoang_Assignment1-VisualItem/fireworks.png");
}

function setup() {
    createCanvas(600, 450);
}

function draw() {
    background("#cdfcff");
    image(fireworksBg,0,0, 800,500);
    noStroke();
    clickText();
    dangoShadow();

    rectMode(RADIUS);

    //pink dango
    fill(dangoColor1);
    circle(circleX1, circleY1, 100);
    fill(faceColor);
    circle(423, 80, 10);
    circle(454, 94, 10);
    arc(435, 92, 18, 18, .12, PI + QUARTER_PI, CHORD);

    //yellow dango
    fill(dangoColor2);
    circle(circleX2, circleY2, 100);
    fill(faceColor);
    circle(365, 166, 10);
    circle(393, 179, 10);
    arc(375, 180, 18, 18, .10, PI + QUARTER_PI, CHORD);

    //green dango
    fill(dangoColor3);
    circle(circleX3, circleY3, 100);
    fill(faceColor)
    circle(325, 225, 10);
    circle(350, 235, 10);
    arc(333, 239, 18, 18, .05, PI + QUARTER_PI, CHORD);

    stick();

}

function mousePressed() {
    //pink dango
    if (mouseX > circleX1 - 50 && mouseX < circleX1 + 50) {
        if (mouseY > circleY1 - 50 && mouseY < circleY1 + 50) {
            if (toggleColors === true) {
                dangoColor1 = '#BA0000';
                toggleColors = false;
            } else {
                dangoColor1 = "#f5b0c6";
                toggleColors = true;
            }
        }
    }

    //yellow dango
    if (mouseX > circleX2 - 50 && mouseX < circleX2 + 50) {
        if (mouseY > circleY2 - 50 && mouseY < circleY2 + 50) {
            if (toggleColors === true) {
                dangoColor2 = '#ffd111';
                toggleColors = false;
            } else {
                dangoColor2 = '#fdea7d';
                toggleColors = true;
            }
        }
    }

    //green dango
    if (mouseX > circleX3 - 50 && mouseX < circleX3 + 50) {
        if (mouseY > circleY3 - 50 && mouseY < circleY3 + 50) {
            if (toggleColors === true) {
                dangoColor3 = '#308050';
                toggleColors = false;
            } else {
                dangoColor3 = '#81ff8f';
                toggleColors = true;
            }
        }
    }
}

function keyTyped(){
    if(key === 'n'){
        background("black");
        
    } else if (key === 'm'){
        background("#cdfcff");
    }
    
}

function clickText() {
    fill("#00d1fc");
    textSize(24);
    textFont('Georgia');
    text("Click Me!", 285, 90); //pink dango
    text("Or Me!", 465, 215); //yellow dango
    text("Or Me!", 205, 260); //green dango
}

function dangoShadow() {
    fill("#84efff");
    circle(457, 112, 100);
    circle(407, 187, 100);
    circle(357, 262, 100);
    stroke("#84efff");
    line(333, 292, 263, 387);
    noStroke();
}

function stick() {
    stroke("#ffe299");
    strokeWeight(10);
    line(330, 280, 260, 375);
}
