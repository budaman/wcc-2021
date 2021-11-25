import { Skeleton, Stack } from "@mui/material";

const SkeletonLoader = ({ width, height }) => {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        animation="wave"
        sx={{ bgcolor: "yellow.300" }}
      />
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        animation="wave"
        sx={{ bgcolor: "yellow.300" }}
      />
    </Stack>
  );
};

export default SkeletonLoader;
