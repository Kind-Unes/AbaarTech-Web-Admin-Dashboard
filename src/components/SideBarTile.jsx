import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCells,
  faBagShopping,
  faShoppingCart,
  faUserGroup,
  faHeadphones,
  faGear,
  faFlag,
  faScrewdriver,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function SideBarTile({
  selectedIndex,
  tileIndex,
  setSelectedIndex,
  setActiveScreen,
  tileName,
}) {
  let icon;

  switch (tileIndex) {
    case 0:
      icon = faTableCells;
      break;
    case 1:
      icon = faBagShopping;
      break;
    case 2:
      icon = faFlag;
      break;
    case 3:
      icon = faShoppingCart;
      break;
    case 4:
      icon = faUserGroup;
      break;
    case 5:
      icon = faUser;
      break;
    case 6:
      icon = faGear;
      break;
    case 7:
      icon = faScrewdriver;
      break;
    default:
      icon = faGear;
      break;
  }

  return (
    <div
      className={`
        ${selectedIndex === tileIndex ? "bg-blue-500" : "bg-white"}
        ${selectedIndex === tileIndex ? "text-white" : "text-[#667085]"} 
        ${
          selectedIndex === tileIndex
            ? ""
            : "hover:bg-blue-100 hover:text-blue-700"
        }  transition-colors duration-300 
        cursor-pointer mb-2 px-3 py-2 rounded-lg flex flex-row items-center
      `}
      onClick={() => {
        setSelectedIndex(tileIndex);
        setActiveScreen(tileName); // Update the active screen
      }}
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
