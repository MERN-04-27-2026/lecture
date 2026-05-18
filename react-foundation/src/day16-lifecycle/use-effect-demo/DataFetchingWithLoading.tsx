import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export default function DataFetchingWithLoading() {
  // 1. init state with [], loading = false
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  // 3. useEffect triggers after rendering finishes
  useEffect(() => {
    (async () => {
      try {
        // 4. setLoading to true, calls api and wait for async response
        setIsLoading(true);
        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) {
          throw new Error(`Request failed with ${res.status}`);
        }
        // just experiment: we do this intentionally to throw some error:
        if (Math.random() > 0.5) throw new Error("Random error occured");
        const data = await res.json();
        // 6. promise resolves, and updates recipes with response data
        setRecipes(data.recipes.slice(0, 5));
      } catch (err: any) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        // 7. since promise resolved, finally triggers, and set loading to false
        setIsLoading(false);
      }
    })();
  }, []);

  const recipesList = recipes.map((recipe) => (
    <div key={recipe.id}>
      <h3>{recipe.name}</h3>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <p>
        Prep Time: {recipe.prepTimeMinutes} min | Cook Time:{" "}
        {recipe.cookTimeMinutes} min
      </p>
      <p>
        Servings: {recipe.servings} | Calories: {recipe.caloriesPerServing}
      </p>
      <p>
        Rating: {recipe.rating} ({recipe.reviewCount} reviews)
      </p>
    </div>
  ));

  // 2. render an empty [], loading is false
  return (
    <div>
      <h3>Recipes List</h3>
      {/* 5. loading true: display loader */}
      {/* 7. loading false: display recipesList */}
      {isLoading ? <div>loading</div> : recipesList}
      {error && <div>{error}</div>}
    </div>
  );
}
