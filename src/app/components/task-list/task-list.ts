import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusEmoji } from '../status-emoji-pipe';
import { HighlightStatus } from '../highlight-status';
import { PriorityColor } from '../priority-color-pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, HighlightStatus, PriorityColor, StatusEmoji],
  templateUrl: './task-list.html'
})
export class TaskList {
  @Input() tasks: any[] = [];
  @Input() filterPriority: string = 'Tous';
  @Output() supprimerTache = new EventEmitter<any>();
  @Output() statusChanged = new EventEmitter<any>();

  get filteredTasks() {
    if (this.filterPriority === 'Tous') return this.tasks;
    return this.tasks.filter(t => t.priority === this.filterPriority);
  }

  onSupprimer(task: any) {
    this.supprimerTache.emit(task);
  }

  changerStatut(task: any) {
    if (task.status === 'En attente') task.status = 'En cours';
    else if (task.status === 'En cours') task.status = 'Terminé';
    else task.status = 'En attente';
    this.statusChanged.emit(task);
  }
}