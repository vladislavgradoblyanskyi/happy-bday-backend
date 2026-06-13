import mongoose from 'mongoose';
const { Schema } = mongoose;
export const imageSchema = new Schema(
  {
    preview: {
      type: String,
      required: true,
      trim: true,
    },
    original:{
      type:String,
      required: false,
      trim:true,
      default: '',
    },
    description: {
      type:String,
      required:false,
      default: '',
    },

  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Image', imageSchema);
