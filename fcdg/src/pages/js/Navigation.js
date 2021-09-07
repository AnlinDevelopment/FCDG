import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../globalStyles";
import { lightTheme, darkTheme } from "../../Themes";
import Button from "react-bootstrap/Button";

function Navigation() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div>
          <Nav
            class="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
            bg="dark"
            variant="dark"
            expand="lg"
          >
            <Button variant="outline-secondary" onClick={themeToggler}>
              Switch Theme
            </Button>
            <Container>
              <Navbar.Brand href="#home">FCDG</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#admin">Admin</Nav.Link>
              </Nav>
            </Container>
          </Nav>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Navigation;
