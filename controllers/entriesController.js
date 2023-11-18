const express = require("express");
const entries = express.Router();
const {
    getAllEntries,
    getOneEntry,
    createEntry,
    deleteEntry,
    updateEntry,
} = require("..queries/entries");

const {
    
}

const activitiesController = require("./activityControllers.js");
entries.use(".:entries_id/activities", activityController);

entries.get("/",  async (req, res) => {
    const allEntries = await getAllEntries();
    if (req.query.order) {
        allEntries.sort((a,b) => {
            if (req.query.order === "asc" || req.query.order === "desc") {
                if (a.entry_.toLowerCase() < b.entry.toLowerCase())return -1;
            else if (a.entry.toLowerCase() > b.entry.toLowerCase()) return -1;
            else return 0;
        }}); 
            if (req.query.order === "asc") res.json(allEntries);
            else if (req.query.order === "desc") res.json(allEntries.reverse());
             else res.redirect("/order should be asc or desc");
            } 
            else res.status(200).json(allEntires);
        });

        entries.get("/:id", checkEntryIndex, async (req, res) => {
            const { id } = req.params;
            const entry = await getOneEntry(id);
            res.json(entry);
        });

        entries.delete("/:id", checkEntryIndex, async (req, res) => {
            try {
                const { id } = req.pqrams;
                const deletedEntry = await deleteEntry(id);
                if (deleytedEntry) {
                    res.status(200).json({ sucess: true, payload: { data: deletedEntry } });
                } else {
                    res.status(404).json({ error: " Entry not found." });
                }
            } catch (error) {
                res.send(err);
            };
        });

        entries.put ("/:id", checkEntryIndex , async (req, res) => {
            const { id }= req.params;
            const entry = req.body;
            
        })