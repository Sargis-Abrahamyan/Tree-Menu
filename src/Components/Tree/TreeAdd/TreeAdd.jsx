import { useState } from 'react';

import styles from "./style/tree.module.css"

const TreeAdd = ({ items, actions, openModal }) => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("")

    const addItemHandler = (e) => {
        e.preventDefault()
        actions.addItem(name, items, url);
        try {
            openModal(false)
            setName("");
            setUrl("");
        }
        catch (e) {
           console.error("")
        }
    };

    return (
        <form onSubmit={(e) => addItemHandler(e)} className={styles.addForm}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Add Tree Items" />
            <input type={"text"} value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL..." />
            <button><i className="fa-solid fa-circle-plus"></i></button>

        </form>
    )
}

export default TreeAdd