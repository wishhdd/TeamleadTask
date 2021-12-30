export default function routes(app, addon) {
  app.get("/", (req, res) => {
    res.redirect("/atlassian-connect.json");
  });

  app.get("/teamlead-task", addon.authenticate(), (req, res) => {
    res.render("teamlead-task.jsx", {
      title: "Teamlead Task",
    });
  });

  app.get("/settings", addon.authenticate(), (req, res) => {
    res.render("settings.jsx", {
      title: "TeamleadTask Settings",
    });
  });

  app.get("/chuck-norris-jokes", addon.authenticate(), (req, res) => {
    res.render("chuck-norris-jokes.jsx", {
      title: "Chuck Norris jokes",
    });
  });

  // Add additional route handlers here...
}
