export interface News{
    id: string
    title: string
    content: string
    date: string
    image: string
}

export interface GetNewsApiResponse{
    data: {
        message: string
        success: boolean
        news: News[]
    }
}

export interface GetNewsByIdApiResponse{
    data: {
        message: string
        success: boolean
        news: News
    }
}