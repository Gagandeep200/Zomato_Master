import React from "react";

// components
import NutritionCarousal from "./NutritionCarousel";
import NutritionCard from "./NutritionCard";

const Nutrition = () => {
  return (<>
      <div className="my-6">
        <NutritionCarousal />
      </div>
      <div className="flex justify-between flex-wrap ">
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
        />
        </div>
      
      </>


  );
};
    
    
 export default Nutrition;