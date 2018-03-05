Forme.prototype.paint = function(ctx) {
    ctx.fillStyle = this.getColor();
    ctx.lineWidth = this.getLineWidth();
};

Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this,ctx);
    ctx.fillStyle = this.getColor();
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this,ctx);
    ctx.fillStyle = this.getColor();
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};


// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
