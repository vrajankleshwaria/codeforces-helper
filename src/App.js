import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { UpcomingContestList } from "./components/pages/UpcomingContestList";
import { Problems } from "./components/pages/Problems";
import { UpSolveContestList } from "./components/pages/UpSolveContestList";
import { Friends } from "./components/pages/Friends";
import ContestProblemList from "./components/pages/ContestProblemList";
import AppSkeleton from "./AppSkeleton/AppSkeleton";

function App() {
  return (
    <>
      <Router>
        <AppSkeleton>
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route path="/UpcomingContest" element={<UpcomingContestList />} />
            <Route path="/upSolve" element={<UpSolveContestList />} />
            <Route path="/upSolve/:id" element={<ContestProblemList />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </AppSkeleton>
      </Router>
    </>
  );
}

export default App;
