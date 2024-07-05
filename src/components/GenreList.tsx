import React, { useState } from "react";
import useGeners from "../hooks/useGeners";

const GenreList = () => {
  const { genre } = useGeners();
  return (
    <ul>
      {genre?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
