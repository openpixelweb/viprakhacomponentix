const bcrypt = require('bcryptjs');
const admins = [
  {
    name:'Puraskaram Awards',
    image: "/assets/img/users/user-2.jpg",
    email: "info@puraskaramawards.com",
    password: bcrypt.hashSync("Sunesta345$"),
    phone: "+91 9502721345",
    role: "Admin",
    joiningData: new Date()
  },
//  {
//     name:'SUNESTA MAATHREY',
//     image: "/assets/img/users/user-3.jpg",
//     email: "palmer@gmail.com",
//     password: bcrypt.hashSync("MAATH789$"),
//     phone: "+91 9381328833",
//     role: "CEO",
//     joiningData: new Date()
//   },
  // {
  //   name:'Madhu V',
  //   image: "/assets/img/users/user-4.jpg",
  //   email: "madhuv@sunestamaathrey.com",
  //   password: bcrypt.hashSync("SunMaa123$"),
  //   phone: "+91 9381328833",
  //   role: "Manager",
  //   joiningData: new Date()
  // }
];

module.exports = admins;
