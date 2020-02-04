

(function testNewNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0)
})();


(function testAddNote() {
  var noteList = new NoteList();
  var note = new Note();
  noteList.add(note);
  assert.isTrue(noteList.list.length === 1)

})();

(function testAddNote() {
  var noteList = new NoteList();
  var note = new Note("rubyonrails");
  noteList.add(note);
  assert.isTrue(noteList.list[0] === "rubyonrails")
})(); 

(function testShowAllNotes() {
  var noteList = new NoteList();
  var note = new Note("test one")
  var note1 = new Note("test two")
  noteList.add(note);
  noteList.add(note1);
  assert.isTrue(noteList.list[0] === "test one")
  assert.isTrue(noteList.list[1] === "test two")

})();