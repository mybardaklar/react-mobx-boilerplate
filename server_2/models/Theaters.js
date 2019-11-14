const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TheaterSchema = new Schema(
  {
    theater_name: String,
    chairs      : Schema.Types.Mixed
  }
);

TheaterSchema.pre('save', next => {
  const currentDate = new Date();

  this.updated_at = currentDate;

  if(!this.created_at)
    this.created_at = currentDate;
  
  next();
});

const Theaters = mongoose.model('Theaters', TheaterSchema);

module.exports = Theaters;
