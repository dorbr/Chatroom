import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <SidebarIcon icon={<FaFire size="28" />} text="Home"/>
      <Divider />
      {/* <SidebarIcon icon={<BsPlus size="32" />} text="Login"/> */}
      <SidebarIcon icon={<BsFillLightningFill size="20" />} text="Login" />
      <SidebarIcon icon={<FaPoo size="20" />} text="About" />
      <Divider />
      <SidebarIcon icon={<BsGearFill size="22" />} text="Contacts" />
    </div>
  );
};

const SidebarIcon = ({ icon, text = "tooltip 💡"}) => (

  <div
    className="sidebar-icon group"
    onMouseEnter={(event) => {
      event.target.children[1] ? event.target.children[1].style.transform = "scale(1)" : <></>;
    }}
    onMouseLeave={(event) => {
      event.target.children[1] ? event.target.children[1].style.transform = "scale(0)" : <></>;
    }}
  >
    {icon}
    <span
      className="sidebar-tooltip group-hover:scale-100"
      style={{ transform: "scale(0)" }}
    >
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
