import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pais } from '../interfaces/pais.interface';



    @Injectable({
        providedIn: 'root'
    })

    export class PaisService{
        _results: Pais[]=[]
        _error:string=''
        private url: string='https://restcountries.com/v3.1/name/';

        constructor(private http: HttpClient) { }

        buscarPais(busqueda:string): void{
            this.http.get<Pais[]>(`${this.url}${busqueda}`)
            .subscribe({
                next: (resp) =>{
                    this._results = resp;
                },
                error: (err) =>{
                    this._error=err;
                }
            });
        }

        get results(): Pais[]{
            return [...this._results]
        }

        get error(): string{
            return this._error
        }

    }