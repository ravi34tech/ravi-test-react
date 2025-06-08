import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useReducer } from "react";
import RButton from "./common/RButton";
import { useTheme } from "@mui/material/styles";



const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

function reducer(state,action) {
    if(action.type === INCREMENT){
        return {
            count: state.count+1,
            bgColor: "secondary"
        }
    } if(action.type === DECREMENT) {
        return {
            count: state.count - 1,
            bgColor: "success"
        }
    } else {
        return {
            count: 0,
            bgColor: "info"
        }
    }
}


const CounterReducer = () => {
  const theme = useTheme();
  const [state, dispatch] = useReducer(reducer,{count: 0, bgColor: "info"});
  const getColor = (colorType:string) => {
  //  console.log(theme.palette[colorType]["main"]);
    return theme.palette[colorType]["light"];
  }

  return (
    <>
      <Stack spacing={2} >
        <Box sx={{backgroundColor: getColor(state.bgColor), alignContent: "center", 
                fontWeight: "bolder",
                minWidth: "200",
                minHeight: "60"
            
            }}>
               <h1> {state.count} </h1>
        </Box>
        <Box >
            <RButton color="secondary" onClick={() => dispatch({type: INCREMENT})}>Increment</RButton>
            <RButton color="success" onClick={() => dispatch({type: DECREMENT})}>Decrement</RButton>
            <Button variant="contained" color="info" onClick={() => dispatch({type: RESET})}> Reset </Button>
        </Box>
      </Stack>
    </>
  );
};

export default CounterReducer;
