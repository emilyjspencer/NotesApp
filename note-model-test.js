
  function testNewNote() {
    var note = new Note('hello')
    assert.isTrue(note.text === 'hello')
  
  }
  testNewNote()
  console.log("passes - test if note exists")


  function testShowNote() {
    var note = new Note('hello world')
    assert.isTrue(note.showNote() === 'hello world')
  }
  testShowNote()
  console.log("passes - test if showNote works")