import createHttpError from 'http-errors';
import  Image  from '../models/note.js';
//get
export const getAllImages = async (req,res) =>{
  const images = await Image.find();
  res.status(200).json(images);
};

export const getImageById = async(req,res)=>{
  const {imageId} = req.params;
  const image = await Image.findById(imageId);
  if(!image){
    throw createHttpError(404, `Note not found`);
  }
  res.status(200).json(image);
};
//post
export const createImage = async (req,res) =>{
  const image = await Image.create(req.body);
  res.status(201).json(image);
};
