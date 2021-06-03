import { getCustomRepository, Repository } from "typeorm"
import { Calculation } from "../entities/Calculation"
import { Company } from "../entities/Company"
import { CalculationsRepository } from "../repositories/CalculationsRepository"
import { CompaniesRepository } from "../repositories/CompaniesRepository"

interface ICalculationsCreate{

    readingOne: number,
    readingTwo: number,
    readingThree: number,
    readingFour: number,
    readingFive: number,
    defaultValue: number,
    ures: number,
    udefault: number,
    weightedAverage: number,
    errorDefault: number,
    ue: number,
    company_id: string

}

class CalculationsService{

    private calculationsRepository : Repository<Calculation>
    private companiesRepository : Repository<Company>


    constructor(){
        this.calculationsRepository = getCustomRepository(CalculationsRepository)
        this.companiesRepository = getCustomRepository(CompaniesRepository)
    }

    async createCalc({

        readingOne,
        readingTwo,
        readingThree,
        readingFour,
        readingFive,
        defaultValue,
        ures,
        udefault,
        weightedAverage,
        errorDefault,
        ue,
        company_id

    } : ICalculationsCreate){

        //TODO O CODIGO DE CALCULO
        let v1, v2, v3, v4, v5, g, vpr, s, ua, h1, hf, calcUpadrao, quadUc, quadUc1, quadUc2, quadR, uc
        /**
         * Calculo para encontrar o valor padrão
         */
        weightedAverage = readingOne+readingTwo+readingThree+readingFour+readingFive;
        weightedAverage = weightedAverage/5;
        /**
         * Calculo para encontrar o erro
         */
        errorDefault = defaultValue - weightedAverage;
        /**
         * Calculo para desvio padrão
         */
        v1 = (readingOne-weightedAverage)*(readingOne-weightedAverage)
        v2 = (readingTwo-weightedAverage)*(readingTwo-weightedAverage)
        v3 = (readingThree-weightedAverage)*(readingThree-weightedAverage)
        v4 = (readingFour-weightedAverage)*(readingFour-weightedAverage)
        v5 = (readingFive-weightedAverage)*(readingFive-weightedAverage)

        g = v1+v2+v3+v4+v5

        vpr = 0.25*g

        s = Math.sqrt(vpr)

        ua = s/2.236

        h1 = ures/1.73

        hf = h1/2

        calcUpadrao = udefault/2

        quadUc = ua*ua
        quadUc1 = hf*hf
        quadUc2 = calcUpadrao*calcUpadrao

        quadR = quadUc+quadUc1+quadUc2
        uc = Math.sqrt(quadR)

        ue = uc*2

        let cnpj = company_id
        const companyExists = await this.companiesRepository.findOne({ cnpj })

        if(companyExists){

            const result = this.calculationsRepository.create({

                readingOne,
                readingTwo,
                readingThree,
                readingFour,
                readingFive,
                defaultValue,
                ures,
                udefault,
                weightedAverage,
                errorDefault,
                ue,
                company_id,
            })
    
            await this.calculationsRepository.save(result)
    
            return result

        }else{
            console.log("CNPJ não cadastrado: ",company_id)
        }
        

    }

}

export { CalculationsService }