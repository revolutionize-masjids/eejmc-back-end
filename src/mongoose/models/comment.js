//
// Comment model definition
//

import mongoose, { Schema } from 'mongoose'

import { UserSchema } from './user'
import { EventSchema } from './event'

// describe the properties that will be in every comment record
const CommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  commentor: {
    type: UserSchema,
    required:  true
  },
  created: {
    type: String,
    required: true,
    default: Date.now()
  },
  lastUpdated: {
    type: String,
    required: false,
    default: null
  },
  likes: {
    type: [UserSchema],
    required: false,
    default: []
  },
  // TODO: create a reference to the event this comment is attached to
  // event: {
  //   type: EventSchema,
  //   required: false,
  //   default: {}
  // }
}, { collection: "comment" }) // use this schema in the collection named "comment"

// using the comment schema, create a model for comments
const Comment = mongoose.model('Comment', CommentSchema)

export {
  Comment as default,
  CommentSchema
}