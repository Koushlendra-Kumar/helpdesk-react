import { AirplaneTicket, Dashboard, LocalActivity } from "@mui/icons-material";
import CustomLink from "../utils/CustomLink";

const Sidebar = () => {
  return (
    <div className="w-80 bg-[#6a676736] hidden lg:block h-screen">
      <div className="flex flex-col items-end gap-4 justify-center pt-4">
        <CustomLink to="/">
          <span>
            <Dashboard /> Dashboard
          </span>
        </CustomLink>

        <CustomLink to="/newTicket">
          <span>
            <LocalActivity /> New Ticket
          </span>
        </CustomLink>
        <CustomLink to="/allTickets">
          <span>
            <AirplaneTicket /> List Tickets
          </span>
        </CustomLink>
      </div>
    </div>
  );
};

export default Sidebar;
