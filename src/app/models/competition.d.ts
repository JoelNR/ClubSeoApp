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

export interface GetNewsApiResponse{
    data: {
        message: string
        success: boolean
        news: CompetitionModel[]
    }
}

export interface GetNewsByIdApiResponse{
    data: {
        message: string
        success: boolean
        news: CompetitionModel
    }
}