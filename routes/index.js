const routes = require('express').Router();

const prove = require('./prove');
const teamActivity = require('./teamActivity');
const project = require('../routes/project');

// Routes for prove and team activity assignments
routes.use('/prove', prove);
routes.use('/team-activity', teamActivity);

// Route for personal project E-commerce web app
routes.use('/project', project);

routes.get("/", (req, res, next) => {
    // This is the primary index, always handled last.
    res.render("pages/index", {
      title: "Welcome to my CSE341 repo",
      path: "/",
    });
  })
  .use((req, res, next) => {
    // 404 page
    res.status(404).render("pages/404", { title: "404 - Page Not Found", path: req.url });
  })

module.exports = routes;