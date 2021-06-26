class Stone{
	constructor(x,y,r)
	{
		var options = {restetution:0.3, friction:5, density:1}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
            ellipse(0,0,this.r,this.r);
			pop()
	}

}