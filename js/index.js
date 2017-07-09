var Peer = require('simple-peer')
var peer = new Peer({
	initiator: location.hash === '#init',
	trickle: false
})

peer.on('signal', function (data) {
	document.getElementById('yourId').value = JSON.stringify(data)
})