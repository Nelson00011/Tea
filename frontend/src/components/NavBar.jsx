import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';



function NavBar (){
   
    return (
        <Box className={classes.header}>
        <Link to="/" className={classes.logo}>Tea Time</Link>
        <div >How Mad Are You?</div>
        <nav>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </Box>
    )
};

export default NavBar;