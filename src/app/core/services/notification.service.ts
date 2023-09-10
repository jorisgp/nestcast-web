import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

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

  private showNotification(title: string, text: string, severity: Severity) {}
}

enum Severity {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  SUCCESS = 'success',
}
