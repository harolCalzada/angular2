
//tsc -w *.ts comando para crear el watcher
import {Component} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {PeliculasService} from "../services/peliculas.service";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
@Component({
    selector: "peliculas-list",
    templateUrl: "app/view/peliculas-list.html",
    providers: [PeliculasService],
    directives: [ROUTER_DIRECTIVES],


})

export class PeliculasListComponent{
    public pelicula:Pelicula;
    public peliculaElegida: Pelicula;
    public mostrarDatos:boolean;
    public peliculas;
    public datoServicio;
    /*
    public pelicula: string ;
    public director:string ;
    public anio:number;
*/
    constructor(private _peliculasService: PeliculasService){
        this.mostrarDatos = false;
        this.peliculaElegida =  new Pelicula(1, "Batman v Superman", "Zack Sniper", 2016),
        this.peliculas = _peliculasService.getPeliculas();
        this.pelicula = this.peliculas[0];
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
        this.peliculaElegida = pelicula;
    }


}
