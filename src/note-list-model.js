 (function(exports) {
   function NoteList(notes) {
   this.list = [];
   };
 
 
 
 NoteList.prototype.showNotelist = function() {
    return this.list;
 
  }

  NoteList.prototype.add = function(note){
    this.list.push(note.text)
  }


  NoteList.prototype.showAllNotes = function() {
    for (var noteIndex = 0; noteIndex < this.list.length; noteIndex++) {
      console.log((this.list[noteIndex]))
    }  
    
  }

  exports.NoteList = NoteList;

})(this);