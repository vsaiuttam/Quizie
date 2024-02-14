import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FInalScreen from "./pages/FInalScreen"
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={
                <>
                <Typography variant="h2" fontWeight="bold" color="black">
                    QUZIE
                </Typography>   
                <Settings/>
                </> 
            }>
            </Route>
            <Route path="/questions" element={<Questions />}> 

            </Route>
            <Route path="/score" element={<FInalScreen />}>

            </Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
