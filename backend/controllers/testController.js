const getTest = (req, res) => {
  res.json({ you: 'very cool', me: 'quite cool also!' })
}

const index = (req, res) => {
  res.send('welcome')
}

module.exports = { getTest, index }