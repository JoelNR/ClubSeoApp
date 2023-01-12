export interface ArrowModel{
    id: string
    points: string
    user_id: string
    set_id: string
}
export interface SetModel{
    id: string
    points: string
    user_id: string
    round_id: string
}

export interface RoundModel{
    id: string
    points: string
    user_id: string
    score_id: string
}

export interface ScoreModel{
    id: string
    points: string
    user_id: string
    competition_id: string
}

export interface GetSetApiResponse{
    data: {
        message: string
        success: boolean
        set: SetModel
        arrows: ArrowModel[]
    }
}

export interface GetSetByIdApiResponse{
    data: {
        message: string
        success: boolean
        set: SetModel
        arrows: ArrowModel[]
    }
}

export interface GetRoundApiResponse{
    data: {
        message: string
        success: boolean
        rounds: RoundModel[]
    }
}

export interface GetRoundSetsApiResponse{
    data: {
        message: string
        success: boolean
        sets: [{set: SetModel,
        arrows: ArrowModel[]}]
    }
}

export interface GetScoreApiResponse{
    data: {
        message: string
        success: boolean
        score: ScoreModel
    }
}