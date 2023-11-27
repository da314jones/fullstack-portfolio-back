const db = require("../db/dbConfig.js");

const getAllEntries = async () => {
  try {
    const allEntries = await db.any("SELECT * FROM entries");
    return allEntries;
  } catch (error) {
    return error;
  }
};

const getOneEntry = async (id) => {
  try {
    const oneEntry = await db.one("SELECT * FROM entries WHERE id=$1", id);
    return oneEntry;
  } catch (error) {
    return error;
  }
};

const createEntry = async (entry) => {
  const {
    date,
    rating_before,
    adjective_before,
    description,
    service_related_notes,
    activity,
    custom_activity,
    adjective_after,
    rating_after,
  } = entry;
  try {
    const newEntry = await db.one(
      "INSERT INTO entries (date, rating_before, adjective_before, description, service_related_notes, activity, custom_activity, adjective_after, rating_after) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        date,
        rating_before,
        adjective_before,
        description,
        service_related_notes,
        activity,
        custom_activity,
        adjective_after,
        rating_after,
      ]
    );
    return newEntry;
  } catch (error) {
    return error;
  }
};

const deleteEntry = async (id) => {
  try {
    const deletedEntry = await db.one(
      "DELETE FROM entries WHERE id=$1 RETURNING *",
      id
    );
    return deletedEntry;
  } catch (error) {
    return error;
  }
};


const updateEntry = async (id, entry) => {
  const {
    date,
    rating_before,
    adjective_before,
    description,
    service_related_notes,
    activity,
    custom_activity,
    adjective_after,
    rating_after,
  } = entry;
  try {
    const updatedEntry = await db.one(
      "UPDATE entries SET date=$1, rating_before=$2, adjective_before=$3, description=$4, service_related_notes=$5, activity=$6, custom_activity=$7, adjective_after=$8, rating_after=$9 WHERE id=$10 RETURNING *",
      [
        date,
        rating_before,
        adjective_before,
        description,
        service_related_notes,
        activity,
        custom_activity,
        adjective_after,
        rating_after,
        id,
      ]
    );
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
};
