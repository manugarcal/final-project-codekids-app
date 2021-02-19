import React from 'react';

/* 





*/

const MediaText = ({title, subtitle, text, buttonText, img, url}) => {
    return (
        <>
        <div className="site-section bg-custom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <img src={img} alt="Image" className="img-fluid" />
              </div>
              <div className="col-md-5 ml-auto pl-md-5">
                <span className="text-cursive h5 text-red">
                  {title}
                </span>
                <h3 className="text-black">
                  {subtitle}
                </h3>
                <p>
                  {text}
                </p>

                <p className="mt-5">
                  <a href={url} className="btn btn-warning py-4 btn-custom-1">
                    {buttonText}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default MediaText;