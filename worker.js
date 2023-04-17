// eslint-disable-next-line no-undef
importScripts('crypto-js.js');
// eslint-disable-next-line no-restricted-globals
self.addEventListener('message', (event) => {
	const reader = new FileReader();
	reader.addEventListener('load', (eventReader) => {
		const content = eventReader.target.result;
		// eslint-disable-next-line no-undef
		const wordArray = CryptoJS.lib.WordArray.create(content);
		let hash;
		switch (event.data.type) {
		case 'MD5':
			// eslint-disable-next-line no-undef
			hash = CryptoJS.MD5(wordArray);
			break;
		case 'SHA1':
			// eslint-disable-next-line no-undef
			hash = CryptoJS.SHA1(wordArray);
			break;
		case 'SHA256':
			// eslint-disable-next-line no-undef
			hash = CryptoJS.SHA256(wordArray);
			break;
		case 'SHA512':
			// eslint-disable-next-line no-undef
			hash = CryptoJS.SHA512(wordArray);
			break;
		default:
			// eslint-disable-next-line no-console
			console.error('Передан не верный тип хэширования');
		}
		// eslint-disable-next-line no-restricted-globals
		self.postMessage(hash.toString());
	});

	reader.readAsArrayBuffer(event.data.file);
});
