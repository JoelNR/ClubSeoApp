import { ProfileModel } from "./profile"

export interface CompetitionModel{
    id: string
    description: string
    title: string
    modality: string
    place: string
    date: string
    price: number
    image: string
}

export interface CompetitionArcherModel{
    archer: ProfileModel
    category: string
    distance: number
    target_number?: number
    target_letter?: string
}


export interface GetCompetitionApiResponse{
    data: {
        message: string
        success: boolean
        competitions: CompetitionModel[]
    }
}

export interface GetCompetitionByIdApiResponse{
    data: {
        message: string
        success: boolean
        competitions: CompetitionModel
        usersArray?: CompetitionArcherModel[]
    }
}

export interface GetCompetitionTargetByIdApiResponse{
    data: {
        message: string
        success: boolean
        competitions: CompetitionModel
        archers?: CompetitionArcherModel[]
    }
}
