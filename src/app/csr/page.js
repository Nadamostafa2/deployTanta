"use client"
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [myData,setMyData]=useState([])
    console.log(process.env.NEXT_PUBLIC_X ,process.env.DB_KEY);
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL).then (res=>res.json()).then(data=>setMyData(data))
    },[])
    return (
        <div>
            <Head>
                <title>My CSR page</title>
            </Head>
            <h1>CSR</h1>
            {myData.map(u=><h1 key={u.id}>{u.name}</h1>)}
        </div>
    );
}

export default Page;
