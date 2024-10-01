import React from "react";
import { Box, Stack, Skeleton, Grid } from "@mui/material";
export default function LoaderSkeleton() {
  return (
    <Grid item xs={10} sm={6} md={4} lg={3}>
      <Stack
        elevation={7}
        sx={{
            overflow:"hidden",
          borderRadius: "10px",
          height: "400px",
          position: "relative",
          boxShadow:
            "0px 4px 2px -2px #8D7B6890, 0px 2px 2px 1px #8D7B6880, 0px 2px 6px 2px #8D7B6870",
        }}
      >
        <Skeleton variant="rectangular" height={"70%"} />

        <Box sx={{ paddingBottom: "0",mt:"10px" }}>
          <Skeleton variant="text" height={"40px"} sx={{marginX:"5%"}} />
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            sx={{
              position: "absolute",
              right: "0",
              bottom: "10px",
              width: "100%",
              paddingX: "20px",
            }}
          >
            <Skeleton variant="rounded" width={"40%"} height={"40px"}/>
            <Skeleton variant="text" width={"25%"} height={"30px"}/>
          </Box>
        </Box>
      </Stack>
    </Grid>
  );
}
