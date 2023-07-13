import { Injectable } from '@nestjs/common';
import { CreateShopifyWebhookDto } from './dto/create-shopify-webhook.dto';
import { UpdateShopifyWebhookDto } from './dto/update-shopify-webhook.dto';

@Injectable()
export class ShopifyWebhookService {
  create(createShopifyWebhookDto: CreateShopifyWebhookDto) {
    return 'This action adds a new shopifyWebhook';
  }

  findAll() {
    return `This action returns all shopifyWebhook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopifyWebhook`;
  }

  update(id: number, updateShopifyWebhookDto: UpdateShopifyWebhookDto) {
    return `This action updates a #${id} shopifyWebhook`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopifyWebhook`;
  }
}
