import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightStatus } from '../highlight-status';
import { PriorityColor } from '../priority-color-pipe';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,HighlightStatus,PriorityColor],
  templateUrl: './task-list.html'
})
export class TaskList {
  @Input() tasks: any[] = [];

}