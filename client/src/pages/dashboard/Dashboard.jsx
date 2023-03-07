import React from 'react'
import { Button, Box, IconButton, Typography } from '@mui/material'
import Sidebar from '../../components/global/sidebar/Sidebar'
import Topbar from '../../components/global/topbar/Topbar'
import { useTheme } from '@emotion/react'
import Header from '../../components/header/Header';
import { tokens } from '../../theme'
import Task from '../../components/task/Task'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DemoCalendar from '../../components/demoCalendar/DemoCalendar'
import { mockTransactions } from '../../data/mockData'
import Table from '../../components/table/Table'
import Task2 from '../../components/task2/Task2'

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
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Task2 />
    </Box>
    </Box>
    </Box>
  )
}

export default Dashboard

/*
<Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                DEMO CALENDAR
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                  Today
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <Table />
          </Box>
        </Box>
*/