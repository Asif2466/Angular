import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// const rndmNum = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

  @Input({required:true}) user !:{
    id: string,
    avatar: string,
    name: string
  }
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter();
  //@Output() select = new EventEmitter<string>();
  //select = output<string>(); // this has the EventEmitter itself 


  // avatar = input<string>(''); // input signal with a defualt(initial) value & without 'required'
  // avatar = input.required<string>(); // Here, we can't pass initial value 
  // name = input.required<string>(); // **input signals are read only**

  // selectedUser = signal(DUMMY_USERS[rndmNum]); // Initializing the signal 

  // imagePath = computed(() => 'assets/users/'+this.avatar)
  // imagePath = computed(() => 'assets/users/'+this.avatar()) // If any changes in the value, It will be reComputed

  imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    // const rndmNum = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[rndmNum]);
    this.select.emit(this.user.id);
  }
}
