
// Implémenter ici les 4 classes du modèle.

function Drawing() {
    this.monTableauxFormes = new Array();
    this.getForms = function() {
        return this.monTableauxFormes;
    }.bind(this) ;
    this.addForms = function(elt) {
        this.monTableauxFormes.push(elt) ;
    }.bind(this) ;
    this.removeForm = function(index){
        this.monTableauxFormes.splice(index, 1);
    }.bind(this);
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
    this.setX = function(x) {
        this.largeur = (x - this.xHautGauche);
    }.bind(this) ;
    this.setY = function(y) {
        this.hauteur = (y - this.yHautGauche);
    }.bind(this) ;
    this.print = function() {
        return "Rectangle";
    }.bind(this);
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
    this.setX = function(x) {
        this.xFinal = x;
    }.bind(this) ;
    this.setY = function(y) {
        this.yFinal = y;
    }.bind(this) ;
    this.print = function() {
        return "Line";
    }.bind(this);
};
// N'oubliez pas l'héritage !
