import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../api/models';
import { NotesService } from '../api/services';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  constructor(private svc:NotesService, private routed:ActivatedRoute ) { }

  model : Note = {};
  updated = false;
  dbkey = '';
  noteid = '';
  
  ngOnInit(): void {
    this.routed.paramMap.subscribe(x => {
      this.dbkey = x.get('dbkey')??'';
      this.noteid = x.get('noteid')??'';

      this.svc.getApiNotesId({DbKey: this.dbkey, id: this.noteid}).subscribe(x => {
        this.model = x;
      })
    });
  }

  update() {
    this.updated = false;
    this.svc.putApiNotesId({DbKey: this.dbkey, id: this.noteid, body: { data: this.model.body }}).subscribe(x => {
      this.updated = true;
    })
  }
}
