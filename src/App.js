import React, { useState } from "react";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

export default function App(){
    const [load, setLoad] = useState(false);

    const handleclick = (e) => {
        e.preventDefault()
    }

    return(
        <>
           <AppProvider i18n={enTranslations}>
             <input value={load} onChange={(e)=>setLoad(e.target.value)} />
             <button onClick={handleclick}>Send</button>
           </AppProvider>
        </>
    )
}