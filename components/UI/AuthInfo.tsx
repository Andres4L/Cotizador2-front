import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export const AuthInfo = () => {
 const  router = useRouter();

  return (
    <Box
      sx={{
        padding: 15,
        height: "100%",
        backgroundColor: "",
      }}
    >
      <Box
        className={`logo ${
          router.asPath === "/register"
            ? "logo_direction_register"
            : "logo_direction_login"
        }`}
      >
        <img src="pcgamer.png" className="logo_navbar" alt="logo" />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginTop: 1,
            marginBottom: 2,
            color: "white",
          }}
        >
        
        </Typography>
      </Box>
      </Box>
  );
};
