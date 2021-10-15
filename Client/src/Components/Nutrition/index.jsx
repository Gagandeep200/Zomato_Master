import React from "react";

// components
import NutritionHeroCarousal from "./NutritionHeroCarousal";
import NutritionCarousal from "./NutritionHeroCarousal";

const Nutrition = () => {
  return (
    <div>
      <NutritionHeroCarousal />
      <div className="my-6">
        <NutritionCarousal />
      </div>
    </div>
  );
};

export default Nutrition;