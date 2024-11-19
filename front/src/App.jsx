import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Planner from "./pages/Planner"
import Home from "./pages/Home"
import Chat from "./pages/Chat"

export default function App() {
  return (
    <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/chat" element={<Chat />} />
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