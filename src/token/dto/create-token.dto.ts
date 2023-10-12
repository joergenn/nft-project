import { IsString, IsNumber, IsDefined } from "class-validator";
import metadataObject from "src/interfaces/metadataObject";

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
    metadata: metadataObject;
}
