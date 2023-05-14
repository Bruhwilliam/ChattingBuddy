import * as React from "react";
import "./food.css";
import credit from "../assets/group.svg";
import pizza from "../assets/pizza.png";
import food_data from "../data/foodlist.json"

const Credit = () => {
  return <img className="credit" src={credit} alt="" />
};

const Credits = ({ count }) => {
  return Array.from({ length: count }).map((_item, index) => <Credit index={index} />)
};

const Food = ({props}) => {
  return (
    <div className={`component ${props.className || ""}`}>
      <div className="rectangle">
        <div className="food-title">{props.name || "Pizza\n"}</div>
        <img className="food-pic" src={props.url || pizza} alt="" />
        <div className="flex-container">
          {
            <Credits count={props.price || 2}>
            </Credits>
          }
        </div>
      </div>
    </div>
  );
};

const FoodList = () => {
  return (<div className="flex-container" id="food-list">
    {
      food_data.food.map((food, i) => <Food props={food}></Food>)
    }
  </div>)
};

export {FoodList};
export {Credits}
