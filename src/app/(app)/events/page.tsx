"use client";

import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";

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
    </div>
  );
}

export default eventsPage;
