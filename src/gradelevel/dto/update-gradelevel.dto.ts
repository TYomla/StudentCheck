import { PartialType } from '@nestjs/mapped-types';
import { CreateGradelevelDto } from './create-gradelevel.dto';

export class UpdateGradelevelDto extends PartialType(CreateGradelevelDto) {}
