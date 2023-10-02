import { Link } from "@mui/material";
import SiteSvg from "/site/credit-suisse.svg";

const SiteLogo = () => {
  return (
    <Link href="#" height="100%" display="inline-flex" alignItems="center">
      <img src={SiteSvg} alt="Site Logo" height={30} />
    </Link>
  );
};

export default SiteLogo;
