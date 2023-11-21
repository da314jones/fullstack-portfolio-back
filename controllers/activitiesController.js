const express = require("express");
const activities = express.Router({ mergeParams: true });
const { getOneEntry } = require("../queries/entries");

const {
  getAllActivities,
  getOneActivity,
  createActivity,
  deleteActivity,
  updateActivity,
} = require("../queries/activities");

// const {} = require("../validations/checkActivities");

activities.get("/", async (req, res) => {
  const { entry_id } = req.params;
  try {
    const entry = await getOneEntry(entry_id);
    const allActivities = await getAllActivities(entry_id);
    res.json({ ...entry, allActivities });
  } catch (err) {
    res.json(err);
  }
});

//show
activities.get("/:activities_id", async (req, res) => {
  const { activity_id, entry_id } = req.params;
  try {
    const activity = await getOneActivity(activity_id);
    const entry = await getOneEntry(entry_id);
    if (activity.id) {
      res.json({ ...entry, activity });
    }
  } catch (err) {
    res.json(err);
  }
});

//post
activities.post("/", async (req, res) => {
  try {
    const { entry_id } = req.params;
    const createdActivity = await createActivity(req.body);
    res.json(createdActivity);
  } catch (err) {
    res.status(400).json({ error: "Failed to create new activity." });
  }
});

//delete
activities.delete("/:activity_id", async (req, res) => {
  try {
    const { activity_id } = req.params;
    const deletedActivity = await deleteActivity(activity_id);

    if (deletedActivity) {
      res.status(200).json({
        success: true,
        payloads: {
          data: deletedActivity,
        },
      });
    } else {
      res.status(404).json("No activity found");
    }
  } catch (err) {
    res.send(err);
  }
});

//update
activities.put("/:id", async (req, res) => {
    const { id, entry_id } = req.params;
    const updatedActivity = await updateActivity({ entry_id, id, ...req.body });
    if (updatedActivity.id) {
        res.status(200).json(updatedActivity);
    } else {
        res.status(404).json("Activity is not here!");
    }
});


module.exports = activities
