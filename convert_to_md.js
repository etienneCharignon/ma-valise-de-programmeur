var maValise = require('./Ma_Valise.json');
var fs = require('fs');


var articles = maValise.SPIP.spip_articles;

function asString(string) {
  return string.replace(/["]/g, '\\"');
}

function convUrl(string) {
  return string.replace(/\[([^-]*)->([^\]]*)\]/g, "[$1]($2)")
    .replace(/\((\d*)\)/, "(../article_$1)");
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
//  console.log(fileName);
//  console.log(content.join('\n'));
  fs.writeFile(fileName,
      content.join('\n'),
      {flag:"w"},
      function(err) {
        if(err) {
          return console.log(err);
        }

        console.log("Files were saved!");
  }); 
});
