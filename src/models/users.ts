import {model, Schema} from 'mongoose';

export const Users = model('homensdeverdade', new Schema({
  email: {
    type: String,
    required: true
  }
}))
