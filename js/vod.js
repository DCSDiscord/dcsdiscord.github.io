var json;

function getVodJson () {
    json = $.getJSON("assets/videos.json", function(data) {
        var items = [];
        $.each( data, function (key, val) {
            items.push("<li style=\"background-image: url(http://img.youtube.com/vi/" + val + "/0.jpg);\" id='" + val + "'> <div class=videosList onclick=\"loadVideoModal( '" + val + "', '" + key + "')\">" + key + "</div> </li>");
        });
        
        $("<ul>", {
            "id":"vodList",
            html: items.join("")
        }).appendTo("#VODSection");
    });
}

function loadVideoModal(vidID, vidTitle)
{
    var title = document.getElementById("videoLabel");
    title.innerHTML = vidTitle;
    var video = document.getElementById("video");
    video.innerHTML = "<iframe width='560' height='315' src='http://www.youtube.com/embed/" + vidID + "' frameborder='0' allowfullscreen></iframe>";
    $('#embedVideo').on('hidden.bs.modal', function ()
    {
       video.innerHTML = ""; 
    });
    $('#embedVideo').modal('show');
}

function showVODs()
{
    $('#vods').modal('show');
}