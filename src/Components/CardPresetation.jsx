import React from "react";

const CardPresetation = ({name, job, ceo, img}) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-5">
        <div className="post-entry-1 h-100 person-1 teal">
          <img src={img} alt="Image" className="img-fluid" />
          <div className="post-entry-1-contents">
            <span className="meta">{ceo}</span>
            <h2>{name}</h2>
            <p>{job}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPresetation;
