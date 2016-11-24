var svg = function() {
    this.element = d3.select('svg');
    this.allowRectangle = false;
    this.allowCircle = false;
    this.allowAnimate = false;

    this.randomColor = function()
    {
        var color = 'rgb(' + this.random(0, 255);
        color += ', '+ this.random(0, 255) +', ';
        color += this.random(0, 255) +')';
        return color;
    }

    this.random = function(a, b)
    {
        return Math.round( Math.random() * b + a);
    }

    this.appendCircle = function(cx, cy, r, color) {
        this.element
            .append('circle')
            .attr('cx', cx)
            .attr('cy', cy)
            .attr('r', r)
            .style('fill', color);
    }

    this.randomCircle = function() {
        this.appendCircle(this.random(0, 400), this.random(0, 600), this.random(0, 20), this.randomColor());
    };

    this.appendRectangle = function(x, y, width, height, color) {
        this.element
            .append('rect')
            .attr('x', x)
            .attr('y', y)
            .attr('width', width)
            .attr('height', height)
            .style('fill', color)
        ;
    }

    this.randomRectangle = function() {
        this.appendRectangle(this.random(0, 400), this.random(0, 600), this.random(0, 30), this.random(0, 30), this.randomColor());
    }

    this.generate = function(number){
        var self = this;
        for (var i=0; i< number; i++) {
            setTimeout(function() {
                if ( self.allowRectangle ) self.randomRectangle();
                if ( self.allowCircle ) self.randomCircle();
            }, (this.allowAnimate)? this.random(0, 10000) : 0);
        }
    }

};
var instance = new svg();
instance.allowRectangle = true;
instance.allowCircle = true;
instance.allowAnimate = true;
instance.generate(500);