import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: green,
    secondary: grey
  }
});
