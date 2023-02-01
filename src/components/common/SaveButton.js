import React,{useState} from 'react'
import { FaSave } from "react-icons/fa"
import  {saveAs}  from 'file-saver'
import {useSelector} from 'react-redux'
import Modal from 'react-modal'

Modal.setAppElement("#root");
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

const SaveButton = () => {
    //const [fileName,setFileName] = useState("");
    let fileName = '';
    const [warningState, setWarningState] = useState(false);
    const [codeState,setCodeState] = useState(false);
    const {language,code} = useSelector((state) => state.compiler);
    const [modalIsOpen,setIsOpen] = useState(false);

    const openModal = () => {
        setWarningState(false);
        setCodeState(false)
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const saveFile = () => {
        if(fileName === "" || fileName === undefined) {
            setWarningState(true);
            return;
        } else {
            if(code === "" || code === undefined) {
                setCodeState(true);
            } else {
                var filename = fileName + "." + language;
                var blob = new Blob([code], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(blob, filename);
            }
        }
    }

    const file = (e) => {
        fileName= e.target.value;
    }

    return (
        <>
            <button className="user-smallButton bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
                <FaSave/>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >

                <div>
                    <button className='float-right text-lg' onClick={closeModal}>X</button>
                </div>
                <div className='clear-right text-center'>
                    Write down your file name
                </div>
                {
                    warningState &&
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Please enter filename.</strong>
                    </div>
                }
                {
                    codeState &&
                    <div className="mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">There is no entered code</strong>
                    </div>
                }
                <div className="mt-5">
                    <input onChange={file} type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                </div>
                <div className="mt-6">
                    <button onClick={saveFile} className="float-right px-6 py-2 bg-blue-600 text-white font-medium text-base leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                </div>
            </Modal>
        </>

    )
}

export default SaveButton
