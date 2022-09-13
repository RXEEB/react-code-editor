import React from 'react'
import { Csseditor } from '../Editor/CssEditor'
import { Htmleditor } from '../Editor/HtmlEditor'
import { Jseditor } from '../Editor/JsEditor'
import styles from './codebar.module.css'

export const CodeBar = () => {
    const [activeTab, setActiveTab] = React.useState(0)

    const codes = ['HTML','CSS','JS']

    const onClickCodes = (index) => {
        setActiveTab(index)
    }

    return (
        <div className={styles.codebar}>
       <nav className={styles.tab}>
      {
        codes.map((e,index)=> {
          return  <button
          onClick={()=> onClickCodes(index)}  className={`${activeTab === index ? styles.active : ''}`}
          >{e}</button>
        })
        
      }
     
       </nav>
          <div className={styles.editor}>
      
       {activeTab === 0 ? <Htmleditor/> : null}
       {activeTab === 1 ? <Csseditor/> : null}
       {activeTab === 2 ? <Jseditor/> : null}
            
            </div>  
 
        </div>
    )
}


