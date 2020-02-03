



(function testNewNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0)
})();


//(function testShowNoteList() {
//  var notelist = new noteList('hello world')
//  assert.isTrue(note.showNoteList() === 'hello world')
// })();

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