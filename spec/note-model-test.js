
  (function testNewNote() {
    var note = new Note('hello')
    assert.isTrue(note.text === 'hello')
  
  })();


  (function testShowNote() {
    var note = new Note('hello world')
    assert.isTrue(note.showNote() === 'hello world')
  })();