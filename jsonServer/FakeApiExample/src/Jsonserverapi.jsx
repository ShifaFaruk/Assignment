import axios from 'axios';
import React, { useEffect, useState } from 'react';

//db.json create outside from src folder
//run json file npx json-server db.json
//it will give link then run that link in browser
//Provide that link in axios

const Jsonserverapi = () => {
  const [id, setId] = useState('')
  const [data, setData] = useState({
    name: '',
    age: '',
    gender: ''
  })
  const [alldata, setAllData] = useState([])
  const onSubmit = (e) => {
    e.preventDefault()
    if (id != '') {
      //update
      axios.put('http://localhost:3000/data/' + id, data).then((res) => console.log(res.data))
    } else {
      axios.post('http://localhost:3000/data', data)
        .then((res) => console.log(res.data))
    }
    disp()
    setData(
      {
        name: '',
        age: '',
        gender: ''
      }
    )
    setId('')
  }
  useEffect(() => {
    disp()
  }, [])
  const handleChange = (e) => {
    //let name1 = e.targer.value
    //let age = e.target.value

    //destructuring of array 
    const { name, value } = e.target
    console.log(e.target)
    //we took [name] because we store multiple values
    setData({
      ...data,
      [name]: value
    })
  }
  const disp = () => {
    axios.get('http://localhost:3000/data')
      .then((res) => setAllData(res.data))
  }
  const editData = (id) => {
    axios.patch('http://localhost:3000/data/' + id).then((res) => setData(res.data))
    setId(id)
  }
  const detData = (id) => {
    axios.delete('http://localhost:3000/data/' + id)
      .then((res) => console.log(res.data))
    disp()
  }
  return (
    <>
      <div>
        {/* install json server then create db.json file in outside of src then run json server file*/}
        <form action="#" onSubmit={onSubmit} method='post'>
          <label htmlFor="name">Name : </label>
          <input type='text' name='name' value={data.name} onChange={handleChange} />
          <br />
          <label htmlFor="age">Age : </label>
          <input type='number' name='age' value={data.age} onChange={handleChange} />
          <br />
          <input type="radio" name="gender" id="gender" value='male' onChange={handleChange} checked={data.gender == 'male'} />Male :
          <input type="radio" name="gender" id="gender" value='female' onChange={handleChange} checked={data.gender == 'female'} />Female :
          <br></br>
          <button type='submut' value='submit'>Submit</button>
        </form>

        <table border='2'>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Action</td>
          </tr>
          {
            alldata.map((i, index) => {
              return (
                <tr>
                  <td key={index}>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.gender}</td>
                  <td><button onClick={() => editData(i.id)}>Edit</button><button onClick={() => detData(i.id)}>Delete</button></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>

  );
}


export default Jsonserverapi;