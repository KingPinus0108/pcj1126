import React from 'react'
import { FaFolderOpen } from "react-icons/fa"

const OpenButton = ({onButtonClick}) => {    
    return (
        <button className="user-smallButton bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={onButtonClick}>
            <FaFolderOpen/>
        </button>
    )
}

export default OpenButton