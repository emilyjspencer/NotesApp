



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
  //var note = new Note();
  noteList.add("rubyonrails");
  assert.isTrue(noteList.list[0].showNote() === "rubyonrails")
})(); 

(function testShowAllNotes() {
  var noteList = new NoteList();
  noteList.add("test one");
  noteList.add("test two");
  assert.isTrue(noteList.showAllNotes() === "test one", "test two")
})();