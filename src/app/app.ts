import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectList } from './components/project-list/project-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProjectList],
  templateUrl: './app.html'
})
export class App {
  title = 'project-manager4';
  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
} 
  
