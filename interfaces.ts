export interface ResponseLocation {
	id: number
	name: string
	region: string
	country: string
	lat: number
	lon: number
	url: string
}

export interface CurrentLocation {
	location: {
		name: string
		region: string
		country: string
		lat: number
		lon: number
		tz_id: string
		localtime_epoch: number
		localtime: Date
	}
	current: {
		last_updated_epoch: number
		last_updated: '2023-09-04 15:15'
		temp_c: number
		temp_f: number
		is_day: number
		condition: {
			text: string
			icon: string
			code: number
		}
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
}
