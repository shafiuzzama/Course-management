import React from "react";
import "./Overview.css";
import SizesChips from "./SizesChips";

function Overview() {
  return (
    <>
      <div className="overviewClass">
        <div className="headingOverview">
          <b className="subtitleClass">About this course</b>
        </div>
        <div className="paraOverview">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            facilis alias. Voluptate distinctio quaerat officia non magni soluta
            dolorum vero! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Hic, repellendus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corrupti, culpa. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Qui, cum quam! Neque voluptatum ab
            molestiae assumenda nihil atque magni consectetur.
          </p>
        </div>
        <div className="container">
          <div className="box">
            <p className="box">Expected time</p>
            <p>12 days</p>
          </div>
          <div className="box">
            <p>Created By</p>
            <p>Dev Kanda</p>
          </div>
          <div className="box">
            <p>Created On</p>
            <p>20 Feb 2023</p>
          </div>
        </div>
        <div className="SkillClass">
          <p>
            <b>Skills</b>
          </p>
        </div>
        <div className="chipClass">
          <SizesChips />
        </div>
      </div>
      <div className="heding-dis">
        <div className="descriptionClassMain">
          <div className="descriptionClass">
            <p>
              <b>Description</b>
            </p>
          </div>
          <div className="discBothSec">
            <p className="disc-section1">
              Software engineer will be responsible for writing and installing
              web application code in order to fix errors and add need
              enhancements. They will also help support the services on which
              the applications run. This includes patching and updating OS
              software, installing new components,and helping to resolve
              incidents and/or outages. The software engineer will also assist
              the team in managing code
            </p>
            <p className="disc-section2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
              obcaecati iste. Explicabo ipsa earum voluptas doloremque
              voluptatem, ab esse iusto?
            </p>
          </div>
        </div>
        <div>
          <div className="requirementClass">
            <p>
              <b>Requirement</b>
            </p>
          </div>
          <div className="discSecContent">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
              eos.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
              eos.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
              eos.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
              eos.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
              eos.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
              eos.
            </li>
          </div>
        </div>
        <div>
          <div className="atTheEnd">
            <p>
              <b>At end what you will learn</b>
            </p>
          </div>
          <div className="atTheEnd1">
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </li>
          </div>
        </div>
      </div>
      <div className="heding-dis">
        <div className="instructorClass">
          <p>
            <b>Instructor</b>
          </p>
        </div>
        <div className="masterName">
          <p>
            <b>Dev kanda</b>
          </p>
        </div>
        <div className="instructorClass2">
          <p className="instructorClass2para1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea
          </p>
          <p className="instructorClass2para2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit
            vero aut suscipit nisi tempore adipisci incidunt corrupti quaerat
            quisquam!
          </p>
        </div>
      </div>
    </>
  );
}

export default Overview;
