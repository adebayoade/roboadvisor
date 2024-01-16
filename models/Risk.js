import mongoose from 'mongoose';

const { Schema } = mongoose;

const riskSchema = new Schema({
  tolerance: {
    type: Integer,
    unique: true,
    required: true,
  },
  'nigerian stocks': {
    type: String,
  },
  'foriegn stocks': {
    type: String,
  },
  'tech stocks': {
    type: String,
  },
  'emerging stocks': {
    type: String,
  },
  'nigerian bonds': {
    type: String,
  },
  'foriegn bonds': {
    type: String,
    required: true,
  },
  'commodities bonds': {
    type: String,
    required: true,
  },
  'real estate': {
    type: String,
    required: true,
  },
  't-bills': {
    type: String,
    required: true,
  },
  alternative: {
    type: String,
    required: true,
  },
});
