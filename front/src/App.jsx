import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Planner from "./pages/Planner"
import Home from "./pages/Home"
import Tasks from "./pages/Tasks"
import Task from "./pages/Task"

export default function App() {
  return (
    <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/planner" element={<Planner />} />
            <Route exact path="/tasks" element={<Tasks />} />
            <Route exact path="/task" element={<Task />} />
          </Routes>
        </BrowserRouter>
      </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #89CFF0;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`