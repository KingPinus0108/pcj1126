import React from "react"
import { FaPlay } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import {codeRun} from "../../slices/compiler";

const RunButton = () => {

    const textStyle = {
        marginTop: '3px'
    }
    
    const {language,code,runStatus} = useSelector(state => state.compiler);
 
    const dispatch = useDispatch();
    const compiler = () => {
        if(code) {
            dispatch(codeRun({language,code}));
        } else {
            return;
        }
    }
    
    return (
        <button onClick={compiler} disabled={runStatus === 'Loading...'? true:false}  className="user-runButton bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-5 rounded">
            <div className="flex justify-center gap-2">
                { runStatus === "Run" && <div style={textStyle}><FaPlay/></div>}
                <div>{runStatus}</div>
            </div>
        </button>
    )
}

export default RunButton