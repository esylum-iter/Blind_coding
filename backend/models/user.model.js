import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    score:{type: Number},
    programming_language:{type: String},
});

const User = mongoose.model("User", userSchema);

export default User;