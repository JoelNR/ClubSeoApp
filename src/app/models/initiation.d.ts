export interface InitiationModel{
    id: string
    capacity: number
    date: string
}

export interface GetInitiationApiResponse{
    data: {
        message: string
        success: boolean
        initiationDates: InitiationModel[]
    }
}

export interface GetInitiationByIdApiResponse{
    data: {
        message: string
        success: boolean
        initiationDates: InitiationModel
    }
}