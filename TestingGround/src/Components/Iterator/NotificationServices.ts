export module NotificationServices {
  export class Notification {
    message: string | undefined;
  }
  export interface notifOptions {
    levelOfUrgency: 1;
    category: 'any';
  }
}
