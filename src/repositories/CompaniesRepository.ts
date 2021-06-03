import { EntityRepository, Repository } from "typeorm";
import { Company } from "../entities/Company"

@EntityRepository(Company)
class CompaniesRepository extends Repository<Company>{}

export { CompaniesRepository }