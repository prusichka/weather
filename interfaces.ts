export interface UserCoordinates {
	lat: string
	lon: string
}
export interface ResponseLocationsFound {
	id: number
	name: string
	region: string
	country: string
	lat: number
	lon: number
	url: string
}

export interface ResponseWeatherLocation {
	name: string
	region: string
	country: string
	lat: number
	lon: number
	tz_id: string
	localtime_epoch: number
	localtime: string
}

export interface ResponseWeatherInformation {
	last_updated_epoch: number
	last_updated: '2023-09-04 15:15'
	temp_c: number
	temp_f: number
	is_day: number
	condition: ReponseWeatherCondition
	wind_mph: number
	wind_kph: number
	wind_degree: number
	wind_dir: 'E'
	pressure_mb: number
	pressure_in: number
	precip_mm: number
	precip_in: number
	humidity: number
	cloud: number
	feelslike_c: number
	feelslike_f: number
	vis_km: number
	vis_miles: number
	uv: number
	gust_mph: number
	gust_kph: number
}

export interface ReceivedWeatherData {
	location: ResponseWeatherLocation
	current: ResponseWeatherInformation
}

export interface ResponseWeatherForecastHour {
	time_epoch: number
	time: string
	temp_c: number
	temp_f: number
	is_day: number
	condition: ReponseWeatherCondition
	wind_mph: number
	wind_kph: number
	wind_degree: number
	wind_dir: 'ENE'
	pressure_mb: number
	pressure_in: number
	precip_mm: number
	precip_in: number
	humidity: number
	cloud: number
	feelslike_c: number
	feelslike_f: number
	windchill_c: number
	windchill_f: number
	heatindex_c: number
	heatindex_f: number
	dewpoint_c: number
	dewpoint_f: number
	will_it_rain: number
	chance_of_rain: number
	will_it_snow: number
	chance_of_snow: number
	vis_km: number
	vis_miles: number
	gust_mph: number
	gust_kph: number
	uv: number
}

export interface ResponseWeatherForecastDay {
	date: '2023-09-05'
	date_epoch: 1693872000
	day: ResponseWeatherForecastFullDay
	astro: ResponseWeatherAstro
	hour: ResponseWeatherForecastHour[]
}

export interface ResponseWeatherAstro {
	sunrise: string
	sunset: string
	moonrise: string
	moonset: string
	moon_phase: string
	moon_illumination: string
	is_moon_up: number
	is_sun_up: number
}

export interface ResponseWeatherForecastFullDay {
	maxtemp_c: number
	maxtemp_f: number
	mintemp_c: number
	mintemp_f: number
	avgtemp_c: number
	avgtemp_f: number
	maxwind_mph: number
	maxwind_kph: number
	totalprecip_mm: number
	totalprecip_in: number
	totalsnow_cm: number
	avgvis_km: number
	avgvis_miles: number
	avghumidity: number
	daily_will_it_rain: number
	daily_chance_of_rain: number
	daily_will_it_snow: number
	daily_chance_of_snow: number
	condition: ReponseWeatherCondition
	uv: number
}

export interface ReponseWeatherCondition {
	text: string
	icon: string
	code: number
}

export interface ResponseWeatherForecastBody extends ReceivedWeatherData {
	forecast: {
		forecastday: ResponseWeatherForecastDay[]
	}
}
export interface AirConditionsToShowSmall {
	icon: string
	title: string
	value: string
	id: number
}
