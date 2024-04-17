import React, { useState } from "react";
import "./continuelearning.css";
import CustomSeparator from "./CustomSeparator";
import CircleIcon from "@mui/icons-material/Circle";
import Modals from "../Certificate-modal/Modal";
import SubmitAssignment from "../submitAssignment/SubmitAssignment";
import MyTabs from "../courses/MyTabs";
const ContinueLearning = ({ isEnrolled }) => {
  const [open, setOpen] = useState(false);
  const bcg = "#FFFFFF";
  const iconColor = "#FF0000";
  const text = "upcoming";

  return (
    <>
      <Modals
        open={open}
        setOpen={setOpen}
        ModalsContent={<SubmitAssignment setOpen={setOpen} />}
      />
      <div className="ContinueLearning-outersection">
        <div className="ContinueLearning-headig">
          <CustomSeparator />
        </div>
        <div className="ContinueLearning-topics">
          <div>Topic 1 of 5, Assignment 1 of 4</div>
          <div className="ContinueLearning-chip">
            <CircleIcon sx={{ color: "#FFB302 ", height: "8px" }} />
            <span>inprogrees</span>
            <div
              className="ContinueLearning-chip"
              style={{ backgroundColor: bcg }}
            >
              <CircleIcon
                sx={{
                  color: iconColor ? iconColor : "#FFB302 ",
                  height: "8px",
                }}
              />
              {/* <span> {text === "upcoming" ? "upcoming" : "inprogress"}</span> */}
            </div>
          </div>
        </div>
        <div className="Lorem-ipsum">
          <p>Lorem ipsum</p>
        </div>
        <div className="ContinueLearning-heading">
          <h1>lipsum dolor sit amet, consetetur sadipscing</h1>
          <button onClick={() => setOpen(true)}>Submit Assignment</button>
        </div>
        <div className="ContinueLearning-paragrhaph">
          <div>
            <h3>lipsum dolor sit amet, consetetur sadipscing</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita
            </p>
          </div>
          <div>
            <h3>lipsum dolor sit amet, consetetur sadipscing</h3>
            <p>
              Illum ut quas impedit itaque rerum. Saepe optio rerum blanditiis
              iusto dignissimos odio ut nihil incidunt. Voluptas ipsam qui. Est
              dolores enim quia eveniet qui dolorum. Illo porro voluptatem ut
              ex. Non sed dolores libero quo at qui id sed expedita
            </p>
            <p>
              Nulla et similique veniam ut veritatis qui et fugit voluptatem.
              Inventore qui nisi est. Eligendi blanditiis at enim est inventore
              expedita architecto in. Quia voluptatem velit magnam
              exercitationem vitae ea exercitationem qui itaque. Velit culpa
              sit.
            </p>
            <p>
              Repellendus et cum deleniti sit numquam corporis. Cum accusamus
              ullam quisquam quis recusandae. Dolores officia repellendus
              temporibus. Provident molestias qui dicta sit qui laudantium est.
              Et blanditiis distinctio harum repellat ut. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita
            </p>
          </div>
          <div>
            <h3>lipsum dolor sit amet, consetetur sadipscing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repellendus nostrum delectus quasi quas rem deleniti officiis
              nihil enim exercitationem et provident quibusdam blanditiis,
              consequuntur quam, laboriosam quis mollitia repellat? Unde iure
              quae omnis non a placeat dolorum neque rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              nemo sit enim, voluptate delectus blanditiis similique, asperiores
              vitae atque ducimus esse illum dolor! Dolorem animi aliquam earum
              excepturi repellendus mollitia rem temporibus. Labore modi porro
              molestias voluptates dolore vel iste, tenetur odio, corrupti quasi
              accusamus esse dolores aspernatur earum ducimus laborum fuga!
              Similique iure distinctio quia. Perspiciatis enim, quas aliquid
              non veniam quidem. Ut minus odio temporibus dolorem eveniet ipsam!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              consequatur mollitia quaerat. Neque fuga veritatis minima? Dicta
              quibusdam labore omnis. Facilis molestiae, aperiam nemo assumenda
              quidem deleniti repellendus eos rem ad vel debitis? Aliquid
              molestias iste quidem minus aut esse mollitia iusto maxime ipsum,
              eius neque aliquam qui nesciunt vero, nostrum deserunt modi quo at
              tenetur, repellendus odit voluptatem beatae. Quaerat reiciendis
              sit aspernatur at enim mollitia reprehenderit esse corporis! Esse
              ex, velit placeat sit animi incidunt id fuga quos unde, optio eos.
              Odit impedit ad veritatis commodi aliquam saepe, a dicta nesciunt
              cupiditate? Tenetur consectetur labore eligendi sequi accusantium.
            </p>
          </div>
        </div>
        <div className="button-Nav">
          <MyTabs isEnrolled={!isEnrolled} />
        </div>
      </div>
    </>
  );
};

export default ContinueLearning;
