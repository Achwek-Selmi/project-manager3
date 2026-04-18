import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusEmoji',
  standalone: true
})
export class StatusEmoji implements PipeTransform {
  transform(status: string): string {
    switch (status) {
      case 'Terminé': return '✅ Terminé';
      case 'En cours': return '🔄 En cours';
      case 'En attente': return '⏳ En attente';
      default: return status;
    }
  }
}