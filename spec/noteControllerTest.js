(function testNoteController() {
    var noteController = new NoteController();
    assert.isTrue(noteController.noteList instanceof NoteList);
})();

(function testInsertElement() {
    var noteController = new NoteController();
    var noteController = new Note("hello");
    var note1 = new Note("bye");
    noteController.addNote(note);
    noteController.addNote(note1);
    // mock
    var document2 = document.implementation.createHTMLDocument("");
    var element = document2.createElement("div");
    element.id = "app";
    document2.body.append(element);
    // mock
    noteController.insertElement("app", document2);
    assert.isTrue(
        element.innerHTML ===
        "<ul><li><div>hello</div></li><li><div>bye</div></li></ul>"
)})