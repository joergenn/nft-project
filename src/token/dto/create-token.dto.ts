import { IsString, IsNumber, IsDefined } from "class-validator";

export class CreateTokenDto {
    @IsNumber()
    @IsDefined()
    id: number;

    @IsNumber()
    @IsDefined()
    tokenId: number;

    @IsString()
    @IsDefined()
    owner: string;

    @IsDefined()
    metadata: Object;
}