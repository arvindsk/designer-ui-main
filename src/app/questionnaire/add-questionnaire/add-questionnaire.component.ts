import { Component } from '@angular/core';

@Component({
  selector: 'app-add-questionnaire',
  templateUrl: './add-questionnaire.component.html',
  styleUrl: './add-questionnaire.component.scss'
})
export class AddQuestionnaireComponent {
  events: string[] = [];
  opened=true;
  showFiller=true;

}
