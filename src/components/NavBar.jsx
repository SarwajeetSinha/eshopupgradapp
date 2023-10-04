import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartCheckout';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search'


const NavigationBar = ({ isLoggedIn, isAdmin, handleLogout }) => {
    // eslint-disable-next-line
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    // You can make an API request to /products for searching
    // Update the search results or redirect the user to the search page
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <ShoppingCartIcon fontSize="large" />
        </Link>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          upGrad Eshop
        </Typography>
        {isLoggedIn ? (
          <>
            <form onSubmit={handleSearch}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
                <Button
                  type="submit"
                  color="inherit"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </div>
            </form>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
            {isAdmin && (
              <Link to="/add-products" style={{ textDecoration: 'none' }}>
                <Button color="inherit">Add Products</Button>
              </Link>
            )}
          </>
        ) : (
          <>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Log In</Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Sign Up</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
