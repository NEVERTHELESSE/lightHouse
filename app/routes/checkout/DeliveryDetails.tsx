import { useState, type ChangeEvent } from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

export function DeliveryDetails() {
  const [number, setNumber] = useState("");
  function updateNumber(e: ChangeEvent<HTMLInputElement>) {}
  return (
    <div className="rounded-2xl border p-10 border-gray-200 shadow  w-125 h-155 ml-10">
      <h3 className="text-2xl font-bold">Checkout Form</h3>
      <form action="action">
        <div className="flex w-full items-center hadow-lg p-6  border my-3 border-gray-300  rounded-2xl">
          <FaHouse className="text-gray-400" />
          <input
            type="text"
            required
            placeholder="Drop off Address *"
            className="w-full ml-3 h-full focus:outline-0"
          />
        </div>
        <div className="flex relative w-full items-center hadow-lg p-6  border my-3 border-gray-300  rounded-2xl">
          <FaPhoneAlt className="text-gray-400" />
          <p className="mx-2">+234</p>
          <input
            type="number"
            onChange={updateNumber}
            required
            maxLength={10}
            max={10}
            placeholder="Phone Number *"
            className="w-full ml-3 h-full focus:outline-0"
          />
        </div>
      </form>
    </div>
  );
}
