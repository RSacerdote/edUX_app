import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Planner from "./pages/Planner"
import Home from "./pages/Home"

export default function App() {
  return (
    <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<Planner />} />
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