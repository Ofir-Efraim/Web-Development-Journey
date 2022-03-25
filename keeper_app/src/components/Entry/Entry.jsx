import React from "react";
import { useState } from "react";

const Entry = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
    <form className="create-note">
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Title"
        value={title}
      />
      <input
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
        placeholder="Take a Note..."
        value={content}
      />
      <button
        onClick={(event) => {
          addNote(title, content);
          setTitle("");
          setContent("");
          event.preventDefault();
        }}
      >
        add
      </button>
      </form>
    </div>
  );
};

export default Entry;
