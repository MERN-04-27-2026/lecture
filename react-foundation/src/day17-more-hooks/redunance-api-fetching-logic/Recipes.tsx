import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export default function Recipes() {
  const { data, error, loading } = useFetch("https://dummyjson.com/recipes");

  if (loading) {
    return <div>Spinner Loader</div>;
  }

  if (error) {
    return <div>Critical Error: {error}</div>;
  }

  return (
    <div>
      <h2>Recipes List</h2>
      <ul>
        {data.recipes.slice(0, 5).map((recipe) => (
          <div key={recipe.id}>{recipe.name}</div>
        ))}
      </ul>
    </div>
  );
}
