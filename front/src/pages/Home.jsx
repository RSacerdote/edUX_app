import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssistantIcon from '@mui/icons-material/Assistant';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import { Box, Button, LinearProgress, Typography } from "@mui/material";

export default function Home() {

    const navigate = useNavigate()
    
    const [showToggle, setShowToggle] = useState(false)
  
    return (
      <HomeContainer>
          <Header>
              <HomeIcon sx={{fontSize: '40px', visibility: 'hidden'}}></HomeIcon>
              <div>Seu Progresso</div>
              <AccountIcon sx={{fontSize: '40px'}}></AccountIcon>
          </Header>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white', borderRadius: '10px', marginTop: "20px"}}>
              <ListItem disablePadding sx={{display: 'flex', justifyContent: 'space-between', textAlign: 'center'}}>
                  <Box sx={{flex: 2}}>
                    <ListItemText primary={`Matemática:`} />
                  </Box>
                  <Box sx={{flex: 3}}>
                    <LinearProgress sx={{height: 20, borderRadius: 1}} value={50} variant="determinate"></LinearProgress>
                  </Box>
                  <Box sx={{flex: 1}}>
                    <ListItemText primary={`50%`} />
                  </Box>
              </ListItem>
              <ListItem disablePadding sx={{display: 'flex', justifyContent: 'space-between', textAlign: 'center'}}>
                  <Box sx={{flex: 2}}>
                    <ListItemText primary={`Física:`} />
                  </Box>
                  <Box sx={{flex: 3}}>
                    <LinearProgress sx={{height: 20, borderRadius: 1}} value={35} variant="determinate"></LinearProgress>
                  </Box>
                  <Box sx={{flex: 1}}>
                    <ListItemText primary={`35%`} />
                  </Box>
              </ListItem>
              <ListItem disablePadding sx={{display: 'flex', justifyContent: 'space-between', textAlign: 'center'}}>
                  <Box sx={{flex: 2}}>
                    <ListItemText primary={`Inglês:`} />
                  </Box>
                  <Box sx={{flex: 3}}>
                    <LinearProgress sx={{height: 20, borderRadius: 1}} value={90} variant="determinate"></LinearProgress>
                  </Box>
                  <Box sx={{flex: 1}}>
                    <ListItemText primary={`90%`} />
                  </Box>
              </ListItem>
              <ListItem disablePadding sx={{display: (showToggle ? 'flex': 'none'), justifyContent: 'space-between', textAlign: 'center'}}>
                  <Box sx={{flex: 2}}>
                    <ListItemText primary={`Química:`} />
                  </Box>
                  <Box sx={{flex: 3}}>
                    <LinearProgress sx={{height: 20, borderRadius: 1}} value={45} variant="determinate"></LinearProgress>
                  </Box>
                  <Box sx={{flex: 1}}>
                    <ListItemText primary={`45%`} />
                  </Box>
              </ListItem>
              <ListItem disablePadding sx={{display: (showToggle ? 'flex': 'none'), justifyContent: 'space-between', textAlign: 'center'}}>
                  <Box sx={{flex: 2}}>
                    <ListItemText primary={`Português:`} />
                  </Box>
                  <Box sx={{flex: 3}}>
                    <LinearProgress sx={{height: 20, borderRadius: 1}} value={75} variant="determinate"></LinearProgress>
                  </Box>
                  <Box sx={{flex: 1}}>
                    <ListItemText primary={`75%`} />
                  </Box>
              </ListItem>
              <ListItem disablePadding sx={{display: 'flex', justifyContent: 'space-between', textAlign: 'center'}}>
                  <Button onClick={() => setShowToggle(!showToggle)}>{showToggle ? 'Mostrar menos' : 'Mostrar mais'}</Button>
              </ListItem>
          </List>
          <DemoItem>
            <Box sx={{flex: 1, padding: 1, textAlign: 'center'}}>
                <AssignmentIcon sx={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{flex: 4, padding: 1}}>
                <Typography variant="h6">Tarefas</Typography>
                <Typography variant="body2" color="textSecondary">Ver tarefas a fazer ou concluídas</Typography>
            </Box>
          </DemoItem>
          <DemoItem onClick={() => navigate("/chat")}>
            <Box sx={{flex: 1, padding: 1, textAlign: 'center'}}>
                <AssistantIcon sx={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{flex: 4, padding: 1}}>
                <Typography variant="h6">ChatBot</Typography>
                <Typography variant="body2" color="textSecondary">Use IA para tirar dúvidas</Typography>
            </Box>
          </DemoItem>
          <DemoItem onClick={() => navigate("/planner")}>
            <Box sx={{flex: 1, padding: 1, textAlign: 'center'}}>
                <CalendarIcon sx={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{flex: 4, padding: 1}}>
                <Typography variant="h6">Planejador</Typography>
                <Typography variant="body2" color="textSecondary">Planeje seus estudos</Typography>
            </Box>
          </DemoItem>
      </HomeContainer>
    )
  }
  
  const HomeContainer = styled.div`
      display: flex;
      flex-direction: column;
      height: 95%;
      width: 90%;
  `
  
  const Header = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 60px;
      font-size: 30px;
      font-family: Roboto;
      color: white;
      border-bottom: 2px solid;
  `
  
  const DemoItem = styled.div`
      display: flex;
      margin-top: 20px;
      background-color: white;
      border-radius: 10px;
      width: 100%;
      align-items: center;
  `
  