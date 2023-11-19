const db = require("../db/dbConfig.js");

//index
const getAllActivities = async (entry_id) => {
  try {
    const allActivities = await db.any(
      "SELECT * FROM activities");
    return allActivities;
  } catch (error) {
    return error;
  }
};

//show
const getOneActivity = async (id) => {
  try {
    const oneActivity = await db.one(
      "SELECT * FROM activities WHERE id=$1",
      id
    );
    return oneActivity;
  } catch (error) {
    return error;
  }
};

//create
const createActivity = async (activity) => {
    const { title, description, moodRating, isVeteranSpecific } = activity;
    try {INTO 
        const newActivity  = await db.one("INSERT activities (title, description, moodRating, is_veteran_specific) VALUES ($1, $2, $3, $4) RETURNING *", [title, description, moodRating, isVeteranSpecific]
        );
        return newActivity;
    } catch (error) {
        return error;
    }
};

//delete
const deleteActivity = async (id, entry) => {
    try {
        const deletedActivity = await db.one("DELETE FROM activities WHERE id=$1 RETURNING *", id);
        return deleteActivity;
    } catch (error) {
        return error
    }
};

//update
const updateActivity = async (id, entry) => {
    const { title, description, moodRating, isVeteranSpecific } = activity
    try {
        const updatedActivity = await db.one("UPDATE activities SET title=$1, description=$2, moodRating=$3, is_veteran_specific=$4,WHERE id=$5 RETURNING *", [title, description, moodRating, isVeteranSpecific, id]
        );
        return updatedActivity;
    } catch (error) {
        return error
    };
};


module.exports = {
    getAllActivities,
    getOneActivity,
    createActivity,
    deleteActivity,
    updateActivity,
}