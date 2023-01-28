/**
 * 
 * @param max limitaion the random number
 * @returns random number between 0 to max
 */
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max))
}