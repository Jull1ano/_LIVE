import { Re } from "../Components/Re";
import { useEffect } from "react";


export function Render() {
    
    useEffect(() => {
        // Set the id and className when the component mounts        
        document.body.className = 'renderc';

        // Clean up when the component unmounts
        return () => {
            document.body.className = '';
        };
    }, []);


    return (
        <>
            <Re/>
        </>
    )
}