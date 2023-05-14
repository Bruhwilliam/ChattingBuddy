import { startAnimation, resetAnimation, loopAnimation } from '../animate.js';
function animateIdle() {
	console.log(1);
	const img = document.getElementById('otter');
	const src = `assets/Sleep_sprite_%s.png`;
	loopAnimation(img, function () {
		resetAnimation(img);
		startAnimation("IDLE", ["INTRO_IDLE", "IDLE"], img, src, 2, 240, 0, 0);
	});
	startAnimation("INTRO_IDLE", ["INTRO_IDLE"], img, src, 2, 240, 0);
}
function animateEat() {
	const img = document.getElementById('otter');
	const src = `assets/sprite_%s.png`;
	loopAnimation(img, function () {
		setTimeout(() => resetAnimation(img), 1_000);
	});
	startAnimation("INTRO_EAT", ["INTRO_EAT"], img, src, 32, 10, 0);
}
function animateSleep() {
	console.log(2);
	const img = document.getElementById('otter');
	const src = `assets/Sleep_sprite_%s.png`;
	loopAnimation(img, function () {
		startAnimation("SLEEP", ["INTRO_SLEEP", "SLEEP"], img, src, 12, 60, 7, 11);
	});
	startAnimation("INTRO_SLEEP", ["INTRO_SLEEP"], img, src, 12, 30, 0);
}
export { animateIdle, animateEat, animateSleep };
