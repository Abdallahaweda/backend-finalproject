import mongoos from "mongoose";
let ReportSchema = mongoos.Schema({
  userId: {
    type: mongoos.Types.ObjectId,
    ref: "User",
  },
  weeklySchedule: {
    type: Object,
  },
});

let Report = mongoos.model("Report", ReportSchema);
export default Report;
