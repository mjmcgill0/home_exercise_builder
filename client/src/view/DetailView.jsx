import React, {useState} from 'react'
import Detail from '../components/Detail'

const DetailView = (props) => {
    const [exercises, setExercises] = useState([]);

    return (
    <div>
        <Detail exercises={exercises} setExercises={setExercises} />
    </div>
    )
}

export default DetailView