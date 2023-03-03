import React from 'react'
import { Button, Box } from '@mui/material'
import Sidebar from '../../components/global/sidebar/Sidebar'
import Topbar from '../../components/global/topbar/Topbar'
import { useTheme } from '@emotion/react'
import Header from '../../components/header/Header';
import { tokens } from '../../theme'

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your Dashboard' />

      <Box display="flex" justifyContent="space-between" gap='20px'alignItems='center' >
      <Button sx={{
        backgroundColor: colors.blueAccent[700],
        color: colors.grey[100],
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
      }}
      >
        Branch 1 / Branch 2
        </Button>
      <Button sx={{
        backgroundColor: colors.blueAccent[700],
        color: colors.grey[100],
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
      }}
      >Class Schedule
      </Button>
      <Button sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}>
              Add Task
              </Button>
      <Button sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            >Add New Student
            </Button>
      </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">

          </Box>
    </Box>
    </Box>
  )
}

export default Dashboard
