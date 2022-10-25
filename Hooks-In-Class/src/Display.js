import { useContext, useEffect } from "react";
import DataContext from "./DataContext";

const Display = () => {
    // extract value of context using the useContext hook
    const { temp, setTemp } = useContext(DataContext);

    // run this function whenever temp changes.
    useEffect(() => {
        console.log("the useEffect was triggered")
        setTimeout(() => {
            setTemp(temp => temp + 1) // callback update: use to get the truly current value of a state before updating
        }, 1000)
    }, [temp]) // [temp] means we are tracking changes in temp.

    // dislay temp's value.
    return (
        <div>
            {temp}
        </div>
    )
};

export default Display;