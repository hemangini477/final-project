import React, { useState } from "react";
import "./PlantList.css";
import TotalCost from "./TotalCost";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../plantSlice";

const PlantList = () => {
  const [showItems, setShowItems] = useState(false);
  // const [numberOfPeople, setNumberOfPeople] = useState(1);
  const plantItems = useSelector((state) => state.plant);
  const dispatch = useDispatch();
  // const remainingAuditoriumQuantity = 3 - plantItems.find(item => item.name === "Auditorium Hall (Capacity:200)").quantity;

  const handleToggleItems = () => {
    console.log("handleToggleItems called");
    setShowItems(!showItems);
  };

  const handleAddToCart = (index) => {
    // if (plantItems[index].name === "Auditorium Hall (Capacity:200)" && plantItems[index].quantity >= 3) {
    //   return;
    // }
    dispatch(incrementQuantity(index));
  };

  const handleRemoveFromCart = (index) => {
    if (plantItems[index].quantity > 0) {
      dispatch(decrementQuantity(index));
    }
  };

  const getItemsFromTotalCost = () => {
    const items = [];
    plantItems.forEach((item) => {
      if (item.quantity > 0) {
        items.push({ ...item, type: "plant" });
      }
    });
    return items;
  };

  const items = getItemsFromTotalCost();

  const ItemsDisplay = ({ items }) => {
    console.log(items);
    return (
      <>
        <div className="display_box1">
          {items.length === 0 && <p>No items selected</p>}
          <table className="table_item_data">
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.cost}</td>
                  <td>{item.quantity}</td>
                  <td>{item.cost * item.quantity}</td>
                </tr>
              ))}
              ;
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const calculateTotalCost = (section) => {
    let totalCost = 0;
    if (section === "plant") {
      plantItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    }
    return totalCost;
  };
  const plantTotalCost = calculateTotalCost("plant");

  const navigateToProducts = (idType) => {
    if (idType == "#plant") {
      if (showItems) {
        // Check if showItems is false
        setShowItems(!showItems); // Toggle showItems to true only if it's currently false
      }
    }
  };

  const totalCosts = {
    plant: plantTotalCost,
  };

  return (
    <>
      <navbar className="navbar_event_conference">
        <div className="company_logo">Plant Selections</div>
        <div className="left_navbar">
          <div className="nav_links">
            <a href="#plant" onClick={() => navigateToProducts("#plant")}>
              plant
            </a>
            {/* <a href="#addons" onClick={() => navigateToProducts("#addons")}>
              Add-ons
            </a> */}
          </div>
          <button className="" onClick={() => setShowItems(!showItems)}>
            <img
              src="https://github.com/hemangini477/final-project/tree/main/public/Shopping Cart.png"
              alt=""
              width="40px;"
            />
          </button>
        </div>
      </navbar>
      <div className="main_container">
        {!showItems ? (
          <div className="items-information">
            <div id="vanue" className="venue_container container_main">
              <div className="text">
                <h1>Plant Selection</h1>
              </div>
              <div className="venue_selection">
                {plantItems.map((item, index) => (
                  <div className="venue_main" key={index}>
                    <div className="img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="text">{item.name}</div>
                    <div>${item.cost}</div>
                    <div className="button_container">
                      {plantItems[index].name ===
                      "Auditorium Hall (Capacity:200)" ? (
                        <>
                          <button
                            className={
                              plantItems[index].quantity === 0
                                ? "btn-warning btn-disabled"
                                : "btn-minus btn-warning"
                            }
                            onClick={() => handleRemoveFromCart(index)}
                          >
                            &#8211;
                          </button>
                          <span className="selected_count">
                            {plantItems[index].quantity > 0
                              ? ` ${plantItems[index].quantity}`
                              : "0"}
                          </span>
                          <button
                            className={
                              remainingAuditoriumQuantity === 0
                                ? "btn-success btn-disabled"
                                : "btn-success btn-plus"
                            }
                            onClick={() => handleAddToCart(index)}
                          >
                            &#43;
                          </button>
                        </>
                      ) : (
                        <div className="button_container">
                          <button
                            className={
                              plantItems[index].quantity === 0
                                ? " btn-warning btn-disabled"
                                : "btn-warning btn-plus"
                            }
                            onClick={() => handleRemoveFromCart(index)}
                          >
                            &#8211;
                          </button>
                          <span className="selected_count">
                            {plantItems[index].quantity > 0
                              ? ` ${plantItems[index].quantity}`
                              : "0"}
                          </span>
                          <button
                            className={
                              plantItems[index].quantity === 10
                                ? " btn-success btn-disabled"
                                : "btn-success btn-plus"
                            }
                            onClick={() => handleAddToCart(index)}
                          >
                            &#43;
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="total_cost">Total Cost: ${plantTotalCost}</div>
            </div>

            {/*Necessary Add-ons*/}
            {/* <div id="addons" className="venue_container container_main">
              <div className="text">
                <h1> Add-ons Selection</h1>
              </div>
              <div className="addons_selection"></div>
              <div className="total_cost">Total Cost:</div>
            </div> */}

            {/* Meal Section */}

            {/* <div id="meals" className="venue_container container_main">
              <div className="text">
                <h1>Meals Selection</h1>
              </div>

              <div className="input-container venue_selection"></div>
              <div className="meal_selection"></div>
              <div className="total_cost">Total Cost: </div>
            </div> */}
          </div>
        ) : (
          <div className="total_amount_detail">
            <TotalCost
              totalCosts={totalCosts}
              handleClick={handleToggleItems}
              ItemsDisplay={() => <ItemsDisplay items={items} />}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PlantList;
