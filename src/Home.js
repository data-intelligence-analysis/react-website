import { createTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import Navbar from './components/Nav'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Grid from './components/grid'
import Footer from './components/footer'
import poster_1 from './images/poster-1.png'
import poster_2 from './images/poster-2.png'
import poster_3 from './images/poster-3.png'
import poster_4 from './images/poster-4.png'
import Carousel from './components/carousel'
import './Home.css';

import About from './pages/About'
import Shop from './pages/Shop'
import Collection from './pages/Collection'


//Get Icons from -> https://material-ui.com/components/material-icons/
import SecurityIcon from '@material-ui/icons/Security'
import EventNoteIcon from '@material-ui/icons/EventNote'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer'
import HttpIcon from '@material-ui/icons/Http'

const theme = createTheme({
  palette: {
    primary: {
      main:"#266041", /*dark grean earthy color*/
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 680,
      fontSize: 30,
      lineHeight: '3rem',
      },
    h5: {
      fontWeight: 150,
      lineHeight: '2.3rem',
    },
  },
});



//css styling for the grid of applications
//{wrapper, bigSpace, littleSpace, grid} -> represent classes
const styles = makeStyles({
  wrapper: {
    width: "70%",
    margin: "auto",
    textAlign: "center",
  },
  footerWrapper:{
    width: "100%",
    margin: "auto",
    textAlign: "center",
    background: "#266041"
  },
  footerSpace: {
    marginTop: "3rem" 
  },
  bigSpace: {
    marginTop: "4rem"
  },
  littleSpace: {
    marginTop: "2rem",
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function Home() {
  const classes = styles()


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <ThemeProvider theme={theme}>
              <Navbar />
              <Carousel />
              <div className={classes.wrapper}>
                <Typography variant="h4" className={classes.bigSpace} color="primary">
                  Make our blends your lifestyle
                </Typography>
                <Typography variant="h5" className={classes.littleSpace} color="primary">
                  Delivering tea blends that leave you with a pleasant feeling
                </Typography>
              </div>
              <div className={`${classes.grid} ${classes.bigSpace}`}>
                <Grid icon={<img src = {poster_3} height="260" width="430" alt ="tea-1"/>} title="Poster" btnTitle="Select"/>
                <Grid icon={<img src = {poster_4} height="260" width="430" alt="tea-2"/>} title="Poster" btnTitle="Select"/>
                {/*<Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
                <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
                <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>*/}
              </div>
              <div className={`${classes.grid} ${classes.bigSpace}`}>
                  <Grid icon={<img src = {poster_2} height="260" width="430" alt="tea-3"/>} title="Poster" btnTitle="Select"/>
                  <Grid icon={<img src = {poster_1} height="260" width="430" alt="tea-4"/>} title="Poster" btnTitle="Select"/>
                {/*<Grid icon={<ImportExportIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
                <Grid icon={<ComputerIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
                <Grid icon={<HttpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>*/}
              </div>
              <div className={`${classes.footerWrapper} ${classes.footerSpace}`}>
                  <Footer /> 
              </div>
            </ThemeProvider>
          </div>
        </Route>
        {/*<Route exact path="/about" render={() => (
          <About />
        )} />
        <Route exact path="/shop" render={() => (
          <Shop />
        )} />
        <Route exact path="/collection" render= {()=>(
          <Collection />
        )} />*/}
      </Switch>
    </Router> 
  );
}

export default Home;
