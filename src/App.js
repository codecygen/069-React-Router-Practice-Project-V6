// React-Lazy-Loading
import React from 'react';

import { Route, Routes, Navigate, Link } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';

import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Comments from './components/comments/Comments';

// React-Lazy-Loading
// import NewQuote from './pages/NewQuote';
// With this method, this New Quote adding section will be loaded
// only when this section is needed by the client.
const NewQuote = React.lazy(() => import('./pages/NewQuote'));

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
