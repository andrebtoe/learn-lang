import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LearnSettingsComponent } from './modals/settings/learn-settings.component';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html'
})
export class LearnComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  public openSettings(): void {
    //this.modalService.open(LearnSettingsComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
    //  this.closeModal = `Closed with: ${res}`;
    //}, (res) => {
    //  this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    //});

    this.modalService.open(LearnSettingsComponent, { ariaLabelledBy: 'modal-basic-title' });
  }

  public print(): void {
    window.print();
  }
}
