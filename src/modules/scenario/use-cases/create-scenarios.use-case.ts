import { Injectable } from "@nestjs/common";
import { CreateScenarioRepository } from "../repository/create-scenario.repository";
import { CreateScenarioDto } from "../dto/create-scenario.dto";


@Injectable()
export class CreateScenarioUseCase {
    constructor(
        private readonly createScenarioRepository: CreateScenarioRepository,
    ) {}

    async execute(data: CreateScenarioDto) {
        try {

            const scenario = await this.createScenarioRepository.create(data);
            
        } catch (error) {}
    }
}

