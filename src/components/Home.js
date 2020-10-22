import React from "react";
import Banner from "./Banner";
import Card from './Card';
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card 
          src = "https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=480"
          title = "Online Experiences"
          description = "Unique activities we can do together, led by a world of hosts."
        />
        <Card 
          src = "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
          title = "Unique stays"
          description = "Spaces that are more than just a place to sleep."
        />
        <Card 
          src = "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
          title = "Entire homes"
          description = "Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="3 bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="$130/night"
        />
        <Card 
          src="https://images.unsplash.com/photo-1542928658-22251e208ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/night"
        />
        <Card 
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1339&q=80"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/night"
        />
      </div>
    </div>
  );
};

export default Home;
