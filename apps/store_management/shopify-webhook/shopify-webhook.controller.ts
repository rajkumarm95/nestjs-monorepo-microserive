import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ShopifyWebhookService } from './shopify-webhook.service';
import { CreateShopifyWebhookDto } from './dto/create-shopify-webhook.dto';
import { UpdateShopifyWebhookDto } from './dto/update-shopify-webhook.dto';

@Controller()
export class ShopifyWebhookController {
  constructor(private readonly shopifyWebhookService: ShopifyWebhookService) {}

  @MessagePattern('createShopifyWebhook')
  create(@Payload() createShopifyWebhookDto: CreateShopifyWebhookDto) {
    return this.shopifyWebhookService.create(createShopifyWebhookDto);
  }

  @MessagePattern('findAllShopifyWebhook')
  findAll() {
    return this.shopifyWebhookService.findAll();
  }

  @MessagePattern('findOneShopifyWebhook')
  findOne(@Payload() id: number) {
    return this.shopifyWebhookService.findOne(id);
  }

  @MessagePattern('updateShopifyWebhook')
  update(@Payload() updateShopifyWebhookDto: UpdateShopifyWebhookDto) {
    return this.shopifyWebhookService.update(
      updateShopifyWebhookDto.id,
      updateShopifyWebhookDto,
    );
  }

  @MessagePattern('removeShopifyWebhook')
  remove(@Payload() id: number) {
    return this.shopifyWebhookService.remove(id);
  }
}
