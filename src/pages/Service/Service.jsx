import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import "./Service.css";
import ServiceMenu from "../../components/ServiceMenu/ServiceMenu";
import Tower_Icon from "../../assets/images/tower2.png";
import Sim_Icon from "../../assets/images/sim.png";
import Dish_Icon from "../../assets/images/dish.png";
import Workd_Icon from "../../assets/images/world2.png";
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

const Service = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };

  const serviceMenuItems = [
    {
      name: "AT&T 5G",
      description:
        "AT&T 5G for MVNOs: Fast. Reliable. Revolutionary Step into the future with AT&T’s leading 5G services, designed to revolutionize connectivity for Mobile Virtual Network Operators (MVNOs). Experience the difference with lightning-fast speeds, expansive nationwide coverage, and unmatched reliability that keeps your customers connected, no matter where they are.",
      image: Tower_Icon,
      key: "5g",
    },
    {
      name: "EDGE Computing Services",
      description:
        "Experience the future of low-latency, high-efficiency digital solutions that transform your business operations and customer experiences.",
      image: Workd_Icon,
      key: "edge",
    },

    {
      name: "OEM SIM Procurement",
      description:
        "Harness the power of advanced SIM technology combined with our intuitive billing platform, ensuring a competitive edge in the fast-paced telecom market, while optimizing revenue and operational efficiency Customized for OEMs.",
      image: Dish_Icon,
      key: "ome",
    },
    {
      name: "Prepaid",
      description:
        "Harness the power of advanced SIM technology combined with our intuitive billing platform, ensuring a competitive edge in the fast-paced telecom market, while optimizing revenue and operational efficiency Customized for OEMs.",
      image: Sim_Icon,
      key: "prepaid",
    },
  ];
  const addOnItems = [
    {
      name: "Portal as a Service",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, AT&T introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Elevate Your MVNO Operations with AT&T's`,
      key: "Service_Portal",
    },
    {
      name: "Billing, Charging & Rating",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, AT&T introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Transform Your MVNO Business with AT&T's Billing, 
        Charging, & Rating Systems Addons`,
      key: "Billing",
    },
    {
      name: "Portal as a Service",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, AT&T introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Elevate Your MVNO Operations with AT&T's`,
      key: "Charging",
    },
    {
      name: "Billing, Charging & Rating",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, AT&T introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Transform Your MVNO Business with AT&T's Billing, 
          Charging, & Rating Systems Addons`,
      key: "Rating",
    },
  ];
  const [selectedService, setSelectedService] = useState("5g");
  const [currentService, setCurrentService] = useState(serviceMenuItems[0]);
  const [checkEdgeComput, setCheckEdgeComput] = useState("Yes");
  const [selectedEdgeComput, setSelectedEdgeComput] =
    useState("Content Delivery");

  const handleRadioChange = (event) => {
    setCheckEdgeComput(event.target.value);
  };
  return (
    <div>
      <ResponsiveDrawer
        updateDrawerStatus={updateDrawerStatus}
        currentTab="Service"
      />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body d-flex">
          <div className="service-sidemenu">
            <ServiceMenu
              selectedService={selectedService}
              serviceMenuItems={serviceMenuItems}
            />
          </div>
          <div className="service-body">
            <div className="service-details-container">
              <div className="service-head-card">
                <div className="service-item-image">
                  <img
                    className={`service-${currentService.key}`}
                    src={currentService.image}
                  />
                  <div className="service-menutitle">{currentService.name}</div>
                </div>
                <div className="service-menucontent">
                  <div className="service-menudescription">
                    {currentService.description}
                  </div>
                </div>
              </div>
              <div className="service-body-card">
                <div className="service-body-title">Service Management</div>
                <div>
                  <div className="service-question-area">
                    <span className="service-question">
                      Current Use of Edge Computing
                    </span>
                    <Tooltip title={"Current Use of Edge Computing"}>
                      <HelpOutlineOutlined className="service-question-icon pointer" />
                    </Tooltip>
                  </div>
                  <RadioGroup
                    value={checkEdgeComput}
                    onChange={handleRadioChange}
                    row
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                  <TextField
                    className="service-Describe"
                    multiline
                    rows={3}
                    placeholder="Describe"
                  />
                </div>
                <div className="d-flex service-body-edgecomputing">
                  <div className="service-body-edge-item">
                    <div className="service-question-area">
                      <span className="service-question">
                        Select Edge Computing
                      </span>
                      <Tooltip title={"Current Use of Edge Computing"}>
                        <HelpOutlineOutlined className="service-question-icon pointer" />
                      </Tooltip>
                    </div>
                    <FormControl className="service-field-width">
                      <Select value={selectedEdgeComput}>
                        <MenuItem value={"Content Delivery"}>
                          Content Delivery
                        </MenuItem>
                        <MenuItem value={"Content Delivery"}>
                          Content Delivery
                        </MenuItem>
                        <MenuItem value={"Content Delivery"}>
                          Content Delivery
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="service-body-edge-item">
                    <div className="service-question-area">
                      <span className="service-question">
                        Select Edge Computing
                      </span>
                      <Tooltip title={"Current Use of Edge Computing"}>
                        <HelpOutlineOutlined className="service-question-icon pointer" />
                      </Tooltip>
                    </div>
                    <TextField
                      InputProps={{
                        endAdornment: (
                          <InputAdornment className="side-name" position="end">
                            Per Month
                          </InputAdornment>
                        ),
                      }}
                      className="service-field-width-end"
                      placeholder="Enter data volume"
                    />
                  </div>
                </div>
                <div className="service-body-requirements-head">
                  <span className="service-question-2">
                    Connectivity Requirements
                  </span>
                  <Tooltip title={"Current Use of Edge Computing"}>
                    <HelpOutlineOutlined className="service-question-icon-head pointer" />
                  </Tooltip>
                </div>

                <div className="d-flex service-body-edgecomputing">
                  <div className="service-body-edge-item">
                    <div className="service-question-area">
                      <span className="service-question">Bandwidth</span>
                    </div>
                    <TextField
                      InputProps={{
                        endAdornment: (
                          <InputAdornment className="side-name" position="end">
                            Mbps
                          </InputAdornment>
                        ),
                      }}
                      className="service-field-width"
                      placeholder="Enter Bandwidth"
                    />
                  </div>
                  <div className="service-body-edge-item">
                    <div className="service-question-area">
                      <span className="service-question">
                        Latency requirements
                      </span>
                    </div>
                    <TextField
                      InputProps={{
                        endAdornment: (
                          <InputAdornment className="side-name" position="end">
                            M/S
                          </InputAdornment>
                        ),
                      }}
                      className="service-field-width-end"
                      placeholder="Content Delivery"
                    />
                  </div>
                </div>
                <div>
                  <div className="service-question-area">
                    <span className="service-question">
                      Integration Requirements:
                    </span>
                  </div>
                  <TextField
                    className="service-Describe"
                    multiline
                    rows={3}
                    placeholder="Describe any specific requirements"
                  />
                </div>
                <Divider className="my-2" />
                <div className="service-body-title">ADD ONs</div>
                <div className="d-flex-wrap">
                  {addOnItems.map((addOn) => {
                    return (
                      <div className="service-addon-container">
                        <div className="service-addon-card">
                          <div className="d-flex justify-between">
                            <div className="service-addon-title">
                              {addOn.name}
                            </div>
                            <Button
                              variant="contained"
                              className="bg-att custom-button"
                              startIcon={<AddOutlined />}
                            >
                              Add
                            </Button>
                          </div>
                          <Tooltip title={addOn.subTitle}>
                            <div className="service-addon-subtitle">
                              {addOn.subTitle}
                            </div>
                          </Tooltip>

                          <Tooltip title={addOn.description}>
                            <div className="service-addon-description">
                              {addOn.description}
                            </div>
                          </Tooltip>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
