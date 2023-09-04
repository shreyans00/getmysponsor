import React, { useState } from "react";
import testimonialsData from "../json/testimonials.json";

function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right"); // Default slide direction

  const prevTestimonial = () => {
    setSlideDirection("left"); // Set slide direction to left
    setTimeout(() => {
      setCurrentTestimonial((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1
      );
      setSlideDirection("");
    }, 500); // Adjust the animation duration as needed
  };

  const nextTestimonial = () => {
    setSlideDirection("right"); // Set slide direction to right
    setTimeout(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
      setSlideDirection("");
    }, 500); // Adjust the animation duration as needed
  };

  const testimonial = testimonialsData[currentTestimonial];

  return (
    <>
      <div className="testimonialSection">
        <h1>TESTIMONIALS</h1>
        <div className="testimonial-container">
          <div className="arrows arrows1">
            <button onClick={prevTestimonial}> &#8249;</button>
          </div>
          <div className={`testimonial ${slideDirection}`}>
            <h6>"{testimonial.viewpoint}"</h6>
            <br />
            <h4>{testimonial.portfolio}</h4>
            <h5>{testimonial.name}</h5>
            <p>{testimonial.organization}</p>
          </div>
          <div className="arrows arrows2">
            <button onClick={nextTestimonial}> &#8250;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
