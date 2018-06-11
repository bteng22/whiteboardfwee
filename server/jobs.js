const express = require("express");
const router = express.Router();

const jobs = [
  {
    id: "1r1r11",
    title: "Code Monkey",
    company: "Bananas R' Us",
    city: "Timbuktu",
    state: "Wakanda",
    isRemote: false,
    url:
      "https://giphy.com/gifs/animals-being-jerks-gorilla-dicks-Qa6aPhf1gD4Bi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui ligula, congue sit amet nisl at, pretium pulvinar lacus. Aliquam dapibus est sit amet pretium commodo.",
    process:
      "Suspendisse a dolor id tellus commodo pellentesque. Mauris eleifend lacus a augue mattis ullamcorper. Cras venenatis tristique dui, nec sodales turpis hendrerit vel."
  },
  {
    id: "223g2g2",
    title: "Kitty Kat Kat Kat",
    company: "Neko Neko",
    city: "Purr Purr Woof",
    state: "Meowanda",
    isRemote: false,
    url: "http://www.nyan.cat/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui ligula, congue sit amet nisl at, pretium pulvinar lacus. Aliquam dapibus est sit amet pretium commodo.",
    process:
      "Suspendisse a dolor id tellus commodo pellentesque. Mauris eleifend lacus a augue mattis ullamcorper. Cras venenatis tristique dui, nec sodales turpis hendrerit vel."
  },
  {
    id: "33g2g2",
    title: "Fullstack Dog Engineer",
    company: "OMFG Dogs",
    city: "Woof Woof Meow",
    state: "Woofanda",
    isRemote: false,
    url: "https://www.omfgdogs.com/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui ligula, congue sit amet nisl at, pretium pulvinar lacus. Aliquam dapibus est sit amet pretium commodo.",
    process:
      "Suspendisse a dolor id tellus commodo pellentesque. Mauris eleifend lacus a augue mattis ullamcorper. Cras venenatis tristique dui, nec sodales turpis hendrerit vel."
  }
];

router.get("/jobs", (req, res) => {
  res.json(jobs);
});

module.exports = router;
