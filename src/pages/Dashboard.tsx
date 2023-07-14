import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

import React, { useState, useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import ButtonReusable from "../components/common/Button";
import { Link, Text } from "@chakra-ui/react";
import { Row } from "antd";
import "./Dashboard.css";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {}, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <DashboardHeader
          // title="Mass General Brigham"
          title="Car Advise"
          subtitle="Welcome to your dashboard"
        />

        <Box></Box>
      </Box>

      {/* GRID */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          sx={{
            gridColumn: "span 12",
            backgroundColor: colors.primary[400],
          }}
        >
          {/* <Typography
            variant="h1"
            fontWeight="600"
            sx={{
              padding: "30px 30px 0 30px",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Welcome to Car Advise Dashboard
          </Typography> */}

          <Typography
            variant="h2"
            fontWeight="600"
            sx={{
              marginBottom: "15px",
              textAlign: "center",
              padding: "30px 30px 0px 30px",
            }}
          >
            Click below to launch the chatbot - available 24x7
          </Typography>

          {/* <Typography
            variant="h4"
            fontWeight="600"
            sx={{
              marginBottom: "15px",
              textAlign: "center",
              paddingBottom: "30px",
            }}
          >
            Made with Generative AI
          </Typography> */}
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "justify",
                fontWeight: "bold",
              }}
            >
              {/* To create your own password click on this{" "} */}
              Made with
            </Text>
            <Text
              style={{
                fontSize: 20,
                textAlign: "justify",
                fontWeight: "bold",

                marginLeft: 5,
              }}
            >
              <mark className="mark">
                <Link href="http://localhost:3000" isExternal>
                  {/* <a href="https://localhost:3000" role="button"> */}{" "}
                  Generative AI
                </Link>
              </mark>
            </Text>
          </Row>
          <ButtonReusable text={"Learn More"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
