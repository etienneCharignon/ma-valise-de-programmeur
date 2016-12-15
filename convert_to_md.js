var maValise = require('./Ma_Valise.json');
var fs = require('fs');


var articles = maValise.SPIP.spip_articles;
var breves = maValise.SPIP.spip_breves;
var docs = maValise.SPIP.spip_documents;
var extensions = {
  "arton1" : "jpg",
  "arton101" : "png",
  "arton104" : "jpg",
  "arton106" : "png",
  "arton111" : "png",
  "arton112" : "png",
  "arton113" : "jpg",
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

function asString(string) {
  return string.replace(/["]/g, '\\"');
}

function urlToHtml(string) {
  return string.replace(/\[([^-]*)->([^\]]*)\]/g, "<a src=\"$2\">$1</a>")
    .replace(/src=\"(\d+)\"/g, "src=\"post/article_$1\"")
    .replace(/src=\"breve(\d+)\"/g, "src=\"breve/breve_$1\"")
  ;
}

function urlToMd(string) {
  return string.replace(/\[([^-]*)->([^\]]*)\]/g, "[$1]($2)")
    .replace(/\((\d+)\)/g, "(../article_$1)")
    .replace(/\(breve(\d+)\)/, "(../../breve/breve_$1)")
    .replace(/<img(\d+)\|center>/g, '<img src="/images/' + docs[34].fichier + '"/>')
  ;
}

function spipToMd(string) {
  return urlToMd(string).replace(/\{\{\{(.+)\}\}\}/g, "## $1")
    .replace(/\{\{(.+)\}\}/g, "**$1**")
    .replace(/\{(.+)\}/g, "_$1_")
    ;
}

function removeUrl(string) {
  return string.replace(/\[([^-]*)->([^\]]*)\]/g, "$1")
  ;
}

articles.forEach(function(article) {
  var content = [];
  content.push("+++");
  content.push('id = ' + article.id_article);
  content.push('title = "' + asString(article.titre)+'"');
  content.push('soustitre = "' + asString(article.soustitre) +'"');
  content.push('date = "' + article.date.replace(/ /, "T") + "+01:00" +'"');
  content.push('rubrique = ' + article.id_rubrique);
  content.push('description = "' + asString(removeUrl(article.descriptif)).replace(/\n/, "")  +'"');
  content.push('comments = true');
  var nomImage = 'arton' + article.id_article;

  content.push('image = "/images/' + nomImage + '.' + extensions[nomImage] + '"');
  content.push("+++");
  content.push("");
  content.push('<div class="chapo">' + urlToMd(article.chapo) +'</div>');
  content.push(spipToMd(article.texte));

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
  var content = [];
  content.push("+++");
  content.push('id = ' + breve.id_breve);
  content.push('title = "' + asString(breve.titre)+'"');
  content.push('date = "' + breve.date_heure.replace(/ /, "T") + "+01:00" +'"');
  content.push('rubrique = ' + breve.id_rubrique);
  content.push("+++");
  content.push("");
  content.push(spipToMd(breve.texte));

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
