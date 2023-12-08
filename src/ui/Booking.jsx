import React, { useState } from "react";

const Booking = () => {
  const [selectedseat, setSelectedseat] = useState([]);

  const numRows = 10;
  const numCols = 20;

  const seatPosition = [];

  for (let row = 1; row <= numRows; row++) {
    const rowSeats = [];
    for (let col = 1; col <= numCols; col++) {
      const colSeats = String.fromCharCode(64 + row) + col;
      rowSeats.push(colSeats);
    }
    seatPosition.push(rowSeats);
  }

  const handleSeatclick = (seatNumber) => {
    setSelectedseat([...selectedseat, seatNumber]);
    console.log(selectedseat);
  };

  return (
    <div className="container bookingInterface">
      <div className="row">
        <div className="bookingCheckBoxContainer">
          <div className="availabeStatus">
            <span className="available"></span>
            <h5>Available</h5>
          </div>

          <div className="availabeStatus">
            <span className="selected"></span>
            <h5>Selected</h5>
          </div>

          <div className="availabeStatus">
            <span className="booked"></span>
            <h5>Booked</h5>
          </div>

          <div className="availabeStatus">
            <span className="sold"></span>
            <h5>Sold</h5>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="seatSectionContainer">
          {seatPosition.map((rowSeats, index) => (
            <div key={index} className="selectSeat">
              {rowSeats.map((colSeats, colIndex) => (
                <span
                  className={`seatPosition ${selectedseat.includes(colSeats) ? 'selectedSeats' : ''}`}
                  onClick={() => handleSeatclick(colSeats)}
                  key={colIndex}
                >
                  {" "}
                  {colSeats}{" "}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
