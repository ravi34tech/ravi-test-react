import { useEffect, useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState<string>("lightskyblue");


    useEffect(() => {
        console.info("Loading Counter..");
        return () => {
            console.info("Releasing the resources..");
        }
    },[count])

    const onChangeCount = (type?:string) => {
        if(type === 'increment') {
            setBgColor("limegreen");
            setCount((preValue) => preValue + 1)
        } else if(type === 'decrement'){
            setBgColor("orange");
            setCount((preValue) => preValue - 1)
        } else {
            setBgColor("lightskyblue");
            setCount(0)
        }
    }

    return ( 
        <>
            <div className="card"  style={{ alignContent: "center", fontWeight: "bolder", backgroundColor: `${bgColor}`}}>
                 <h1>{count}</h1> 
            </div>     
            <div style={{padding: 10, margin: 10}}>
                <button style={{backgroundColor: "orange"}} onClick={() => onChangeCount("decrement")} >Decrement</button>
                <button style={{backgroundColor: "limegreen", margin: 20}} onClick={() => onChangeCount("increment")}>Increment</button>
                <button style={{backgroundColor: "lightskyblue", margin: 20}} onClick={() => onChangeCount()}>Reset</button>
            </div>  
        </> 
    );
}
 
export default Counter;