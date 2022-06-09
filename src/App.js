import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { UpcomingContests } from "./components/pages/UpcomingContests";
import { Problems } from "./components/pages/Problems";
import { UpSolveContests } from "./components/pages/UpSolveContests";
import ContestProblems from "./components/pages/ContestProblems";
import AppSkeleton from "./components/AppSkeleton";

function App() {
  return (
    <>
      <Router>
        <AppSkeleton>
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route path="/UpcomingContest" element={<UpcomingContests />} />
            <Route path="/upSolve" element={<UpSolveContests />} />
            <Route path="/upSolve/:id" element={<ContestProblems />} />
            <Route path="/problems" element={<Problems />} />
          </Routes>
        </AppSkeleton>
      </Router>
    </>
  );
}

export default App;
