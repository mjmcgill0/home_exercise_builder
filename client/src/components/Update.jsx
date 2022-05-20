import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [structure, setStructure] = useState();
    const [sets, setSets] = useState();
    const [reps, setReps] = useState();
    const [time, setTime] = useState();
    const [frequency, setFrequency] = useState();
    const [description, setDescription] = useState();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/exercises/${id}`)
        .then(res => {
            setName(res.data.name);
            setType(res.data.type);
            setStructure(res.data.structure);
            setSets(res.data.sets);
            setReps(res.data.reps);
            setTime(res.data.time);
            setFrequency(res.data.frequency);
            setDescription(res.data.description);
        })
        .catch(err => console.log(err))
    }, [id])
    const updateExercise = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/exercises/${id}`, {
            name,
            type,
            structure,
            sets,
            reps,
            time,
            frequency,
            description,
        })
        .then(res => navigate('/'))
        .catch(err => {
            setErrors(err.response.data.errors);
        })
    }
    return(
        <div className= 'h-screen bg-zinc-200 flex'>
            <div className='flex flex-col mt-[120px] ml-1'>
                <div className="flex justify-center w-screen px-3">
                    <h1 className='text-2xl lg:text-5xl font-bold border-2 border-transparent border-b-cyan-500 my-5'>Edit {name}</h1>
                </div>
                <div className='flex justify-center'>
                    <form className='align-center' onSubmit={updateExercise}>
                        <p className='py-1'>
                            <input className='form-control w-full block px-3 py-1.5 text-gray-800 bg-zinc-200 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out focus:text-gray-800 focus:bg-zinc-200 focus:border-cyan-500 focus:outline-none' type='text' placeholder='Exercise Name' value={name} onChange ={(e) => setName(e.target.value)}/>
                            {errors.name ? <p>{errors.name.message}</p>: null}
                        </p>
                        <p className='py-1'>
                            <input className='form-control w-full block px-3 py-1.5 text-gray-800 bg-zinc-200 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out focus:text-gray-800 focus:bg-zinc-200 focus:border-cyan-500 focus:outline-none' type='text' placeholder='Exercise Type' value={type} onChange ={(e) => setType(e.target.value)}/>
                            {errors.type ? <p>{errors.type.message}</p>: null}
                        </p>
                        <p className='py-1'>
                            <input className='form-control w-full block px-3 py-1.5 text-gray-800 bg-zinc-200 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out focus:text-gray-800 focus:bg-zinc-200 focus:border-cyan-500 focus:outline-none' type='text' placeholder='Target Structure' value={structure} onChange ={(e) => setStructure(e.target.value)}/>
                            {errors.structure ? <p>{errors.structure.message}</p>: null}
                        </p>
                        <p className='py-1'>
                            <textarea className='form-control block px-3 py-1.5 text-gray-800 bg-zinc-200 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out focus:text-gray-800 focus:bg-zinc-200 focus:border-cyan-500 focus:outline-none' rows='4' placeholder='Exercise Description' value={description} onChange ={(e) => setDescription(e.target.value)}/>
                            {errors.description ? <p>{errors.description.message}</p>: null}
                        </p>
                        <p className='flex justify-between items-end py-1'>
                            <input className='form-control block px-3 py-1.5 text-gray-800 bg-zinc-200 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out focus:text-gray-800 focus:bg-zinc-200 focus:border-cyan-500 focus:outline-none' type='number' min='1' max='30' value={sets} onChange ={(e) => setSets(e.target.value)}/> sets
                            {errors.sets ? <p>{errors.sets.message}</p>: null}
                        </p>
                        <p className='flex justify-between items-end py-1'>
                            <input className='form-control block px-3 py-1.5 text-gray-800 bg-zinc-200 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out focus:text-gray-800 focus:bg-zinc-200 focus:border-cyan-500 focus:outline-none' type='number' min='1' max='30' value={reps} onChange ={(e) => setReps(e.target.value)}/> repetitions
                            {errors.reps ? <p>{errors.reps.message}</p>: null}
                        </p>
                        <p className='flex justify-between items-end py-1'>
                            <input className='form-control block px-3 py-1.5 text-gray-800 bg-zinc-200 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out focus:text-gray-800 focus:bg-zinc-200 focus:border-cyan-500 focus:outline-none' type='number' min='1' max='30' value={frequency} onChange ={(e) => setFrequency(e.target.value)}/> x/day
                            {errors.frequency ? <p>{errors.frequency.message}</p>: null}
                        </p>
                        <p className='py-1'>
                            <input className='form-control w-full block px-3 py-1.5 text-gray-800 bg-zinc-200 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out focus:text-gray-800 focus:bg-zinc-200 focus:border-cyan-500 focus:outline-none' type='text' placeholder='Time Held' value={time} onChange ={(e) => setTime(e.target.value)}/>
                            {errors.time ? <p>{errors.time.message}</p>: null}
                        </p>
                        <button className='ml-0'><input type='submit' value='Edit Exercise'></input></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update;