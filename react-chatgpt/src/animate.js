let _tags = [];
let _fn;
function startAnimation(tag, tags, img, src, animLength, fps, animFrame = 0, initial = null) {
	let drawFrame = 0;
	console.log(!_tags.includes(tag), tag);
	if (_tags.includes(tag)) return;
	_tags = tags;
	if (initial !== null) {
		img.src = src.replaceAll('%s', String(initial).padStart(2, '0'));
	}
	function step(ts) {
		if (!_tags.includes(tag)) return;
		drawFrame++;
		if (drawFrame % fps) {
			window.requestAnimationFrame(step);
			return;
		}
		animFrame++;
		if ((animFrame + 1) > animLength) {
			_tags = [];
			img.dispatchEvent(new Event('animationEnded'));
			return;
		}
		img.src = src.replaceAll('%s', String(animFrame).padStart(2, '0'));
		window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
}
const resetAnimation = img => img.src = img.dataset.initialFrameSrc;
function loopAnimation(img, fn) {
	if (_fn) img.removeEventListener("animationEnded", _fn);
	_fn = fn;
	img.addEventListener("animationEnded", fn);
}
export { startAnimation, resetAnimation, loopAnimation };
