"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import axios from "axios";
import { useEffect, useState } from "react";

const handleButtonClicked = async () => {
  console.log("Function called");
  try {
    const response = await axios.get("/api/event-reminder");
    console.log(response.data.message);
  } catch (error) {
    console.error("Failed to send reminders:", error);
  }
};

function eventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col justify-center h-100 items-center mt-10">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <p>The current day is {date?.toDateString()}</p>
      <p>Click the following button to send a reminder</p>
      <Button onClick={handleButtonClicked}>Send Event Reminder</Button>
    </div>
  );
}

export default eventsPage;
