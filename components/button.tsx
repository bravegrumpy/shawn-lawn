'use client';
import React from 'react';
import GetQuery from "@/scripts/actions";

export default function Button () {

    const [clientTriggers, setClientTriggers] = React.useState(0);

    const [serverTriggers, setServerTriggers] = React.useState(0);

    function clientAction() {
        console.log("Starting client action...");
        setClientTriggers(clientTriggers + 1);
        
        console.log("Starting server query...")
        GetQuery();
        setServerTriggers(serverTriggers + 1);
        
        console.log("Server query complete.")
        console.log("Client action complete.")
    }
    return (
        <>
            <button
                onClick={clientAction}

                className="p-4 bg-limeade-400 dark:bg-limeade-600 hover:bg-limeade-200 focus:bg-limeade-200 dark:hover:bg-limeade-300 dark:focus:bg-limeade-300 rounded-full self-center text-center text-brown-derby-700 dark:text-brown-derby-950 font-black hover:ring-rose-500 focus:ring-rose-500 hover:ring-4 focus:ring-4"
            >
                <p>You have triggered</p>
                <p>the client {clientTriggers} times</p>
                <p>and the server {serverTriggers} times.</p>
            </button>
        </>
    );
}