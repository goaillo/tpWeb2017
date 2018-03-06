var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

    this.onInteractionStart = function(dnd) {
        switch(this.currEditingMode){
            case editingMode.rect: {
            	this.currentShape = new Rectangle(dnd.xinitial, dnd.yinitial, 1,1,this.currLineWidth, this.currColour);
                break;
            }
            case editingMode.line: {
                this.currentShape = new Line(dnd.xinitial, dnd.yinitial ,dnd.xinitial, dnd.yinitial,this.currLineWidth, this.currColour);
                break;
            }
        }
        drawing.paint(ctx);
        this.currentShape.paint(ctx);

    }.bind(this) ;

    this.onInteractionUpdate = function(dnd) {
        this.currentShape.setX(dnd.xfinal);
        this.currentShape.setY(dnd.yfinal);
        drawing.paint(ctx);
        this.currentShape.paint(ctx);
    }.bind(this) ;

    this.onInteractionEnd = function(dnd) {
        this.currentShape.setX(dnd.xfinal);
        this.currentShape.setY(dnd.yfinal);
        this.currentShape.paint(ctx);
        drawing.addForms(this.currentShape);
        drawing.paint(ctx);
    }.bind(this) ;

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};


