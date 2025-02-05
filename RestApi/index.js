let express = require('express')
const app = express()
let apiRoutes = require('./route/userRoute')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.render('home')
})

app.use("/user/api", apiRoutes)
app.listen(4000, () => {
    console.log("running on 4000 port");
})