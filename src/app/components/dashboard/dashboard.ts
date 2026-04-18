import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  @Input() projects: any[] = [];

  getTotalProjets(): number {
    return this.projects.length;
  }

  getTotalTaches(): number {
    return this.projects.reduce((total, p) => total + p.tasks.length, 0);
  }

  getProgressionGlobale(): number {
    const totalTaches = this.getTotalTaches();

    if (totalTaches === 0) return 0;

    const terminees = this.projects.reduce(
      (total, p) =>
        total + p.tasks.filter((t: any) => t.status === 'Terminé').length,
      0
    );

    return Math.round((terminees / totalTaches) * 100);
  }

  getCircleProgress(): string {
    const progress = this.getProgressionGlobale();
    return `conic-gradient(#22c55e ${progress}%, #e5e7eb ${progress}% 100%)`;
  }
}