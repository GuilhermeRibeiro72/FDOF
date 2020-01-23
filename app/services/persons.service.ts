import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Persons } from '../interfaces/persons';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {
  private personsCollection = this.afs.collection<Persons>('Persons');

  constructor(private afs: AngularFirestore) { }

  getPersons(){
   return this.personsCollection.snapshotChanges().pipe(
     map(actions=>{
       return actions.map(a =>{
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;

         return {id, ...data};
       })
     })
   )
  }

  addPersons(persons:Persons){

  }

  getPerson(id:string){
    return this.personsCollection.doc<Persons>(id).valueChanges();
  }

  updatePersons(id:string, persons:Persons){

  }

  deletePersons(id:string){

  }
}
