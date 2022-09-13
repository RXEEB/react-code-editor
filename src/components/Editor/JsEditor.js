import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import { EditorContext } from '../../context';


export const Jseditor = () => {
  const {js, setJs} = React.useContext(EditorContext )

  return (
    <AceEditor
    placeholder='Javascript .............................!'
    value={js}
    onChange ={value => setJs(value)}
    mode='javascript'
    theme='monokai'
    name='editor_js'
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