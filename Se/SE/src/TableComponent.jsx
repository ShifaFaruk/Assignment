import React from 'react';

const TableComponent = ({ allData, delData, editData }) => {
    return (
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((i, index) => {
                            return (
                                <tr>
                                    <td key={index}>{index + 1}</td>
                                    <td>{i.name}</td>
                                    <td>{i.age}</td>
                                    <td><button onClick={() => delData(index)}>Delete</button>
                                        <button onClick={() => editData(index)}>Edit</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;
