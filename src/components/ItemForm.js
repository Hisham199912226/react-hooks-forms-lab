import React from "react";


function ItemForm(props) {
  const newItem = props.newItem;
  return (
    <form className="NewItem" onSubmit={props.onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItem ? newItem.name : ''} onChange={props.handleFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItem ? newItem.name : ''} onChange={props.handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
