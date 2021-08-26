import React, { useContext } from "react";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { UserContext } from "../../UserContext";

const Logout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [user, addToken, removeToken] = useContext(UserContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    removeToken();
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        size="large"
        style={{
          color: "#fff",
          margin: "15px",
          textTransform: "none",
          fontSize: "20px",
        }}
      >
        {user.username}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Logout;
