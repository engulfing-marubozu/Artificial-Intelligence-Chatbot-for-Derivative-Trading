import { BrowserRouter, Route, Routes} from 'react-router-dom';
import  Home  from './components/Home';
import  Contribute  from './components/contribute/main';
import View from './components/View/View';
import { ThemeProvider, createTheme, Button } from '@mui/material';
import ViewSpecificAlgo from './components/View/ViewSpecificAlgo';
import EditSpecificAlgo from './components/View/EditSpecificAlgo';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#203864', // Set your desired primary color
      },
      secondary: {
        main: '#bf180e', // Set your desired secondary color
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
          <Route path="/view/:algoId?"element={<ViewSpecificAlgo />} />
          <Route path="/edit/:algoId?"element={<EditSpecificAlgo />} />
          <Route path="/contribute" element={<Contribute/>} />
        </Routes>
   
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
