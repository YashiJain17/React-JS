import axios from 'axios';
import { React, useState, useEffect } from 'react';
import Form from './Form';
import { Table, Input, Button } from 'antd';
import 'antd/dist/antd.css';



export default function Userfun() {
    const [error, setError] = useState();
    // const [isload, setIsload] = useState(false)
    const [userdata, setUserData] = useState(false)
    const [items, setItems] = useState([])
    const [edituserdata, setEditUserData] = useState(false)
    const [updateuseredit, setUpdateuserEdit] = useState([])
    const [searchState,setSearchState]=useState('')

    useEffect(() => {
        getAllUserdata()
        console.log("object")

    }, [])

    const getAllUserdata = () => {
        fetch("http://localhost:3005/users")
            .then((res) => {
                return res.json()
            }
            ).then((result) => {
                setItems(result)
                // console.log(result)
            })

    }

    const getSavedata = (data) => {
        console.log(data)
        try {
            axios.post('http://localhost:3005/users', { ...data }).then(() => {
                getAllUserdata()
            });
        } catch (error) {
            setError(error)
        }
        setUserData(false)
        console.log(error)
    }

    const handlenewUserdataadd = () => {
        console.log("data add")
        setUserData(true)
    }

    const handleCancelUser = () => {
        console.log("formcancel")
        setUserData(false)
    }

    const handleUserDelete = (id) => {
        axios.delete(`http://localhost:3005/users/${id}`).then(() => getAllUserdata());

    }

    const handleUserEdit = (item) => {
        setEditUserData(true)
        setUpdateuserEdit([item])
    }



    const handleUserUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3005/users/${updateuseredit[0].id}`, { ...updateuseredit[0] }).then(() => getAllUserdata());
        setEditUserData(false)
    }

    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            key: '3',
            title: 'UserName',
            dataIndex: 'username',
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            key: '4',
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email.length - b.email.length,
        },
        {
            key: '5',
            title: 'Street',
            dataIndex: ['address', 'street'],
        },
        {
            key: '6',
            title: 'Suite',
            dataIndex: ['address', 'suite'],
        },
        {
            key: '7',
            title: 'City',
            dataIndex: ['address', 'city'],
        },
        {
            key: '8',
            title: 'ZipCode',
            dataIndex: ['address', 'zipcode'],
        },
        {
            key: '9',
            title: 'Latitude',
            dataIndex: ['address', 'geo', 'lat'],
        },
        {
            key: '10',
            title: 'Longitude',
            dataIndex: ['address', 'geo', 'lng'],
        },
        {
            key: '11',
            title: 'Phone_No',
            dataIndex: 'phone',

        },
        {
            key: '12',
            title: 'Website',
            dataIndex: 'website',

        },
        {
            key: '13',
            title: 'Company_Name',
            dataIndex: ['company', 'name'],

        },
        {
            key: '14',
            title: 'Catch_Phrase',
            dataIndex: ['company', 'catchPhrase'],
        },
        {
            key: '15',
            title: 'BS',
            dataIndex: ['company', 'bs'],
        },
        {
            key: '16',
            render: (item) => (
                <>
                    <Button type='primary' onClick={() => handleUserEdit(item)} >Edit</Button>
                </>)
        },
        {
            key: '17',
            render: (item) => (
                <>
                    <Button type='danger' className='danger' onClick={() => handleUserDelete(item.id)} >Delete</Button>
                </>)
        }

    ];

    const search = (rows) => {
        return rows.filter((row) => row.name.toLowerCase().includes(searchState.trim().toLowerCase())
            || row.username.toLowerCase().includes(searchState.trim().toLowerCase()) || row.email.toLowerCase().includes(searchState.trim().toLowerCase())
        );
    }

    function onSearch(){
        console.log("object")
    }

    return (
        <>

            <div>
                <h1> this is Users by functional component</h1>
                <div>
                    {!userdata && <input type="button" value="Add new user" onClick={handlenewUserdataadd} ></input>}
                    {userdata && <Form Cancel={handleCancelUser} saveData={getSavedata} />}
                    <br />
                </div>

                <div>{edituserdata ?
                    <form onSubmit={handleUserUpdate}>
                        <br />
                        Name :  <input type="text" name="name" onChange={(e) => {
                            const updatedEdit = [...updateuseredit];
                            updatedEdit[0].name = e.target.value;
                            setUpdateuserEdit(updatedEdit);
                        }} value={updateuseredit[0].name} ></input><br /><br />
                        Email :  <input type="text" name="email" onChange={(e) => {
                            const updatedEdit = [...updateuseredit];
                            updatedEdit[0].email = e.target.value;
                            setUpdateuserEdit(updatedEdit);
                        }}
                            value={updateuseredit[0].email} ></input><br /><br />

                        <button >Cancel</button>
                        <button type="submit" >Update</button>

                        {/* <button onClick={()=>LoadEditData}>esss</button> */}
                        <br />
                        <br />
                    </form> : null}</div>
                {/* <ul >
                    {items.map((item) => (
                        <li key={item.id} style={{ listStyle: 'none', display: 'flex', marginBottom: '20px', marginTop: '15px' }}>
                            <div style={{ marginRight: '15px' }}>   {item.name}</div>
                            <div> {item.email}</div>
                            <div> <button style={{ marginLeft: '30px' }} onClick={() => handleUserEdit(item)}>Edit</button> </div>
                            <div><button onClick={() => handleUserDelete(item.id)} >Delete</button> </div>


                        </li>
                    ))}

                </ul> */}
<br/>
<Input.Search
                    onChange={(e) => setSearchState(e.target.value)}
                    value={searchState}
                    placeholder="Search"
                    onSearch={onSearch}
                />
<br/>
<br/>
                <Table
                    dataSource={search(items)}
                    columns={columns}
                    pagination={{ pageSize: 5 }}
                />
            </div>
        </>
    )
}
