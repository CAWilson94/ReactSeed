/** 
 * Reading - https://github.com/alan2207/bulletproof-react/blob/master/src/stores/notifications.ts
 */
import { createContext } from 'react';


export interface contextType { 
    value: string, 
    setValue: React.Dispatch<React.SetStateAction<string>>
  } 

export const UserContext = createContext<contextType | undefined>(undefined);