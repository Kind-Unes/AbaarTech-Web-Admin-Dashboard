
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCells,
  faBagShopping,
  faShoppingCart,
  faUserGroup,
  faHeadphones,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function SideBarTile({ selectedIndex, tileIndex, setSelectedIndex }) {
  let tileName;
  let icon;

  switch (tileIndex) {
    case 0:
      tileName = "Dashboard";
      icon = faTableCells;
      break;
    case 1:
      tileName = "Projects";
      icon = faBagShopping;
      break;
    case 2:
      tileName = "Orders";
      icon = faShoppingCart;
      break;
    case 3:
      tileName = "Customers";
      icon = faUserGroup;
      break;
    case 4:
      tileName = "Support";
      icon = faHeadphones;
      break;
    case 5:
      tileName = "Settings";
      icon = faGear;
      break;
    default:
      tileName = "X";
      icon = faGear;
      break;
  }

  return (
    <div
      className={`
        ${selectedIndex === tileIndex ? "bg-blue-500" : "bg-white"}
        ${selectedIndex === tileIndex ? "text-white" : "text-[#667085]"} 
        ${
          selectedIndex == tileIndex
            ? ""
            : "hover:bg-blue-100 hover:text-blue-700"
        }  transition-colors duration-300 
        cursor-pointer mb-2 px-3 py-2 rounded-lg flex flex-row items-center
      `}
      onClick={() => setSelectedIndex(tileIndex)}
    >
      <FontAwesomeIcon
        className="translate-y-[1.5px] scale-[.87]"
        color={selectedIndex === tileIndex ? "" : "#667091"}
        icon={icon}
      />
      <p className="pl-3">{tileName}</p>
    </div>
  );
}

export default SideBarTile;
