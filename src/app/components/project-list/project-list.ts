import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskList } from '../task-list/task-list';
import { Dashboard } from '../dashboard/dashboard';
import { ProjectDetail } from '../project-detail/project-detail';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskList, ProjectDetail,Dashboard],
  templateUrl: './project-list.html'
})
export class ProjectList {
  @Input() isDarkMode: boolean = false;


  selectedProject: any = null;
  searchTerm: string = '';
  showMessage: boolean = false;
  message: string = '';
  messageType: string = 'green'; // green ou red
  messageTimer: any = null;
showDashboard: boolean = false;
selectedPriority: string = 'Tous';
  showForm: boolean = false;
  newProject = {
    name: '',
    description: '',
    status: 'En attente'
  };

  // formulaire nouvelle tâche
  showTaskForm: { [key: string]: boolean } = {};
  newTask: { [key: string]: any } = {};

  constructor(private cdr: ChangeDetectorRef) {}

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
    }
  ];

  get filteredProjects() {
    return this.projects.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectProject(project: any) {
    this.selectedProject = project;
  }

  afficherMessage(msg: string, type: string = 'green') {
    if (this.messageTimer) clearTimeout(this.messageTimer);
    this.message = msg;
    this.messageType = type;
    this.showMessage = true;
    this.messageTimer = setTimeout(() => {
      this.showMessage = false;
      this.message = '';
      this.cdr.detectChanges();
    }, 5000);
  }

  ajouterProjet() {
    if (!this.newProject.name) return;
    this.projects.push({
      name: this.newProject.name,
      description: this.newProject.description,
      status: this.newProject.status,
      createdAt: new Date(),
      tasks: []
    });
    this.newProject = { name: '', description: '', status: 'En attente' };
    this.showForm = false;
    this.afficherMessage('Projet ajouté avec succès !', 'green');
  }

  supprimerProjet(project: any) {
    this.projects = this.projects.filter(p => p.name !== project.name);
    this.afficherMessage('Projet supprimé !', 'red');
  }

  toggleTaskForm(projectName: string) {
    this.showTaskForm[projectName] = !this.showTaskForm[projectName];
    if (!this.newTask[projectName]) {
      this.newTask[projectName] = { title: '', priority: 'Moyenne', status: 'En attente' };
    }
  }

  ajouterTache(project: any) {
    if (!this.newTask[project.name].title) return;
    project.tasks.push({ ...this.newTask[project.name] });
    this.newTask[project.name] = { title: '', priority: 'Moyenne', status: 'En attente' };
    this.showTaskForm[project.name] = false;
    this.afficherMessage('Tâche ajoutée avec succès !', 'green');
  }

  supprimerTache(project: any, task: any) {
    project.tasks = project.tasks.filter((t: any) => t.title !== task.title);
    this.afficherMessage('Tâche supprimée !', 'red');
  }
  onStatusChanged(task: any) {
  console.log('Statut changé :', task.title, '->', task.status);
}
}