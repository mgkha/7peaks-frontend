import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";
import { LoadingProvider } from "@/providers/loading";
import { SnackbarProvider } from "@/providers/snackbar";

function App() {
  return (
    <LoadingProvider>
      <SnackbarProvider>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </SnackbarProvider>
    </LoadingProvider>
  );
}

export default App;
