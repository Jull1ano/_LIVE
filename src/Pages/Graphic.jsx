
import { Gr } from "../Components/Gr";
import { useEffect } from 'react';

export function Graphic() {
    
    useEffect(() => {
        // Set the id and className when the component mounts        
        document.body.className = 'graphic';

        // Clean up when the component unmounts
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <>
            <Gr/>
        </>
    );
}
