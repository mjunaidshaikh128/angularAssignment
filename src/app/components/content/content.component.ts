import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  users = [
    {
      id: 1,
      firstname: 'Muhammad Junaid',
      lastname: 'Shaikh',
      email: 'junaidabc@example.com',
      isActive: true,
    },
    {
      id: 2,
      firstname: 'Huzaifa',
      lastname: 'Abid',
      email: 'huzaifa123@example.com',
      isActive: false,
    },
    {
      id: 3,
      firstname: 'Mustafa',
      lastname: 'Ahmed',
      email: 'mahamed@example.com',
      isActive: true,
    },
    {
      id: 4,
      firstname: 'Bilal',
      lastname: 'Zafar',
      email: 'bilalxyz@example.com',
      isActive: true,
    },
    {
      id: 4,
      firstname: 'Raeed',
      lastname: 'Farukh',
      email: 'raeed@example.com',
      isActive: false,
    },
  ];
}
