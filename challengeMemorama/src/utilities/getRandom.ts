// generate a random number
export const randomTil = (max: number): number =>
  Math.ceil(Math.random() * max);

// generate an array of random numbers
export const randomNtimes = (times: number, max: number): number[] => {
  const arr: number[] = [];
  while (times) {
    arr.push(randomTil(max));
    times--;
  }
  return arr;
};

// duplicate array
export const shuffleArray = (arr: any[]) => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const rand_index = Math.floor(Math.random() * length);

    const rand = arr[rand_index];

    arr[rand_index] = arr[i];
    arr[i] = rand;
  }
  return arr;
};
