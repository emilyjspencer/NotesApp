
(function testNewNoteListViewShowNoNotes() {
  noteList = new NoteList()
  noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.showHTML() === "<ul><li><div></li><div></ul>")
})();

(function testNewNoteListViewShowOneNote() {
  note = new Note("hi")
  noteList = new NoteList()
  noteList.add(note)
  noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.showHTML() === "<ul><li><div>hi</li><div></ul>")
})();


(function testNewNoteListViewShowAllNotes() {
  note = new Note("hi")
  note1 = new Note("bye")
  noteList = new NoteList()
  noteList.add(note)
  noteList.add(note1)
  noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.showHTML() === "<ul><li><div>hi</li><div><li><div>bye</li><div></ul>")
})();