import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  showSuccess(notification: Notification) {
    console.log(
      `Notification service: ${notification.title}`,
      notification.text
    );
    this.showNotification(notification, Severity.SUCCESS);
  }

  showInfo(notification: Notification) {
    console.info(
      `Notification service: ${notification.title}`,
      notification.text
    );
    this.showNotification(notification, Severity.INFO);
  }

  showWarn(notification: Notification) {
    console.warn(
      `Notification service: ${notification.title}`,
      notification.text
    );
    this.showNotification(notification, Severity.WARN);
  }

  showError(notification: Notification) {
    console.error(
      `Notification service: ${notification.title}`,
      notification.text
    );
    this.showNotification(notification, Severity.ERROR);
  }

  private showNotification(notification: Notification, severity: Severity) {
    this.messageService.add({
      severity: severity,
      summary: notification.title,
      detail: notification.text,
    });
  }
}

export enum Severity {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  SUCCESS = 'success',
}

export type Notification = {
  title: string;
  text: string;
};
