import connnectionToDatabase from "@/lib/dbConnect"
import User from "@/models/User"
import {NextResponse} from "next/server"
export async function POST(request){
    try{
        await connnectionToDatabase()
        const {name, email, password} = await request.json()
        const user = await User.create({
            name,
            email,
            password
        })
        await newUser.save()
        return NextResponse.json(newUser,{status:201})
    }
    catch(err){
        console.log(err)
    }
}