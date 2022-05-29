import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Note } from '../api/models';
import { NotesService } from '../api/services';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private svc:NotesService, private routed:ActivatedRoute) { }

  dbkey = '';
  isLoading = false;
  notes : Note[] = [];
  isDeleted = false;
  
  ngOnInit(): void {
    this.routed.paramMap.subscribe(x => {
      this.dbkey = x.get('dbkey')??'';

      this.load();
    })
  }

  load() {
    this.isLoading = true;
    this.svc.getApiNotes(this.dbkey).subscribe(x => {
      this.notes = x;
      this.isLoading = false;
    })
  }

  delete(note:Note) {
    this.isDeleted = false;
    this.svc.deleteApiNotesId({DbKey: this.dbkey, id: note.id??''}).subscribe(x => {
      this.isDeleted = true;
    });
  }
}
