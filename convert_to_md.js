var maValise = require('./Ma_Valise.json');
var fs = require('fs');


var articles = maValise.SPIP.spip_articles;
var breves = maValise.SPIP.spip_breves;

function asString(string) {
  return string.replace(/["]/g, '\\"');
}

function convUrl(string) {
  return string.replace(/\[([^-]*)->([^\]]*)\]/g, "[$1]($2)")
    .replace(/\((\d*)\)/g, "(../article_$1)")
    .replace(/\(breve(\d*)\)/, "(../breve_$1)")
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
  content.push('descriptif = "' + asString(article.descriptif).replace(/\n/, "")  +'"');
  content.push("+++");
  content.push("");
  content.push('<h2>' + article.chapo+'</h2>');
  content.push(convUrl(article.texte));

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
  content.push(convUrl(breve.texte));

  var fileName = "content/post/breve_" + breve.id_breve+ ".md";
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
