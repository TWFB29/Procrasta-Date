const { Schema, model } = require('mongoose');
const bcrpyt = require('bcrypt');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must have valid email address.']
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        dates: [{
            type: Schema.Types.ObjectId,
            ref: 'MyDate'
        }]
    }
);

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrpyt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrpyt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;