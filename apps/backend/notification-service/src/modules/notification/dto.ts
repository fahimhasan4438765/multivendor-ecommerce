export interface SendNotificationDto {
  userId: string;
  channel: "email" | "sms" | "push";
  subject: string;
  body: string;
}
