import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { email, username, image } = await request.json();
    try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
            const newUser = new User({
                email: email,
                username: username.replace(" ", "").toLowerCase(),
                image: image,
            });
            await newUser.save();
            return new Response(JSON.stringify(newUser), { status: 201 });
        }
        return new Response(JSON.stringify(userExists), { status: 200 });
    } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return new Response("Internal server error", { status: 500 });
    }
};

