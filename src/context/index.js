import React from "react";

const EditorContext = React.createContext()
const EditorPovider = ({children}) => {

    const [html, setHtml] = React.useState('')
    const [css, setCss] = React.useState('')
    const [js, setjs] = React.useState('')

   const value = {html, setHtml,css, setCss,js, setjs}

    return(
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    )

}
export {EditorContext,EditorPovider}