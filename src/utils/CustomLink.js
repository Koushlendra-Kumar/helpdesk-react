import { ArrowForwardIos } from "@mui/icons-material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolvedPath = useResolvedPath(to);
  let match = useMatch({ path: resolvedPath.pathname, end: true });

  return (
      <Link
        to={to}
        className="w-full flex items-center justify-center"
      >
        {match ? (<span><ArrowForwardIos/></span>): (<span></span>)}
        {children}
      </Link>
  );
};

export default CustomLink;