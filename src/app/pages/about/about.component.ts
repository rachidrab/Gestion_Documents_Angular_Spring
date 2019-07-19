import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }


  informations = {
    nom: 'rachid',
    email : 'rachid@gmail.com',
    tel: 2556484153
  };

  comments = [
    {date: new Date(), message: 'A'},
    {date: new Date(), message: 'B'},
    {date: new Date(), message: 'C'}
  ];

  commentaire = {date: new Date(), message: ''};



  onAddCommentaire() {

    if (this.commentaire.message === '') {
      this.commentaire = {date: new Date(), message: 'NOTHING'};
    } else {
      this.comments.push({date : new Date(), message: this.commentaire.message});
      this.commentaire = {date: null, message: ''};
    }

  }

  ngOnInit() {
  }

}
