import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardWithImageProps {
  title: string;
  desc: string;
  imgsrc: string;
}
export default function CardWithImage({ title, imgsrc, desc }: CardWithImageProps) {
  return (
    <Card sx={{ maxWidth: 345 }} className="bg-[#0F172A]">
      <CardActionArea>
        <img
          loading="lazy"
          decoding="async"
          src={imgsrc}
          className="h-36 w-full object-cover"
          alt="image"
        />
        <CardContent>
          <Typography className="font-bold text-white" gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography className="font-medium text-white" variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
