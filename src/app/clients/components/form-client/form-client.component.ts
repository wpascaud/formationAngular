import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/interface/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  myForm: FormGroup;
  clientStates = Object.values(ClientState);

  @Input() initCient = {
    state: ClientState.ACTIVE,
    name: '',
    email: '',
    ca: 0,
    comment: '',
  };
  @Output() submitted = new EventEmitter<Client>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      state: this.initCient.state,
      name: [this.initCient.name, Validators.required],
      email: [
        this.initCient.email,
        Validators.compose([Validators.email, Validators.required]),
      ],
      ca: [this.initCient.ca, Validators.min(1000)],
      comment: this.initCient.comment,
    });
  }
  register() {
    console.log(this.myForm.value);
    this.submitted.emit(this.myForm.value);
  }

  get email(){
    return this.myForm.get('email');

  }
}
