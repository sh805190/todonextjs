import React, { useState } from "react";
import { useRouter } from 'next/router'

type form = {
    addItem: Function;
}
//the adding to-do item component
export default function Form(props: form) {

    const [isEditing, setEditing] = useState(false);
    const [error1,setError1]=useState("")
    const [error2,setError2]=useState("")

    const [title, setTitle] = useState('')
    const [description, setDes] = useState('')
    const [loading,setloading]=useState('');
//submit and check validation
    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setError1('');
        setError2('');

        if (title.length <4) {
            alert("The title length should be longer than 4!")
            setError1("Title not valid!")

            return;
        }

        if (description.length <20) {
            alert("The description length should be longer than 20!")
            setError2("Description not valid!")

            return;
        }
        setEditing(false)
        setloading("Plase wait, your item is being added...");
        setTimeout(() => {
            props.addItem(title, description);
            setError1('');
            setError2('');
            setTitle('');
            setDes('');
            setloading('')
          }, 3000);
          



    }
    function handleChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setTitle(e.target.value);
    }
    function handleChange2(e: { target: { value: React.SetStateAction<string>; }; }) {
        setDes(e.target.value);
    }
    const viewTemplate = (
<div>
    <span className="loading">{loading}</span>
        <button onClick={() => setEditing(true)}>Add new item</button>
        </div>
    )

    const editTemplate = (
        <form onSubmit={handleSubmit}>
            <h2 >
                <label htmlFor="new-todo-input" >
                    Title
                </label>
            </h2>
            <input
                type="text"
                placeholder="Title"
                id="new-todo-input"
                name="title"
                autoComplete="off"
                value={title}
                onChange={handleChange}
                required
            />
            <span className="error">{error1}</span>
            <h2 >
                <label htmlFor="new-todo-input" >
                    Description
                </label>
            </h2>
            <input
                type="text"
                placeholder="Description"
                id="new-todo-input"
                name="description"
                autoComplete="off"  
                style={{width:"400px"}}             
                value={description}
                onChange={handleChange2}
                required
            />
            <span className="error">{error2}</span>
            <div></div>
            <button type="submit" >
                Add
            </button>
        </form>

    )
    return <div>{isEditing ? editTemplate : viewTemplate}</div>
}
