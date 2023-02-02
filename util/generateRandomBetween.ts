export const generateRandomBetween: Function = (
  min: number,
  max: number,
  exclude: number
) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};
