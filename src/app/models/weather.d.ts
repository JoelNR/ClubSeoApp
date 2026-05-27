export interface WeatherModel {
    apparent_temperature: number[]
    precipitation: number[]
    precipitation_probability: number[]
    relativehumidity_2m: number[]
    temperature_2m: number[] 
    time: string[]
    winddirection_10m: number[] 
    windgusts_10m: number[] 
    windspeed_10m: number[]
    weathercode: number[]
    cloudcover: number[]
    uv_index: number[]
}

export interface WeatherModelUnits {
    apparent_temperature: String
    precipitation: String
    precipitation_probability: String
    relativehumidity_2m: String
    temperature_2m: String 
    time: String 
    winddirection_10m: String 
    windgusts_10m: String 
    windspeed_10m: String
    weathercode: String
    cloudcover: String
    uv_index: String
}


export interface GetWeatherApiResponse{
    elevation: number
    generationtime_ms: number
    hourly: WeatherModel
    hourly_units: WeatherModelUnits
    latitude: number
    longitude: number
}