import React, {useState} from 'react';
import Form from '../components/Form';

const FormView = (props) => {
    const [exercises, setExercises] = useState([]);

    return (
    <div>
        <Form exercises={exercises} setExercises={setExercises} />
    </div>
    )
}

export default FormView