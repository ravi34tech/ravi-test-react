import Button from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

type ButtonProps = MuiButtonProps;

const RButton = (prop: ButtonProps) => {
    return ( 
        <Button 
            variant="contained"
            loadingPosition="center"
            loadingIndicator="node"
            size= {prop.size ? prop.size : "large"} 
            color={prop.color ? prop.color : "primary"}
            sx={{textTransform : "none", marginRight: 2}}     
            onClick={prop.onClick} 
        >
            {prop.children}
        </Button>
     );
}
 
export default RButton;