import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "@mantine/core/styles.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./lib/queryClient";
import AuthProvider from "./features/auth/pages/AuthContext";

function App() {
  return (
    <MantineProvider>
      {/* Global state management for server states */}
      {/* everything under this Provider, we can share data */}
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </AuthProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
