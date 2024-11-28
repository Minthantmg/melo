'use client'
import React from 'react';
import {useParams} from "next/navigation";

const Page = () => {
    const {_id} = useParams();
    return (
        <div>
            {_id}
        </div>
    );
};

export default Page;