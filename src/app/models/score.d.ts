
export interface SetModel{
    id: string
    points: string
    arrows: string[]
    user_id: string
    round_id: string
}

export interface RoundModel{
    id: string
    points: string
    sets: string[]
    user_id: string
    score_id: string
}

export interface ScoreModel{
    id: string
    points: string
    rounds: string[]
    user_id: string
    competition_id: string
}

export interface GetSetApiResponse{
    data: {
        message: string
        success: boolean
        competitions: SetModel[]
    }
}

export interface GetSetByIdApiResponse{
    data: {
        message: string
        success: boolean
        competitions: SetModel
    }
}