import Cards from "@/components/cards/Cards";
import { Box } from "@mui/material";

export default function BlogLayout({ children }) {
  return (
    <Box>
      <Cards content={'hello'}/>
      {children}
    </Box>
  );
}
