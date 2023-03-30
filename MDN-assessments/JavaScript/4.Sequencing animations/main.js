const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// 1.works, but has the promise version of the "callback hell"
// const alice1Promise = alice1.animate(aliceTumbling, aliceTiming).finished;

// alice1Promise.then(() => {
//   const alice2Promise = alice2.animate(aliceTumbling, aliceTiming).finished;
//   alice2Promise.then(() => {
//     alice3.animate(aliceTumbling, aliceTiming);
//   })
// });

// 2.promise chain
// const alice1Promise = alice1.animate(aliceTumbling, aliceTiming).finished;

// alice1Promise
//   .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//   .then(() => alice3.animate(aliceTumbling, aliceTiming));

// 3.async and await
async function aliceAnimation() {
  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  alice3.animate(aliceTumbling, aliceTiming);
}

aliceAnimation();