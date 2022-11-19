import { useState, useEffect } from "react";

import Tree from "./Components/Tree/Tree";
import TreeAdd from "./Components/Tree/TreeAdd/TreeAdd.jsx"
import { Branch } from "./module";

function App() {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    const tree = JSON.parse(localStorage.getItem('tree'));
    if (tree) {
      setTree(tree);
    }
  }, []);

  const addItem = (name, parent, url) => {
    if (name.length < 3) {
      alert("Add field must contain at least 3 characters or more")
    }
     else if (url.length < 3) {
      alert(" Url must have more than 3 characters")
    }
    else {
      parent.push(new Branch(name, url));
    }
    setTree((prev) => [...prev]);
    localStorage.setItem("tree", JSON.stringify(tree))
    // emiting re-render
  };

  const removeItem = (id, parent) => {
    // Search the index of the item
    let indexOfBranch = 0;
    for (let i = 0; i < parent.length; i++) {
      const branch = parent[i];
      if (branch.id === id) {
        indexOfBranch = i;
        break;
      }

    }
    parent.splice(indexOfBranch, 1);
    // emiting re-render
    setTree((prev) => [...prev]);
    localStorage.setItem("tree", JSON.stringify(tree))
  };

  const editItem = (item, name, newUrl) => {
    // Search the index of the item
    item.url = newUrl
    item.name = name;
    // emiting re-render
    setTree((prev) => [...prev]);
    localStorage.setItem("tree", JSON.stringify(tree))
  };

  const actions = {
    addItem: addItem,
    removeItem: removeItem,
    editItem: editItem
  };

  return (
    <div className="App">
      <TreeAdd actions={actions} items={tree} />
      <Tree actions={actions} items={tree} setTree={setTree} />
    </div>
  );
}

export default App;

