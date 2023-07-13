import { Module } from '@nestjs/common';
import { ShopifyWebhookService } from './shopify-webhook.service';
import { ShopifyWebhookController } from './shopify-webhook.controller';

@Module({
  controllers: [ShopifyWebhookController],
  providers: [ShopifyWebhookService]
})
export class ShopifyWebhookModule {}
