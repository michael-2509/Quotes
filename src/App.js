import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";

import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetails, { AddComment } from "./pages/QuotesDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/quotes" />} />
            <Route path="/quotes" element={<AllQuotes />} />
            {/* nested routes */}
            <Route path="/quotes/:quoteId" exact element={<QuoteDetails />}>
              <Route path="/quotes/:quoteId" element={<AddComment />} />
              <Route path="/quotes/:quoteId/comments" element={<Comments />} />
            </Route>
            <Route path="/new-quote" element={<NewQuotes />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
