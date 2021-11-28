import { Card, CardMedia, CardContent } from "@mui/material";

const DEFAULT_ANIMAL_IMAGE =
  "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c728a553-9706-473c-adca-fa2ea3652db5/729b72ec-104f-4499-9986-0dbaf11ce437_rw_1200.jpg?h=6aea14fe1fe3fd0853669fd14184b6f7";

const AnimalCard = ({
  id,
  name,
  image,
  width,
  height,
  children,
  className,
}) => {
  return (
    <Card key={id} sx={{ width }} className={className}>
      <CardMedia
        component="img"
        alt={`Picture of ${name}`}
        height={height}
        image={image || DEFAULT_ANIMAL_IMAGE}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default AnimalCard;
