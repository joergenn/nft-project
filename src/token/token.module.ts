import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { EthersService } from 'src/ethers/ethers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';
import { EthersModule } from 'src/ethers/ethers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Token]), EthersModule],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
