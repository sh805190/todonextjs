import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Todo1 from "./components/Todo1"
import Form from "./components/Form"
import { nanoid } from "nanoid";
import { InferGetStaticPropsType } from 'next'
import useSWR from 'swr'


type item = {
  id: string;
  title: string;
  createdDate: string;
  completedDate: string;
  description: string;
  completed: boolean;
  deleteItem: Function;
  toggleItemCompleted: Function;
};
type form = {
  addItem: Function;
}
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/all')
  const items1 = await res.json()
  return {
    props: {
      items1,
    },
  }
}

export default function Home({ items1 }) {
  const temp = { deleteItem, toggleItemCompleted };

  const here = items1.map((item: any) => {
    return { ...item, ...temp }
  })

  const [items, setItems] = useState<Array<item>>(here);
//filter to ensure completed item at bottom
  const itemListActive = items.filter(item => !item.completed).map(item => (
    <Todo1 id={item.id}
      title={item.title}
      completed={item.completed}
      createdDate={item.createdDate}
      completedDate={item.completedDate}
      description={item.description}
      key={item.id}
      deleteItem={deleteItem}
      toggleItemCompleted={toggleItemCompleted}

    />
  ))
  //filter to ensure completed item at bottom

  const itemListComplete = items.filter(item => item.completed).map(item => (
    <Todo1 id={item.id}
      title={item.title}
      completed={item.completed}
      createdDate={item.createdDate}
      completedDate={item.completedDate}
      description={item.description}

      key={item.id}
      deleteItem={deleteItem}
      toggleItemCompleted={toggleItemCompleted}

    />
  ))
  //ensure  item state completed also
  function toggleItemCompleted(id: string) {
    const updatedItems = items.map(item => {
      if (id === item.id) {
        return { ...item, completed: !item.completed, completedDate: new Date().toString() }
      }
      return item;
    })
    setItems(updatedItems)
  }
  //delete item

  function deleteItem(id: string) {
    const remainingItems = items.filter(item => id !== item.id);
    setItems(remainingItems)
  }
  //add item

  function addItem(title: string, description: string) {
    const newItem = { id: "todo-" + nanoid(), title: title, createdDate: new Date().toString(),
     completedDate: null, description: description, completed: false, deleteItem, toggleItemCompleted }
    setItems([...items, newItem])


  }

  const viewTemplate = (<div className="all">
    <title>To do list</title>
    <h1 className="center">To do list</h1>
    <Form addItem={addItem} />
    <ul>
      {itemListActive}
      {itemListComplete}

    </ul>

  </div>);
  return <div>{viewTemplate}</div>;
}
