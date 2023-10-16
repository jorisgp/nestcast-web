import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  showSuccess(title: string, text: string) {
    console.log(`Notification service: ${title}`, text);
    this.showNotification(title, text, Severity.SUCCESS);
  }

  showInfo(title: string, text: string) {
    console.info(`Notification service: ${title}`, text);
    this.showNotification(title, text, Severity.INFO);
  }

  showWarn(title: string, text: string) {
    console.warn(`Notification service: ${title}`, text);
    this.showNotification(title, text, Severity.WARN);
  }

  showError(title: string, text: string) {
    console.error(`Notification service: ${title}`, text);
    this.showNotification(title, text, Severity.ERROR);
  }

  private showNotification(title: string, text: string, severity: Severity) {
    this.messageService.add({
      severity: severity,
      summary: title,
      detail: text,
    });
  }
}

enum Severity {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  SUCCESS = 'success',
}
