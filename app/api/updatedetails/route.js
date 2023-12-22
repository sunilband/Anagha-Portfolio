import { NextResponse } from "next/server";
import { UserModel } from "@/utils/backend/userModel";
import { connectDB } from "@/utils/backend/mongoDB";

export async function PUT(req, res) {
  try {
    const { secretPassword, homePage, aboutPage, workPage, other } =
      await req.json();
    const envPassword = process.env.NEXT_PUBLIC_UPDATE_SECRET_KEY;
    if (secretPassword !== envPassword) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: "Not Authorized",
        }),
        {
          status: 400,
        },
      );
    }

    await connectDB();
    // find first user among all users
    const allUsers = await UserModel.find({});
    const user = allUsers[0];
    // create user if not exists
    if (!user) {
      const newUser = await UserModel.create({
        homePage,
        aboutPage,
        workPage,
        other,
      });
      return new NextResponse(
        JSON.stringify({
          success: true,
          message: "Created !",
          data: newUser,
        }),
        {
          status: 200,
        },
      );
    }

    // update user
    const updatedUser = await UserModel.findByIdAndUpdate(
      user._id,
      {
        homePage,
        aboutPage,
        workPage,
        other,
      },
      {
        new: true,
      },
    );

    if (!updatedUser) throw new Error("User not found !");

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Data Updated !",
        data: updatedUser,
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
