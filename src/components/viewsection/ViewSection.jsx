import React from 'react'
import "./viewsection.css"
import clock from "../../assets/logo/clock.svg";
const ViewSection = () => {
  return (
    <div className='viewer-outersection'>
   <div className="viewers-aquestion-icon">
        <p>Ask a question</p>
        <i className="fa-solid fa-x"></i>
      </div>

      <div className="sections-border"></div>
      <div className="askeds-by-rahul">
        <p>Asked by Rahul</p>
        <img src={clock} alt="" />
        <p>8 days</p>
      </div>
 <div className="viewer-text">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren
        </p>
        <div className="Viewer-topic">
          <p>Topic: Topic1</p>
        </div>
      </div>
      <div className='asnwer-section'>
        <h4>Answer</h4>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
        <div className="askeds-by-rahul">
        <p>Dev kanda</p>
        <p>instructor</p>
        <img src={clock} alt="" />
        <p>8 days</p>
      </div>
      </div>
      <div className='viewer-button'>
        <button>Done</button>
      </div>
    </div>
  )
}

export default ViewSection


