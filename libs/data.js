import mongoose from 'mongoose'

var dataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { collation: 'data' }
)

export default mongoose.models.dataSchema || mongoose.model('data', dataSchema)
