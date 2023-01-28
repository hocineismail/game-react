import { units } from "../data/units"
import { getRandomInt } from "./getRandomInt"
/**
 * 
 *  we will increase probability of choice to [50/100, 25/100, 25/100]
 * @returns should return like that ex: ["one", "one", "two", "three"]
 */

export const createDistribution = (): string[] => {
 let index: number = getRandomInt(3)
 let distribution: string[] = [...units, units[index]]
 return distribution
}