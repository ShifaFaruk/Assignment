import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import React from 'react'

const Api = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/user").then((res)=>setData(res.data)). catch(err=>console.log("err"))
})

  return (
    <div>
           <table>
            {data.map((d,i)=>(
               <> <tr key={i}>{d.id}</tr>
                  <tr>{d.name}</tr>
                  <tr>{d.email}</tr>

                </> 
            ))}
      </table>

    </div>
  )
}

export default Api
