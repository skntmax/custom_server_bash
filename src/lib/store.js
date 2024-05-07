import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slice'
import setLanguageSlice from './compiler'

export default configureStore({
  reducer: { 
   setLanguage:setLanguageSlice.reducer
  } ,
  
})


