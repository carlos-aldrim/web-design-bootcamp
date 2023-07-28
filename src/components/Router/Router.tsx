import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  CreditCardPage,
  ModernDotPaginationPage,
  ModernLoginPage,
  ModernPopupPage,
  ModernSignupPage,
  ModernTimelinePage,
  ModernWidgetPage,
  PagesRoutes,
  ResizableFooterPage,
  SimpleNavbarPage,
  SimpleSidebar,
  SkeletonLoadingPage,
  TaskTrackerPage,
} from "views";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagesRoutes.modernSignupPage}
          element={<ModernSignupPage />}
        />
        <Route
          path={PagesRoutes.modernLoginPage}
          element={<ModernLoginPage />}
        />
        <Route path={PagesRoutes.simpleSidebar} element={<SimpleSidebar />} />
        <Route
          path={PagesRoutes.simpleNavbarPage}
          element={<SimpleNavbarPage />}
        />
        <Route
          path={PagesRoutes.modernPopupPage}
          element={<ModernPopupPage />}
        />
        <Route
          path={PagesRoutes.modernWidgetPage}
          element={<ModernWidgetPage />}
        />
        <Route
          path={PagesRoutes.resizableFooterPage}
          element={<ResizableFooterPage />}
        />
        <Route
          path={PagesRoutes.modernDotPaginationPage}
          element={<ModernDotPaginationPage />}
        />
        <Route path={PagesRoutes.creditCardPage} element={<CreditCardPage />} />
        <Route
          path={PagesRoutes.taskTrackerPage}
          element={<TaskTrackerPage />}
        />
        <Route
          path={PagesRoutes.modernTimelinePage}
          element={<ModernTimelinePage />}
        />
        <Route
          path={PagesRoutes.skeletonLoadingPage}
          element={<SkeletonLoadingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
