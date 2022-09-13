import React from 'react';
import { EditorPovider } from './context';
import { CodeBar } from './components/CodeBar';
import styles from './App.module.css'
import { Header } from './components/Header/Header';
import {Preview} from './components/Preview/Preview'

function App() {
  return (
    <EditorPovider>
      <CodeBar />
      <div className={styles.main}>
        <Header />
        <Preview/>
      </div>
    </EditorPovider>
  );
}

export default App;
