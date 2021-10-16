import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = () => {
  return (
    <>
      <div className="my-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/d76/cc84183f68cc34027812bdf62585cd76.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Don</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">Delivery</h5>
            <small className="text-gray-500">2 days ago</small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
            Great food, very good quantity and courteous staff.
            Cheese Chindi potato pops, Worli sandwich and Marine sandwich were amazing! 
            Tava Pulav was toooooooo goood! A must-visit place and perfect value for money. 
            Though Ambience is average, the quality and quantity of food is something I liked the most.
            Will surely visit again!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;