

(function(exports) {
  function NoteController() {
    this.note = new Note('Favourite drink: seltzer')
    this.noteList = new NoteList()
    this.noteList.add(this.note)
    this.noteListView = new NoteListView(this.noteList)   
  
};

NoteController.prototype.getHTML = function() {
  var noteListView = new NoteListView(this.noteList)
 var x = noteListView.showHTML()
 document.getElementById("app").innerHTML = x 
console.log(x)
}


exports.NoteController = NoteController;

})(this);