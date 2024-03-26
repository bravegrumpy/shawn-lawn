'use client';

import { useEffect } from 'react';
import Header from '@/components/header';
import MainFlexContainer from '@/components/main-flex-container';

export default function Error({
    error,
    reset,
}:{
    error: Error & { digest?: string}
    reset: () => void
}) {
    useEffect(() => {
        console.error(error);
    }, [error])

    return(
        <>
            <MainFlexContainer>
                <Header />
                <div>
                    <h2> Something went wrong </h2>
                        <p>{error.message}</p>
                        <button
                            onClick={
                                () => reset()
                            }
                        >
                            Something went wrong. Try again later.
                        </button>
                </div>
            </MainFlexContainer>
        </>
    );
}