export default class HasherView {
	static get selectorDropFiles() {
		return '#drop-files';
	}

	static get selectorHashers() {
		return '#hashers';
	}

	static get selectorHash() {
		return '#hash';
	}

	static get markup() {
		return `
			<div class="hasher">
				<h5>Hasher</h5>
				<label for="drop-files">
					<span>Drop files here</span>
					<span>or</span>
					<span>Click to select</span>
					<input type="file" max="1" class="d-none" id="drop-files">
				</label>
				<label for="hashers">
				Hash algorithm:
					<select id="hashers">
						<option value="MD5">MD5</option>
						<option value="SHA1">SHA1</option>
						<option value="SHA256">SHA256</option>
						<option value="SHA512">SHA512</option>
					</select>
				</label>
			</div>
			<span>Calculated Hash:</span>
			<span id="hash"></span>
		`;
	}

	constructor(element) {
		this.element = element;
	}

	render() {
		this.bindToDOM();
		this.registerEvents();
	}

	bindToDOM() {
		this.element.innerHTML = HasherView.markup;
	}

	registerEvents() {
		const worker = new Worker('./worker.js');
		const hashers = this.element.querySelector(HasherView.selectorHashers);
		const hash = this.element.querySelector(HasherView.selectorHash);
		const dropFiles = this.element.querySelector(HasherView.selectorDropFiles);
		dropFiles.addEventListener('change', () => {
			const message = {
				type: hashers.value,
				file: dropFiles.files[0],
			};
			worker.postMessage(message);
		});

		hashers.addEventListener('change', () => {
			if (!dropFiles.files[0]) return;
			const message = {
				type: hashers.value,
				file: dropFiles.files[0],
			};
			worker.postMessage(message);
		});

		worker.addEventListener('message', (event) => {
			hash.textContent = event.data;
		});
	}
}
