const app = require('./app')
require('dotenv').config();

const port = process.env.SERVER_PORT || 5000

app.get('/', (req, res) => res.send('Project: .docx_HTML!'));

app.listen(port, () => console.log(`Server is running on port {port}`));