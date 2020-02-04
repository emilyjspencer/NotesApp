(function(exports) {
  function NoteListView(noteList) {
  this.noteList = noteList;
};

NoteListView.prototype.showHTML = function() {
  var htmlString = []
  for(var i = 0; i < this.noteList.list.length; i++) {
    console.log(noteList.list[i])
    
    htmlString.push("<li><div>" + noteList.list[i] + "</li><div>")
  }
  return "<ul>" + htmlString.join("") + "</ul>"
}








exports.NoteListView = NoteListView;

})(this);