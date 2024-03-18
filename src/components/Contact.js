import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="message"
        />
        <button className="border border-green-200 p-2 m-2 rounded-lg bg-green-200">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
