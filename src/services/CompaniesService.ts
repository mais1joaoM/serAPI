import { getCustomRepository, Repository } from "typeorm"
import { Company } from "../entities/Company"
import { CompaniesRepository } from "../repositories/CompaniesRepository"

interface ICompaniesCreate{
    address: string,
    cnpj: string,
    companyname: string,
    phone: string,
    email: string
}

class CompaniesService {

    private companiesRepository : Repository<Company>

    constructor(){
        this.companiesRepository = getCustomRepository(CompaniesRepository)
    }

    async create({ address, cnpj, companyname, phone, email } : ICompaniesCreate){

        const companyAlreadyExists = await this.companiesRepository.findOne({ cnpj })

        if(companyAlreadyExists){
            throw new Error("Company Already Exists")
        }

        const company = this.companiesRepository.create({
            address,
            cnpj,
            companyname,
            phone,
            email
        })

        await this.companiesRepository.save(company)

        return company;

    }

}

export { CompaniesService }