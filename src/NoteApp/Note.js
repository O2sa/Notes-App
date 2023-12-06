import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";
import "./style.css";
import { addDoc, deleteDoc, onSnapshot, doc, setDoc } from "firebase/firestore";
import { notesCollection, db } from "./firebase";
export default function Note() {
  const [notes, setNotes] = React.useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState("");
  const [tempNoteText, setTempNoteText] = React.useState("");
  const currentNote =
    notes.find((note) => note.id === currentNoteId) || notes[0];
  let sortedNotes = notes.sort((p1, p2) => p2.updateAt - p1.updateAt);
  // console.log(notes);
  // console.log(currentNoteId);
  var seen = [];
  React.useEffect(() => {
    if (!currentNoteId) {
      setCurrentNoteId(notes[0]?.id);
    }
  }, [notes]);
  React.useEffect(
    // () => localStorage.setItem("notes", JSON.stringify(notes)),
    () => {
      const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
        //sync local notes with snapshot data
        const notesArr = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setNotes(notesArr);
      });
      return unsubscribe;
    },
    []
  );
  React.useEffect(() => {
    if (currentNote) {
    setTempNoteText(currentNote.body) 
    console.log(tempNoteText)
    }
  }, [currentNote]);

      /**
     * Create an effect that runs any time the tempNoteText changes
     * Delay the sending of the request to Firebase
     *  uses setTimeout
     * use clearTimeout to cancel the timeout
     */
    
      React.useEffect(() => {
        const timeoutId = setTimeout(() => {
          if(tempNoteText!=currentNote.body){
            updateNote(tempNoteText)

          }
        }, 500)
        return () => clearTimeout(timeoutId)
    }, [tempNoteText])


  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here",
      updateAt: Date.now(),
      createAt: Date.now(),
    };
    // setNotes((prevNotes) => [newNote, ...prevNotes]);

    const newNoteRef = await addDoc(notesCollection, newNote);
    setCurrentNoteId(newNoteRef.id);
  }

  async function updateNote(text) {
    // Put the most recently-modified note at the top
    // setNotes((oldNotes) => {
    //   const newArray = [];
    //   for (let i = 0; i < oldNotes.length; i++) {
    //     const oldNote = oldNotes[i];    const docRef = doc(db, "notes", noteId);
    // });
    const docRef = doc(db, "notes", currentNoteId);
    await setDoc(docRef, { body: text, updateAt: Date.now() }, { merge: true });
  }

  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId);
    await deleteDoc(docRef);
  }
  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={sortedNotes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          <Editor currentNote={tempNoteText} updateNote={setTempNoteText} />
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
