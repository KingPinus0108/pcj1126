import React, { useState,useEffect,useRef} from "react";
import { useDispatch,useSelector } from "react-redux";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import {setCodeContent} from '../../slices/compiler'

const hightlightWithLineNumbers = (input, language) =>
        highlight(input, language)
          .split("\n")
          .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
          .join("\n");

const EditTextarea = () => {
      const dispatch = useDispatch();
      const code = useSelector(state => state.compiler.code);
      const inputElement = useRef();
      const areaFocus = () => {
        inputElement.current._input.focus();
      } 
     const valueChanged = (data) => {
      dispatch(setCodeContent(data));
     }
        return (
          <div className="editor2 w-[100%]" onClick={areaFocus}>
                <div>
                  <div className="scroller">
                    <Editor
                      ref={inputElement} 
                      autoFocus={true}
                      textareaId="codeArea"
                      value={code}
                      onValueChange={valueChanged}
                      style={{border:'0px!important'}}
                      highlight={code => hightlightWithLineNumbers(code, languages.js)}
                      className="
                        editor1
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
                        dark:focus:border-blue-500
                      "
                    />
                  </div>
                </div>
          </div>
        );
}

export default EditTextarea
