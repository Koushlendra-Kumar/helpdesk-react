const TicketDetails = ({ ticketDetails, showModal, setShowModal }) => {
  return (
    <div
      onClick={(e) => setShowModal(false)}
      className={`${
        showModal ? "" : "hidden"
      }  fixed inset-0 bg-black bg-opacity-50`}
    >
      {ticketDetails && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-28 py-16">
          <h1 className="text-center text-xl font-semibold mb-4">
            Ticket Details
          </h1>
          <div className="text-sm flex flex-col items-start w-80 mb-4 gap-1">
            <div className="flex gap-2">
              <div>Ticket No.:</div>
              <div>{ticketDetails.ticketNo}</div>
            </div>
            <div className="flex gap-2">
              <div>Date:</div>
              <div>{ticketDetails.date}</div>
            </div>
            <div className="flex gap-2">
              <div>Name:</div>
              <div>{ticketDetails.name}</div>
            </div>
            <div className="flex gap-2">
              <div>Dept.:</div>
              <div>{ticketDetails.department}</div>
            </div>
          </div>
          <div className="text-sm flex flex-col items-start w-80 mb-4 gap-1">
            <div className="flex gap-2">
              <div>Title:</div>
              <div>{ticketDetails.subject}</div>
            </div>
            <div className="flex gap-2">
              <div>Description:</div>
              <div>{ticketDetails.description}</div>
            </div>
            <div>
              <div className="flex gap-2">Category:</div>
              <div>{ticketDetails.category}</div>
            </div>
            <div className="flex gap-2">
              <div>Type:</div>
              <div>{ticketDetails.type}</div>
            </div>
            <div className="flex gap-2">
              <div>Priority:</div>
              <div>{ticketDetails.priority}</div>
            </div>
            <div className="flex gap-2">
              <div>Status:</div>
              <div>{ticketDetails.status}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketDetails;
