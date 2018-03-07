var editingMode = { rect: 1, line: 0 };

function Pencil(ctx, drawing, canvas) {
    this.spinnerWidth = document.getElementById('spinnerWidth');
    this.colorPicker = document.getElementById('colour');
    this.butLine = document.getElementById('butLine');

    this.currEditingMode;
    if(this.butLine.checked)
	{
        this.currEditingMode = editingMode.line;
	}
	else
	{
        this.currEditingMode = editingMode.rect;
	}

	this.currLineWidth = this.spinnerWidth.value;
	this.currColour = this.colorPicker.value;
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    this.butRect = document.getElementById('butRect');
    this.butRect.onclick = function (ev) {
    	this.currEditingMode = editingMode.rect;
	}.bind(this);

    this.butLine.onclick = function (ev) {
        this.currEditingMode = editingMode.line;
    }.bind(this);

    this.colorPicker.onchange = function (ev) {
        this.currColour = this.colorPicker.value;
    }.bind(this);

    this.spinnerWidth.onchange = function (ev) {
        this.currLineWidth = this.spinnerWidth.value;
    }.bind(this);

    this.removeElement = function (button){
        index = button.value;
        drawing.removeForm(index);
        drawing.paint(ctx);
        this.updateShapeList();
    }.bind(this);

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
        drawing.addForms(this.currentShape);
        drawing.paint(ctx);
        this.currentShape = 0;
        console.log(drawing.getForms());
        this.updateShapeList();
    }.bind(this);

    this.updateShapeList = function(){
        listElem = document.getElementById('shapeList');
        html = "";
        index = 0;
        drawing.getForms().forEach(function(eltDuTableau) {
        html += "<li> Element " + (index + 1)+" : " + eltDuTableau.print()
            + "<button type='button' class='btn btn-default'"
            + "value = '"+index+"'"
            + "onClick='removeElem(this)'>"
            + "<span class='glyphicon glyphicon-remove-sign'></span>"
            + "</button>"
            + "</li>";
        index++;
        });
        listElem.innerHTML = html;
    }.bind(this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};


