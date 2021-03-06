import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ValidalgumacoisaController {
  @MessagePattern('valida_alguma_coisa')
  validaAlgumaCoisa(@Payload() message) {
    console.log(message.value);
    return {
      respondi: 'Respondi',
    };
  }
}
