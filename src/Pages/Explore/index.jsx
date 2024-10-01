import {
  Container,
  Stack,
  Pagination,
  PaginationItem,
  Grid,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ExploreCard from "./Card";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import LoaderSkeleton from "./LoaderSkeleton";

export default function Explore() {
  const [page, setPage] = useState(1);
  const perPage = 20;
  const [sneakersNo, setSneakersNo] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API}sneakers-shop-number`);
        const data = await res.json();
        setSneakersNo(+data.number);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const [sneakers, setSneakers] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API}sneakers-shop-sneakers?_page=${page}&_limit=${perPage}`
        );
        const data = await res.json();
        setSneakers(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);
  return (
    <Container sx={{ paddingY: "40px" }}>
      {sneakers ? (
        <>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: { xs: "center", sm: "start" } }}
          >
            {sneakers?.map((item, index) => (
              <ExploreCard key={index} item={item} />
            ))}
          </Grid>
          <Stack spacing={2} mt={5} alignItems={"center"}>
            <Pagination
              count={Math.ceil(sneakersNo / perPage)}
              onChange={(e, p) => setPage(p)}
              sx={{
                "& button": { color: "primary.dark", bgcolor: "primary.light" },
                "& .Mui-selected": {
                  color: "primary.light",
                  bgcolor: "primary.dark",
                },
              }}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBack, next: ArrowForward }}
                  {...item}
                />
              )}
            />
          </Stack>
        </>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: { xs: "center", sm: "start" } }}
        >
          {Array(perPage)
            .fill(true)
            .map((e, i) => (
              <LoaderSkeleton key={i} />
            ))}
        </Grid>
      )}
    </Container>
  );
}
