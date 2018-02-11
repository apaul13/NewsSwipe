
//New York Times Article Search API
function call_API(keyword){
   // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json").then(function(keyword) {
        url += '?' + $.param({
            'api-key': process.env.KEY,
            'q': keyword,
            'page': 0 
            });
            $.ajax({
            url: url,
            method: 'GET',
            }).done(function(result) {
            return result;
            }).fail(function(err) {
            throw err;
            });
        }
    )
    var file = JSON.parse(JSON_file);
    ;
    
var JSON_file = call_API(keyword);

function parseJSON(JSON_file) {
    var file = JSON.parse(JSON_file);
    
}
}