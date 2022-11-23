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
    }
}