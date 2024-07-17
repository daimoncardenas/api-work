import { IsEmail, IsString } from 'class-validator';
import { DataUsersReport } from './reports-info.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReportDto {

    @ApiProperty({ example: '9879879879fsddfsd98dsfsdfds', description: 'Id Report' })
    @IsString()
    reportId: string;

    @ApiProperty({ example: '9879879879fsddfsd98dsfsdfds', description: 'Id Platform' })
    @IsString()
    platformId?: string;

    @ApiProperty({ example: '9879879879fsddfsd98dsfsdfds', description: 'Id Deposit' })
    @IsString()
    depositId?: string;

    @ApiProperty({ example: '2021-10-10', description: 'Date of report' })
    @IsString()
    reportDate?: Date;

    @ApiProperty({
        example: '[{firstName: string,lastName: string,email: string,documentNumber: string,amount: number}]', description: 'Info of report'
    })
    @IsString()
    reportInfo?: DataUsersReport[];

    @ApiProperty({ example: '9879fdfds9d', description: 'Password of User' })
    @IsString()
    password: string;

    @ApiProperty({ example: 'johndoe@gmail.com', description: 'Email of User' })
    @IsEmail()
    email: string;


}
