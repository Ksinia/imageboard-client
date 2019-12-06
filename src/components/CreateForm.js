import React from "react";

export default function CreateForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        name="title"
        id="title"
        type="text"
        placeholder="title"
        value={props.title}
        onChange={props.onChange}
      ></input>
      <label htmlFor="url">Image url: </label>
      <input
        name="url"
        id="url"
        type="url"
        placeholder="url"
        value={props.url}
        onChange={props.onChange}
      ></input>
      <button type="submit">Add picture</button>
    </form>
  );
}
