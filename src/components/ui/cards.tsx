import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardProps {
  title?: string;
  desc?: string;
}
export default function Cards({ title, desc }: CardProps) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className=" shadow-3xl mx-auto h-full rounded-xl border border-gray-800 hover:bg-slate-700"
    >
      <CardActionArea className=" ">
        <CardContent>
          <Typography gutterBottom variant="h5" className="text-md font-bold " component="div">
            {title}
          </Typography>
          <Typography variant="body2" className="">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
