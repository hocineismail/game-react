/**
 * 
 * @param fight 2 Units choose by player and compter (randomly)
 * it should make : between units
 * @returns return score of this round Cavalry defeat Archers we got [1,-1]
 */
export const getScore = (fight: string): number[] => {
    switch (fight) {
        case "Cavalry:Archers": {
          return [1,-1]
          
        }
        case "Archers:Pikemen": {
            return [1,-1]
        }
        case "Pikemen:Cavalry": {
            return [1,-1]
        }
        case "Cavalry:Pikemen": {
            return [-1, 1]
        }
        case "Archers:Cavalry": {
            return [-1, 1]
        }
        case "Pikemen:Archers": {
            return [-1, 1]
        }
        default: {
            return [-1, -1]
        }
      }
  }