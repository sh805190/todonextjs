import React, { useState } from "react";
import Link from 'next/link';
type item = {
    id: string;
    title: string;
    createdDate: string;
    completedDate:string;
    description:string;
    completed: boolean;
    deleteItem: Function;
    toggleItemCompleted:Function;

};
//the to-do list component
export default function Todo1(props: item) {
    const viewTemplate = (
        
        <div>
            <input

                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleItemCompleted(props.id)}

            >
            </input>
            <label htmlFor={props.id} className="strikethrough">Title: {props.title} <br/>The Creation Date:{props.createdDate} <br/>The Completion Date:{props.completedDate}</label>
            <br/>
            <Link href="/[id]" as={`/${props.id}`} >
                <button type="button" >
                    Edit
                </button>
            </Link>
            <button type="button"
                onClick={() => props.deleteItem(props.id)}
            >Delete</button>
        </div>

    )
    return <div>{viewTemplate}</div>
}
