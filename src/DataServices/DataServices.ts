import {Advice} from "../Interfaces/Interface";

const getData = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice');
    const data = await promise.json();
    return data.slip;
}

export default getData