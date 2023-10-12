import { Module } from '@nestjs/common';
import { EthersService } from './ethers.service';
import { TokenService } from 'src/token/token.service';
import { TokenModule } from 'src/token/token.module';

@Module({
  providers: [EthersService],
})
export class EthersModule {}
