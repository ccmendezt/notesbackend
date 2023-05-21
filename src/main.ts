import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000;
  app.enableCors({
    origin: '*', // Reemplaza con el origen permitido para tu aplicación de React
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Especifica los métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Especifica las cabeceras permitidas
  });

  await app.listen(PORT);
}
bootstrap();
