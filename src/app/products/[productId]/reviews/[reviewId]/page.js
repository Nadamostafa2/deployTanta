"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
    const {reviewId ,productId}=useParams()
    // console.log(x);
    return (
        <div>
            review Detaillls {reviewId} , product {productId}
        </div>
    );
}

export default Page;
