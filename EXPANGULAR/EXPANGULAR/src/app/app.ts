import { Component, signal } from '@angular/core';
import { readonly } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { title } from 'process';
import { Secundaria } from './secundaria/secundaria';
import { Adyacente } from './adyacente/adyacente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Secundaria, Adyacente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EXPANGULAR');
  nombre: string = 'Virus';

  numero: number = 10;

  inc(): void {
    this.numero++;
    alert(this.numero);
  }

  dec(): void {
    this.numero--;
    alert(this.numero);
  }

  processar(decision: boolean): void {
    if (decision) {
      this.inc();
    } else {
      this.dec();
    }
  }







}