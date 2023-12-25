import { NextResponse } from "next/server";
import { UserModel } from "@/utils/backend/userModel";
import { connectDB } from "@/utils/backend/mongoDB";

export const revalidate = 600; // Revalidate Seconds , 600 = 10 mins

export async function GET(req, res) {
  try {
    await connectDB();
    // find first user among all users
    const user = await UserModel.findOne({});
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Data fetched !",
        data: user,
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message.toString(),
      }),
      {
        status: 500,
      },
    );
  }
}
