import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';

// In-line style
const styles = {
    navigation: {
        marginTop: 0
    }
};

// Custom Styling
const StyledTab = styled(Tab)({
    '&.MuiTouchRipple-root': {
        color: "#000000"
    },
    "&.MuiButtonBase-root.MuiTab-root": {
        fontSize: "20px",
        fontWeight: 700,
        paddingLeft: 5,
        paddingRight: 5
      },
      "&.Mui-selected": {
        color: "#000000",
        fontSize: "25px"
      },
})

function Navigation({ handlePageChange }) {
    const [value, setValue] = React.useState('about');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', }} style={styles.navigation}>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                textColor="inherit"
                sx={{
                    '& .MuiTabs-indicator': { backgroundColor: "#000000" }
                }}
                aria-label="navigation tabs"
                >
                    <StyledTab
                    value="about"
                    label="About Me"
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    />
                    <StyledTab
                    value="portfolio"
                    label="Portfolio"
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    />
                    <StyledTab
                    value="contact"
                    label="Contact"
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    />
                    <StyledTab
                    value="resume"
                    label="Resume"
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    />
            </Tabs>
        </Box>
    );
}

export default Navigation;