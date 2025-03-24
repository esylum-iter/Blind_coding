import User from "../models/user.model";

export const create = async (req, res) => {
    const{ name , score, lang} = req.body;
    const newUser = new User({id, score,lang});
    try{
        await newUser.save();
        res.status(201).json(newUser);
    } catch(err){
        console.error(err);
    }
}

export const get = async(req,res)=>{
    try{
        const name = req.body.username;
        const user = await User.findOne({name});
        if(!user){
            return res.status(203).json({message:"User not found"});
        } else {
            res.status(200).json(user);
        }
    } catch(e){
        console.error(e);
    }
}