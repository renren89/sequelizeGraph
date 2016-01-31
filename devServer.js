import path from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.dev';
import bodyParser from 'body-parser';
import cassandra from 'cassandra-driver';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddlware from 'webpack-hot-middleware';

const client = new cassandra.Client({ contactPoints: ['127.0.0.1']});
const app = express();
const compiler = webpack(config);

app.use((webpackMiddleware)(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use((webpackHotMiddlware)(compiler));
app.use(bodyParser.json());
client.connect((err, res) => {
  if (err) {
    throw new Error('could not connect to Cassandra Node')
  } else {
    console.log('Successfully connected to Cassandra')
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});