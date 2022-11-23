export interface InitiationModel{
    id: string
    capacity: string
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