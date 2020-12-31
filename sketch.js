var ball;
var database,position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var locofchild=database.ref("ball/position");
    locofchild.on("value",readop,showerr);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    })
   
}
function readop(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;

}
function showerr(){
    console.log("error")
}