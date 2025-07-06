import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Notes = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const getNotes = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/note/getAll",
                    {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        withCredentials: true
                    }
                )
                console.log(response.data);
                setNotes(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getNotes();
    }, [notes])
    const createNote = async (e) => {
        e.preventDefault();
        console.log(title, desc);
        try {
            const response = await axios.post("http://localhost:8080/api/note/add", {
                "title": title,
                "description": desc
            })
            console.log(response.data);
            toast.success("Note Added Successfully");
        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div className='container py-5'>
            <h1>My Notes</h1>

            <div className='card' style={{ width: "50rem" }}>
                <div className='card-body'>
                    <div className='card-header'>
                        <h4>Create Note</h4>
                    </div>
                    <form action="">
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <textarea name="" className='form-control' placeholder='Enter Desc' id="" onChange={(e) => setDesc(e.target.value)}></textarea>
                        </div>
                        <div className='mb-2'>
                            <button onClick={createNote} className='btn btn-primary m-3'>Create</button>
                        </div>
                    </form>
                </div>

            </div>
            <div className='row g-5 m-2'>
                {
                    notes && notes.map((n, index) => (
                        <div className='col-auto mt-5 ' key={index}>
                            <div className='row'>
                                <div className='card ' style={{ width: "16rem" }}>

                                    <div className='card-header'>
                                        <h3>{n.title}</h3>
                                    </div>
                                    <div className='card-body'>
                                        <p>
                                            {n.description}
                                        </p>
                                    </div>
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