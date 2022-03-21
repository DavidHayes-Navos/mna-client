import dbConnect from '../../libs/dbconnect'
import dataSchema from '../../libs/data'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const data = await dataSchema.find(
          {}
        ) /* find all the data in our database */
        console.log(data)
        res.status(200).json({ success: true, data: data })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
