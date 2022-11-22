
export interface ProfileModel {
    first_name: string
    last_name: string
    category: string
    user_id: string
    image: string
}

export interface GetProfileApiResponse{
    data: {
        telephone: string
        email: string  
        message: string
        profile: ProfileModel      
        success: boolean
    }
}

export interface GetAllProfileApiResponse{
    data: {
        message: string
        profiles: ProfileModel[]    
        success: boolean
    }
}