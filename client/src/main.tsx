import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-toastify/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { store, StoreContext } from "./lib/stores/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";
import { router } from "./app/router/Routes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StoreContext.Provider value={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={router} />
          <ToastContainer position="bottom-right" theme="colored" />
        </QueryClientProvider>
      </StoreContext.Provider>
    </LocalizationProvider>
  </StrictMode>
);
