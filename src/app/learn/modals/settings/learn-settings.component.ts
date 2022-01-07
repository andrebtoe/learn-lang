import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-learn-settings',
  templateUrl: './learn-settings.component.html'
})
export class LearnSettingsComponent {

  constructor(private modalService: NgbModal) { }

  public close(): void {
    this.modalService.dismissAll();
  }
}
