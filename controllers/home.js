/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  // res.render('home', {
  //   title: 'Home'
  // });
  // console.log("home request");
  // console.log(res.locals.user);
  res.json(res.locals);
  // console.log(res);
};
