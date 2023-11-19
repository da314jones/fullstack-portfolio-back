const db = require("../db/dbConfig.js");

//index
const getAllActivities = async (entry_id) => {
  try {
    const allActivities = await db.one(
      "SELECT * FROM ActivitySuggestions WHERE entry_id=$1",
      entry_id
    );
    return allActivities;
  } catch (error) {
    return error;
  }
};

//show
const getOneActivities = async (id) => {
  try {
    const oneActivity = await db.one(
      "SELECT * FROM ActivitySuggestions WHERE id=$1",
      id
    );
    return oneActivity;
  } catch (error) {
    return error;
  }
};

//create
const createActivity = async (id) => {
    try {
        const newActivity  = await db.one("")
    } catch (error) {
        return error;
    }
}
