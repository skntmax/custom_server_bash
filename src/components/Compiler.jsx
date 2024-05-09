'use client'
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import Editor from '@monaco-editor/react';
import { useDispatch } from 'react-redux';
import { setCode } from '@/lib/compiler';


function Compiler() {
  let dispatch = useDispatch()
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
        alert(editorRef.current.getValue());
  } 
   
  
  return (
    <div>
      <Editor
        theme="vs-dark"
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        onChange={(value , editor)=>{
          
          dispatch(setCode({
            code:value
          }))
           
        }}
      />
    </div>
  )
}

export default Compiler
