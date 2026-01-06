import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-secundaria',
  imports: [FormsModule],
  templateUrl: './secundaria.html',
  styleUrl: './secundaria.css',
})
export class Secundaria {

  nombre: string[] = ['Ana', 'Luis', 'Carlos', 'María', 'Jorge'];

}
