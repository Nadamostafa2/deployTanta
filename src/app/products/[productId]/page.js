"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
    const {productId}=useParams()
    // console.log(x);
    return (
        <div>
            <h1>product detaiiils of {productId}</h1>
        </div>
    );
}

export default Page;
