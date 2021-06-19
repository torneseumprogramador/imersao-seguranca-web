module.exports = {
  index: (req, res) => {
    res.render('home/index', { usuario: req.usuarioLogado });
  },
  sobre: (req, res) => {
    res.render('home/sobre', { title: 'Express -dev imersao' });
  }
}