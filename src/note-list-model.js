 (function(exports) {
   function NoteList(notes) {
   this.list = [];
   };
 
 
 
 NoteList.prototype.showNotelist = function() {
    return this.list;
 
  }

  NoteList.prototype.add = function(note){
    //var note = new Note(string);
   
    this.list.push(note.text)
  }


  NoteList.prototype.showAllNotes = function() {
    for (var noteIndex = 0; noteIndex < this.list.length; noteIndex++) {
      return (this.list[noteIndex].showNote())
    }
  }

  exports.NoteList = NoteList;

})(this);