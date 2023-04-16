importScripts('/crypto-js.js');
self.addEventListener('message', (event) => {
	const reader = new FileReader();
	reader.addEventListener('load', (eventReader) => {
		const content = eventReader.target.result;
		const wordArray = CryptoJS.lib.WordArray.create(content);
		let hash;
		switch (event.data.type) {
		case 'MD5':
			hash = CryptoJS.MD5(wordArray);
			break;
		case 'SHA1':
			hash = CryptoJS.SHA1(wordArray);
			break;
		case 'SHA256':
			hash = CryptoJS.SHA256(wordArray);
			break;
		case 'SHA512':
			hash = CryptoJS.SHA512(wordArray);
			break;
		default:
			console.error('Передан не верный тип хэширования');
		}
		self.postMessage(hash.toString());
	});

	reader.readAsArrayBuffer(event.data.file);
});
