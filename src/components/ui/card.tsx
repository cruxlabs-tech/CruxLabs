import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface CardProps {
  title?: string;
  desc?: string;
}
export default function Cards({ title, desc }: CardProps) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className=" bg-[#0F172A] h-full rounded-xl shadow-3xl border border-gray-800 hover:bg-slate-700 mx-auto"
    >
      <CardActionArea className=" ">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            className="text-white font-bold text-md"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2" className="text-white">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
