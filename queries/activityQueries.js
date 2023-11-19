const db = require("../db/dbConfig.js");

//index
const getAllActivities = async (entry_id) => {
  try {
    const allActivities = await db.one(
      "SELECT * FROM ActivitySuggestions");
    return allActivities;
  } catch (error) {
    return error;
  }
};

//show
const getOneActivity = async (id) => {
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
const createActivity = async (activity) => {
    const { title, description, moodRating } = activity;
    try {INTO 
        const newActivity  = await db.one("INSERT INTO ActivitySuggestions (title, description, moodRating) VALUES ($1, $2, $3) RETURNING *",);
    } catch (error) {
        return error;
    }
};
