import { set } from "date-fns";
import React, { useState } from "react";

const Form = ({ calculate }) => {
  const [date, setDate] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate(date);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <input className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 " value={date} type="date" onChange={handleDate} />
      <button
        className="disabled:bg-slate-400 disabled:cursor-not-allowed text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 border border-gray-700 focus:outline-none focus:ring-gray-800 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2"
        disabled={!date}
        type="submit"
      >
        Calculate
      </button>
    </form>
  );
};

export default Form;
