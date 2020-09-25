//pink dango
let circleX1 = 600;
let circleY1 = 100;
let dangoColor1 = '#f5b0c6';

//yellow dango
let circleX2 = 550;
let circleY2 = 175;
let dangoColor2 = '#fdea7d';

//green dango
let circleX3 = 500;
let circleY3 = 250;
let dangoColor3 = '#81ff8f';

//expressions
let faceColor = '#382e2e';

//toggle colors
let toggleColors = true;

let fireworksBg;
let festivalAudio;

function preload() {
    fireworksBg = loadImage("https:jhoangmuzic.github.io/jhoang_Assignment1-VisualItem/fireworks.png");
    festivalAudio = createAudio("https:jhoangmuzic.github.io/jhoang_Assignment1-VisualItem/Beautiful%20Japanese%20Music%20-%20Japanese%20Festival.mp3");
}

function setup() {
    createCanvas(755, 450);
    festivalAudio.autoplay(true);
}

function draw() {
    background("#cdfcff");
    image(fireworksBg, 0, 0, 755, 465);
    noStroke();
    allText();
    dangoShadow();

    rectMode(RADIUS);

    //pink dango
    fill(dangoColor1);
    circle(circleX1, circleY1, 100);
    fill(faceColor);
    circle(573, 80, 10);
    circle(604, 94, 10);
    arc(585, 92, 18, 18, .12, PI + QUARTER_PI, CHORD); //435

    //yellow dango
    fill(dangoColor2);
    circle(circleX2, circleY2, 100);
    fill(faceColor);
    circle(515, 166, 10);
    circle(543, 179, 10);
    arc(525, 180, 18, 18, .10, PI + QUARTER_PI, CHORD); //375

    //green dango
    fill(dangoColor3);
    circle(circleX3, circleY3, 100);
    fill(faceColor)
    circle(475, 225, 10);
    circle(500, 235, 10);
    arc(483, 239, 18, 18, .05, PI + QUARTER_PI, CHORD); //333

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

function keyTyped() {
    if (key === 'n') {
        background("black");

    } else if (key === 'm') {
        background("#cdfcff");
    }

}

function allText() {
    textStyle(BOLD);
    fill("#ffd111");
    textSize(18);
    textFont('Georgia');
    text("Click Me!", 660, 100); //pink dango
    text("Or Me!", 615, 180); //yellow dango
    text("Or Me!", 565, 250); //green dango
    textSize(48);
    text("Happy New Year!",30,435);
}

function dangoShadow() {
    fill("#00265a");
    circle(603, 110, 100);
    circle(554, 185, 100);
    circle(504, 260, 100);
    stroke("#00265a");
    line(480, 290, 410, 385);
    noStroke();
}

function stick() {
    stroke("#d17b00");
    strokeWeight(10);
    line(480, 280, 410, 375);
}
