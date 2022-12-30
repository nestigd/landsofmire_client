import StoreSidebar from "./StoreSidebar";
import SectionTitle from "./SectionTitle";
import StoreCardContainer from "./StoreCardContainer";
import { ReactComponent as MenuIcon } from "../icons/menu-icon.svg";
import { ReactComponent as Close } from "../icons/close.svg";
import { useState } from "react";

function StoreWidget() {
  const [sidebarState, setSidebarState] = useState(false);

  const toggleSidebar = () => {
    console.log("toggled " + sidebarState);
    if (sidebarState) {
      setSidebarState(false);
    } else {
      setSidebarState(true);
    }
  };

  return (
    <div
      className={
        "store-widget container-l" + (sidebarState ? " sidebaron" : " ")
      }
    >
      <StoreSidebar />
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        {sidebarState ? <Close /> : <MenuIcon />}
      </button>
      <div className="store-main">
        <div className="store-title">
          <SectionTitle
            subheading="MIRE'S MARKET"
            heading="Prepare for your next adventure"
          />
        </div>

        <div className="store-padding">
          <StoreCardContainer />
        </div>
      </div>
    </div>
  );
}

export default StoreWidget;
