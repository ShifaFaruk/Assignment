import React, { useState } from 'react'
import styles from './Crud.module.css';


const Crud = () => {
    const ButtonNm=[
        "c",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "=",
        "+",
        "-",
        "*",
        "/",
        "."
    ]
    const[calvalue,setCalvalue]=useState("")
    const handlClick=(ButtonNm)=>{
        if(ButtonNm==="c"){
            setCalvalue("")
        }else if(ButtonNm==="="){
           let result=eval(calvalue)
           setCalvalue(result)
        }else{
            let result=calvalue+ButtonNm
            setCalvalue(result)
        }
    }
  return (
    <div>
        <input type="text" name="text" className={styles.input} value={calvalue} readOnly />
      {ButtonNm.map((ButtonNm)=>{
        return(  
        <button className={styles.button} onClick={()=>handlClick(ButtonNm)}>{ButtonNm}</button>
      )
       
      })}
    </div>
  )
}

export default Crud
