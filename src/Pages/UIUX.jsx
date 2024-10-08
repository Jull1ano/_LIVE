import { Ui } from "../Components/Ui";
import { useEffect } from 'react';

export function UIUX() {
    
    useEffect(() => {
        // Set the id and className when the component mounts
        document.body.className = 'uiuxc';

        // Clean up when the component unmounts
        return () => {
            document.body.className = '';
        };
    }, []); // Empty dependency array ensures it only runs once when the component mounts

    return (
        <>
            <Ui />
        </>
    );
}
