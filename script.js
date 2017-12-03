// if browser support Service Worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js').then(function() {
		console.log('Service Worker was Registred successfuly!');
	})
	.catch(function(err) {
		console.log('Service Worker registaration error: ', err);
	});
}