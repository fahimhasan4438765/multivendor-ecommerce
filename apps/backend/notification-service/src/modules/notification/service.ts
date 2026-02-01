import type { SendNotificationDto } from "./dto";

export async function send(dto: SendNotificationDto) {
  // Placeholder: integrate with SendGrid, Twilio, etc.
  return { sent: true, channel: dto.channel };
}
