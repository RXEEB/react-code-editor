import React from 'react'
import styles from './Header.module.css'
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill } from 'react-icons/bs'
import Webcam from 'react-webcam'

export const Header = () => {

    const [camera, setCamera] = React.useState(false)
    return (
        <>
            <header className={styles.header}>
                <button 
                onClick={()=> setCamera(!camera)}
                className={styles.btn}>
                    {camera ?
                        <BsFillCameraVideoFill fill='#fff' size={23} /> :
                        <BsFillCameraVideoOffFill fill='#fff' size={23} />}
                </button>
            </header >
          {
            camera ? 
            <Webcam 
            className={styles.camera}
            audio={false}
            width={300}
            height={300}
            videoConstraints={{
                width: 300,
                height:300,
                facingMode: 'user',

            }}


            /> 
            :null
          }
    </>
    )
}
