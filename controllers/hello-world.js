const helloWorld = (req, res) => res.send('Hello World!'))
module.exports = helloWorld;

const helloWorld = require('./controllers/helloWorld');
const app = express();

app.get('/', (req, res) => res.send({ message: 'Hello World!' }));
app.listen(3000, () => console.log('Example app listening on port 3000!'));

