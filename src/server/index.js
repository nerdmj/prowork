import WebServer from './web.server';

let webServer = new WebServer();

webServer.start()
 .then(() => {
   console.log('Web server started @ localhost:3000')
 })
 .catch(() => {
   console.error(err);
   console.error('Failed to start the web server');
 });
