import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";
@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html"
    /*
    template: `<h1>  {{titulo}}</h1>
                        <ul>
                            <li> Título: <strong>{{pelicula}}</strong></li>
                            <li> Director : <strong>{{director}}</strong></li>
                            <li> Año: <strong>{{anio}}</strong></li>
                        </ul>
                        `
    */

})

export class AppComponent{
    public titulo:string = "Peliculas con Angular 2";
    public pelicula: Pelicula;
    /*
    public pelicula: string ;
    public director:string ;
    public anio:number;
*/
    constructor(){
        this.pelicula = new Pelicula(1, "Batman v Superman", "Zack Sniper", 2016);

        /*
        this.pelicula = "Batman v Superman";
        this.director = "Zack Snider";
        this.anio = 2016;
        //this.holaMundo();
        */
        this.debug()
    }

    debug(){
        console.log(this.pelicula);
    }


}