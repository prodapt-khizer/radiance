import React from "react";
import "./ServiceMenu.css";
import { ChevronRightOutlined } from "@mui/icons-material";

const ServiceMenu = ({ serviceMenuItems, selectedService }) => {
  return (
    <div className="servicemenu-container">
      <div className="servicemenu-head">Services</div>
      {serviceMenuItems.map((service, i) => {
        return (
          <div
            className={`pointer ${
              i + 1 === serviceMenuItems.length
                ? "servicemenu-item-last"
                : "servicemenu-item"
            } d-flex ${
              selectedService === service.key ? "servicemenu-active" : ""
            }`}
          >
            <div className="servicemenu-item-image">
              <img
                className={`servicemenu-${service.key}`}
                src={service.image}
              />
            </div>
            <div className="servicemenu-menucontent">
              <div className="servicemenu-menutitle d-flex justify-between">
                <div>{service.name}</div>
                <div>
                  <ChevronRightOutlined />
                </div>
              </div>
              <div className="servicemenu-menudescription">
                {service.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceMenu;
