import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Notes = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        const getNotes = async()=>{

            try {
                const response = await axios.get("http://localhost:8080/api/note/getAll")
                console.log(response.data);
                setNotes(response.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        getNotes();
    },[])

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/note/add", {
                "title": title,
                "description": desc
            })
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='container py-5'>

            <h1>
                My Notes
            </h1>



            <div className='card' style={{ width: "40rem" }}>

                <div className='card-header'>
                    <h2>Add Notes</h2>
                </div>

                <div className='card-body'>

                    <form action="">
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Enter Title'
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Enter Desc'
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>
                        <div className='mb-4'>
                            <button className='btn btn-primary' onClick={handleAdd}>Add</button>
                        </div>
                    </form>

                </div>

            </div>

            <div className='row g-3'>
                {
                    notes.map((n, index)=>(

                        <div className='col-auto' key={index}>
                            <div className='card'>

                                <div className='card-header'>

                                    <h4>{n.title}</h4>
                                </div>

                                <div className='card-body'>
                                    <p>
                                        {n.description}
                                    </p>
                                </div>

                            </div>
                            
                        </div>

                    ))
                }
            
            </div>

        </div>



    )
}

export default Notes