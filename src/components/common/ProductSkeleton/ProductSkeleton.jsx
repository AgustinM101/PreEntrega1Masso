import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const ProductSkeleton = () => {
  return (
    <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
  );
};

export default ProductSkeleton;
