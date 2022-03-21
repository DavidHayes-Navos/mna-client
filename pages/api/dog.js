const axios = require('axios').default

export default async function hello(req, res) {
  var dogs = await axios
    .get('https://random.dog/woof.json')
    .then((response) => response)

  res.status(200).json(dogs.data)
}
