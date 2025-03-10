import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

const Header = () => (
  <StyledAppBar position="static">
    <Toolbar>
      <Typography variant="h6">Stock ROI Calculator</Typography>
    </Toolbar>
  </StyledAppBar>
);

export default Header;