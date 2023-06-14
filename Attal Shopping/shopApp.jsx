import React from "react";
import "./index.css"
import Navbar from "./navbar";
import Contents from "./contents";
import Card from "./card";
import cardData from "./cardData";
import Ads from "./ads";
import Profile from "./profile";
import profileData from "./profileData";

export default function ShopApp(){
    const cardEl = cardData.map(card =>{
        return(
            <Card 
                key={card.id}
                {...card}
            />
        )
    })
    const profileEl = profileData.map(item =>{
        return(
            <Profile 
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div>
        <Navbar />
        <Contents />
        <h1 className="top--title">Available Computers</h1>
            <div className="card--list">
                {cardEl}
            </div>
            <Ads />
            <h1 className="top--title benz--top">Development Team</h1>
            <div className="profile--list">
            {profileEl}
            </div>
        </div>
    )
}