//TODO MainBlock 
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import TeaStormCup from "../images/TeaStormCup.jpg";


const MainBlock = () => {
    // const [book, setBook] = useState([]);

    //CALL THE API FOR THE BOOKS LIST 
    const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.BOOKS_API_KEY}`

    async function getBooks(){
        const BookList = await fetch(URL , 
            {method:'GET'}
            )
            const BooksJSON = await BookList.json();
            console.log(BooksJSON)
    }

    useEffect(()=> {
        getBooks();  
        
    }, [])
  
    

        return (
            <Box width="80%" m="80px auto">
            <Box display="flex" flexWrap="wrap" columnGap="40px">
              {/* IMAGES */}
              <Box flex="1 1 40%" mb="40px">
                <img
                  alt="TeaStormCup" width="100%" height="100%"
                            src={TeaStormCup}
                            style={{ objectFit: "contain" }}
                            />
                          </Box>
                  
                    {/* ACTIONS*/}
                    <Box flex="1 1 50%" mb="40px">
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                     </Box>
                  </Box>
        
                  <Box m="65px 0 25px 0">
                    <Typography variant="h3">Welcome to the Madness</Typography>
                    
                  </Box>
                      </Box>
       
                     </Box>
            </Box>);

  };
  
  export default  MainBlock;