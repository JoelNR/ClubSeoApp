import { CompetitionModel } from "./competition"

export interface ProfileModel {
    first_name: string
    last_name: string
    category: string
    user_id: string
    image: string
    is_member?: boolean
}

export interface GetProfileApiResponse{
    data: {
        telephone: string
        email: string  
        message: string
        profile: ProfileModel      
        success: boolean
    }
}

export interface ProfileCompetitions{
    competition: CompetitionModel
    category: string
    distance: number
    points: number
    place: number
}

export interface ProfileRecords {
    competition: CompetitionModel
    record: {category: string
            distance: number
            points: number
            modality: string}
}

export interface GetProfileCompetitionApiResponse{
    data: {
        competitions: ProfileCompetitions[]
        message: string
        success: boolean
    }
}

export interface GetProfileStatsApiResponse{
    data: {
        competitions: number,
        tens: number,
        x: number,
        avarage: number,
        podiums: number,
        nines: number,
        message: string
        success: boolean
    }
}
export interface GetProfileRecordsApiResponse{
    data: {
        records: ProfileRecords[]
        message: string
        success: boolean
    }
}

export interface GetAllProfileApiResponse{
    data: {
        message: string
        profiles: ProfileModel[]    
        success: boolean
    }
}