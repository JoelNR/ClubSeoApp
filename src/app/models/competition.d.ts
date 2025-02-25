import { ProfileModel } from "./profile"

export interface CompetitionModel{
    description: string
    title: string
    modality: string
    date: string
    image: string
    link: string
}

export interface CompetitionArcherModel{
    archer: ProfileModel
    category: string
    distance: number
    target_number?: number
    target_letter?: string
    points?: number
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


export interface Records {
    category: string
    distance: number
    points: number
    modality: string
    archer: string
    canary: boolean
}

export interface GetRecordsApiResponse{
    data: {
        outdoor_records: Records[]
        indoor_records: Records[]
        message: string
        success: boolean
    }
}