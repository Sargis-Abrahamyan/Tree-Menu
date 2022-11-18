import { useState } from 'react';

import styles from "./style/treeEdit.module.css";

const TreeEdit = ({ item, actions, setEditOpen }) => {
    const [newName, setNewName] = useState(item.name)
    const [newUrl, setNewUrl] = useState(item.url)

    const editHandler = (e) => {
        e.preventDefault()
        // "new name newUrl" 
        actions.editItem(item, newName, newUrl);
        setEditOpen(false)
    };

    return (
        <form onSubmit={(e) => editHandler(e)} className={styles.editForm}>
            <input type={"text"} value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="new Name..." />
            <input type={"text"} value={newUrl} onChange={(e) => setNewUrl(e.target.value)} placeholder="new Url..." />
            <button className={styles.editBtn}><i className="fa-solid fa-file-pen"></i></button>

        </form>

    )
}

export default TreeEdit