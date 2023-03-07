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
import ProgressCircle from '../../components/progressCircle/ProgressCircle'

function createData(name, number){
  return { name, number}
}

const performance = [
  createData('Total Leads', 50),
  createData('Demos Scheduled', 10),
  createData('Total Enrolments', 20),
  createData('Active Students', 40),
  createData('Full Fee Paid', 20),
  createData('Partial Payments', 20),
]

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
       <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Table />
       </Box>

       {/* Row 3 */}
       <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Monthly Target Achieved
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              100 demos schedules
            </Typography>
            <Typography
              variant='h5'
              color={colors.blueAccent[500]}
              sx={{ mt: "15px" }}
              >20 students enrolled</Typography>
          </Box>
        </Box>

        {/* Row 3 */}
        <Box
        gridColumn='span 4'
        gridRow='span 1'
        backgroundColor={colors.primary[400]}
        p='30px'>
          <Typography variant='h5' fontWeight='600'>Upcoming Events</Typography>
          <Box>
            <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: "15px" }}
            fontWeight="600">
              Event 1
            </Typography>
            <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: "15px" }}
            fontWeight="600">
              Event 2
            </Typography>
          </Box>
        </Box>

        <Box
        gridColumn='span 8'
        gridRow='span 1'
        backgroundColor={colors.primary[400]}
        p='30px'>
          <Box 
            display="flex"
            justifyContent="space-between">
          <Typography variant='h5' fontWeight='600'>Monthly Performance</Typography>
          <Typography variant='h5' fontWeight='400'>Last 30 days</Typography>
          </Box>
          {performance.map((item) => (
            <Box
            display = 'flex'
            >
              <Typography>{item.name}: {item.number}</Typography>
              </Box>
          ))}
          <Box>

          </Box>
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