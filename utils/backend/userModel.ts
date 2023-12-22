import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  details: String,
  type: String,
  year: String,
  bottomPhoneImage: String,
  topPhoneImage: String,
  link: String,
  github: String,
});

const schema = new mongoose.Schema({
  homePage: {
    name: String,
    petName: String,
    message: String,
  },
  workPage: {
    projects: [projectSchema],
  },
  aboutPage: {
    details: String,
    image: String,
    resumeLink: String,
  },
  other: {
    logoLink: String,
  },
});

// @ts-ignore
mongoose.models = {};
export const UserModel = mongoose.model("User", schema);
