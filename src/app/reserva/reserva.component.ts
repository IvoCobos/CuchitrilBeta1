import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay,  endOfDay,  subDays,  addDays,  endOfMonth,  isSameDay,  isSameMonth,  addHours } from 'date-fns';
import { Subject } from 'rxjs';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,  CalendarEventAction,  CalendarEventTimesChangedEvent,  CalendarView } from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


@Component({
  selector: 'reservaForm',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  emailPattern : any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  createFormGroup(){
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      fecha: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(13)])
    })
  }

  contactForm: FormGroup;
  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit() {
  }

  onResetForm(){
    this.contactForm.reset();
  }
  onSaveForm(){
    if (this.contactForm.valid){
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('esta bueno');
    }else{
      console.log('no valido');
    }
    
  }
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get fecha() { return this.contactForm.get('fecha'); }
  get phone() { return this.contactForm.get('phone'); }
}
