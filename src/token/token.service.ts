import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { EthersService } from 'src/ethers/ethers.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common/exceptions';
import metadataObject from 'src/interfaces/metadataObject';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private tokenService : Repository<Token>,
    private etherService : EthersService,
  ){}

  async create(createTokenDto: CreateTokenDto) {
    const newToken = this.tokenService.create(createTokenDto);
    return this.tokenService.save(newToken);
  }

  async findAll(from: number, to: number) {
    const tokens:Token[] = [];
      let token:Token;
      const supply = await this.etherService.getTotalSupply();
      if(from > to || from < 0 || BigInt(to) > supply) throw new BadRequestException("Bad query parameters");
      try {
          for(let i = from; i <= to; i++){
            tokens.push(await this.findOne(i));
          }
      } catch (error) {
          console.error(error)
      }
      return tokens;
  }

  async findOne(id: number) {
    const token = await this.tokenService.findOne({
      where: {
        tokenId: id
      }
    });
    if(token){
      return token
    }
    const metadata:metadataObject = await this.etherService.getToken(id);
    const owner:string = await this.etherService.getOwner(id);
    const newToken = this.tokenService.create({
      "tokenId": id,
      "owner": owner,
      "metadata": metadata
    });
    return this.tokenService.save(newToken);
  }
}
