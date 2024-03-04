'use client';
import './globals.css'

export default function GlobalError({
    error,
    reset,
}:{
    error: Error & { digest?: string },
    reset: () => void
}){
    <html>
        <body>
            <h2>Something went Wrong</h2>
            <button onClick={() => reset()}>Try again</button>
        </body>
    </html>
}