import { createSlice } from '@reduxjs/toolkit'

export const setLanguageSlice = createSlice({
  name: 'compiler',
  initialState: {
    language: "js",
    code:"",
    run:false,
    output:""
    
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload.language
    },
    setCode: (state, action) => {
        state.code = action.payload.code
      },

      runCode: (state, action) => {
        state.run = action.payload.run
      },


      setOutput: (state, action) => {
        state.output = action.payload.output
      },

  },
})

// Action creators are generated for each case reducer function
export const { setLanguage ,setCode ,runCode ,setOutput } = setLanguageSlice.actions

export default setLanguageSlice