import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postActual: any;

  constructor(private db: AngularFirestore,
              private router: Router) { }

  getposts(){
    return this.db.collection('elsoldemaneiroposts').valueChanges();
  }

  getpost(pid: string){
    return this.db.collection('elsoldemaneiroposts').doc(pid).get()
  }

  actualizarpost(post: any){
    this.postActual = post;
    this.router.navigateByUrl('/post')
  }

}
