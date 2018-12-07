import React from 'react';
import '../../assets/style/style.css';
/*
import Loadable from 'react-loadable';
import Loading from './Loading.jsx';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home.jsx'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routes/About'),
  loading: Loading,
});
*/

class Loading extends React.Component {
    render() {
        return(
            <div className="loader"> {/*style={{textAlign: "center"}}*/}
            </div>
        )
    }
}

export default Loading;