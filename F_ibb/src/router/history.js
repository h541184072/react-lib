import createBrowserHistory from 'history/createBrowserHistory';
import {publicPath} from '../../build/projectConfig';


const { length: publicPathLength } = publicPath;
const basename = /.?\/$/.test(publicPath)
    ? publicPath.slice(0, publicPathLength - 1)
    : publicPath;

export default createBrowserHistory({
    basename
});
