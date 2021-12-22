import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Postsform from './Postsform';

// import React from 'react'

export default function Postsfun() {

    const [error, setError] = useState();
    // const [isload, setIsload] = useState(false)
    const [postdata, setPostData] = useState(false)
    const [items, setItems] = useState([])
    const [editpostdata, setEditPostData] = useState(false)
    const [updatepostedit, setUpdatePostEdit] = useState([])

    useEffect(() => {
        getAllPostdata()
        console.log("object")

    },[])

    const getAllPostdata = (() => {
        fetch("http://localhost:3005/posts")
            .then((res) => {
                return res.json()
            }
            ).then((result) => {
                setItems(result)
                console.log(result)
            })

    })

    const getSavedata = (data) => {
        console.log(data)
        try {
          axios.post('http://localhost:3005/posts', { ...data }).then(() => {
            getAllPostdata()
          });
        } catch (error) {
          setError()
        }
        setPostData(false)
    
      }

    const handlenewPostdataadd = () => {
        console.log("data add")
        setPostData(true)
    }

    const handleCancelPost = () => {
        console.log("formcancel")
        setPostData(false)
    }

    const handlePostDelete = (id) => {
        axios.delete(`http://localhost:3005/posts/${id}`).then(() => getAllPostdata());

    }

    const handlePostEdit = (item) => {
        setEditPostData(true)
        setUpdatePostEdit([item])
    }

    
    
    const  handlepostUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3005/posts/${updatepostedit[0].id}`, { ...updatepostedit[0] }).then(()=> getAllPostdata());
       setEditPostData(false)
      }
    
    return (
        <>

            <div>
                <h1> this is posts by functional component</h1>
                <div>
                    {!postdata && <input type="button" value="Add new Post" onClick={handlenewPostdataadd} ></input>}
                    {postdata && <Postsform Cancel={handleCancelPost} savepostData={getSavedata} />}
                    <br />
                </div>

                <div>{editpostdata ?
            <form onSubmit={handlepostUpdate}>
              <br />
              UserId :  <input type="number" name="uid" onChange={(e) => {
                const updatedpostEdit = [ ...updatepostedit ];
                updatedpostEdit[0].userId = e.target.value;
                setUpdatePostEdit(updatedpostEdit);
              }} value={updatepostedit[0].userId} ></input><br /><br />


              Title :  <input type="text" name="title" onChange={(e) => {
                const updatedpostEdit = [...updatepostedit ];
                updatedpostEdit[0].title = e.target.value;
               setUpdatePostEdit(updatedpostEdit);
              }}
                value={updatepostedit[0].title} ></input><br /><br />
              Body :  <input type="text" name="body" onChange={(e) => {
                const updatedpostEdit = [ ...updatepostedit ];
                updatedpostEdit[0].body = e.target.value;
               setUpdatePostEdit(updatedpostEdit);
              }}
                value={updatepostedit[0].body} ></input><br /><br />


              <button >Cancel</button>
              <button type="submit" >Update Posts</button>

              
              <br />
              <br />
            </form> : null}</div>
                <ul>
                    {items.map(item => (
                        <li key={item.id} style={{ listStyle: 'none', display: 'flex', marginBottom: '20px', marginTop: '15px' }}>
                            <div style={{ marginRight: '15px' }} >
                                UserId : {item.userId} <br />
                                Title :<br /> {item.title}<br />
                                Body : <br /> {item.body}
                                <br />

                                <br /><button onClick={() => handlePostEdit(item)}>Edit</button>
                                <div><button onClick={() => handlePostDelete(item.id)} >Delete</button> </div>
                                <hr></hr>
                            </div>


                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


