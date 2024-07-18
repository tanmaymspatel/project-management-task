import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouting from "./AppRouting";
import { store } from "./core/utility/store/store";
import AxiosInterceptor from "./core/components/AxiosInterceptor";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "Inter, sans-serif",
          headings: {
            fontFamily: "Inter, sans-serif",
          },
          globalStyles: () => ({
            ".pageContent": {
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              width: "100%",
            },
          }),
        }}
      >
        <BrowserRouter>
          <AxiosInterceptor />
          <AppRouting />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  );
}

export default App;
