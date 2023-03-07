import { Paper, TableCell, TableContainer, TableHead, TableRow, TableBody } from '@mui/material'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { tokens } from '../../theme'
import { useTheme } from '@emotion/react'

function createData(time, trainer1, trainer2){
    return { time, trainer1, trainer2}
}

const rows = [
    createData('10-11am', 'BookNow', 'Booked'),
    createData('11-12', 'BookNow', 'BookNow'),
    createData('12-1pm', 'Booked', 'Booked'),
    createData('1-2pm', 'BookNow', 'Booked'),
    createData('2-3pm', 'BookNow', 'BookNow'),
    createData('3-4pm', 'BookNow', 'Booked'),
];

function Table() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const tableContainerSx = {
        border: "1px solid rgba(128,128,128,0.4)",
        width: "max-content",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 2,
        maxHeight: 500
      };
  return (
    <TableContainer 
        component={Paper}
        sx={tableContainerSx}>
        <TableHead>
            <TableRow
            sx = {{ display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            colors:'colors.grey[100]',
            p:"15px",
    }}>
                <TableCell>Time</TableCell>
                <TableCell>Trainer 1</TableCell>
                <TableCell>Trainer 2</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.time}
                sx = {{ display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        colors:'colors.grey[100]',
        p:"15px",
            }}>
                    <TableCell component='th' scope='row'>{row.time}</TableCell>
                    <TableCell>{row.trainer1}</TableCell>
                    <TableCell>{row.trainer2}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </TableContainer> 
    
  )
}

export default Table
