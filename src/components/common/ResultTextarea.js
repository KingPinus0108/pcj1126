import React from 'react'
import { useSelector } from 'react-redux'

const ResultTextarea = () => {

    const result = useSelector(state=> state.compiler.result);
    return (
        <textarea
                id='editText' 
                rows="25" 
                value = {result} 
                readOnly={true}   
                className="
                user-textarea
                block
                p-2.5
                w-full 
                text-sm 
                text-gray-900 
                bg-gray-50 
                rounded-lg 
                border 
                border-gray-300 
                focus:ring-blue-500 
                focus:border-blue-500 
                dark:bg-gray-700 
                dark:border-gray-600 
                dark:placeholder-gray-400 
                dark:text-white 
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500">
        </textarea>
    )
}

export default ResultTextarea