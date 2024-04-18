import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddQuestionnaireComponent} from "./add-questionnaire/add-questionnaire.component";
import {LibraryComponent} from "./library/library.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'add-questionnaire',
    component: AddQuestionnaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule {
}
