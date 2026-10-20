import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { ProductModule } from "@/modules/product/product.module";
import { EmployeeModule } from "@/modules/employee/employee.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,
    ProductModule,
    EmployeeModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
