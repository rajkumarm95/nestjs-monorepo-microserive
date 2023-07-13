import { PartialType } from '@nestjs/mapped-types';
import { CreateShopifyWebhookDto } from './create-shopify-webhook.dto';

export class UpdateShopifyWebhookDto extends PartialType(CreateShopifyWebhookDto) {
  id: number;
}
