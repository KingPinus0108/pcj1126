import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CompilerService from "../services/compilerService"


export const codeRun = createAsyncThunk(
    'compiler/codeRun',
    async (inputValue,thunkAPI) => {
         const response = await CompilerService.codeRun(inputValue);
         return response.data;
    }
);

const initialState = {language:'',code:'',result:'',runStatus: 'Run'};
const compilerSlice = createSlice({
    name: 'compiler',
    initialState,
    reducers: {
        setLanguage: (state,action) => {
            return {...state,language: action.payload};
        },
        setCodeContent: (state,action) => {
            return {...state,code:action.payload}
        }
    },
    extraReducers: {
        [codeRun.fulfilled]: (state, action) => {

            if(action.payload.memory && action.payload.cpuTime) {
                return {...state,result: `Memory Used: ${action.payload.memory} \nCPU Time: ${action.payload.cpuTime} \n${action.payload.output}`}
            } else  {
                return {...state,result:action.payload.output, runStatus: 'Run'}
            }
        },
        [codeRun.pending]: (state, action) => {
           return {...state,runStatus:'Loading...'}
        },
        [codeRun.rejected]: (state, action) => {

        },
    }
});

const {reducer,actions} = compilerSlice;
export const {setLanguage,setCodeContent} = actions;
export default reducer;
