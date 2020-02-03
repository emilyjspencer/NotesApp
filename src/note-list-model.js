 (function(exports) {
   function NoteList(notes) {
   this.list = [];
   };
 
 
 
 NoteList.prototype.showNotelist = function() {
    return this.list;
 
  }

  NoteList.prototype.add = function(string){
    var note = new Note(string);
    this.list.push(note)
  }

  exports.NoteList = NoteList;

})(this);