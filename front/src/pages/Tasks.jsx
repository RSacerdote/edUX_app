import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MissingIcon from '@mui/icons-material/AssignmentLate';
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from "@mui/material";

export default function Tasks() {

    const navigate = useNavigate()
  
    return (
      <TasksContainer>
          <Header>
            <HomeIcon sx={{fontSize: '40px'}} onClick={() => navigate("/")}></HomeIcon>
            <div>Tarefas</div>
            <AddIcon sx={{fontSize: '40px'}}></AddIcon>
          </Header>
          <DemoItem onClick={() => navigate("/task")}>
            <Box sx={{flex: 1, padding: 1, textAlign: 'center'}}>
                <AssignmentIcon sx={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{flex: 2, padding: 1}}>
                <Typography variant="h6">Tarefa A</Typography>
                <Typography variant="body2" color="textSecondary">Matemática</Typography>
            </Box>
            <Box sx={{flex: 2, padding: 1}}>
                <Typography align="right" fontWeight="bold" fontSize={15} variant="h6">Prazo: 12/03</Typography>
            </Box>
          </DemoItem>
          <DemoItem>
            <Box sx={{flex: 1, padding: 1, textAlign: 'center'}}>
                <AssignmentIcon sx={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{flex: 2, padding: 1}}>
                <Typography variant="h6">Tarefa B</Typography>
                <Typography variant="body2" color="textSecondary">Química</Typography>
            </Box>
            <Box sx={{flex: 2, padding: 1}}>
                <Typography align="right" fontWeight="bold" fontSize={15} variant="h6">Prazo: 10/04</Typography>
            </Box>
          </DemoItem>
          <DemoItem>
            <Box sx={{flex: 1, padding: 1, textAlign: 'center'}}>
                <AssignmentIcon sx={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{flex: 2, padding: 1}}>
                <Typography variant="h6">Tarefa C</Typography>
                <Typography variant="body2" color="textSecondary">Inglês</Typography>
            </Box>
            <Box sx={{flex: 2, padding: 1}}>
                <Typography align="right" fontWeight="bold" fontSize={15} variant="h6">Prazo: 02/05</Typography>
            </Box>
          </DemoItem>
          <DemoItem>
            <Box sx={{flex: 1, padding: 1, textAlign: 'center'}}>
                <TurnedInIcon color="success" sx={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{flex: 4, padding: 1}}>
                <Typography variant="h6">Tarefa D</Typography>
                <Typography variant="body2" color="textSecondary">Português</Typography>
            </Box>
            <Box sx={{flex: 2, padding: 1}}>
                <Typography align="right" fontWeight="bold" fontSize={15} variant="h6">Nota: 7,5</Typography>
            </Box>
          </DemoItem>
          <DemoItem>
            <Box sx={{flex: 1, padding: 1, textAlign: 'center'}}>
                <MissingIcon color="error" sx={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{flex: 2, padding: 1}}>
                <Typography variant="h6">Tarefa E</Typography>
                <Typography variant="body2" color="textSecondary">Física</Typography>
            </Box>
            <Box sx={{flex: 2, padding: 1}}>
                <Typography align="right" fontWeight="bold" fontSize={15} variant="h6">Nota: 0,0</Typography>
            </Box>
          </DemoItem>
      </TasksContainer>
    )
  }
  
  const TasksContainer = styled.div`
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