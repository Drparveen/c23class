class Cannon{

constuctor(x,y,width,height,angle){
this.x=x;
this.y=y;
this.width=width;
this.height=height;


}
display(){
    fill ("brown")
    push ()
    translate (150,60)
    rotate (PI/4)
    rect(150,10,20,70)
    pop()
    arc (160,270,140,200,PI,TWO_PI)
   
}

}