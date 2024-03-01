import React, { useEffect, useState } from 'react'
import getData from '../DataServices/DataServices';
import {Advice} from '../Interfaces/Interface';

const AdviceComponent = () => {
    const [advice, setAdvice] = useState<Advice>();

    useEffect(() => {
        const adviceData = async () => {
            const fetchedData = await getData();
            console.log(fetchedData)
            setAdvice(fetchedData);
        }

        adviceData();
    }, []);


    return (
        <div>
            <h1>{advice && advice.advice}</h1>
        </div>
    )
}

export default AdviceComponent
