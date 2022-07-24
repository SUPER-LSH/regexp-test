const str = `
010-1234-5678
thescon@gmail.com
The quick brown fox jumps over the lazy dog.
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)