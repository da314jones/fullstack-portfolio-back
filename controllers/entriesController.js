const express = require("express");
const entries = express.Router();
const = {
    getAllEntries,
    getOneEntry,
    createEntry,
    deleteEntry,
    updateEntry,
} = require("..queries/entries");

const {
    checkEntry,
    CheckEntryName
}