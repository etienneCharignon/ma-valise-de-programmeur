var maValise = require('../Ma_Valise.json');
var docs = maValise.SPIP.spip_documents;

module.exports = {
    spipToMd: spipToMd,
    asString: asString,
    removeUrl: removeUrl,
    urlToHtml: urlToHtml
}


function asString(string) {
  return string.replace(/["]/g, '\\"');
}

function urlToHtml(string) {
  return string.replace(/\[([^\]]*)->([^\]]*)\]/g, '<a href="$2">$1</a>')
    .replace(/\((\d+)\)/g, "(../article_$1)")
    .replace(/\(breve(\d+)\)/, "(../../breve/breve_$1)")
  ;
}
function urlToMd(string) {
  return string.replace(/\[([^\]]*)->([^\]]*)\]/g, "[$1]($2)")
    .replace(/\((\d+)\)/g, "(../article_$1)")
    .replace(/\(breve(\d+)\)/, "(../../breve/breve_$1)")
  ;
}

function getDoc(id) {
  return docs.find(function (doc){
    return doc.id_document == id;
  });
}

function spipNoteToMdNote(text) {
  var noteRegexp = /\[\[(.*)\]\]([^\n]*\n)/;
  var match;
  var indexNote = 1;
  while(match = text.match(noteRegexp)) {
    text = text.replace(noteRegexp, "[^" + indexNote + "]$2\n[^" + indexNote + "]: $1\n");
    indexNote += 1;
  }
  return text;
}

function spipToMd(string) {
  var md =  urlToMd(string).replace(/\{\{\{(.+)\}\}\}/g, "## $1")
    .replace(/\{\{(.+)\}\}/g, "**$1**")
    .replace(/\{(.+)\}/g, "_$1_")
    .replace(/##CLEAR##/, "{{% clear %}}")
    .replace(/ ([?!:;])/g, "&nbsp;$1")
    .replace(/<\/?code>/g, "```")
    ;
  var imageRegexp = /<(img|doc)(\d+)\|?(center|left)?>/;
  var match;
  while(match = md.match(imageRegexp)) {
    var docId = match[2];
    var doc= getDoc(docId);
    var attrs ="";
    if(match[3]) {
      attrs = ' class="' + match[3] + '"';
    }
    if(doc.titre) {
      attrs += ' caption="' + doc.titre + '"';
    }
    md = md.replace(imageRegexp, '{{% img src="images/' + doc.fichier + '"' + attrs + ' %}}')
  }

  return spipNoteToMdNote(md);
}

function removeUrl(string) {
  return string.replace(/\[([^-]*)->([^\]]*)\]/g, "$1")
  ;
}
