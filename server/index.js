//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";

//config
import passport from "passport";
import routeConfig from "./config/route.config";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant"
import Food from "./API/Food"
import Menu from "./API/Menu"
import Reviews from "./API/reviews"
import Image from "./API/Image"
import orders from "./API/orders/orders"





//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

//Configs
routeConfig(passport);

//For application routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/orders", orders);
zomato.use("/reviews", Reviews);
zomato.get("/", (req,res) => res.json({message: "SetUp Success Yay!!"}));

zomato.listen(4000, ()=>
ConnectDB().then(()=>console.log("Server is up and running"))
.catch(()=>console.log("DB connection failed")));