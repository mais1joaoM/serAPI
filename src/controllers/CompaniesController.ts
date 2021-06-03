import { request, Request, Response } from "express"
import { CompaniesService } from "../services/CompaniesService"

class CompaniesController{

    async create( request: Request, response: Response ){

        const { address, cnpj, companyname, phone, email } = request.body

        const companiesService = new CompaniesService

        try{
            const companies = await companiesService.create({ address, cnpj, companyname, phone, email })

            return response.json(companies)
        }catch(err){
            return response.status(400).json({
                message: err.message,
            })
        }
    }

}

export { CompaniesController }


