import '../../App.css';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import CustomBtn from '../CustomBtn';
import NavBar from '../NavBar';


const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily:[
      'Roboto'
    ],
    h4:{
      fontWeight:600,
      fontSize:28,
      lineHeight:'2rem',
    },
    h5:{
      fontWeight:100,
      lineHeight:'2rem',
    },
  },
});




function Photos() {
    return (
        <div className='container'>
        <ThemeProvider theme={theme}>
            <NavBar/>
        </ThemeProvider>
        </div>
    )
}

export default Photos;
