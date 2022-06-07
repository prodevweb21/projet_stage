import { v4 as uuid } from 'uuid';

import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';
import { Details } from '../interface/details';
import { StorageServiceService } from '../services/storage-service.service';
import { CanonicApiService } from '../services/canonic-api.service';
import { Revenu } from '../interface/revenu';
import { IncomeService } from '../services/income.service';

@Component({
  selector: 'app-income-component',
  templateUrl: './income-component.component.html',
  styleUrls: ['./income-component.component.sass']
})

export class IncomeComponentComponent {
  @ViewChild('fform') feedbackFormDirective: any;
  submitForm!: FormGroup;
  details!: Details;
  isValidMontantError: string = "";
  balance: number = 0;
  incomeList: Revenu[] = [];
  //* Suite au découpage de l'Appli j'ajoute  incomeService-pour regler la mise à jour du graphique

  constructor(private canonicApiService: CanonicApiService, private modalService: NgbModal, 
    private incomeService : IncomeService ) {

  }


  // * fonction pour afficher la liste des revenus
  ngOnInit() {
    this.incomeService.getIncomeList().subscribe(
      (response: any) => {
        console.log(response);
        this.incomeList = response.data; 
      },
      () => console.log('error')
    );
  }
  @Input() revenu: Revenu = {_id:'', description:'', montant: 0, date: new Date(), updatedAt: '', createdAt:'',}
  @Output() majTableau = new EventEmitter() ;



  removeIncome(revenu: Revenu): void {
    if (confirm('Voulez vous supprimer cette dépense ?')) {
      this.incomeService.removeIncome(revenu);
    } else {
      console.log('ne pas supprimer');
    }
    location.reload(); // Pour reload le graphique
  }


  addIncome(): void {
    console.log(this.revenu);
    this.incomeService.addIncome(this.revenu);
  }

  onSave(addIncome: NgForm) {
    console.log(addIncome);
    if (addIncome.valid) {
      alert('Veuillez remplir les champs')
      if (this.revenu._id != null && this.revenu._id != '') {
        this.incomeService.editIncome(this.revenu).subscribe(_ => { this.majTableau.emit() });
      }
      else {
        this.addIncome();
      }
    }
    this.feedbackFormDirective.resetForm();
    location.reload(); // Pour reload le graphique


  }



  openCalculatorModal(content: any) {
    this.modalService.open(content);
  }


}