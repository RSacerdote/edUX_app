import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AssistantIcon from '@mui/icons-material/Assistant';

export default function Task() {

    const navigate = useNavigate()
    const [done, setDone] = React.useState(false)
  
    return (
      <TaskContainer>
          <Header>
            <HomeIcon sx={{fontSize: '40px'}} onClick={() => navigate("/")}></HomeIcon>
            <div>Tarefa</div>
            <AddIcon sx={{fontSize: '40px', visibility: 'hidden'}}></AddIcon>
          </Header>
          {!done && <Box sx={{overflowY: 'scroll'}}>
            <DemoItem>
                <FormControl sx={{padding: 1}}>
                    <FormLabel id="demo-radio-buttons-group-label">Questão 1</FormLabel>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nobis.</Typography>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1a" control={<Radio />} label={"Resposta A"} />
                        <FormControlLabel value="1b" control={<Radio />} label="Resposta B" />
                        <FormControlLabel value="1c" control={<Radio />} label="Resposta C" />
                    </RadioGroup>
                </FormControl>
                <FormControl sx={{padding: 1}}>
                    <FormLabel id="demo-radio-buttons-group-label">Questão 2</FormLabel>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nobis.</Typography>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1a" control={<Radio />} label="Resposta A" />
                        <FormControlLabel value="1b" control={<Radio />} label="Resposta B" />
                        <FormControlLabel value="1c" control={<Radio />} label="Resposta C" />
                    </RadioGroup>
                </FormControl>
                <FormControl sx={{padding: 1}}>
                    <FormLabel id="demo-radio-buttons-group-label">Questão 3</FormLabel>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nobis.</Typography>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1a" control={<Radio />} label="Resposta A" />
                        <FormControlLabel value="1b" control={<Radio />} label="Resposta B" />
                        <FormControlLabel value="1c" control={<Radio />} label="Resposta C" />
                    </RadioGroup>
                    <Button variant="outlined" onClick={() => setDone(true)}>
                        Enviar
                    </Button>
                </FormControl>
            </DemoItem>
          </Box>}
          {done && <Box>
            <Box sx={{color: 'white'}}>
                <TaskAltIcon sx={{width: '100%', fontSize: '100px'}} />
            </Box>
            <Box sx={{width: '100%', color: 'white'}}>
                <Typography textAlign='center'>Tarefa enviada. O resultado do teste é 2/3.</Typography>
            </Box>
            <DemoItem onClick={() => navigate("/chat")}>
            <Box sx={{flex: 1, padding: 1, textAlign: 'center'}}>
                <AssistantIcon sx={{fontSize: '50px'}}/>
            </Box>
            <Box sx={{flex: 4, padding: 1}}>
                <Typography variant="h6">ChatBot</Typography>
                <Typography variant="body2" color="textSecondary">Use IA para tirar dúvidas</Typography>
            </Box>
          </DemoItem>
            </Box>}
      </TaskContainer>
    )
  }
  
  const TaskContainer = styled.div`
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
      display: block;
      margin-top: 20px;
      background-color: white;
      border-radius: 10px;
      width: 100%;
      align-items: center;
  `