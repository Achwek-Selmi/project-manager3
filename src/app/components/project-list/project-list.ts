import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskList } from '../task-list/task-list';
import { ProjectDetail } from '../project-detail/project-detail';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskList, ProjectDetail],
  templateUrl: './project-list.html'
})
export class ProjectList {

  selectedProject: any = null;
  searchTerm: string = '';  // ← ajoute ceci

  // getter pour filtrer les projets
  get filteredProjects() {
    return this.projects.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  projects = [
    {
      name: 'Projet 1',
      description: 'Description 1',
      status: 'En cours',
      createdAt: new Date('2024-01-15'),
      tasks: [
        { title: 'Tâche 1', priority: 'Haute', status: 'En attente' },
        { title: 'Tâche 2', priority: 'Moyenne', status: 'En cours' }
      ]
    },
    {
      name: 'Projet 2',
      description: 'Description 2',
      status: 'Terminé',
      createdAt: new Date('2024-03-10'),
      tasks: [
        { title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }
      ]
    }
  ];


  selectProject(project: any) {
    this.selectedProject = project;
  }
}