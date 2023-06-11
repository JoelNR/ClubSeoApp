export interface TrainingModel{
    id: string
    title: string
    modality: string
    category: string
    date: string
    distance: number
    points?: number
    user_id: string
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