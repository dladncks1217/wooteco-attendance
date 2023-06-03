import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyles from "./GlobalStyles";

import App from "./App";

import { worker } from "./mocks/browser";

const main = async () => {
  if (window.location.pathname === "/wooteco-attendance") {
    window.location.pathname = "/wooteco-attendance/";
    return;
  }

  await worker.start({
    serviceWorker: {
      url: "/wooteco-attendance/mockServiceWorker.js",
    },
  });
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <GlobalStyles />
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);

main();
