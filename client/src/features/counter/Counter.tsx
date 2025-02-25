import { Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

const Counter = () => {
  const { counterStore } = useStore();

  return (
    <Observer>
      {() => (
        <>
          <Typography variant="h4" gutterBottom>
            {counterStore.title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            The count is {counterStore.count}
          </Typography>
        </>
      )}
    </Observer>
  );
};
export default Counter;
