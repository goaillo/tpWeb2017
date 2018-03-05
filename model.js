
// Implémenter ici les 4 classes du modèle.

function Drawing() {
    this.monTableauxFormes = new Array();
    this.getForms = function() {
        return monTableauxFormes;
    }.bind(this) ;
    this.addForms = function(elt) {
        this.monTableauFormes.push(elt) ;
    }.bind(this) ;
};

function Forme(epaisseurTrait, couleur)
{
    this.epaisseurTrait = epaisseurTrait;
    this.couleur = couleur;

    this.getLineWidth = function() {
        return this.epaisseurTrait;
    }.bind(this) ;

    this.getColor = function() {
        return this.couleur;
    }.bind(this) ;
};

function Rectangle(xHautGauche,yHautGauche, largeur, hauteur, epaisseurTrait, couleur)
{
    Forme.call(this, epaisseurTrait, couleur);
    this.xHautGauche = xHautGauche;
    this.yHautGauche = yHautGauche;
    this.largeur = largeur;
    this.hauteur = hauteur;

    this.getInitX = function() {
        return this.xHautGauche;
    }.bind(this) ;
    this.getInitY = function() {
        return this.yHautGauche;
    }.bind(this) ;
    this.getWidth = function() {
        return this.largeur;
    }.bind(this) ;
    this.getHeight = function() {
        return this.hauteur;
    }.bind(this) ;
};


function Line(xDebut,yDebut, xFinal, yFinal, epaisseurTrait, couleur)
{
    Forme.call(this, epaisseurTrait, couleur);
    this.xDebut = xDebut;
    this.yDebut = yDebut;
    this.xFinal = xFinal;
    this.yFinal = yFinal;

    this.getInitX = function() {
        return this.xDebut;
    }.bind(this) ;
    this.getInitY = function() {
        return this.yDebut;
    }.bind(this) ;
    this.getFinalX = function() {
        return this.xFinal;
    }.bind(this) ;
    this.getFinalY = function() {
        return this.yFinal;
    }.bind(this) ;
};
// N'oubliez pas l'héritage !
