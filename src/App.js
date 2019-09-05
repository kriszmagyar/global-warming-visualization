import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Nav from './components/Nav';
import AppRouter from './pages/AppRouter';
import { BrowserRouter } from 'react-router-dom';

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
        <Nav />
        <Container maxWidth="lg">
          <AppRouter />
        </Container>
    </BrowserRouter>
  );
}

export default App;
