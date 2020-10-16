/**
 * Ici, je definie ce a quoi correspond une tâche.
 */
export class Task {
    id: number = Date.now();
    title: string;
    status = false;
    duedate?: number; // le "?" sert à dire que la propriété n'est pas obligatoire
}
