System.register(["angular2/core", "../model/pelicula", "../services/peliculas.service", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1, peliculas_service_1, router_1;
    var PeliculasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            },
            function (peliculas_service_1_1) {
                peliculas_service_1 = peliculas_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PeliculasListComponent = (function () {
                /*
                public pelicula: string ;
                public director:string ;
                public anio:number;
            */
                function PeliculasListComponent(_peliculasService) {
                    this._peliculasService = _peliculasService;
                    this.mostrarDatos = false;
                    this.peliculaElegida = new pelicula_1.Pelicula(1, "Batman v Superman", "Zack Sniper", 2016),
                        this.peliculas = _peliculasService.getPeliculas();
                    this.pelicula = this.peliculas[0];
                }
                PeliculasListComponent.prototype.debug = function (titulo) {
                    if (titulo === void 0) { titulo = null; }
                    if (titulo != null) {
                        console.log(this.pelicula.titulo);
                    }
                    else {
                        console.log(this.pelicula);
                    }
                };
                PeliculasListComponent.prototype.onShowHide = function (value) {
                    this.mostrarDatos = value;
                };
                PeliculasListComponent.prototype.onCambiarPelicula = function (pelicula) {
                    this.pelicula = pelicula;
                    this.peliculaElegida = pelicula;
                };
                PeliculasListComponent = __decorate([
                    core_1.Component({
                        selector: "peliculas-list",
                        templateUrl: "app/view/peliculas-list.html",
                        providers: [peliculas_service_1.PeliculasService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [peliculas_service_1.PeliculasService])
                ], PeliculasListComponent);
                return PeliculasListComponent;
            }());
            exports_1("PeliculasListComponent", PeliculasListComponent);
        }
    }
});
//# sourceMappingURL=peliculas-list.component.js.map