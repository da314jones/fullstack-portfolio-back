const db = require("../db/dbConfig.js");

//index
const getAllEntries = async () => {
  try {
    const allEntries = await db.any("SELECT * FROM entries");
    return allEntries;
  } catch (error) {
    return error;
  }
};

//show
const getOneEntry = async (id) => {
  try {
    const oneEntry = await db.one("SELECT * FROM entries WHERE id=$1", id);
    return oneEntry;
  } catch (error) {
    return error;
  }
};

//Create
const createEntry = async (entry) => {
  const { date, mood_adjective_id, mood, description, service_related_notes, custom_activity, activity_rating, activity_id } = entry;
  try {
      const newEntry = await db.one("INSERT INTO entries (date, mood_adjective_id, mood, description, service_related_notes, custom_activity, activity_rating, activity_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [date, mood_adjective_id, mood, description, service_related_notes, custom_activity, activity_rating, activity_id]);
      return newEntry;
  } catch (error) {
      return error;
  }
};


//delete
const deleteEntry = async (id) => {
    try {
        const deletedEntry = await db.one("DELETE FROM entries WHERE id=$1 RETURNING *", id);
        return deletedEntry;
    } catch (error) {
        return error
    }
};

//update
const updateEntry = async (id, entry) => {
  const { date, mood_adjective_id, mood, description, service_related_notes, custom_activity, activity_rating, activity_id } = entry;
  try {
      const updatedEntry = await db.one("UPDATE entries SET date=$1, mood_adjective_id=$2, mood=$3, description=$4, service_related_notes=$5, custom_activity=$6, activity_rating=$7, activity_id=$8 WHERE id=$9 RETURNING *", [date, mood_adjective_id, mood, description, service_related_notes, custom_activity, activity_rating, activity_id, id]);
      return updatedEntry;
  } catch (error) {
      return error;
  }
};



module.exports = {
    getAllEntries,
    getOneEntry,
    createEntry,
    deleteEntry,
    updateEntry,
}
