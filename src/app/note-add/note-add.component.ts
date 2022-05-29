import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../api/models';
import { NotesService } from '../api/services';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  constructor(private svc:NotesService, private routed:ActivatedRoute ) { }
  model : Note = {};
  added = false;
  dbkey = '';

  ngOnInit(): void {
    this.routed.paramMap.subscribe(x => {
      this.dbkey = x.get('dbkey')??'';
    });
  }

  add() {
    this.added = false;
    this.svc.postApiNotes({DbKey: this.dbkey, body: {data: this.model.body } }).subscribe(x => {
      this.added = true;
    });
  }
}
