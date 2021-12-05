import React, { useState } from "react";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Link from 'next/link';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Detail() {

    const router = useRouter()
    const { id } = router.query
    const { data, error } = useSWR(
        `/api/detail/?id=${id}`,
        fetcher
    );


    if (error) return "An error has occurred.";
    if (!data) return <div className="all"><h1 className="center">Loading...</h1></div>;
    return <div className="all">
    <title>{data.title}</title>
        <h1 className="center">{data.title}</h1>
        <ul>
            <li>Upload Date: {data.uploadDate}</li>
            <li>Created Date: {data.createdDate}</li>
            <li>Completed Date: {data.completedDate?data.completedDate:"Not Completed"}</li>
            <li>Description: {data.description}</li>
            <li>Completed: {data.completed?"Yes":"No"}</li>

        </ul>
        <Link href="/"  >
                <button type="button" >
                    Back to Main Page
                </button>
            </Link>


    </div>
}