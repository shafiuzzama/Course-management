import "../card/card.css";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import javaImg from "../../assets/markus-spiske/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image6 from "../../assets/markus-spiske-6/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image3 from "../../assets/markus-spiske-3/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image4 from "../../assets/markus-spiske-4/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image5 from "../../assets/markus-spiske-5/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image7 from "../../assets/markus-spiske-7/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image8 from "../../assets/markus-spiske-8/markus-spiske-1LLh8k2_YFk-unsplash.png";
import image9 from "../../assets/markus-spiske-9/markus-spiske-1LLh8k2_YFk-unsplash.png";
import Searchnav from "../searchnvabar/Searchnav";
export const data = [
  {
    id: "101",
    image: javaImg,
    heding: "Learn java programming : for absolute beginners",
    name: "Janmenjaya",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Java",
  },
  {
    id: "102",
    image: image6,
    heding: "Learn java programming : for absolute beginners",
    name: "Suni",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Python",
  },
  {
    id: "103",
    image: image3,
    heding: "Learn DevOps for absolute beginners",
    name: "Shafi",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "DevOps",
  },
  {
    id: "104",
    image: image4,
    heding: "Selenium Certification Training Course",
    name: "Nagraj",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Selenium",
  },
  {
    id: "105",
    image: image5,
    heding: "Learn java programming : for absolute beginners",
    name: "Monick",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Java",
  },
  {
    id: "106",
    image: image7,
    heding: "Mobile App Testing Using Appium",
    name: "Navnet",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Python",
  },
  {
    id: "107",
    image: image8,
    heding: "Learn java programming : for absolute beginners",
    name: "Ali",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "DevOps",
  },
  {
    id: "108",
    image: image9,
    heding: "Full Stack Web Developer Masters Course",
    name: "Ankit",
    day: "10",
    Assignments: "22",
    time: "5",
    chip: "Selenium",
  },
];

function CardSection({ id }) {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(`/courses/courses-card-details/${id}`);
  };

  return (
    <>
      <Searchnav />
      <div className="app-section">
        {data.map((item) => (
          <div key={item.id} onClick={handelClick}>
            <Card
              heding={item.heding}
              image={item.image}
              name={item.name}
              day={item.day}
              Assignments={item.Assignments}
              time={item.time}
              chip={item.chip}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardSection;
