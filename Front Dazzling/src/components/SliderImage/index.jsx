import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
function SliderImage() {
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="sliderImage">
        <Slider {...settings}>
          <div className="photo">
            <img
              src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/homev_updated1_02.jpg"
              alt=""
            />
            <div className="text">
              <div className="title">
                <h2>Markup: Title With Special Characters</h2>
              </div>
              <div className="info">
                <p>
                  Markup: Title With Special Characters .Putting special
                  characters in the title should have no adverse effect on the
                  layout or functionality. Special characters in the post title
                  have been known to cause issues with JavaScript when it is
                  minified, especially in the admin when editing the post itself
                  ie. issues with metaboxes, media upload.
                </p>
              </div>
            </div>
          </div>
          <div className="photo">
            <img
              src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03.jpg"
              alt=""
            />
            <div className="text">
              <div className="title">
                <h2>Markup: HTML Tags and Formatting</h2>
              </div>
              <div className="info">
                <p>
                  Headings Header one Header two Header three Header four Header
                  five Header six Blockquotes Single line blockquote: Stay
                  hungry. Stay foolish. Multi line blockquote with a cite
                  reference: People think focus means saying yes to the thing
                  you’ve got to focus on. But that’s not what it means at all.
                  It means saying no to.
                </p>
              </div>
            </div>
          </div>
          <div className="photo">
            <img
              src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide02.jpg"
              alt=""
            />
            <div className="text">
              <div className="title">
                <h2>Markup: Image Alignment</h2>
              </div>
              <div className="info">
                <p>
                  Welcome to image alignment! The best way to demonstrate the
                  ebb and flow of the various image positioning options is to
                  nestle them snuggly among an ocean of words. Grab a paddle and
                  let’s get started.
                </p>
              </div>
            </div>
          </div>
        </Slider> <div className="line">
        <p>Do you like this awesome and free WordPress WooCommerce theme?</p>
        <button>Download Now!</button>
      </div>
      </div>
     
    </>
  );
}

export default SliderImage;
