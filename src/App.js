import { CssBaseline } from '@mui/material';
import './App.css';
import Box from '@mui/material/Box'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <CssBaseline>
          <Box
            sx={{
              marginLeft: '2px',
              bgcolor: {xs: 'red', lg: 'blue'}
            }}
          >
            Test
          </Box>
        </CssBaseline>   
    </div>
  );
}

export default App;
