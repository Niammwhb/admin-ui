import React, { useState } from "react";
function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const buttonStyle = isClicked
    ? "bg-[#b83016] text-white"
    : "bg-gray-500 text-white";

  return (
    <div
      className="group flex flex-col justify-between h-full bg-white p-4 shadow-lg rounded-lg border border-transparent 
                  transition-all duration-300 
                  hover:scale-105 hover:border-gray-300 hover:bg-pink-50"
    >
      <div>
        <h3 className="font-bold text-lg mb-2 truncate">{title}</h3>
        <p className="text-gray-700 text-sm line-clamp-5">{body}</p>
      </div>

      <button
        onClick={handleClick}
        className={`w-full p-2 mt-4 rounded-md font-semibold transition-all duration-300 ${buttonStyle} 
                   hover:opacity-75`}
      >
        {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
