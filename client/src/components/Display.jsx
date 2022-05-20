import React, {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Display = (props) => {
    const {exercises, setExercises} = props;
    const {removeFromDom} = props;

    const deleteExercise = (exerciseId) => {
        axios.delete(`http://localhost:8000/api/exercises/${exerciseId}`)
        .then(res => removeFromDom(exerciseId)
        .catch(err => console.log(err)))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/exercises")
        .then((res) => {
            console.log(res.data);
            setExercises(res.data.sort((a, b) => a.type.localeCompare(b.type)));
        })
        .catch((err) => {console.log(err);})
    })

    return (
        <div className= 'h-screen bg-zinc-200 flex'>
            <div className='mt-[120px]'>
                <div className="flex justify-center w-screen px-3">
                    <h1 className="text-2xl lg:text-5xl font-bold border-2 border-transparent border-b-cyan-500 my-5">Current Home Exercises</h1>
                </div>
                <div className='flex justify-center w-screen px-3'>
                    <table className='table-fixed text-xs lg:text-2xl shadow-md rounded m-auto'>
                        <thead className='bg-zinc-300'>
                            <tr>
                                <th className='w-3/4 px-4 py-2 font-bold'>Exercise Name</th>
                                <th className='w-1/4 px-4 py-2 font-bold'>Sets</th>
                                <th className='w-1/4 px-4 py-2 font-bold'>Repetitions</th>
                                <th className='w-1/4 px-4 py-2 font-bold'>Time Held</th>
                                <th className='w-1/4 px-4 py-2 font-bold'>Frequency</th>
                                <th className='w-1/4 px-4 py-2 font-bold'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-300'>
                        {
                            exercises.map((exercise, index)=>{
                                return(
                                        <tr key={index}>
                                            <td className='border-2 border-black px-4 py-2'>{exercise.name}</td>
                                            <td className='border-2 border-black px-4 py-2'>{exercise.sets}</td>
                                            <td className='border-2 border-black px-4 py-2'>{exercise.reps}</td>
                                            <td className='border-2 border-black px-4 py-2'>{exercise.time}</td>
                                            <td className='border-2 border-black px-4 py-2'>{exercise.frequency}x per day</td>
                                            <td className='border-2 border-black px-4 py-2'>
                                                <Link to={`/exercises/edit/${exercise._id}`} className="px-1 text-cyan-500">edit</Link>
                                                <Link to={'/'} onClick={(e) => {deleteExercise(exercise._id)}} className="px-1 text-cyan-500">delete</Link>
                                            </td>
                                        </tr>)
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}


export default Display