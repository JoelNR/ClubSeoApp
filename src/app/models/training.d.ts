export interface TrainingModel{
    id: string
    title: string
    modality: string
    category: string
    date: string
    distance: number
    points: number
}


export interface GetTrainingApiResponse{
    data: {
        message: string
        success: boolean
        training: TrainingModel[]
    }
}

export interface StoreTrainingApiResponse{
    data: {
        message: string
        success: boolean
        training: TrainingModel
    }
}