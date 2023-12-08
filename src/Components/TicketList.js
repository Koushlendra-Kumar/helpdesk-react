import { Search } from "@mui/icons-material";
import { useState } from "react";
import TicketDetails from "./TicketDetails";

const TicketList = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTicket, setCurrentTicket] = useState(null);

  const tickets = [
    {
      ticketNo: 1234,
      subject: "Login issue",
      status: "In progress",
      date: "13/08/21",
      name: "John Doe",
      department: "Tech support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      priority: "High",
      type: "Technical",
      category: "Network",
    },
    {
      ticketNo: 6546,
      subject: "Login issue",
      status: "In progress",
      date: "13/08/21",
      name: "John Doe",
      department: "Tech support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      priority: "High",
      type: "Technical",
      category: "Network",
    },
    {
      ticketNo: 9876,
      subject: "Login issue",
      status: "Closed",
      date: "13/08/21",
      name: "John Doe",
      department: "Tech support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      priority: "High",
      type: "Technical",
      category: "Network",
    },
    {
      ticketNo: 3218,
      subject: "Login issue",
      status: "In progress",
      date: "13/08/21",
      name: "John Doe",
      department: "Tech support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      priority: "High",
      type: "Technical",
      category: "Network",
    },
    {
      ticketNo: 9815,
      subject: "Login issue",
      status: "On hold",
      date: "13/08/21",
      name: "John Doe",
      department: "Tech support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      priority: "High",
      type: "Technical",
      category: "Network",
    },
  ];
  const statusColor = (status) => {
    let color = "";
    switch (status) {
      case "In progress":
        color = "bg-[#55D6C2]";
        break;
      case "On hold":
        color = "bg-[#3066BE] text-white";
        break;
      case "Closed":
        color = "bg-gray-700 text-white";
        break;
      default:
        color = "";
        break;
    }
    return color;
  };
  const showDetails = (ticketDetails) => {
    setCurrentTicket(ticketDetails);
    setShowModal(true);
  };

  return (
    <div className="w-full m-4">
      <div>
        <h1 className="w-full text-center font-semibold text-xl">
          List of Tickets
        </h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="Find ticket"
              className="bg-[#6a676736] rounded-lg border-b-[3px] px-4 py-2 border-[#6a676736]"
            />
            <label>
              <Search />
            </label>
          </div>
          <TicketDetails
            ticketDetails={currentTicket}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <div className="mt-4">
            <label>Show</label>
            <select>
              <option>10</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
              <option>60</option>
              <option>70</option>
              <option>80</option>
              <option>90</option>
              <option>100</option>
            </select>
            <label>entries</label>
          </div>
        </div>
        <div>
          <table className="w-full text-center mt-8">
            <thead>
              <tr className="!bg-white text-sm">
                <th>Ticket No.</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Supported By</th>
                <th>Date</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr onClick={(e) => showDetails(ticket)} key={ticket.ticketNo}>
                  <td className="py-2">{ticket.ticketNo}</td>
                  <td>{ticket.subject}</td>
                  <td>
                    <div
                      className={` rounded-xl ${statusColor(ticket.status)}`}
                    >
                      {ticket.status}
                    </div>
                  </td>
                  <td>{ticket.department}</td>
                  <td>{ticket.date}</td>
                  <td className="flex items-center justify-center py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="26"
                      viewBox="0 0 21 26"
                      fill="none"
                    >
                      <path
                        d="M9.18628 0.904438L6.67429 7.62704L1.05405 8.70855C0.0461803 8.9015 -0.357738 10.5415 0.373162 11.4809L4.43927 16.7107L3.47756 24.0984C3.30446 25.4338 4.37003 26.4341 5.2625 25.8096L10.2903 22.3213L15.3181 25.8096C16.2106 26.429 17.2762 25.4338 17.1031 24.0984L16.1414 16.7107L20.2075 11.4809C20.9384 10.5415 20.5345 8.9015 19.5266 8.70855L13.9064 7.62704L11.3944 0.904438C10.9443 -0.293851 9.64021 -0.309084 9.18628 0.904438Z"
                        fill="#FFC632"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="26"
                      viewBox="0 0 21 26"
                      fill="none"
                    >
                      <path
                        d="M9.18628 0.904438L6.67429 7.62704L1.05405 8.70855C0.0461803 8.9015 -0.357738 10.5415 0.373162 11.4809L4.43927 16.7107L3.47756 24.0984C3.30446 25.4338 4.37003 26.4341 5.2625 25.8096L10.2903 22.3213L15.3181 25.8096C16.2106 26.429 17.2762 25.4338 17.1031 24.0984L16.1414 16.7107L20.2075 11.4809C20.9384 10.5415 20.5345 8.9015 19.5266 8.70855L13.9064 7.62704L11.3944 0.904438C10.9443 -0.293851 9.64021 -0.309084 9.18628 0.904438Z"
                        fill="#FFC632"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="26"
                      viewBox="0 0 21 26"
                      fill="none"
                    >
                      <path
                        d="M9.18628 0.904438L6.67429 7.62704L1.05405 8.70855C0.0461803 8.9015 -0.357738 10.5415 0.373162 11.4809L4.43927 16.7107L3.47756 24.0984C3.30446 25.4338 4.37003 26.4341 5.2625 25.8096L10.2903 22.3213L15.3181 25.8096C16.2106 26.429 17.2762 25.4338 17.1031 24.0984L16.1414 16.7107L20.2075 11.4809C20.9384 10.5415 20.5345 8.9015 19.5266 8.70855L13.9064 7.62704L11.3944 0.904438C10.9443 -0.293851 9.64021 -0.309084 9.18628 0.904438Z"
                        fill="#FFC632"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="26"
                      viewBox="0 0 21 26"
                      fill="none"
                    >
                      <path
                        d="M9.18628 0.904438L6.67429 7.62704L1.05405 8.70855C0.0461803 8.9015 -0.357738 10.5415 0.373162 11.4809L4.43927 16.7107L3.47756 24.0984C3.30446 25.4338 4.37003 26.4341 5.2625 25.8096L10.2903 22.3213L15.3181 25.8096C16.2106 26.429 17.2762 25.4338 17.1031 24.0984L16.1414 16.7107L20.2075 11.4809C20.9384 10.5415 20.5345 8.9015 19.5266 8.70855L13.9064 7.62704L11.3944 0.904438C10.9443 -0.293851 9.64021 -0.309084 9.18628 0.904438Z"
                        fill="#FFC632"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="26"
                      viewBox="0 0 21 26"
                      fill="none"
                    >
                      <path
                        d="M9.18628 0.904438L6.67429 7.62704L1.05405 8.70855C0.0461803 8.9015 -0.357738 10.5415 0.373162 11.4809L4.43927 16.7107L3.47756 24.0984C3.30446 25.4338 4.37003 26.4341 5.2625 25.8096L10.2903 22.3213L15.3181 25.8096C16.2106 26.429 17.2762 25.4338 17.1031 24.0984L16.1414 16.7107L20.2075 11.4809C20.9384 10.5415 20.5345 8.9015 19.5266 8.70855L13.9064 7.62704L11.3944 0.904438C10.9443 -0.293851 9.64021 -0.309084 9.18628 0.904438Z"
                        fill="#FFC632"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>Showing 1 to 5 of 10 results</div>
          <div className="flex flex-row items-center justify-center gap-2">
            <button>{`<`}</button>
            <p>1</p>
            <button>{`>`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketList;
