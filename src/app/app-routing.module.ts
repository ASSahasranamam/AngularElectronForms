import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserFormsComponent } from './user-forms/user-forms.component';

const routes: Routes = [
  { path: '', component: UserFormsComponent },
  { path: 'allEntries', component: UserDisplayComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
