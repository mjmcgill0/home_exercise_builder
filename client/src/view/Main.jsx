import React, { useState } from 'react';
import Display from '../components/Display';

const Main = (props) => {
    const [exercises, setExercises] = useState([]);

    return(
        <div>
            <Display exercises={exercises} setExercises={setExercises}/>
        </div>
    )
}
export default Main;