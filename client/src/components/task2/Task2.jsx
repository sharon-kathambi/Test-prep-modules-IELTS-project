import React from 'react'
import { Box, Typography } from '@mui/material'
import { tokens } from '../../theme';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';


function Task2() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    function createData(task, number){
        return { task, number}
    }

    const list = [
        createData('Demo scheduled', 10),
        createData('Schedule Demo', 23),
        createData('Payment follow ups', 10),
        createData('New Leads assigned', 12),
        createData('Pending Payment follow ups', 30)
    ]
    
return (
    <Box>
    <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        colors={colors.grey[100]}
        p="15px"
    >
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Tasks - <Link>Today</Link> <Link>Calendar</Link>
        </Typography>
    </Box>
    {list.map((item) => (
        <Box
        key={item.task}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        p="15px"
    >
        <Box>
            <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
                >
                {item.task}
            </Typography>
        </Box>
        <Box color={colors.grey[100]}>{item.number}</Box>
        </Box>
    ))}
    </Box>
    )}
export default Task2