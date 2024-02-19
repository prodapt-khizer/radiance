import React from "react";
import "./SubMenu.css";
import { ChevronRightOutlined } from "@mui/icons-material";

const SubMenu = ({
  subMenuItems,
  selectedSubMenu,
  handleUpdateSelectedSubMenu,
}) => {
  return (
    <div className="submenu-container">
      <div className="submenu-head">Services</div>
      {subMenuItems.map((service, i) => {
        return (
          <div
            className={`pointer ${
              i + 1 === subMenuItems.length
                ? "submenu-item-last"
                : "submenu-item"
            } d-flex ${
              selectedSubMenu === service.keybase ? "submenu-active" : ""
            }`}
            onClick={() => handleUpdateSelectedSubMenu(service)}
          >
            <div className="submenu-item-image">
              <img
                className={`submenu-${service.keybase}`}
                src={service.image}
              />
            </div>
            <div className="submenu-menucontent">
              <div className="submenu-menutitle d-flex justify-between">
                <div>{service.name}</div>
                <div>
                  <ChevronRightOutlined />
                </div>
              </div>
              <div className="submenu-menudescription">
                {service.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;
