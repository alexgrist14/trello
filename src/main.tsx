import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./index.css.ts";
import { Provider } from "react-redux";
import store from "./lib/shared/store/index.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardContent from "./lib/pages/DashboardContent.tsx";
import DashboardsList from "./lib/widgets/ui/DashboardsList/DashboardsList.tsx";
import { ModalsConnector } from "./lib/shared/ui/Modal/ModalsConnector.tsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <Routes>
            <Route path="/" element={<DashboardsList />} />
            <Route path="/dashboard/:id" element={<DashboardContent />} />
          </Routes>
          <ModalsConnector />
        </DndProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
