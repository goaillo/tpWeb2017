
function Humain(poids, taille) {
    this.poids = poids;
    this.taille = taille;
    this.indiceMasseCorporelle = function() {
        return this.poids / this.taille*this.taille;
    }.bind(this) ;
};

// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
  this.xinitial = 0;
  this.yinitial = 0;
  this.xfinal = 0;
  this.yfinal =0;

  this.isPoser = false;

    // Developper les 3 fonctions gérant les événements

    this.pression = function(evt) {
           var res = getMousePosition(canvas,evt);
           this.xinitial = res.x;
           this.yinitial =res.y;
           this.isPoser = true;
            interactor.onInteractionStart(this);
           //console.log("x initial: " + this.xinitial + " | y initial : " + this.yinitial);
    }.bind(this) ;

  this.deplacer = function(evt) {
      if(this.isPoser)
      {
          var res = getMousePosition(canvas,evt);
          this.xfinal = res.x;
          this.yfinal = res.y;
          interactor.onInteractionUpdate(this);
          //console.log("x:" + this.xfinal + " | y :" + this.yfinal);
      }
  }.bind(this) ;

  this.poser = function(evt) {
    if(this.isPoser)
    {
        var res = getMousePosition(canvas,evt);
        this.xfinal = res.x;
        this.yfinal = res.y;
        interactor.onInteractionEnd(this);
        this.isPoser = false;
        //console.log("x final:" + this.xfinal + " | y final :" + this.yfinal);
    }
  }.bind(this) ;

	// Associer les fonctions précédentes aux évènements du canvas.

    canvas.addEventListener('mousedown',this.pression);
    canvas.addEventListener('mousemove',this.deplacer);
    canvas.addEventListener('mouseup',this.poser);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



