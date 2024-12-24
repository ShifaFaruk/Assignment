import React, { useEffect, useState } from 'react';
import axios from 'axios'

const FakeApiComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setData(res.data))
        // fetch('https://fakestoreapi.com/products')
        //     .then(res => res.json())
        //     .then(json => setData(json))
    })

    return (
        <div>
            <h3>Fake Api Calling</h3>
            <table border={2}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    {/* <th>Image</th> */}
                    <th>Price</th>
                    <th>Category</th>
                </tr>
                {
                    data.map((i,index) => {
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                {/* <td>{i.image}</td> */}
                                <td>{i.price}</td>
                                <td>{i.category}</td>
                                <td><button>View</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default FakeApiComponent;
