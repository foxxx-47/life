import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";

import Main from "./main/Main";

const Template = (props) => {
  const { title = "foxxx Blog", children } = props

  return (
    <>
      <Box pt={8} pr={16} pb={8} pl={16} >
        <Paper sx={{ p: 4 }}>
          <Typography variant={"h2"}>{title}</Typography>

          <Divider sx={{ p: 2 }} />

          <Main>
            {children}
          </Main>
        </Paper>
      </Box>
    </>
  )
}

export default Template
