// fetch the details of the profile i.e. username, interests etc
// show all data in terms of cards if possible

import userModel from "../../models/usermodel";
import dbConnect from "../../utils/dbConnect";


dbConnect();
export default async function ProfileData(req, res) {
    if(req.method == "GET"){
        try{
        const users = await getMainUser();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
}
    if(req.method == "POST"){
        try{
        const users = await userModel.create(req.body);
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
}
}

export async function getMainUser() {
    await dbConnect();
    const users = await userModel.find({}).limit(1);
    console.log(JSON.parse(JSON.stringify(users)))
    return JSON.parse(JSON.stringify(users))
}