import * as io from 'socket.io-client';
import {ROOT_URI_DEV} from './Constants';

const socket = io.connect(ROOT_URI_DEV);
export default socket;
