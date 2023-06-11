import "./Information.style.css";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Tabs,
  Tab,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  
} from "@mui/material";
import { useState, useEffect } from "react";
import { GrCloudUpload } from "react-icons/gr";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";

export default function Information() {
    const [alignment, setAlignment] = useState('left');
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

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

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
                  backgroundColor: "#754FFE",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  fontFamily: "'Barlow', sans-serif",
                  padding: "12px 20px",
                  ":hover": { backgroundColor: "#4027B6" },
                  zIndex: "1",
                }}
              >
                + Add to Cart
              </Button>
              <button className="btn_cloud">
                <GrCloudUpload /> Upload
              </button>
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
                <TfiLayoutMediaCenterAlt />
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
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                  sx={{ color: "#fff" }}
                >
                  <Tab
                    value="one"
                    label="Angular"
                    sx={{
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                    }}
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
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="left aligned">
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div></div>
            <div></div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
