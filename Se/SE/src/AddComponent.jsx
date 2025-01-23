import React, { useState } from 'react';
import TableComponent from './TableComponent';

const AddComponent = () => {
    const [id, setId] = useState('')
    const [data, setData] = useState({
        name: "",
        age: ""
    })
    const [allData, setAllData] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const saveData = (e) => {
        e.preventDefault()
        if (id != '') {
            let res = allData.map((i, index) => {
                if (index == id) {
                    i.name = data.name
                    i.age = data.age
                }
                return i
            })
            setAllData(res)
        }
        else {
            setAllData([
                ...allData,
                data
            ])
        }

        setData({
            name: "",
            age: ""
        })
    }
    const delData = (id) => {
        const res = allData.filter((i, index) => {
            return index != id
        })

        setAllData(res)
    }
    const editData = (id) => {
        let res = allData.find((i, index) => {
            return index == id
        })
        setData({
            name: res.name,
            age: res.age
        })
        setId(id)
    }
    return (
        <div>
            <form action="#" method='post' onSubmit={saveData}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={data.name} /><br /><br />
                <label htmlFor="">Age</label>
                <input type="number" name="age" id="age" onChange={handleChange} value={data.age} /><br /><br />
                <button type="submit" value='Submit' >Submit</button>
            </form>
            <TableComponent allData={allData} delData={delData} editData={editData} />
        </div>
    );
}

export default AddComponent;
