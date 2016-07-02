import app from './components/app';

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;

new Vue(app);