import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SetupCreateRequestDTO } from './dto/request/setup.create';
import { Setup } from './entities/setup.entities';
import { Repository } from 'typeorm';

@Injectable()
export class SetupService {
    constructor(
        @InjectRepository(Setup)
        private readonly setupRepository: Repository<Setup>,
    ) {}

    async createSetup(dto: SetupCreateRequestDTO): Promise<Setup> {
        const setup = this.setupRepository.create({
            progress: dto.progress,
            study_time: dto.study_time,
            level: dto.level,
            levelPrefer: dto.levelPrefer,
            user_id: dto.user_id,
        });
        return await this.setupRepository.save(setup);
    }

    async findOneById(id: string): Promise<Setup> {
        const setup = await this.setupRepository.findOne({ where: { id } });
        if (!setup) {
            throw new NotFoundException(`Setup with id ${id} not found`);
        }
        return setup;
    }
}