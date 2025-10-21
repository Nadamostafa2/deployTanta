import Image from 'next/image';
import React from 'react';


export const metadata={
    title:"My SSR Page"
}

async function getData(){
    const res= await fetch(process.env.NEXT_PUBLIC_API_URL,{
        cache:"no-store"
    })
    return res.json()
}

const Page = async() => {
    const data=await getData()
    return (
        <div>
            <h1 >SSR</h1>
            <Image alt='image' src={"https://images.unsplash.com/photo-1760600222419-008eb3d3ba13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"} width={400} height={400}></Image>
            {/* <img src='1.jpg'></img> */}
            {data.map(d=><h1 key={d.id}>{d.name}</h1>)}
        </div>
    );
}

export default Page;
