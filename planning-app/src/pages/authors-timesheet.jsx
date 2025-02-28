import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Table } from "lucide-react";

const AuthorsTimesheet = () => {
  const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [filter, setFilter] = useState("");

  const tableData = [
    {
      Author: "KM A.I",
      BillPerHour: "",
      BillabelHours: "5",
      TotalBill: "$0,000.00",
      PaymentStatus: "Not Paid",
      Postheadline: "This year we do headlines that conveys security guards maximum time entries",
      Category: "Best Places to Visit",
    },
    {
      Author: "Tommy Baker",
      BillPerHour: "$20",
      BillabelHours: "5",
      TotalBill: "$0,100.00",
      PaymentStatus: "Not Paid",
      Postheadline: "10 Recipes For Quarantine Days",
      Category: "Best Recipes",
    },
    {
      Author: "Oscar Fernandez",
      BillPerHour: "$32",
      BillabelHours: "4",
      TotalBill: "$0,128.00",
      PaymentStatus: "Not Paid",
      Postheadline: "Art Cafe",
      Category: "Editor's Picks",
    },
    {
      Author: "Amanda Parker",
      BillPerHour: "$27.5",
      BillabelHours: "6",
      TotalBill: "$0,165.00",
      PaymentStatus: "Paid",
      Postheadline: "Chocolate Soufflé",
      Category: "Best Recipes",
    },
    {
      Author: "Emily Walter",
      BillPerHour: "$25",
      BillabelHours: "3",
      TotalBill: "$0,075.00",
      PaymentStatus: "Not Paid",
      Postheadline: "Pizza O&#039;Clock",
      Category: "Where To Eat",
    },
  ];

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = tableData.filter((row) =>
    row.Author.toUpperCase().includes(filter.toUpperCase()) ||
    row.BillPerHour.toUpperCase().includes(filter.toUpperCase()) ||
    row.BillabelHours.toUpperCase().includes(filter.toUpperCase()) ||
    row.TotalBill.toUpperCase().includes(filter.toUpperCase()) ||
    row.PaymentStatus.toUpperCase().includes(filter.toUpperCase()) ||
    row.Postheadline.toUpperCase().includes(filter.toUpperCase()) ||
    row.Category.toUpperCase().includes(filter.toUpperCase())
  );



  return (
    <>

      <div className="flex justify-center mt-12">
        <header className="w-80 md:w-[626px] lg:w-[748px] h-12 flex items-center justify-between bg-[#049E38] rounded">
        <div className="flex gap-4">
                    <button 
                      className="flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm ml-2 md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" 
                      onClick={() => navigate("/content-calendar")}
                    >
                      <Table className="w-5 h-5" /> Content Record
                    </button>
        
                    <button 
                      className="hidden md:flex items-center gap-2 bg-[#9C4DD3] text-white font-serif font-bold text-sm md:text-base lg:text-lg px-4 py-2 rounded hover:bg-white hover:text-[#9C4DD3]" 
                      onClick={() => navigate("/authors-timesheet")}
                    >
                      <Table className="w-5 h-5" /> Authors' Timesheet
                    </button>
                  </div>
             
             
                       <Menu 
                         className="w-6 h-6 text-white cursor-pointer mr-2 md:w-8 md:h-8" 
                         onClick={() => setMenuOpen(!menuOpen)} 
                       />

          {menuOpen && (
            <div className="absolute top-12 right-2 bg-white shadow-lg rounded-lg w-48">
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => { navigate("/content-calendar"); setMenuOpen(false); }}
              >
                Content Record
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-black"
                onClick={() => { navigate("/authors-timesheet"); setMenuOpen(false); }}
              >
                Authors' Timesheet
              </button>
            </div>
          )}
        </header>
      </div>


      <div className="flex justify-center items-center mt-3">
        <main className="w-4/5 lg:w-[748px] flex items-center gap-2">
        <input
            type="text"
            placeholder="Search"
            value={filter}
            onChange={handleSearchChange}
            className="flex-1 h-12 border border-[#C6C9D7] rounded p-2 text-[#A1A7B3] focus:outline-none focus:ring-2 focus:ring-[#9C4DD3]"
          />
         
        </main>
      </div>


      <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border-collapse rounded-lg">
  <thead className="bg-[#F3F3FE] text-left">
    <tr>
      <th className="px-4 py-2">
        <input type="checkbox" className="w-4 h-4" />
      </th>
      <th className="p-4 font-serif font-bold">Author</th>
      <th className="p-4 font-serif font-bold">Bill Per Hour</th>
      <th className="p-4 font-serif font-bold">Billable Hours</th>
      <th className="p-4 font-serif font-bold">Total Bill</th>
      <th className="p-4 font-serif font-bold">Payment Status</th>
      <th className="p-4 font-serif font-bold">Post Headline</th>
      <th className="p-4 font-serif font-bold">Category</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    {filteredData.map((row, index) => (
       <tr key={index} className="even:bg-gray-50">
        <td className="px-4 py-2">
          <input type="checkbox" className="w-4 h-4" />
        </td>
        <td className="px-4 py-2">{row.Author}</td>
        <td className="px-4 py-2">{row.BillPerHour}</td>
        <td className="px-4 py-2">{row.BillabelHours}</td>
        <td className="px-4 py-2">{row.TotalBill}</td>
        <td className="px-4 py-2">
          <span
            className={`px-2 py-1 rounded ${
              row.PaymentStatus === "Paid"
                ? "bg-green-200 text-green-700"
                : "bg-red-200 text-white"
            }`}
          >
            {row.PaymentStatus}
          </span>
        </td>
        <td className="px-4 py-2">{row.Postheadline}</td>
        <td className="px-4 py-2">{row.Category}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </>
  );
};

export default AuthorsTimesheet;
