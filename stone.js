class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1,
            density:1.2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("stone.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}