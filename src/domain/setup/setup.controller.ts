import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { SetupService } from "./setup.service";
import { SetupCreateRequestDTO } from "./dto/request/setup.create";
import { Setup } from "./entities/setup.entities";

@Controller('setup')
export class SetupController {
    constructor(private readonly setupService: SetupService) {}

    @Post()
    async create(@Body() dto: SetupCreateRequestDTO): Promise<Setup> {
        return await this.setupService.createSetup(dto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Setup> {
        return await this.setupService.findOneById(id);
    }
}