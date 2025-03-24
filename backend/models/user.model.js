import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    UID:{type: Number},
    score:{type: Number},
});

const User = mongoose.model("User", userSchema);

export default User;