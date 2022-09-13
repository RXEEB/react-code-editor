import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";
import { EditorContext } from '../../context';

export const Csseditor = () => {

  const {css, setCss} = React.useContext(EditorContext )

  return (
    <AceEditor
    placeholder='CSS .............................!'
    value={css}
    onChange ={value => setCss(value)}
    mode='css'
    theme='monokai'
    name='editor_css'
    fontSize={20}
    height={'100%'}
    width={'100%'}
    showPrintMargin={true}
    showGutter={false}
    highlightActiveLine={true}
    setOptions ={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      tabSize: 2,
    }}
    />
  )
}