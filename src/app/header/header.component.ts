import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: MenuItem[] = [];

  ngOnInit(): void {
    this.header = [
      {label: 'Caloric Requirement', icon: '', routerLink: ['/']},
      {label: 'Calorie Calculator', icon: '', routerLink: ['/calculator']},
      {label: 'Nutrition Quiz', icon: '', routerLink: ['/quiz']}
    ]
  }
}
