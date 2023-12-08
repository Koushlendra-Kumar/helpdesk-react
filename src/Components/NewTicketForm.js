const NewTicketForm = () => {
  return (
    <div className="w-full p-6">
      <div>
        <h1 className="text-center w-full text-xl font-semibold mb-6">
          Create New Ticket
        </h1>
        <form>
          <div className="flex flex-row flex-wrap mb-3">
            <div className="w-1/2 mt-3 flex items-center justify-between">
              <label className="text-sm ml-16" htmlFor="ticketNo">
                Ticket No.:
              </label>
              <input
                id="ticketNo"
                className="bg-[#6a676736] mr-16 active:border-none  rounded-lg border-b-[3px] ml-3 border-[#6a676736]"
                type="text"
              />
            </div>
            <div className="w-1/2 mt-3 flex items-center justify-between">
              <label className="text-sm ml-16">Date:</label>
              <input
                className="bg-[#6a676736] mr-16 active:border-none  rounded-lg border-b-[3px] ml-3 border-[#6a676736]"
                type="text"
              />
            </div>
            <div className="w-1/2 mt-3 flex items-center justify-between">
              <label className="text-sm ml-16">Name:</label>
              <input
                className="bg-[#6a676736] mr-16 active:border-none  rounded-lg border-b-[3px] ml-3 border-[#6a676736]"
                type="text"
              />
            </div>
            <div className="w-1/2 mt-3 flex items-center justify-between">
              <label className="text-sm ml-16">Department:</label>
              <input
                className="bg-[#6a676736] mr-16 active:border-none  rounded-lg border-b-[3px] ml-3 border-[#6a676736]"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col ">
            <label className="text-sm ml-16">Subject:</label>
            <input
              type="text"
              className="bg-[#6a676736] mx-16 my-3 max-w-auto active:border-none  rounded-lg border-b-[3px] border-[#6a676736]"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2 mb-3">
              <div className="mt-3 flex items-center justify-between">
                <label className="text-sm ml-16">Category:</label>
                <input
                  type="text"
                  className="bg-[#6a676736] mr-16 ml-3 active:border-none  rounded-lg border-b-[3px]  border-[#6a676736]"
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <label className="text-sm ml-16">Type:</label>
                <input
                  type="text"
                  className="bg-[#6a676736] mr-16 active:border-none  rounded-lg border-b-[3px] ml-3 border-[#6a676736]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <label className="text-sm ml-16">Priority:</label>
                <input
                  type="text"
                  className="bg-[#6a676736] mr-16 active:border-none  rounded-lg border-b-[3px] ml-3 border-[#6a676736]"
                />
              </div>
              <div></div>
            </div>
            <div className="mt-3 flex items-start justify-between">
              <label className="text-sm ml-16">Description:</label>
              <textarea
                type="text"
                className="bg-[#6a676736] active:border-none  mr-16 rounded-lg border-b-[3px] w-60 h-full ml-14 border-[#6a676736]"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between mt-3">
            <div className="flex items-center justify-center ml-16 h-20 w-64 border">
              <input className="mr-4" type="checkbox" />
              <label>I'm not a robot.</label>
            </div>
            <button className="mr-16 bg-[#55D6C2] px-8 rounded-xl py-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicketForm;
