class stone{
    constructor(x, y, width, height) {
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
    push()    
    
    var pos =this.body.position;
    imageMode(CENTER)
    image(pos.x,pos.y,100,100)
  pop()
      }
}