import { AsyncStorage } from "react-native";
import {STORAGE_KEY} from './constants'



 export const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        // We have data!!
        return(JSON.parse(value))
      }else{
          console.log('vacio!')
          return(null)
          
      }
     } catch (error) {
       // Error retrieving data
       console.log('error!:', error)
     }
  }
 export const  _storeData = async (data) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.log('error?:',error )
    }
  }