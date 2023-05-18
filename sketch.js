let angulo=0.0;
let radioMayor=5;
let x=radioMayor;
let x1=radioMayor;
let velocidad=5;
let direccion=-1;
let g=0;
let b=255;
let r=0;
let celesteNegativo;
let verdeClaritoNegativo;
let verdeGrisaseoNegativo;
let verdeOscuroNegativo;
let naranjaNegativo;
let celesteOscuroNegativo;
let azulClaritoNegativo;
let moradoNegativo;
let cremaNegativo;
let celesteClaritoNegativo;
let violetaAzuladoNegativo;
let grisNegativo;
let grisClaritoNegativo;
let azulNegativo;
let violetaNegativo;
let violetaClarito;
let lilaNegativo;
let rosaNegativo;
let primerFondo;
let segundoFondo;
let tercerFondo;
let cuartoFondo;


function setup() {
  createCanvas(1000, 1000);
  strokeWeight(0.5);
  fill(0, 80, 75);
  quad(0,0,0,500,500,500,500,0);
  fill(41,51,71);
  quad(500,0,500,500,1000,500,1000,0);
  fill(187,176,177);
  quad(0,500,0,1000,500,1000,500,500);
  fill(105,87,109);
  quad(500,500,500,1000,1000,1000,1000,500);
  
  //primer cuadrado
  fill(1,75,67 );
  beginShape();
  vertex(205,15);
  vertex(10,150);
  vertex(85,190);
  vertex(380,90);
  vertex(440,37);
  endShape(CLOSE);
  
  fill(35, 47, 44);
  quad (10,150,100,350,205,450,85,190);
  
  fill(	38, 66, 67);
  triangle(205,450,245,475,335,415);
  
  fill(	92, 160, 167);
  quad(440,37,380,90,335,415,475,280);
  
  fill(19,19,19);
  quad(85,190,205,450,335,415,380,90);
  
  stroke(255, 153, 68);
  strokeWeight(1);
  line(85,190,205,450);
  
  strokeWeight(2);
  line(205,450,335,415);
  
  strokeWeight(3)
  line(335,415,380,90);
  
  strokeWeight(1);
  line(380,90,85,190);
  
  stroke(39,68,71);
  strokeWeight(1);
  line(205,15,250,133);
  
  stroke(18, 64, 60);
  line(245,475,235,445);
  
  //segundo cuadrado
  noStroke();
  fill(	38, 35, 53);
  quad(888,140,715,225,755,445,975,350);
  
  fill(	53, 71, 91,175);
  quad(725,7.5,520,175,540,395,780,225);
  
  fill(	79, 111, 145,70);
  quad(745,130,540,275,735,345,925,235);
  
  noFill();
  stroke(0);
  strokeWeight(0.3);
  line(540,395,755,445);
  line(725,0.7,888,140);
  
  strokeWeight(1);
  quad(780,50,575,190,675,430,880,315);
  
  stroke(214, 218, 214);
  quad(825,75,655,235,645,420,920,320);
  quad(650,70,605,350,865,395,865,155);
  
  //tercer cuadraddo
  stroke(0);
  strokeWeight(1);
  fill(	235, 224, 200);
  quad(235,515,230,740,253,755,485,615);
  
  fill(	192, 199, 208);
  triangle(253,755,425,860,485,615);
  
  fill(	164, 166, 164);
  triangle(45,850,220,995,215,750);
  
  fill(184, 185, 203);
  quad(230,740,215,750,220,995,425,860);
  
  noFill()
  stroke(46, 45, 136);
  quad(375,570,90,675,150,935,360,820);
  
  fill(97, 102, 101);
  quad(235,515,15,615,45,850,230,740);
  
  noFill()
  stroke(0)
  strokeWeight(0.7)
  quad(110,570,140,795,285,950,390,675);
  
  stroke(255)
  quad(234,580,35,760,220,950,450,755);
  
  stroke(0)
  strokeWeight(0.7)
  line(245,510,5,620);
  line(15,605,45,850);
  line(5,605,220,780);
  line(220,995,215,780);
  line(205,785,485,615);
  line(230,740,35,855);
  line(220,995,35,840);
  line(485,615,225,510);
  
  //cuarto cuadrado
  fill(	143, 125, 165);
  beginShape();
  vertex(655,515);
  vertex(525,705);
  vertex(555,950);
  vertex(625,860);
  vertex(685,575);
  endShape(CLOSE);
  
  fill(123, 89, 134);
  beginShape();
  vertex(655,515);
  vertex(685,575);
  vertex(910,750);
  vertex(990,770);
  vertex(860,600);
  endShape(CLOSE);
  
  fill(161, 147, 191);
  beginShape();
  vertex(625,860);
  vertex(555,950);
  vertex(819,980);
  vertex(990,770);
  vertex(910,750);
  endShape(CLOSE);
  
  fill(	19,19,19);
  triangle(685,575,625,860,910,750);
  
  stroke(238, 107, 139);
  strokeWeight(3);
  line(685,575,625,860);
  line(625,860,910,750);
  line(910,750,685,575);
  
  stroke(37, 109, 141);
  strokeWeight(1);
  line(525,705,645,750);
  line(819,980,750,815);
  
  
}

function draw() {
   //primer cuadrado negativo
  celesteNegativo = color(208, 149, 143);
  verdeClaritoNegativo = color(222, 200, 203);
  verdeGrisaseoNegativo = color(218, 206, 206);
  verdeOscuroNegativo = color(214, 192, 195);
  naranjaNegativo = color(118, 169, 172);
  primerFondo = color(209, 162, 170);

  //segundo cuadrado negtivo
  celesteOscuroNegativo = color(202, 189, 172, 175);
  azulClaritoNegativo = color(202, 184, 164, 70);
  moradoNegativo = color(229, 225, 222);
  segundoFondo = color(201, 199, 187);

  //tercer cuadrado negativo
  cremaNegativo = color(55, 71, 87);
  celesteClaritoNegativo = color(52, 56, 55);
  violetaAzuladoNegativo = color(69, 75, 65);
  grisNegativo = color(101, 102, 94);
  grisClaritoNegativo = color(56, 61, 55);
  azulNegativo = color(47, 51, 50);
  tercerFondo = color(53, 58, 52);

  //cuarto cuadrado negativo
  violetaNegativo = color(130, 150, 97);
  violetaClaritoNegativo = color(121, 143, 97);
  lilaNegativo = color(117, 123, 79);
  rosaNegativo = color(97, 152, 121);
  cuartoFondo = color(138, 152, 117);
  
  if((mouseX>800 && mouseX<1000) || (mouseX<200 && mouseX>0) || (mouseY>800 && mouseY<1000) || (mouseY<200 && mouseY>0)){
  strokeWeight(0.5);
  fill(primerFondo);
  quad(0, 0, 0, 500, 500, 500, 500, 0);
  fill(segundoFondo);
  quad(500, 0, 500, 500, 1000, 500, 1000, 0);
  fill(tercerFondo);
  quad(0, 500, 0, 1000, 500, 1000, 500, 500);
  fill(cuartoFondo);
  quad(500, 500, 500, 1000, 1000, 1000, 1000, 500);
 
    //primer cuadrado
  fill(verdeClaritoNegativo);
  beginShape();
  vertex(205, 15);
  vertex(10, 150);
  vertex(85, 190);
  vertex(380, 90);
  vertex(440, 37);
  endShape(CLOSE);

  fill(verdeGrisaseoNegativo);
  quad(10, 150, 100, 350, 205, 450, 85, 190);

  fill(verdeOscuroNegativo);
  triangle(205, 450, 245, 475, 335, 415);

  fill(celesteNegativo);
  quad(440, 37, 380, 90, 335, 415, 475, 280);
   
  fill(214, 218, 214);
  quad(85,190,205,450,335,415,380,90);

  stroke(naranjaNegativo);
  strokeWeight(1);
  line(85, 190, 205, 450);

  strokeWeight(2);
  line(205, 450, 335, 415);

  strokeWeight(3);
  line(335, 415, 380, 90);

  strokeWeight(1);
  line(380, 90, 85, 190);

  //segundo cuadrado
  noStroke();
  fill(moradoNegativo);
  quad(888, 140, 715, 225, 755, 445, 975, 350);

  fill(celesteOscuroNegativo);
  quad(725, 7.5, 520, 175, 540, 395, 780, 225);

  fill(azulClaritoNegativo);
  quad(745, 130, 540, 275, 735, 345, 925, 235);

  noFill();
  stroke(214, 218, 214);
  strokeWeight(0.3);
  line(540, 395, 755, 445);
  line(725, 0.7, 888, 140);

  strokeWeight(1);
  quad(780, 50, 575, 190, 675, 430, 880, 315);

  stroke(19, 19, 19);
  quad(825, 75, 655, 235, 645, 420, 920, 320);
  quad(650, 70, 605, 350, 865, 395, 865, 155);
    
   
  //tercer cuadrado
  stroke(214, 218, 214);
  strokeWeight(1);
  fill(cremaNegativo);
  quad(235, 515, 230, 740, 253, 755, 485, 615);

  fill(grisClaritoNegativo);
  triangle(253, 755, 425, 860, 485, 615);

  fill(violetaAzuladoNegativo);
  triangle(45, 850, 220, 995, 215, 750);

  fill(celesteClaritoNegativo);
  quad(230, 740, 215, 750, 220, 995, 425, 860);

  noFill();
  stroke(azulNegativo);
  quad(375, 570, 90, 675, 150, 935, 360, 820);

  fill(grisNegativo);
  quad(235, 515, 15, 615, 45, 850, 230, 740);

  noFill();
  stroke(214, 218, 214);
  strokeWeight(0.7);
  quad(110, 570, 140, 795, 285, 950, 390, 675);

  stroke(19, 19, 19);
  quad(234, 580, 35, 760, 220, 950, 450, 755);

  stroke(214, 218, 214);
  strokeWeight(0.7);
  line(245, 510, 5, 620);
  line(15, 605, 45, 850);
  line(5, 605, 220, 780);
  line(220, 995, 215, 780);
  line(205, 785, 485, 615);
  line(230, 740, 35, 855);
  line(220, 995, 35, 840);
  line(485, 615, 225, 510);

  //cuarto cuadrado
  fill(violetaClaritoNegativo);
  beginShape();
  vertex(655, 515);
  vertex(525, 705);
  vertex(555, 950);
  vertex(625, 860);
  vertex(685, 575);
  endShape(CLOSE);

  fill(violetaNegativo);
  beginShape();
  vertex(655, 515);
  vertex(685, 575);
  vertex(910, 750);
  vertex(990, 770);
  vertex(860, 600);
  endShape(CLOSE);

  fill(lilaNegativo);
  beginShape();
  vertex(625, 860);
  vertex(555, 950);
  vertex(819, 980);
  vertex(990, 770);
  vertex(910, 750);
  endShape(CLOSE);

  stroke(rosaNegativo);
  strokeWeight(3);
  line(685, 575, 625, 860);
  line(625, 860, 910, 750);
  line(910, 750, 685, 575);

  stroke(214, 218, 214);
  strokeWeight(1);
  line(525, 705, 645, 750);
  line(819, 980, 750, 815);
    
  fill(214, 218, 214);
  triangle(685,575,625,860,910,750);
 
  }
  else{
  clear();
  strokeWeight(0.5);
  fill(0, 80, 75);
  quad(0,0,0,500,500,500,500,0);
  fill(41,51,71);
  quad(500,0,500,500,1000,500,1000,0);
  fill(187,176,177);
  quad(0,500,0,1000,500,1000,500,500);
  fill(105,87,109);
  quad(500,500,500,1000,1000,1000,1000,500);
  
  //segundo cuadrado
  noStroke();
  fill(	38, 35, 53);
  quad(888,140,715,225,755,445,975,350);
  
  fill(	53, 71, 91,175);
  quad(725,7.5,520,175,540,395,780,225);
  
  fill(	79, 111, 145,70);
  quad(745,130,540,275,735,345,925,235);
  
  noFill();
  stroke(0);
  strokeWeight(0.3);
  line(540,395,755,445);
  line(725,0.7,888,140);
  
  strokeWeight(1);
  quad(780,50,575,190,675,430,880,315);
  
  stroke(	214, 218, 214);
  quad(825,75,655,235,645,420,920,320);
  quad(650,70,605,350,865,395,865,155);
  
  //primer cuadrado
  fill(1,75,67 );
  beginShape();
  vertex(205,15);
  vertex(10,150);
  vertex(85,190);
  vertex(380,90);
  vertex(440,37);
  endShape(CLOSE);
  
  fill(35, 47, 44);
  quad (10,150,100,350,205,450,85,190);
  
  fill(	38, 66, 67);
  triangle(205,450,245,475,335,415);
  
  fill(	92, 160, 167);
  quad(440,37,380,90,335,415,475,280);
  
  push();
  translate(x,height/500);
  var valorSeno = sin(angulo);
   var g = map(valorSeno, -1, 1, 0, 255);
    fill(0,g,150);
  quad(85,190,205,450,335,415,380,90);
   angulo += 0.5;
  pop();
  x+=velocidad;
  if(x>width-radioMayor){
    x=-radioMayor;
  }
  stroke(255, 153, 68);
  strokeWeight(1);
  line(85,190,205,450);
  
  strokeWeight(2);
  line(205,450,335,415);
  
  strokeWeight(3)
  line(335,415,380,90);
  
  strokeWeight(1);
  line(380,90,85,190);
  
  stroke(39,68,71);
  strokeWeight(1);
  line(205,15,250,133);
  
  stroke(18, 64, 60);
  line(245,475,235,445);
  
  
  //tercer cuadraddo
  stroke(0);
  strokeWeight(1);
  fill(	235, 224, 200);
  quad(235,515,230,740,253,755,485,615);
  
  fill(	192, 199, 208);
  triangle(253,755,425,860,485,615);
  
  fill(	164, 166, 164);
  triangle(45,850,220,995,215,750);
  
  fill(184, 185, 203);
  quad(230,740,215,750,220,995,425,860);
  
  noFill()
  stroke(46, 45, 136);
  quad(375,570,90,675,150,935,360,820);
  
  fill(97, 102, 101);
  quad(235,515,15,615,45,850,230,740);
  
  noFill()
  stroke(0)
  strokeWeight(0.7)
  quad(110,570,140,795,285,950,390,675);
  
  stroke(255)
  quad(234,580,35,760,220,950,450,755);
  
  stroke(0)
  strokeWeight(0.7)
  line(245,510,5,620);
  line(15,605,45,850);
  line(5,605,220,780);
  line(220,995,215,780);
  line(205,785,485,615);
  line(230,740,35,855);
  line(220,995,35,840);
  line(485,615,225,510);
  
  //cuarto cuadrado
  fill(	143, 125, 165);
  beginShape();
  vertex(655,515);
  vertex(525,705);
  vertex(555,950);
  vertex(625,860);
  vertex(685,575);
  endShape(CLOSE);
  
  fill(123, 89, 134);
  beginShape();
  vertex(655,515);
  vertex(685,575);
  vertex(910,750);
  vertex(990,770);
  vertex(860,600);
  endShape(CLOSE);
  
  fill(161, 147, 191);
  beginShape();
  vertex(625,860);
  vertex(555,950);
  vertex(819,980);
  vertex(990,770);
  vertex(910,750);
  endShape(CLOSE);

  stroke(238, 107, 139);
  strokeWeight(3);
  line(685,575,625,860);
  line(625,860,910,750);
  line(910,750,685,575);
  
  stroke(37, 109, 141);
  strokeWeight(1);
  line(525,705,645,750);
  line(819,980,750,815);
  
  push();
  translate(x1,height/500);
  valorSeno = sin(angulo);
   var r = map(valorSeno, -1, 1, 255,0 );
   fill(150,g,150);
   triangle(685,575,625,860,910,750);
   angulo += 0.5;
  pop();
  x1+=velocidad*direccion;
  if((x1>width-radioMayor) ||(x < radioMayor)){
    x1=-radioMayor;
  }
  }
  
}
