import { EntityRepository, Repository } from "typeorm";
import { Calculation } from "../entities/Calculation"

@EntityRepository(Calculation)
class CalculationsRepository extends Repository<Calculation>{}

export { CalculationsRepository }