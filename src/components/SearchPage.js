import React from "react";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";
import "../css/SearchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p> 62 stays . 22 october to 26 october . 2 guests</p>
        <h1> Stays nearby</h1>
        <Button variant="outlined"> Cancellation Flexibilty</Button>
        <Button variant="outlined"> Type of place</Button>
        <Button variant="outlined"> Price</Button>
        <Button variant="outlined"> Rooms and beds</Button>
        <Button variant="outlined"> More filters</Button>
      </div>

      <SearchResult
        img="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30/night"
        total="$117 total"
      />
      <SearchResult 
        img="https://images.unsplash.com/photo-1560067174-e553b3647603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Free parking . dry cleaning"
        star={5}
        price="$60/night"
        total="$450 total"
      />
      <SearchResult 
        img="https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        location="Private room in center of London"
        title="The Blue Room in London"
        description="2 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Washing Machine"
        star={4.23}
        price="$50/night"
        total="$375 total"
      />
      <SearchResult 
        img="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest . 3 bedroom . 3 bed . 5 shared bathrooms . wifi . Free parking . dry cleaning"
        star={5}
        price="$90/night"
        total="$600 total"
      />
      <SearchResult 
        img="https://images.unsplash.com/photo-1587985064135-0366536eab42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        location="Private room in center of London"
        title="London Studio Apartment"
        description="4 guests . 4 bedroom . 4 bed . 2 bathrooms . free parking . Washing Machine"
        star={3.8}
        price="$45/night"
        total="360 total"
      />
      <SearchResult 
        img="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.1}
        price="$55/night"
        total="$320 total"
      />
    </div>
  );
};

export default SearchPage;
