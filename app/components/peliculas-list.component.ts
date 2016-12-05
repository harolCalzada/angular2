
//tsc -w *.ts comando para crear el watcher
import {Component} from "angular2/core";
import {Pelicula} from "../model/pelicula";
@Component({
    selector: "peliculas-list",
    templateUrl: "app/view/peliculas-list.html"


})

export class PeliculasListComponent{
    public pelicula:Pelicula;
    public peliculaElegida: Pelicula;
    public mostrarDatos:boolean;
    public peliculas;
    /*
    public pelicula: string ;
    public director:string ;
    public anio:number;
*/
    constructor(){

        this.mostrarDatos = false;
        this.peliculaElegida =  new Pelicula(1, "Batman v Superman", "Zack Sniper", 2016),

        this.peliculas = [
                new Pelicula(1, "Batman v Superman", "Zack Sniper", 2016),
                new Pelicula(2, "La verdad duele", "Wilss Smith", 2016),
                new Pelicula(3, "El seños de los anillos", "Desconocido", 2013),
                new Pelicula(4, "Una historia real", "Desconocido2", 2015),
                new Pelicula(5, "Don Jon", "Josep Gordon", 2014)
        ]
        this.debug()
        this.pelicula = this.peliculas[0]
    }


    debug(titulo=null){
        if (titulo!=null){
            console.log(this.pelicula.titulo);
        }else{
            console.log(this.pelicula);

        }
    }

    onShowHide(value){
        this.mostrarDatos =value;
    }

    onCambiarPelicula(pelicula){
        this.pelicula = pelicula;
        this.peliculaElegida = pelicula
    }


}
