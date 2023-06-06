import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MensajesWsModule } from './mensajes-ws/mensajes-ws.module';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [EstudianteModule,
    ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type:'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
  }),
  MensajesWsModule,
  PacienteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
