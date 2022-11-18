import { useState } from "react";

import Tree from "../Tree";
import TreeAdd from "../TreeAdd/TreeAdd";
import TreeEdit from "../TreeEdit/TreeEdit";
import Modal from 'react-modal';
import styles from "./style/treeItem.module.css";

const TreeItem = ({ item, parent, actions, setTree }) => {

  const [editOpen, setEditOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true)

  const removeHandler = () => {
    actions.removeItem(item.id, parent);
  };

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (

    <li >
      {
        item.children.length !== 0 ?
          <button onClick={() => setMenuOpen(!menuOpen)} className={styles.openMenuBtn}>
            {menuOpen ? <i className="fa-solid fa-arrow-down"></i> : <i className="fa-solid fa-arrow-right"></i>}
          </button>
          : null
      }
      {editOpen ? <TreeEdit actions={actions} item={item} setEditOpen={setEditOpen} /> :
        <div className={styles.btnBlock} >
          <a href={item.url} target="_blank" >{item.name}</a>
          <div className={styles.treeBtnBlock}>

            {modalIsOpen ?
              <Modal isOpen={modalIsOpen} onRequestClose={openModal} ariaHideApp={false} style={customStyles} className={styles.modal}>

                <button onClick={openModal} className={styles.modalClose}><i className="fa-solid fa-xmark"></i></button>
                <h3>Add Items</h3>
                <TreeAdd actions={actions} items={item.children} openModal={openModal} />

              </Modal> :

              <button onClick={openModal} title="Add Menu" className={styles.addBtn}><i className="fa-solid fa-file-circle-plus"></i></button>
            }
            <button onClick={() => setEditOpen(!editOpen)} className={styles.editBtn} title="Edit Menu"><i className="fa-solid fa-pen-to-square"></i></button>
            <button onClick={removeHandler} className={styles.removeBtn} title="Remove Menu"><i className="fa-sharp fa-solid fa-trash"></i></button>
          </div>

        </div>
      }
      {menuOpen ? <Tree items={item.children} actions={actions} setTree={setTree} /> : ""}
    </li>
  );
}

export default TreeItem