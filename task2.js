let order = document.getElementById('order-form')
let orderTable = document.getElementById('order-table')
let orders = []
let cars = {
	"dish" : "Potato",
	"time" : "19:28",
	"address" : "wguisf",
	"telephone" : "302645515"

}

	drawOrder(cars);

order.addEventListener("submit", function (event) {
	event.preventDefault()
	let order = {
		dish : event.target['dish'].value,
		time : event.target['time'].value,
		address : event.target['address'].value,
		telephone : event.target['telephone'].value,
	}
	event.target.reset()
	orders.push(order)
	drawOrder(order)
})
function drawOrder(order) {
	let tr = document.createElement('tr')
	tr.innerHTML =`
	<td> ${order.dish}</td>
	<td> ${order.time}</td>
	<td> ${order.address}</td>
	<td> ${order.telephone}</td>`

	orderTable.appendChild(tr)
}
	
