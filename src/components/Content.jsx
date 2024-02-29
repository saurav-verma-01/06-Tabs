import React from "react";

const Content = ({ show }) => {
  console.log(show);
  const { title, company, dates, duties } = show;
  return (
    <section className="content">
      <h1>{title}</h1>
      <p className="company-title">{company}</p>
      <time className="duration">{dates}</time>
      <ul className="job-desc">
        {duties.map((duty) => (
          <li key={duty}>{duty}</li>
        ))}
      </ul>
    </section>
  );
};

export default Content;
