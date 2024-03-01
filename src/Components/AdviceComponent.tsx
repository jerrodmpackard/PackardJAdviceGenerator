import React, { useEffect, useState } from 'react'
import getData from '../DataServices/DataServices';
import { Advice } from '../Interfaces/Interface';
import { Button, Card } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const AdviceComponent = () => {
    const [advice, setAdvice] = useState<Advice>();
    const [newAdvice, setNewAdvice] = useState(true);

    useEffect(() => {
        const adviceData = async () => {
            const fetchedData = await getData();
            console.log(fetchedData)
            setAdvice(fetchedData);
        }

        adviceData();
    }, [newAdvice]);

    const getNewAdvice = () => {
        setNewAdvice(!newAdvice);
    }


    return (
        <div className='grid justify-center'>

            <Card href="#" className="max-w-lg mx-auto my-auto">
                <h5 className="text-xl text-center mt-6 font-bold tracking-tight text-green-400">
                ADVICE #{advice && advice.id}
                </h5>
                <p className="text-3xl text-center my-10 text-gray-700 dark:text-gray-400">
                "{advice && advice.advice}"
                </p>

                <img src='./src/Assets/pattern-divider-mobile.svg' />

                <div className="grid justify-center">
                <Button pill>
                    <HiOutlineArrowRight onClick={getNewAdvice} className="h-6 w-6" />
                </Button>
            </div>
            </Card>
            
        </div>
    )
}

export default AdviceComponent
