var json;
var test;

function getStreamerJson () {
    json = $.getJSON("assets/streamers.json", function (data) {
        $.each(data, function() {
            var image = this.image;
            var desc = this.description;
            var name = this.name;
            
            var obj = document.getElementById("streamerInfo");
            obj.innerHTML = obj.innerHTML + "<div class=\"streamerName\">" + name + "</div><span><div class=\"streamerInfo streamerPicture\" style='background-image: url(http://www.imgur.com/" + image + ".jpg);)'></div></span>" + 
                    "<div class=\"streamerInfo streamerDescription\">" + desc + "</div>";            
        });
    });
}

function showStreamers()
{
    $('#streamers').modal('show');
}