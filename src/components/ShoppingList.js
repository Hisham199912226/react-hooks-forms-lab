import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import {v4 as uuidv4} from 'uuid';

function ShoppingList({ items , onItemsChange}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchItems] = useState("");
  const [newItem, setNewItem] = useState({
    id : uuidv4(),
    name : "",
    category: "Produce"
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearchItems(event.target.value);
  }

  function onItemFormSubmit(event) {
    event.preventDefault();
    onItemsChange(newItem);
    setNewItem({
      id : uuidv4(),
      name : "",
      category: "Produce"
    })
  }

  function handleFormChange(event){
    const targetName = event.target.name;
    const targetValue = event.target.value;

    const uuid =  uuidv4();
    setNewItem({
      ...newItem,
      id : uuid,
      [targetName] : targetValue
  });
  }


  const filteredItemsBasedOnCategory = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsToDisplay = filteredItemsBasedOnCategory.filter((item) => {
     if(search === "")
      return true;
     
      const itemName = item.name;
      return itemName.includes(search);
    
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit} handleFormChange = {handleFormChange} newItem={newItem} />
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} 
      searchItems={search} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
