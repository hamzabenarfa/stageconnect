"use client"
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import Alert from "./alert";
import LampStatus from "./lamp-status";
import {ModeOfOperation} from "./mode-of-operation"; // Import ModeOfOperation component

// Use dynamic import to load the Map component on the client side
const DynamicMap = dynamic(() => import("./map"), {
  ssr: false, // Ensure it's not rendered on the server
});

export const Dashboard = () => {
  const [coords, setCoords] = useState({
    latitude: 36.8065,
    longitude: 10.1815,
  });

  return (
    <div className="flex flex-row md:flex-col gap-2 px-4">
      <div className="flex mt-6 gap-4">
        <LampStatus />
        <Alert />
        <ModeOfOperation />
      </div>

      {/* Use DynamicMap instead of Map */}
      <DynamicMap coords={coords} />
    </div>
  );
};
