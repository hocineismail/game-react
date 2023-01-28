import {useEffect, useState} from 'react'
import { createDistribution } from '../utils/createDistribution';

/**
 *  
 *  When the game start it should to distribute units for icrease probability for one of units to 50/100
*/
export default function useDistribution(): string[] {
    const [distribution, setDistribution] = useState<string[]>([]);
    useEffect(() => {
        let result = createDistribution();
        setDistribution(result)
    },[setDistribution])
  return  distribution
}