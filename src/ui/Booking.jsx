import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTokenFromCookie } from "../service/TokenService";
import SignIn from "../component/SignIn";
import axios from "axios";
import {successTOast} from "../component/ToastMessage";



const Booking = () => {
  const { slug } = useParams();
  const { user, token } = getTokenFromCookie();
  const user_id = user.id;
  const [selectedseat, setSelectedseat] = useState([]);
  const [selectedSeatsString, setSelectedSeatsString] = useState('');
  const [bookedseats, setBookedseats] = useState([]);






  // let selectedSeatsString = JSON.stringify(selectedseat);
  useEffect(() => {
    setSelectedSeatsString(JSON.stringify(selectedseat)); // Update the string representation when selectedseat changes
  }, [selectedseat]);
  
  let totalSeats = selectedseat.length;
  let totalPrice = selectedseat.length * 350 || 0;
  console.log(`price of the ticket is ${totalPrice}`);
  console.log("slug", slug);
  console.log("user", user_id);
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
    if(!selectedseat.includes(seatNumber) && !bookedseats.includes(seatNumber)){
      setSelectedseat([...selectedseat, seatNumber]);
      console.log(selectedseat);
    }else{
      setSelectedseat(selectedseat.filter((seat) => seat !== seatNumber));
      console.log(selectedseat);
      alert("Seat had been Already Booked");

    }
  };

  const handleBooknow = async () => {

    try {
      const response = await axios.post(
        `http://localhost:4000/movie/bookseat/${slug}/${user_id}`,
        {
          seat: selectedSeatsString,
          total_cost:totalPrice , // You need to implement this function
        }
      );

      console.log(response.data);
			successTOast(response.data.message);

      setTimeout(()=> {
      window.location.reload();

      }, 2000);

      
    } catch (error) {
      console.error("Error booking seat:", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/movie/getBookedSeats/${slug}/${user_id}`);
        const bookedSeatsData = response.data;

        // store multiple arrays in one array
        const allBookedSeats = [];

        for (const subArray of bookedSeatsData.bookedSeats) {
          const seatsString = subArray.slice(1, -2);
          const individualSeats = seatsString.split(",").map((seat) => seat.trim());
        
          // Concatenate row and seat number and add to the array
          individualSeats.forEach(seat => {
            const cleanSeat = seat.replace(/"/g, '');
            const combinedSeat = cleanSeat.replace(/(\d+)$/, "$1"); // Remove non-digit characters from the end
            allBookedSeats.push(combinedSeat);
          });
        }
        
        allBookedSeats.forEach(seat => {
          const element = document.querySelector(`.seat.${seat}`);
        
          if (element) {
            element.style.backgroundColor = 'red'; // Replace with your desired styles
            element.style.color = 'white';
          }
        });

        setBookedseats(allBookedSeats);
        console.log("Booked seats:", allBookedSeats);
      
      
      } catch (error) {
        console.error("Error fetching booked seats:", error.message);
      }
    };
  
    fetchData();
  }, [slug, user_id]);
  

  return (
    <>
      {token ? (
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

            
            </div>
          </div>

          <div className="row mt-4">
            <div className="seatSectionContainer">
              {seatPosition.map((rowSeats, index) => (
                <div key={index} className="selectSeat">
                  {rowSeats.map((colSeats, colIndex) => (
                    <span
                      className={`seatPosition ${
                        selectedseat.includes(colSeats) ? "selectedSeats" : ""
                      } ${bookedseats.includes(colSeats) ? "bookedSeats" : " "} ${colSeats}`}
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

          <input type="hidden" />
          <div className="row">
            <button onClick={handleBooknow} className="proccedButton">
              Book Seat Now
            </button>
          </div>

          <p>Total Price = {totalPrice}</p>
          <p>Total Number of seat = {totalSeats}</p>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Booking;
