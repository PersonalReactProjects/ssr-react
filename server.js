const app = require('express')();

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
    console.log(`app running on ${PORT}`)
})
