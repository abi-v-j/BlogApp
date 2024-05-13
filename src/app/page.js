"use client";

import Image from "next/image";
import styles from "./home.module.css";
import { fetchData } from "@/utilities/fetchApi";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useEffect, useState } from "react";

const Home = async () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // Fetch data during server-side rendering (SSR)
  const data = await fetchData();

  return (
    <Box>
      {data &&
        isClient &&
        data.map((movie, genreKey) => (
          <Box className={styles.Container} key={genreKey}>
            <Box className={styles.InnerContainer}>
              <Typography className={styles.Heading} variant="h6">
                {movie.genreName}
              </Typography>
            </Box>
            <Box
            className={styles.MovieMainContainer}
            
            >
              {movie.data.map((data, movieKey) => (
                <Box key={movieKey}>
                  <Card
                  className={styles.MovieCardContainer}
                 
                  >
                    <CardMedia
                      component="img"
                      height={"100%"}
                      image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                      alt={data.title}
                      style={{
                        background: "linear-gradient(#0003, #000)",
                        transition: "height 0.7s ease", // Add this line for the transition effect
                      }}
                    />
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default Home;
