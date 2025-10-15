const fs = require("fs");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes, null, 2);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log("✅ Note added successfully!");
  } else {
    console.log("⚠️ Note title already exists!");
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(`\nPrinting ${notes.length} note(s):\n`);
  notes.forEach((note) => {
    console.log("--");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}\n`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((n) => n.title === title);

  if (note) {
    console.log("--");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("❌ Note not found!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((n) => n.title !== title);

  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log("🗑️ Note removed!");
  } else {
    console.log("⚠️ Note not found!");
  }
};

module.exports = {
  addNote,
  listNotes,
  readNote,
  removeNote,
};
