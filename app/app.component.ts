
//tsc -w *.ts comando para crear el watcher
import {Component} from "angular2/core";
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html",
    directives: [PeliculasListComponent, PeliculasFooterComponent],
    styleUrls: ["../assets/css/styles.css"]
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


    }


