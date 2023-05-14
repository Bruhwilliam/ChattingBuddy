import * as React from "react";
import "./food.css";
import credit_pic from "../assets/group.svg";
import pizza from "../assets/pizza.png";
import food_data from "../data/foodlist.json"
import { Link } from "react-router-dom";
import { useOtterSettings } from "../data/otter";

const Credit = () => {
  return <img className="credit" src={credit_pic} alt="" />
};

const Credits = ({ count }) => {
  return Array.from({ length: count }).map((_item, index) => <Credit index={index} />)
};

const Food = ({ props }) => {
  const { credit, addHealth, addCredit } = useOtterSettings();
  const handlePurchase = (price) => {
    if (credit >= price) {
      addHealth(price);
      addCredit(-price);
    }else{
      alert("Not enough credits!");
    }
  };

  return (
    <div className={`component ${props.className || ""}`}>
      <div className="rectangle" onClick={() => { return props.name != "Return" ? handlePurchase(props.price) : null }}>
        <div className="food-title">{props.name || "Pizza\n"}</div>
        <img className="food-pic" src={props.url || pizza} alt="" />
        <div className="flex-container">
          {
            <Credits count={props.price || 0}>
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
      food_data.food.map((food, i) => {
        return food.name == "Return" ? <Link to="/" style={{ textDecoration: 'none' }}>
          <Food props={food}></Food>
        </Link> : <Food props={food}></Food>
      })
    }

  </div>)
};

export { FoodList };
export { Credits }
