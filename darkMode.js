btn = document.querySelector('.button-4')
icon = document.querySelector('#icon')

btn.addEventListener('click', darkMode)

icon_light_classes = [
	'fa-solid',
	'fa-sun'
]

icon_dark_classes = [
	'fa-solid',
	'fa-moon'
]

function darkMode() {

	document.body.classList.toggle('dark')

	if(document.body.classList.contains('dark')) {

		icon_light_classes.forEach((CLASS) => {
			icon.classList.remove(CLASS)
		})
		icon_dark_classes.forEach((CLASS) => {
			icon.classList.add(CLASS)
		})

		localStorage.setItem('mode', document.body.classList)
		localStorage.setItem('iconClass', icon.classList)
	} else {

		icon_dark_classes.forEach((CLASS) => {
			icon.classList.remove(CLASS)
		})
		icon_light_classes.forEach((CLASS) => {
			icon.classList.add(CLASS)
		})
		localStorage.setItem('mode', document.body.classList)
		localStorage.setItem('iconClass', icon.classList)
	}
}

if(localStorage.getItem('mode') !== '') {
	document.body.classList.add(localStorage.getItem('mode'))

	// reset icon's class and adding classes in localStorage
	icon.classList = ''
	icon.classList = localStorage.getItem('iconClass')
}