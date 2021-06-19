module.exports = {
  index: (req, res) => {
    res.render('home/index', { title: 'Express -dev imersao' });
  },
  sobre: (req, res) => {
    res.render('home/sobre', { title: 'Express -dev imersao' });
  }
}