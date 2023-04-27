import React from "react";

export default function CreatePost() {
  return (
    <div>
      <form>
        <label>
          Title
          <input name="title" type="text" />
        </label>
        <label>
          Description
          <input name="Description" type="text" />
        </label>
        <label>
          Price
          <input name="Price" type="text" />
        </label>
        <label>
          Location
          <input name="Location" type="text" />
        </label>
        <button type="button">Create</button>
      </form>
    </div>
  );
}
