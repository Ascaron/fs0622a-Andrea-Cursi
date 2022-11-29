import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do.interface';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }

}

export async function getTodos(): Promise<ToDo[]> {
  return await (await fetch('assets/db.json')).json()
}
