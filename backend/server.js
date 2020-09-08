let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
let bodyParser = require("body-parser")
let database = require("./database/db")

const checkboxRoute = require("../backend/routes/form-save.routes")

mongoose.Promise = global.Promise
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected sucessfully !")
    },
    error => {
      console.log("Database could not be connected : " + error)
    }
  )

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Gmail",
  auth: {
    XOAuth2: {
      type: "OAuth2",
      clientId:
        "860846620224-u3tc9v51t5spe8pq7abl1aggku5gr194.apps.googleusercontent.com",
      clientSecret: "XfgPvFa4jvWq98FsEhhsno4V",
      resfreshToken:
        "1//04ht9KdhdF4IQCgYIARAAGAQSNwF-L9IruLBye_xKfxO_8LIaz2Ji-IOgmj8GnQgyUe78eR5xBqry3fmK7iK28zizdPlxhKBwtic",
    },
  },
})

var mailOptions = {
  from: "matt@lilikoiagency.com",
  to: "matt@lilikoiagency.com",
  subject: "Testing",
  generateTextFromHTML: true,
  html: "<h1>Hello world</h1>",
}

smtpTransport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error)
  } else {
    console.log(response)
  }
  smtpTransport.close()
})

app.use(cors())
app.use("/api", checkboxRoute)

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log("Connected to port " + port)
})

app.use((req, res, next) => {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
