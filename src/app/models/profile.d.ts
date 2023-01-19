import { CompetitionModel } from "./competition"

export interface ProfileModel {
    first_name: string
    last_name: string
    category: string
    user_id: string
    image: string
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

export interface GetProfileCompetitionApiResponse{
    data: {
        competitions: ProfileCompetitions[]
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