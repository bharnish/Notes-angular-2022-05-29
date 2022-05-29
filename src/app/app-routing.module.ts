import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NotesListComponent } from './notes-list/notes-list.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:':dbkey/main', component: MainComponent},
  {path:':dbkey/notes', component: NotesListComponent},
  {path:':dbkey/notes/add', component: NoteAddComponent},
  {path:':dbkey/notes/:noteid/edit', component: NoteEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
