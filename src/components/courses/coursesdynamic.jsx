import React from 'react'
import logo from '../../assets/Group-icon/Group 63691.png'
import clock from '../../assets/logo/clock.svg'
import './myTab.css'

function CoursesDynamic({ name, day, assignments, time }) {
  return (
    <div>
      <div className="name-sec">
        <span>by {name}</span>
        <div className="Assignments-sec">
          <span className="logo-section">
            <img src={logo} alt="logo" />
            {assignments} Assignments
          </span>
        </div>
        <span className="logo-section" id="logo">
          <img src={clock} alt="clock" />
          {time} days
        </span>
        <div className="submit-due">
          <span>{day} days ago</span>
        </div>
      </div>
    </div>
  )
}

export default CoursesDynamic
