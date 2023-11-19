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
    const { date, mood, description, activity_id, activity_rating, serviceRelatedNotes } = entry;
    try {
        const newEntry = await db.one("INSERT entries (date, mood, description, activity_id, activity_rating) VALUES ($1, $2, $3, $4, $5) RETURNING *", [date, mood, description, activity_id, activity_rating]
        );
        return newEntry;
    }  catch (error) {
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
    const { date, mood, description, activity_id, activity_rating, serviceRelatedNotes } = entry
    try {
        const updatedEntry = await db.one("UPDATE entries SET date=$1, mood=$2, description=$3, activity_id=$4, activity_rating=$5 service_related_notes=$6 WHERE id=$7 RETURNING *", [date, mood, description, activity_id, activity_rating, serviceRelatedNotes, id]);
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
