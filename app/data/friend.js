// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendList = [
  {
      "name":"Nella",
      "photo":"https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif",
      "scores":[
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
          ]
      },
  {
  "name":"Marga",
  "photo":"https://media.giphy.com/media/xTka00LmUTCKShIt0s/giphy.gif",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
},
{
  "name":"Marla",
  "photo":"https://media.giphy.com/media/baTnFeHCGqj3G/giphy.gif",
  "scores":[
     9,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
      ]
},
{
  "name":"Chesca",
  "photo":"https://media.giphy.com/media/1uPiL9Amv5zkk/giphy.gif",
  "scores":[
     5,
     1,
     4,
     3,
     2,
     6,
     9,
     8,
     9,
     9
      ]
}
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendList;