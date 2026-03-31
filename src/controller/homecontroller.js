let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}
let aboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: aboutPage,
}