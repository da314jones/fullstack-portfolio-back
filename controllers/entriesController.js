const express = require("express");
const entries = express.Router();
const {
  getAllEntries,
  getOneEntry,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../queries/entries.js");

entries.get("/", async (req, res) => {
  const allEntries = await getAllEntries();
  if (req.query.order) {
    allEntries.sort((a, b) => {
      if (req.query.order === "asc" || req.query.order === "desc") {
        if (a.adjective_before.toLowerCase() < b.adjective_before.toLowerCase()) return -1;
        else if (a.adjective_before.toLowerCase() > b.adjective_before.toLowerCase()) return 1;
        else return 0;
      }
    });
    if (req.query.order === "asc") res.json(allEntries);
    else if (req.query.order === "desc") res.json(allEntries.reverse());
    else res.redirect("/order should be asc or desc");
  } else res.status(200).json(allEntries);
});

entries.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneEntry = await getOneEntry(id);
  if (oneEntry) {
    res.json(oneEntry);
  } else {
    res.status(404).json({ error: "Entry not found" });
  }
});

entries.post("/", async (req, res) => {
  try {
    const createdEntry = await createEntry(req.body);
    res.json(createdEntry);
  } catch (err) {
    res.status(400).json({ error: "Entry not created!" });
  }
});

entries.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEntry = await deleteEntry(id);
    if (deletedEntry) {
      res.status(200).json({ success: true, payload: { data: deletedEntry } });
    } else {
      res.status(404).json({ error: " Entry not found." });
    }
  } catch (error) {
    res.send(err);
  }
});

entries.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedEntry = await updateEntry(id, req.body);
  if (updatedEntry.id) {
    res.status(200).json(updatedEntry);
  } else {
    res.status(404).json("No entry found with that id");
  }
});

module.exports = entries;
