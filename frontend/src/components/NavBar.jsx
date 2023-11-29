import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';



function NavBar(){
   
    return (
        <Box className={classes.header}>
        <Link to="/" className={classes.logo}>Tea Time</Link>
        
        <nav>
          <ul>
            <li>
              <Link to='/book'>Books</Link>
              <Link to='/tea'>Teas</Link>
              <Link to='/quotes'>Quote</Link>
          
            </li>
          </ul>
        </nav>
      </Box>
    )
};

export default NavBar;