import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.html'
})
export class StatusBadge {
  @Input() status: string = '';

  getBadgeClass(): string {
    switch (this.status) {
      case 'Terminé': return 'bg-green-100 text-green-700 border border-green-400';
      case 'En cours': return 'bg-blue-100 text-blue-700 border border-blue-400';
      case 'En attente': return 'bg-yellow-100 text-yellow-700 border border-yellow-400';
      default: return 'bg-gray-100 text-gray-700 border border-gray-400';
    }
  }
}