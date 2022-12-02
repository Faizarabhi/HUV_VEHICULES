
const Reservation = require("../models/ReservationModel");
const nodemailer = require("nodemailer");
const Email = process.env.Email;
const Pass = process.env.PASS;

const getReservation = async (req, res) => {
  try {
    const reserve = await Reservation.find();
    res.json(reserve);
  } catch (err) {
    res.json({ message: err });
  }
};

const AddReservation = async (req, res) => {
  var today = new Date();
    var Day = today.getDate();
    var month = today.getMonth()+1;
    var yers = today.getFullYear();

    today = yers+'-'+month+'-'+Day;
  const Reserve = await Reservation.create({
    UserName: req.body.UserName,
    Email: req.body.Email,
    Adress: req.body.Adress,
    City: req.body.City,
    state: req.body.State,
    Zip: req.body.Zip,
    Country: req.body.Country,
    Type: req.body.Type,
    Date: today,
    status: false,
  });
  res.status(200).json(Reserve);
};

const DeleteReservation = async (req, res) => {
  const Reserver = await Reservation.findById(req.params.id);
  res.status(200).json(Reserver);

  if (!Reserve) {
    res.status(400);
    throw new Error("Reservation Not found");
  }
  await Reservation.remove();
  res.status(200).json({ id: req.params.id });
};

const SendConfirmation = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: Email,
      pass: Pass,
    },
  });

  const email = {
    from: Email,
    to: req.params.Email,
    subject: "Confirmation reserver sur Car Nmax",
    text: " la réservation a été bien reçu",
  };
  transporter.sendMail(email, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
      const Status = new Status({
        status: true,
      });
      Status.updateOne({Email: req.params.Email}, Status).then(
        () => {
          res.status(201).json({
            message: 'Thing updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        });
      
    }
  });
};

module.exports = {
  AddReservation,
  getReservation,
  DeleteReservation,
  SendConfirmation,
};





