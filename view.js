Forme.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.getColor();
    ctx.lineWidth = this.getLineWidth();
};

Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this,ctx);
    console.log("Rectangle " + ctx.strokeStyle);
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this,ctx);
    console.log(ctx.strokeStyle);
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};



// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
