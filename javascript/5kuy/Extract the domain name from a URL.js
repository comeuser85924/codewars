/* Extract the domain name from a URL [5 kyu]
    Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

    domainName("http://github.com/carbonfive/raygun") == "github" 
    domainName("http://www.zombie-bites.com") == "zombie-bites"
    domainName("https://www.cnet.com") == "cnet"
*/
function domainName(url){
    console.log(url.replace(/.+\/\/|www.|\..+/g, ''))
    return url.replace(/.+\/\/|www.|\..+/g, '')
  }
domainName("http://google.com")
domainName("http://google.co.jp")
domainName("www.xakep.ru")
domainName("https://youtube.com")

/* Clever Answer(I like this function)
function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}
*/