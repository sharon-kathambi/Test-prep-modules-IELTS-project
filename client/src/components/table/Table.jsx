import { Paper, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

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
  return (
    <TableContainer component={Paper}>
        <TableHead>
            <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Trainer 1</TableCell>
                <TableCell>Trainer 2</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.time}>
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
