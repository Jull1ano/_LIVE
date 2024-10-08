import { Mo } from "../Components/Mo";
import { useEffect } from "react";

export function Motion() {
    
    useEffect(() => {
        // Set the id and className when the component mounts        
        document.body.className = 'motionc';

        // Clean up when the component unmounts
        return () => {
            document.body.className = '';
        };
    }, []);


    return (
        <>
            <Mo/>
        </>
    )
}