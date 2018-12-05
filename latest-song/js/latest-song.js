var btnLoadMore = document.getElementById('btn-load-more');
btnLoadMore.onclick = function () {
    loadSong();
};

function playSong(link) {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.src = link;
    audioPlayer.play();
}
function loadSong() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            alert('Tải thêm hoàn tất');
            var arraySong = JSON.parse(xhr.responseText);
            var htmlContent = '';
            var song = '';
            for (var i = 0; i < arraySong.length; i++) {
                song = arraySong[i];
                htmlContent += '<div class="song-item row">';
                htmlContent += '<div class="song-index">' + (i + 1) + '</div>';
                htmlContent += '<div class="song-thumbnail">';
                htmlContent += '<img src="' + song.thumbnail + '" alt="">';
                htmlContent += '</div>';
                htmlContent += '<div class="song-information">';
                htmlContent += '<div class=" song-name">' + song.name + '</div>';
                htmlContent += '<div class=" song-singer">' + song.singer + '</div>';
                htmlContent += '<div class="row song-arthur">' + song.author + '</div>';
                htmlContent += '</div>';
                htmlContent += '<div class="song-control" onclick=" playSong(\'' + song.link + '\')"><input type="button" value="Phát"></div>';
                htmlContent += '<div class="song-detail"><a href="#">Thông tin</a></div>';
                htmlContent += '</div>';
            }
            document.getElementById('list-song').innerHTML += htmlContent;
        }
    };
    xhr.open('GET', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs', true);
    xhr.send();
}



















