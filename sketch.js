const engine=Matter.Engine
const world=Matter.World
const Bodies=Matter.Bodies
var en,wo
var particles=[]
var plinkos=[]
var rectangles=[]
var score=0
var plinko
var particle
var count=0
//var gamestate="play"
var gamestate="start"

function setup() {
  createCanvas(800,400);
en=engine.create()
wo=en.world

for(var i=50;i<800;i=i+50){
plinkos.push(new Plinko(i,150))
}
for(var i=50;i<800;i=i+50){
  plinkos.push(new Plinko(i,250))
  }
var options={
  isStatic:true,
  density:0.5,
  restitution:0.6,
  friction:0.5
}
g=Bodies.rectangle(400,380,800,30,options)
world.add(wo,g)
for(var b=50;b<800;b=b+100){
rectangles.push(new Rectangle(b,350))
}

}


function draw() {
  background("maroon");  
  engine.update(en)
 
  for(var k=0;k<plinkos.length;k++){
plinkos[k].display()
  }
  for(var a=0;a<plinkos.length;a++){
    plinkos[a].display()
      }
      rect(g.position.x,g.position.y,800,30)

for(var o=0;o<rectangles.length;o++){
rectangles[o].display()
}
 // particle1.display()
 c = color('rgb(0,0,255)'); 
 fill(c);
plinko=createElement("h2")
plinko.html("Plinko")
plinko.position(400,30)

if(gamestate==="play"){
  if(frameCount % 60===0){
    particles.push(new Particle(random(50,750),10))
      }
      for(var j=0;j<particles.length;j++){
    particles[j].display()
      }
if(particle!==null){
  particle.display()
  if(particle.body.position.y>760){
    if(particle.body.position.x<300){
      count=count+500
      particle=null
    }
    else if(particle.body.position.x<600 && particle.body.position.x>200){
      count=count+200
      particle=null
    }
else if(particle.body.position.x<80 && particle.body.position.y>234){
  count=count+200
}
  }

  
}


}
  drawSprites();
  fill("yellow")
  text("score: "+count,400,50)
  
  fill("yellow")
  textSize(15)
  text("500",90,270)

  fill("yellow")
  text("500 ",190,270)
  
  fill("yellow")
  text("100",290,270)

  fill("yellow")
  text("100",390,270)

  fill("yellow")
  text("200",490,270)
  
  fill("yellow")
  text("200",590,270)
  
  fill("yellow")
  text("500",690,270)
 
  //text(mouseX+","+mouseY,mouseX,mouseY)
}
// function keys(){
  //gamestate="play"
  //count++

  // particle=new Particle(mouseX,10,10,10)
  // }
  // if(particle===null){
  //   particle.display()
  //   if(particle.body.position.y>730){

  //   }
  //   if(particle.body.position.x<300){
  //     score=score+500
  //     particle=null
  //     if(count>05){
  //       gamestate="end"
  //     }
  //   }
  // }
function mouseDragged(){
  count++
  particle=new Particle(mouseX,10,10,10)
  gamestate="play"
  

}