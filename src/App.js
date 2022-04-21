// React-Lazy-Loading
// React and Suspense components needed.
import React, { Suspense } from 'react';

import { Route, Routes, Navigate, Link } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Comments from './components/comments/Comments';
import LoadingSpinner from './components/UI/LoadingSpinner';

// React-Lazy-Loading
// import NewQuote from './pages/NewQuote';
// import QuoteDetail from './pages/QuoteDetail';
// import NotFound from './pages/NotFound';
// import AllQuotes from './pages/AllQuotes';
// Instead of importing components with the conventional method,
// we can import them as shown down below. With this adjustment,
// the chunks of the codes will only be loaded when it is clicked by client.
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
// React-Lazy-Loading
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
// React-Lazy-Loading
const NotFound = React.lazy(() => import('./pages/NotFound'));
// React-Lazy-Loading
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

function App() {
  return (
    <Layout>
      {/* React-Lazy-Loading */}
      {/* Suspense component is used for fallback cases, in case NewQuote is clicked */}
      {/* It will keep it in suspense for a milisecond until the code is downloaded. */}
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Routes>
          <Route path='/' element={<Navigate replace to='/quotes' />} />
          <Route path='/quotes' element={<AllQuotes />} />
          <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
            <Route
              path=''
              element={
                <div className='centered'>
                  <Link className='btn--flat' to={`comments`}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path='/new-quote' element={<NewQuote />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
