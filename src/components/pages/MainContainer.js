import React,{useRef} from "react"
import SelectList from "../common/SelectList"
import RunButton from "../common/RunButton"
import OpenButton from "../common/OpenButton"
import SaveButton from "../common/SaveButton"
import EditTextarea from "../common/EditTextarea"
import ResultTextarea from "../common/ResultTextarea"
import { useDispatch } from "react-redux"
import {setCodeContent} from '../../slices/compiler'

const MainContainer = () => {

    const inputFile = useRef(null);
    const onButtonClick = () => {
        inputFile.current.click();
    };
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const file = e.target.files[0];

        let reader = new FileReader();

        reader.onload = (e) => {
          const file = e.target.result;
          dispatch(setCodeContent(file));
        };

        reader.onerror = (e) => alert(e.target.error.name);
        try{
            reader.readAsText(file);
        } catch(e) {

        }

    };

    return (
        <div className="user-container">
            <div className="flex flex-wrap justify-between">
                <div className="self-end grow max-sm:w-full">
                    <SelectList />
                </div>
                <div className="self-end grow flex justify-center ml-9 max-sm:my-2">
                    <RunButton/>
                </div>
                <div className="self-end grow flex flex-wrap justify-around">
                    <div className="self-end">
                        <h1 className="font-extrabold text-gray-900 dark:text-white lg:text-3xl sm:text-2xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                                ADS Softek
                            </span>
                        </h1>
                    </div>
                    <div>
                        <React.Fragment>
                            <input type='file' id='file' onChange={handleChange} ref={inputFile} style={{display: 'none'}}/>
                            <OpenButton onButtonClick={onButtonClick}/>
                        </React.Fragment>
                        <SaveButton />
                    </div>
                </div>
            </div>
            <div className="flex flex-row max-sm:flex-wrap gap-4">
                <div className="md:w-[50%] max-md:w-[100%]">
                    <EditTextarea/>
                </div>
                <div className="md:w-[50%] max-md:w-[100%]">
                    <ResultTextarea/>
                </div>
            </div>

        </div>
    )
}

export default MainContainer
