import React from 'react';
import Loadable from 'react-loadable';

import Loading from './Loading.jsx';

const Lazy = Loadable({
  loader: () => import('./routes/Home.jsx'),
  loading: Loading,
});

export default Lazy;