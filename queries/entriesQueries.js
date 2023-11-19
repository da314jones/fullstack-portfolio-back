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
const getOneEntry = async () => {
  try {
    const oneEntry = await db.one("SELECT * FROM entries WHERE id=$1", id);
    return oneEntry;
  } catch (error) {
    return error;
  }
};

//Create
const createEntry = async () => {
    try {
        const newEntry = await db.one("INSERT INTO entries JournalEntries (date, mood, description, activity_id, activity_rating) VALUES ($1, $2, $3, $4, $5) RETURNING *");
        return newEntry;
    }  catch (error) {
        return error;
    }
};

//delete
const deleteEntry = async (id) => {
    try {
        const deletedEntry = await db.one("DELETE FROM entries WHERE id=$! RETURNING *", id);
        return deletedEntry;
    } catch (error) {
        return error
    }
};

//update
const updateEntry = async (id, entry) => {
    try {
        const updatedEntry = await db.one("UPDATE JournalEntries SET date=$!, mood=$2, description=$3, activity_id=$4, activity_rating=$5 WHERE id=$6 RETURNING *", { id, ...entry });
        return updatedEntry;
    } catch (error) {
        return error;
    }
};
