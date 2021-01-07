const deg = 6;
const hrs = document.querySelector('#hr');
const mns = document.querySelector('#mn');
const scs = document.querySelector('#sc');


function setup() {
  createCanvas(800,800);
}

function draw() {
  background("#091921");

  textSize(35);
  fill("white");
  text("Full Javascript", 290, 150);

  translate(400,400);
  rotate(-90);




  setInterval(() =>{

    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();
  
    hrs.style.transform = `rotateZ(${(hh*30)+(deg*mm/12)}deg)`;
    mns.style.transform = `rotateZ(${mm*deg}deg)`;
    scs.style.transform = `rotateZ(${ss*deg}deg)`;

  })

  //translate(400,400);

  var hr = hour();
  var mn = minute();
  var sc = second();

  strokeWeight(8);
  stroke(255,100,150);
  noFill();

  var end1 = map(sc,0,60,0,360);
  arc(0, 0, 400,400,0, end1);

  push();
  strokeWeight(1);
  rotate(end1);
  line(0,0,100,0);
  pop();


  stroke(150,100,255);
  var end2 = map(mn,0,60,0,360);
  arc(0, 0, 370,370,0, end2);

  push();
  strokeWeight(2);
  rotate(end2);
  line(0,0,90,0);
  pop();

  stroke(150,255,100);
  var end3 = map(hr % 12,0,24,0,360);
  arc(0, 0, 340,340,0, end3);

  push();
  strokeWeight(3);
  rotate(end3);
  line(0,0,80,0);
  pop();

}
