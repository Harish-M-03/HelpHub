import React, { useState } from 'react';
import { MdWork } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import alldata from '../assets/assets';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const BookService = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  // State for modal, selected date, time slot, address, booking confirmation, and selected slot address
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [address, setAddress] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedSlotAddress, setSelectedSlotAddress] = useState(null);

  // Available time slots (e.g., 9 AM to 5 PM)
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  // Load booked slots from localStorage
  const getBookedSlots = () => {
    const booked = JSON.parse(localStorage.getItem('bookedSlots')) || {};
    return booked[product.id] || {};
  };

  const isSlotBooked = (date, time) => {
    const bookedSlots = getBookedSlots();
    const dateString = date.toISOString().split('T')[0]; 
    return bookedSlots[dateString]?.some(slot => slot.time === time) || false;
  };

  // Get address for a specific booked slot
  const getSlotAddress = (date, time) => {
    const bookedSlots = getBookedSlots();
    const dateString = date.toISOString().split('T')[0];
    const slot = bookedSlots[dateString]?.find(slot => slot.time === time);
    return slot ? slot.address : null;
  };

  // Handle clicking a time slot
  const handleSlotClick = (time) => {
    if (isSlotBooked(selectedDate, time)) {
      const slotAddress = getSlotAddress(selectedDate, time);
      setSelectedSlotAddress(slotAddress);
    } else {
      setSelectedTime(time);
      setSelectedSlotAddress(null);
    }
  };

  // Handle booking submission
  const handleBooking = () => {
    if (!selectedTime) {
      alert('Please select a time slot.');
      return;
    }
    if (!address.trim()) {
      alert('Please enter your address.');
      return;
    }

    const dateString = selectedDate.toISOString().split('T')[0];
    const bookedSlots = getBookedSlots();

    // Update booked slots with time and address
    if (!bookedSlots[dateString]) {
      bookedSlots[dateString] = [];
    }
    bookedSlots[dateString].push({ time: selectedTime, address });

    // Save to localStorage
    const allBookedSlots = JSON.parse(localStorage.getItem('bookedSlots')) || {};
    allBookedSlots[product.id] = bookedSlots;
    localStorage.setItem('bookedSlots', JSON.stringify(allBookedSlots));

    // Confirm booking
    setBookingConfirmed(true);
    setShowModal(false);
  };

  // Recommended services
  const recommendedServices = alldata
    .filter((item) => item.city === product?.city && item.id !== product?.id)
    .slice(0, 4);

  const handleBookNow = (recommendedProduct) => {
    navigate('/book', { state: { product: recommendedProduct } });
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row mt-10 ml-40 mr-40">
        {/* Main Service Content */}
        <div className="flex-1">
          <div className="h-70 flex justify-center items-center bg">
          <div className="ml-10 flex flex-col justify-center items-center">
            <div className="flex">
              <IoMdPerson className="w-12 h-15" />
              <p className="p-3 font-bold text-4xl">{product.person}</p>
            </div>
            <div className="flex">
              <MdWork className="w-8 h-7" />
              <p className="pl-2 font-bold text-xl">{product.title}</p>
            </div>
          </div>
          <div className="flex ml-10">
            <div className="flex items-center">
              <FaPhoneAlt className="w-5 h-5" />
              <p className="p-3 text-xl">{product.contact}</p>
            </div>
            <div className="ml-10 flex items-center">
              <FaLocationDot className="w-5 h-5" />
              <p className="p-3 text-xl">{product.area}</p>
            </div>
            <div className="ml-10 flex items-center">
              <FaCity className="w-5 h-5" />
              <p className="p-3 text-xl">{product.city}</p>
            </div>
          </div>
          <div className="flex flex-col ml-10">
            <button
              className="bg-black text-white text-xl p-2 rounded"
              onClick={() => setShowModal(true)}
            >
              Book Now
            </button>
            <p className="mt-1">Posted {product.day} days ago</p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-xl">
            Service charge assigned by the {product.title} is{' '}
            <span className="text-xl font-bold">{product.charge}</span>
          </p>
          <h3 className="font-bold text-2xl mt-3">Service</h3>
          <div
            className="text-xl mt-2"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <h3 className="font-bold text-2xl mt-3">Experience</h3>
          <div
            className="text-xl mt-2"
            dangerouslySetInnerHTML={{ __html: product.experience }}
          ></div>
        </div>
      </div>

      {/* Recommended Services Sidebar */}
      <div className="w-80 ml-10">
        <h3 className="font-bold text-2xl mb-4">Recommended Services</h3>
        {recommendedServices.length > 0 ? (
          recommendedServices.map((service) => (
            <div
              key={service.id}
              className="bg-purple-100 rounded p-4 mb-4 shadow cursor-pointer"
              onClick={() => handleBookNow(service)}
            >
              <img
                src={service.image}
                className="w-full h-24 object-cover rounded mb-2"
                alt={service.title}
              />
              <h4 className="text-lg font-bold">{service.title}</h4>
              <p className="text-sm">
                <strong>Person:</strong> {service.person}
              </p>
              <p className="text-sm">
                <strong>Area:</strong> {service.area}
              </p>
              <p className="text-sm">
                <strong>City:</strong> {service.city}
              </p>
              <button className="mt-2 bg-purple-400 text-white px-3 py-1 rounded">
                Book Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No other services found in {product.city}.</p>
        )}
      </div>
    </div>

    {/* Booking Modal */}
    {showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Book {product.title}</h2>
          <h3 className="text-lg mb-2">Select Date</h3>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            minDate={new Date()} // Disable past dates
          />
          <h3 className="text-lg mt-4 mb-2">Select Time Slot</h3>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                className={`p-2 rounded ${
                  isSlotBooked(selectedDate, time)
                    ? 'bg-gray-300 cursor-pointer'
                    : selectedTime === time
                    ? 'bg-purple-500 text-white'
                    : 'bg-purple-200'
                }`}
                onClick={() => handleSlotClick(time)}
                disabled={isSlotBooked(selectedDate, time) && !selectedSlotAddress}
              >
                {time}
              </button>
            ))}
          </div>
          {selectedSlotAddress && (
            <div className="mt-4">
              <h3 className="text-lg mb-2">Booked Address</h3>
              <p className="text-sm bg-gray-100 p-2 rounded">{selectedSlotAddress}</p>
            </div>
          )}
          {!selectedSlotAddress && (
            <>
              <h3 className="text-lg mt-4 mb-2">Enter Your Address</h3>
              <textarea
                className="w-full p-2 border rounded"
                rows="4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address for communication"
              />
            </>
          )}
          <div className="flex justify-end mt-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => {
                setShowModal(false);
                setSelectedSlotAddress(null);
              }}
            >
              Cancel
            </button>
            {!selectedSlotAddress && (
              <button
                className="bg-purple-500 text-white px-4 py-2 rounded"
                onClick={handleBooking}
              >
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>
    )}

    {/* Booking Confirmation */}
    {bookingConfirmed && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
          <p>
            You have booked {product.title} on{' '}
            {selectedDate.toISOString().split('T')[0]} at {selectedTime}.
          </p>
          <p className="mt-2">
            <strong>Address:</strong> {address}
          </p>
          <div className="flex justify-end mt-4">
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setBookingConfirmed(false);
                navigate('/'); // Redirect to home or another page
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    )}

    <Footer />
  </div>
);
};

export default BookService;