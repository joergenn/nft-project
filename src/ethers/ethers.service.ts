import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from "ethers";
import axios from 'axios';

@Injectable()
export class EthersService {
    private infuraLink: string;
    private provider: ethers.JsonRpcProvider;
    private contract: ethers.Contract;
    private address: string;

    private abi = [
        "function name() view returns (string)",
        "function tokenURI(uint256) view returns (string)",
        "function ownerOf(uint256) view returns (address)",
        "function totalSupply() view returns (uint256)",
    ]

    constructor(private configService: ConfigService){
        this.infuraLink = `https://mainnet.infura.io/v3/${this.configService.get('INFURA')}`;
        this.address = this.configService.get('ADDRESS');
        this.provider = new ethers.JsonRpcProvider(this.infuraLink);
        this.contract = new ethers.Contract(this.address, this.abi, this.provider);
    }

    async getTotalSupply(){
        return await this.contract.totalSupply();
    }

    async getOwner(tokenId: number){
        return await this.contract.ownerOf(240)
    }

    async getToken(tokenId: number){
        try {
            const response = await axios.get(await this.contract.tokenURI(240));
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
