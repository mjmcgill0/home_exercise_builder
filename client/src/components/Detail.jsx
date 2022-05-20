import React, {useEffect} from 'react';
import axios from 'axios';

const Detail = (props) => {
    const {exercises, setExercises} = props;
    
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
                    <h1 className="text-2xl lg:text-5xl font-bold border-2 border-transparent border-b-cyan-500 my-5">Home Exercise Program</h1>
                </div>
                <div className='flex justify-center w-screen px-3'>
                    <div className='text-xs lg:text-2xl font-bold'>
                        {
                            exercises.map((exercise, index)=>{
                                return(
                                        <div className='flex justify-between py-5' key={index}>
                                            <div>
                                                <h1 className='text-2xl lg:text-4xl font-bold underline underline-offset-4 my-2'>{exercise.name}</h1>
                                                <h2 className='text-xl lg:text-2xl'>{exercise.type}</h2>
                                                <h2>{exercise.structure}</h2>
                                                <p>{exercise.sets} of {exercise.reps}</p>
                                                <p>{exercise.frequency} per day</p>
                                                <p>Seconds held: {exercise.time}</p>
                                                <p>Instructions: {exercise.description}</p>
                                            </div>
                                            <div>
                                                <img src="" alt="X" />
                                            </div>
                                        </div>)
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail