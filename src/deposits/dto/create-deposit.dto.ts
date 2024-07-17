import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from 'class-validator';


export class CreateDepositDto {

    @ApiProperty({ example: '9879879879fsddfsd98dsfsdfds', description: 'Id Platform' })
    @IsString()
    platformId: string;

    @ApiProperty({ example: 1000, description: 'Amount of deposit' })
    @IsNumber()
    amount: number;

    @ApiProperty({ example: '9879-9879-8768-9879', description: 'Account Bank' })
    @IsString()
    fromBankAccount: string;

    @ApiProperty({ example: 'Bank of America', description: 'Name of Bank' })
    @IsString()
    fromBankName: string;

    @ApiProperty({ example: '9879-9879-8768-9879', description: 'Account Bank' })
    @IsString()
    toBankAccount: string;

    @ApiProperty({ example: 'Davivienda', description: 'Name of Bank' })
    @IsString()
    toBankName: string;

    @ApiProperty({ example: 'John', description: 'First Name of User' })
    @IsString()
    firstNameUser: string;

    @ApiProperty({ example: 'Doe', description: 'Last Name of User' })
    @IsString()
    lastNameUser: string;

    @ApiProperty({ example: '9879fdfds9d', description: 'Password of User' })
    @IsString()
    password: string;

    @ApiProperty({ example: 'johndoe@gmail.com', description: 'Email of User' })
    @IsEmail()
    email: string;

}
