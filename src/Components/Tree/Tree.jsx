import React from "react";

import TreeItem from "./TreeItem/TreeItem";

const Tree = ({ items, actions, setTree,parent }) => {

  return (
    <div style={{ display: "flex" }}>
      {!!items.length && (
     
              <ul>
                {items.map((item, index) => (
                  <TreeItem
                    key={item.id}
                    item={item}
                    parent={items}
                    actions={actions}
                    items={items}
                    index={index}
                    setTree={setTree}   
                  />
                ))}

              </ul>
            )}
    </div>
  );
};
export default Tree;
