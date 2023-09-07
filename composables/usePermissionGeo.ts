import { UserCoordinates } from '~/interfaces'
import { useSearchStore } from '~/stores/search'

export const usePermissionGeo = () => {
	const store = useSearchStore()
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(
			async function (position) {
				const latitude = position.coords.latitude
				const longitude = position.coords.longitude
				let coordinates: UserCoordinates = {
					lat: String(latitude),
					lon: String(longitude),
				}
				await store.getCurrentUserLocationWeather(coordinates)
			},
			function (error) {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						console.log('User denied access to geolocation')
						break
					case error.POSITION_UNAVAILABLE:
						console.log('Інформація про геолокацію недоступна')
						break
					case error.TIMEOUT:
						console.log('Час вичерпано для отримання інформації про геолокацію')
						break
				}
			}
		)
	} else {
		console.log('Геолокація не підтримується в цьому браузері')
	}
}
