import { Component } from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * Ici la proprieté "task" est de type "Task" (= objet de la classe task, créé ds le fichier task.ts);
   * c'est à dire qu'elle prendra comme structure, comme référence la classe Task.
   */
  task: Task = new Task();
  /**
   * mon tableau contient des objets de type Task les[] servent à indiquer le type de la variable : c'est un tableau
   */
  tasks: Task[] = [
    {id: 1, title: 'Faire la vaisselle', status: true},
    {id: 2, title: 'Sortir la poubelle', status: true},
    {id: 3, title: 'Promener le chien', status: true},
    {id: 4, title: 'Préparer le bois de la cheminée', status: true},
  ];

  constructor() {}

}
