import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bracket-form',
  templateUrl: './bracket-form.component.html',
  styleUrls: ['./bracket-form.component.css']
})
export class BracketFormComponent implements OnInit {

  newBracketForm: FormGroup ;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newBracketForm = this.fb.group({
      tournamentName:'',
      numOfEntrants:''
    })

  }

}
