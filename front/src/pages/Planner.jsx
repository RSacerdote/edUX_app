import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

export default function Planner() {

  const navigate = useNavigate()

  return (
    <PlannerContainer>
        <Header>
            <HomeIcon sx={{fontSize: '40px'}} onClick={() => navigate("/")}></HomeIcon>
            <div>Planejador</div>
            <AddIcon sx={{fontSize: '40px'}}></AddIcon>
        </Header>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem label="Uncontrolled calendar">
                <DateCalendar defaultValue={dayjs('2024-11-19')}/>
            </DemoItem>
        </LocalizationProvider>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'white', borderRadius: '10px', marginTop: "20px"}}>
            <ListItem disablePadding>
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={`Tarefa de Matemática`} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={`Lista de exercicios de Quimica`} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={`Revisão de Fisica`} />
                </ListItemButton>
            </ListItem>
        </List>
    </PlannerContainer>
  )
}

const PlannerContainer = styled.div`
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
    margin-top: 20px;
    background-color: white;
    border-radius: 10px;
    width: 100%;
`
