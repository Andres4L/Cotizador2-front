import { Avatar, Button, List, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { credentials } from "../../utils";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="nav_container">
      <div className="container_logo">
        <img src="cacho.jpg" className="logo_nav" alt="logo" />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginTop: 1,
          }}
        >
        Cachones
        </Typography>
      </div>
      <div className="container_list_nav">
        <List className="list_nav">
          <Link href="/">
            <ListItem
              className={`${
                router.pathname === "/" && "list_nav_item_active"
              } list_nav_item`}
            >
              inicio
            </ListItem>
          </Link>
          <Link href="/quote">
            <ListItem
              className={`${
                router.pathname === "/quote" && "list_nav_item_active"
              } list_nav_item`}
            >
               cotizaciones 
            </ListItem>
          </Link>
          <Link href="/catalog">
            <ListItem
              className={`${
                router.pathname === "/catalog" && "list_nav_item_active"
              } list_nav_item `}
            >
               catalogo 
            </ListItem>
          </Link>
        </List>
      </div>
      {credentials.getToken() ? (
        <div className="container_perfil">
          <p className="name_navbar">
            {credentials.getUser().firstName +
              " " +
              credentials.getUser().lastName}
          </p>
          <Avatar
            src=""
            alt="profile photo"
            sx={{
              marginTop: 1,
            }}
          />
        </div>
      ) : (
        <Link href="/register">
          <Button
            variant="contained"
            sx={{
              width: 180,
              height: 35,
              backgroundColor: "#8B0B0A",
              borderRadius: "1rem",
              marginTop: 2,
            }}
          >
            registrarse
          </Button>
        </Link>
      )}
    </nav>
  );
};
