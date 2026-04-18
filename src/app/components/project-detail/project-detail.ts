import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskList } from '../task-list/task-list';
import { FriendlyDate } from '../friendly-date-pipe';
import { StatusBadge } from '../status-badge/status-badge';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, TaskList, StatusBadge, FriendlyDate],
  templateUrl: './project-detail.html'
})
export class ProjectDetail {
  @Input() project: any;

  getProgress(): number {
    if (!this.project.tasks.length) return 0;
    return (
      (this.project.tasks.filter((t: any) => t.status === 'Terminé').length /
      this.project.tasks.length) * 100
    );
  }

  onStatusChanged(task: any) {
    console.log('Statut changé :', task.title, '->', task.status);
  }

  supprimerTache(task: any) {
    this.project.tasks = this.project.tasks.filter((t: any) => t.title !== task.title);
  }
}