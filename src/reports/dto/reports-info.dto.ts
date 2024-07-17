import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";




export class DataUsersReport {

    @ApiProperty({ example: 'John', description: 'First Name of User' })
    @IsString()
    firstName: string;


    @ApiProperty({ example: 'Doe', description: 'Last Name of User' })
    @IsString()
    lastName: string;


    @ApiProperty({ example: 'johnDoe@gmail.com', description: 'Email of User' })
    @IsString()
    email: string;


    @ApiProperty({ example: '9879879879', description: 'Document Number of User' })
    @IsString()
    documentNumber: string;


    @ApiProperty({ example: 1000, description: 'Amount of User' })
    @IsNumber()
    amount: number;
}