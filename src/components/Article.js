import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Function to generate reading time emojis
  const renderReadingTime = (minutes) => {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const interval = minutes < 30 ? 5 : 10;
    const count = Math.ceil(minutes / interval);
    return `${emoji.repeat(count)} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderReadingTime(minutes)}</p>
    </article>
  );
}

export default Article;
