import React from 'react';

async function getData(){
    const res= await fetch(process.env.NEXT_PUBLIC_API_URL,{
        cache:"force-cache"
    })
    return res.json()
}

const Page = async() => {
    const data=await getData()
    return (
        <div>
            <h1>SSG</h1>
            {data.map(d=><h1 key={d.id}>{d.name}</h1>)}
        </div>
    );
}

export default Page;
