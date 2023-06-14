import "./Information.style.css";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
//prettier-ignore
import {Button, CircularProgress, Tabs, Tab, Box, Avatar, Rating, Slider, Switch, Checkbox, Radio, TextField} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState, useEffect } from "react";
import { GrCloudUpload } from "react-icons/gr";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { CiAlignLeft, CiAlignRight, CiAlignCenterH } from "react-icons/ci";
import AvatarGirl from "../assets/avatar_1.jpg";
import AvatarOrange from "../assets/avatar_2.jpg";
import AvatarGlasses from "../assets/avatar_3.jpg";
import AvatarBoy from "../assets/avatar_5.jpg";

export default function Information() {
  const [progress, setProgress] = useState(0);
  const [value, setValue] = useState("one");
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChange = (event, newvalue) => {
    setValue(newvalue);
  };

  const [selectedValue, setSelectedValue] = useState("a");

  const changeValue = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: changeValue,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      <section className="information_section">
        <div className="information_flex">
          <div className="information_desc">
            <p className="information_subtitle">INTERFACE STARTER KIT</p>
            <h2 className="information_title">Flexible Components</h2>
            <p className="infomation_par">
              Pre-set components are easy to customize and use. We collected
              most popular elements. Menu, sliders, buttons, inputs etc. are all
              here. Just dive in!
            </p>
            <Link className="link_info" to={"/components"}>
              <button className="info_btn">
                Browse Components <BsChevronRight />{" "}
              </button>
            </Link>
          </div>
          <div className="information_container_functionalities">
            <div className="info_buttons">
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#754FFE",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  fontFamily: "'Barlow', sans-serif",
                  padding: "12px 23px",
                  ":hover": { backgroundColor: "#4027B6" },
                  zIndex: "1",
                  textTransform: "none",
                }}
              >
                + Add to Cart
              </Button>
              <Button
                sx={{
                  borderRadius: 6,
                  backgroundColor: "#fff",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  fontFamily: "'Barlow', sans-serif",
                  padding: "12px 20px",
                  color: "#000",
                  display: "flex",
                  gap: "0.4rem",
                  ":hover": { backgroundColor: "#D6DCE2" },
                  zIndex: "1",
                }}
              >
                <GrCloudUpload /> Upload
              </Button>
              <Button
                type="submit"
                color="primary"
                sx={{
                  borderRadius: "50%",
                  height: "60px",
                  width: "60px",
                  backgroundColor: "#00B8D9",
                  ":hover": { backgroundColor: "#0078A6" },
                  color: "#fff",
                  boxShadow: "rgba(0, 184, 217, 0.24) 0px 8px 16px 0px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1.3rem"
                  height="1.3rem"
                  viewBox="0 0 32 32"
                >
                  <path fill="currentColor" d="M13 15v8l7-4l-7-4z"></path>
                  <path
                    fill="currentColor"
                    d="M26 28H6a2.002 2.002 0 0 1-2-2V12a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v14a2.002 2.002 0 0 1-2 2zM6 12v14h20V12zm0-6h20v2H6zm2-4h16v2H8z"
                  ></path>
                </svg>
              </Button>
              <CircularProgress
                variant="determinate"
                value={progress}
                sx={{ color: "#F1A302" }}
              />
            </div>
            <div className="info_buttons">
              {" "}
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="primary"
                  indicatorColor="primary"
                  aria-label="secondary tabs example"
                >
                  <Tab
                    value="one"
                    label="Angular"
                    sx={{
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
                    className="Tabs"
                  />
                  <Tab
                    value="two"
                    label="React"
                    sx={{
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
                  />
                  <Tab
                    value="three"
                    label="Vue"
                    sx={{
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
                  />
                </Tabs>
              </Box>
              <div className="toggle_btns">
                <button className="btns_items">
                  <CiAlignLeft />
                </button>
                <button className="btns_items">
                  <CiAlignCenterH />
                </button>
                <button className="btns_items">
                  <CiAlignRight />
                </button>
              </div>
              <Button
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#3A2523",
                  fontSize: "0.9rem",
                  fontWeight: "inherit",
                  fontFamily: "'Barlow', sans-serif",
                  padding: "5px 30px",
                  color: "#DF9668",
                  display: "flex",
                  gap: "0.4rem",
                  ":hover": { backgroundColor: "#592D21" },
                  zIndex: "1",
                  textTransform: "none",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#B3200E",
                    height: "1.3rem",
                    width: "1.3rem",
                    fontSize: "1rem",
                    padding: "2px",
                  }}
                >
                  P
                </Avatar>{" "}
                Pamela <div className="close_btn">X</div>
              </Button>
            </div>
            <div className="info_buttons">
              <div className="info_avatars">
                <img
                  src={AvatarBoy}
                  alt="avatar boy"
                  className="avatars_png avatar_boy"
                />
                <img
                  src={AvatarGirl}
                  alt="avatar girl"
                  className="avatars_png"
                />
                <img
                  src={AvatarOrange}
                  alt="avatar girl"
                  className="avatars_png"
                />
                <img
                  src={AvatarGlasses}
                  alt="avatar girl"
                  className="avatars_png"
                />
                <div className="avatar_plus">+5</div>
              </div>
              <div>
                <Rating defaultValue={5} size="large"  />
              </div>
            </div>
            <div className="info_buttons">
              <Box width={250}>
                <Slider
                  size="small"
                  defaultValue={20}
                  aria-label="Always visible"
                  valueLabelDisplay="on"
                  sx={{ color: "#FA541C" }}
                />
              </Box>
              <div className="success_container">
                <AiOutlineCheckCircle className="check" />
                <p className="success_msg">
                  This is a <b className="bold">success</b> alert.
                </p>
                <AiOutlineCloseCircle className="close_success" />
              </div>
            </div>
            <div className="info_buttons">
              <div className="calendar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar className="date_calendar" />
                </LocalizationProvider>
              </div>
              <div className="second_part_btns">
                <div className="flex_label">
                  <Switch size="large" />
                  <p className="switch_label">Switch</p>
                </div>
                <div className="flex_label">
                  <Checkbox />
                  <p className="switch_label">Checkbox</p>
                </div>
                <div className="flex_label">
                  {" "}
                  <Radio
                    {...controlProps("e")}
                    sx={{
                      color: "#FA541C",
                      "&.Mui-checked": {
                        color: "#FA541C",
                      },
                    }}
                  />
                  <p className="switch_label">Radio Button</p>
                </div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
