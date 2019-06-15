const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: 'Lütfen ad ve soyad giriniz.'
    },
    username: {
      type: String,
      required: 'Lütfen kullanıcı adı giriniz.',
      unique: true
    },
    password: {
      type: String,
      required: 'Lütfen parola giriniz.'
    },
    email: {
      type: String,
      required: 'Lütfen e-posta adresi giriniz.',
      unique: true
    },
    admin: Boolean,
    created_at: Date,
    updated_at: Date
  }
);

UserSchema.pre('save', next => {
  const currentDate = new Date();

  this.updated_at = currentDate;

  if(!this.created_at)
    this.created_at = currentDate;
  
  next();
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
