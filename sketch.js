var Counter =100;
var StepSize = 5;
var Sign = 1;
var Cx, Cy; 
var running=true
var button

function setup() {
	createCanvas(600, 600);
	Cx = width/2;
	Cy = height/2;
 button=createButton("Freeze")
 button.position (Cx,Cy)
 button.size (100,100)
 button.mousePressed (Freeze)
}

function draw() {
	background (90, 250, 100);
	if(running){
	Counter = Counter + Sign* StepSize;
	}
		if (Counter > width){   //If statement 
		Counter = width
		Sign = Sign*-1
	}
	if ((Counter > width)  || (Counter < 0) ) {   //If 3  statement with and OR
		Sign = Sign*-1
	}
	BarryBBenson(Counter,Cy);
	BarryBBenson(Cy,Counter);
	BarryBBenson(Counter,Counter)
	BarryBBenson(width-Counter,width-Counter)
	BarryBBenson(width-Cy,width-Counter)
	BarryBBenson(width-Counter,width-Cy)
	BarryBBenson (width-Counter,Counter)
	BarryBBenson(Counter,width-Counter)
  }
function Freeze(){
	running=!running;
}
function BarryBBenson(X,Y) {
	//wings
	fill(80,210,180)
	stroke(80,210,180)
	ellipse(X-50,Y-20,80,50)
	ellipse(X+50,Y-20,80,50)
	//body
	fill(250,250,0)
	stroke(250,250,0)
	ellipse(X, Y, 80, 100);
	//stripes
	fill(0)
	stroke(0)
	rect(X-30.5,Y-26,60,16)
	rect(X-35,Y,70,16)
	rect(X-25,Y+26,50,16)
	//white eyeball
	fill(255)
	stroke(255)
	ellipse(X+12,Y-38,15,15)
	ellipse(X-12,Y-38,15,15)
	//black pupil
	fill(0)
	stroke(0)
	ellipse(X+12,Y-38,8,8)
	ellipse(X-12,Y-38,8,8) 
}
