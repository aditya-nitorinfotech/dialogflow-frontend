import * as React from "react";
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box, PaletteColorOptions, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { createTheme } from "@mui/material/styles";
import { Button, Space } from "antd";

type buttonProps = {
  text: String;
};

// declare module "@mui/material/styles" {
//   interface CustomPalette {
//     anger: PaletteColorOptions;
//     apple: PaletteColorOptions;
//     steelBlue: PaletteColorOptions;
//     violet: PaletteColorOptions;
//   }
//   interface Palette extends CustomPalette {}
//   interface PaletteOptions extends CustomPalette {}
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     anger: true;
//     apple: true;
//     steelBlue: true;
//     violet: true;
//   }
// }

const ButtonReusable = ({ text }: buttonProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //   const { palette } = createTheme();
  //   const { augmentColor } = palette;
  //   const createColor = (mainColor: string) =>
  //     augmentColor({ color: { main: mainColor } });
  //   const theme = createTheme({
  //     palette: {
  //       anger: createColor("#F40B27"),
  //       apple: createColor("#5DBA40"),
  //       steelBlue: createColor("#5C76B7"),
  //       violet: createColor("#BC00A3"),
  //     },
  //   });

  return (
    <Box
      sx={{
        marginBottom: "15px",
        textAlign: "center",
        paddingBottom: "30px",
      }}
    >
      <Space wrap>
        <Button
          type="primary"
          style={{
            background:
              theme.palette.mode == "dark"
                ? colors.redAccent[500]
                : colors.greenAccent[500],
          }}
        >
          Learn More
        </Button>
      </Space>
    </Box>
  );
};

export default ButtonReusable;
