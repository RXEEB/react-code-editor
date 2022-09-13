import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/ext-language_tools";
import { EditorContext } from '../../context';



export const Htmleditor = () => {

  const {html, setHtml} = React.useContext(EditorContext )

  return (
    <AceEditor
    placeholder='HTML .............................!'
    value={html}
    onChange = {value => setHtml(value)}
    mode='html'
    theme='monokai'
    name='editor_html'
    fontSize={20}
    height={'100%'}
    width={'100%'}
    showPrintMargin={false}
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


