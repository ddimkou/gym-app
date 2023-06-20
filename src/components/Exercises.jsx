import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 9;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const displayedExercises = exercises.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  // body parts icons display on search result when clicked

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {displayedExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      {exercises.length > perPage && (
        <Stack mt="100px" alignItems="center">
          <ReactPaginate
            pageCount={Math.ceil(exercises.length / perPage)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
          />
        </Stack>
      )}
    </Box>
  );
};

export default Exercises;
