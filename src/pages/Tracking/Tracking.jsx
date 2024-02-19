import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import "./Tracking.css";
import ServiceMenu from "../../components/SubMenu/SubMenu";
import ContractImg from "../../assets/images/ticket.png";
import OrderTracking from "../../assets/images/staroutline.png";
import TeansferArrow from "../../assets/images/networkarrow.png";
import TrackbBlue from "../../assets/images/trackblue.png";
import TrackbRed from "../../assets/images/trackred.png";
import TrackbYellow from "../../assets/images/trackyellow.png";
import TrackbGreen from "../../assets/images/trackgreen.png";

import {
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { AddOutlined, HelpOutlineOutlined } from "@mui/icons-material";

const Tracking = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };

  const trackingMenuItems = [
    {
      name: "Order Tracking",
      description:
        "This involves negotiating the terms and conditions of the agreement, drafting the contract document, and ensuring that it accurately reflects the intentions and agreements of all parties involved. ",
      image: ContractImg,
      key: "none",
      keybase: "order-tracking",
    },
    {
      name: "Contract Management",
      description:
        "This involves negotiating the terms and conditions of the agreement, drafting the contract document, and ensuring that it accurately reflects the intentions and agreements of all parties involved. ",
      image: OrderTracking,
      key: "none",
      keybase: "contract_management",
    },

    {
      name: "Transfer Status",
      description:
        "This involves negotiating the terms and conditions of the agreement, drafting the contract document, and ensuring that it accurately reflects the intentions and agreements of all parties involved.",
      image: TeansferArrow,
      key: "none",
      keybase: "transfer_status",
    },
  ];
  const TrackingList = [
    {
      name: "Total no of Tracking",
      count: "348",

      image: TrackbBlue,
    },
    {
      name: "Active Contracts",
      count: "280",

      image: TrackbGreen,
    },
    {
      name: "Awaiting Contracts",
      count: "60",

      image: TrackbYellow,
    },
    {
      name: "Expired Contracts",
      count: "8",
      image: TrackbRed,
    },
  ];
  const [selectedTracking, setSelectedTracking] = useState(
    "contract_management"
  );
  const [currentTracking, setCurrentTracking] = useState(trackingMenuItems[0]);
  const [checkEdgeComput, setCheckEdgeComput] = useState("Yes");
  const [selectedEdgeComput, setSelectedEdgeComput] =
    useState("Content Delivery");

  const handleRadioChange = (event) => {
    setCheckEdgeComput(event.target.value);
  };
  const updateSelectedTracking = (choosenService) => {
    setCurrentTracking(choosenService);
    setSelectedTracking(choosenService.key);
  };
  return (
    <div>
      <ResponsiveDrawer
        updateDrawerStatus={updateDrawerStatus}
        currentTab="Tracking"
      />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body d-flex">
          <div className="tracking-sidemenu">
            <ServiceMenu
              selectedSubMenu={selectedTracking}
              subMenuItems={trackingMenuItems}
              handleUpdateSelectedSubMenu={updateSelectedTracking}
            />
          </div>
          <div className="tracking-body">
            <div className="tracking-details-container">
              <div className="tracking-head-card">
                <div className="tracking-item-image">
                  <img
                    className={`tracking-${currentTracking.key}`}
                    src={currentTracking.image}
                  />
                  <div className="tracking-menutitle">
                    {currentTracking.name}
                  </div>
                </div>
                <div className="tracking-menucontent">
                  <div className="tracking-menudescription">
                    {currentTracking.description}
                  </div>
                </div>

                <div className="d-flex-wrap">
                  {TrackingList.map((trackItem) => {
                    return (
                      <div className="tracking-list-container">
                        <div className="tracking-list-card">
                          <div className="d-flex">
                            <img
                              className="tracking-image-list"
                              src={trackItem.image}
                            />
                            <div>
                              <div className="tracking-list-heading">
                                {trackItem.name}
                              </div>
                              <div className="tracking-list-Count">
                                {trackItem.count}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="tracking-body-card"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
