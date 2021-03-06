var fs = require('fs');
var utils = require('./lib/utils.js')

var maValise = require('./Ma_Valise.json');
var articles = maValise.SPIP.spip_articles;
var breves = maValise.SPIP.spip_breves;
var rubriques = maValise.SPIP.spip_rubriques;

function getRubrique(id) {
  return rubriques.find(function (rubrique){
    return rubrique.id_rubrique == id;
  });
}

var extensions = {
  "arton1" : "jpg",
  "arton101" : "png",
  "arton104" : "jpg",
  "arton106" : "png",
  "arton111" : "png",
  "arton112" : "png",
  "arton113" : "jpg",
  "arton118" : "png",
  "arton2" : "jpg",
  "arton3" : "jpg",
  "arton33" : "jpg",
  "arton35" : "jpg",
  "arton38" : "gif",
  "arton4" : "jpg",
  "arton40" : "jpg",
  "arton5" : "jpg",
  "arton51" : "jpg",
  "arton52" : "gif",
  "arton56" : "png",
  "arton58" : "png",
  "arton59" : "jpg",
  "arton6" : "gif",
  "arton63" : "jpg",
  "arton7" : "jpg",
  "arton72" : "gif",
  "arton76" : "gif",
  "arton77" : "gif",
  "arton79" : "gif",
  "arton8" : "jpg",
  "arton81" : "jpg",
  "arton83" : "jpg",
  "arton84" : "png",
  "arton90" : "jpg",
  "arton91" : "jpg",
  "arton93" : "jpg",
  "arton96" : "jpg",
  "arton97" : "jpg"
};


articles.forEach(function(article) {
  if (article.statut != "publie") {
    return;
  }
  var content = [];
  content.push("+++");
  content.push('id = ' + article.id_article);
  content.push('title = "' + utils.asString(article.titre)+'"');
  content.push('soustitre = "' + utils.asString(article.soustitre) +'"');
  content.push('date = "' + article.date.replace(/ /, "T") + "+01:00" +'"');
  content.push('catégories = [ "' +getRubrique(article.id_rubrique).titre+ '" ]');
  content.push('description = "' + utils.asString(utils.removeUrl(article.descriptif)).replace(/\n/, "")  +'"');
  content.push('comments = true');
  var nomImage = 'arton' + article.id_article;

  if(extensions[nomImage]) {
    content.push('thumbnail = "/images/' + nomImage + '.' + extensions[nomImage] + '"');
  }
  content.push("+++");
  content.push("");
  content.push('<div class="chapo">' + utils.urlToHtml(article.chapo) +'</div>\n');
  content.push(utils.spipToMd(article.texte));

  var fileName = "content/post/article_" + article.id_article+ ".md";
  fs.writeFile(fileName,
      content.join('\n'),
      {flag:"w"},
      function(err) {
        if(err) {
          return console.log(err);
        }

        console.log("article "+ article.id_article + " saved!");
  });
});

breves.forEach(function(breve) {
  if (breve.statut != "publie") {
    return;
  }
  var content = [];
  content.push("+++");
  content.push('id = ' + breve.id_breve);
  content.push('title = "' + utils.asString(breve.titre)+'"');
  content.push('date = "' + breve.date_heure.replace(/ /, "T") + "+01:00" +'"');
  content.push('catégories = [ "' +getRubrique(breve.id_rubrique).titre+ '" ]');
  content.push("+++");
  content.push("");
  content.push(utils.spipToMd(breve.texte));

  var fileName = "content/breve/breve_" + breve.id_breve+ ".md";
  fs.writeFile(fileName,
      content.join('\n'),
      {flag:"w"},
      function(err) {
        if(err) {
          return console.log(err);
        }

        console.log("breve " + breve.id_breve + " saved!");
  });
});
