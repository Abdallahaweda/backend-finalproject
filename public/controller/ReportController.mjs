import Report from "../model/Report.mjs";
import outputExample from "../dataTypes/output_report_example.mjs";
import HealthAiReportGenerator from "../services/generateReportAi.mjs";
import User from "../model/User.mjs";

const createReport = async (req, res) => {
  try {
    const { userId } = req.body;
    let selectedUser = await User.findOne({ _id: userId });
    if (!selectedUser) {
      return res.status(404).json({ Error: "User not found" });
    } else {
      let weeklySchedule = await HealthAiReportGenerator(
        { selectedUser, ...userData },
        outputExample
      );
      let reportCreated = await Report.create({ userId, weeklySchedule });
      res.json({ reportCreated, success: true });
    }
  } catch (err) {
    console.log(err);
  }
};

export default { createReport };

// must be deleted
var userData = {
  name: "John Doe",
  age: 35,
  gender: "Male",
  healthAssessment: {
    status: "Generally healthy",
    medicalConditions: [],
    medications: ["Hypertension medication"],
  },
  lifestyleHabits: {
    dailyActivity: "Sedentary job, little daily activity",
    exercise: "Rarely exercises",
    eatingPatterns: "Irregular, often skips meals",
  },
  goals: [
    "Improve overall fitness",
    "Manage and reduce hypertension",
    "Establish consistent exercise routine",
  ],
};
