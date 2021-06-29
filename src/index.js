const app = require('./server');

app.listen(3333, () => console.log(`Server is running as ${process.env.ENVIRONMENT}` ));
