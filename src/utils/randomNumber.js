export const randomInteger = (min = 1, max = 6) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};
