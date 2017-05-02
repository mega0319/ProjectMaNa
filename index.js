$(document).ready(function(){
searchGiphy()
})



function searchGiphy(){
  $('#submit').on("click", function(e){
    e.preventDefault()
    var input = $('#query').val()
    // debugger
    input.replace(' ', '+')
    var url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC`
    $.get(url)
      .done(function(response){
        console.log("done")
        // debugger
        $("#results").html("")
        debugger
        let counter = 1
        response.data.forEach(function(gif){
          if (counter <= 10){
            $("#results").append(`<video controls><source src='${gif.images.original.mp4}' type="video/mp4"></video><br>`)
            counter ++
          }
        })
      })
  })
}
