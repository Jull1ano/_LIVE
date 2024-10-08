import { Ui } from "../Components/Ui"
import { Gr } from "../Components/Gr"
import { Mo } from "../Components/Mo"
import { Re } from "../Components/Re"
import { useEffect } from "react"

export function Home() {
    
    useEffect(() => {
        // Set the id and className when the component mounts        
        document.body.className = 'homec';

        // Clean up when the component unmounts
        return () => {
            document.body.className = '';
        };
    }, []);


    return (
        
        <>
           <section className="hm"><Ui/><Gr/><Mo /><Re /></section>
        </>
    )
}

