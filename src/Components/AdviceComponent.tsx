import React, { useEffect, useState } from 'react'
import getData from '../DataServices/DataServices';
import { Advice } from '../Interfaces/Interface';
import { Button, Card } from 'flowbite-react';
import lineImg from '../Assets/pattern-divider-desktop.svg';
import dice from '../Assets/icon-dice.svg';
import './AdviceComponent.css'

const AdviceComponent = () => {
    const [advice, setAdvice] = useState<Advice>();
    const [newAdvice, setNewAdvice] = useState(true);

    useEffect(() => {
        const adviceData = async () => {
            const fetchedData = await getData();
            setAdvice(fetchedData);
        }

        adviceData();
    }, [newAdvice]);

    const getNewAdvice = () => {
        setNewAdvice(!newAdvice);
    }

    return (
        <div className='grid justify-center content-center '>

            <Card className="max-w-lg border-none background">
                <h5 className="text-xl text-center mt-6 font-bold tracking-tight neonGreenColor">
                    ADVICE #{advice && advice.id}
                </h5>
                <p className="text-[28px] text-center my-10 textColor">
                    "{advice && advice.advice}"
                </p>

                <img src={lineImg} alt='line' />

                <div className="grid justify-center">
                    <Button onClick={getNewAdvice} className='rounded-full h-20 w-20 neonGreenBackground glow-button off' ><img src={dice} alt='dice' /></Button>
                </div>
            </Card>

        </div>
    )
}

export default AdviceComponent
