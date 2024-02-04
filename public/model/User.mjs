import mongoos from "mongoose";
let UserSchema = mongoos.Schema({
  fullname: String,
  // username: String,
  // password: String,
  // email: String,
  // phone: String,
  // gender: String,
  // userimg: String,
});

let User = mongoos.model("User", UserSchema);
export default User;
