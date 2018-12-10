var API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/songs/get-mine';

//kiem tra dang nhap
var token = localStorage.getItem('token-key');
if (token == null) {
    alert('Bạn cần đăng nhập để sử dụng dịch vụ!');
    location.href = '../../login/page/login.html';
}

// play song
function playSong(link) {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.src = link;
    audioPlayer.play();
}

// function loadSong() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var arraySong = JSON.parse(xhr.responseText);
        if (arraySong.length == null) {
            alert('danh sach rong');
        }

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
            // htmlContent += '<div class="row song-arthur">' + song.memberId + '</div>';
            htmlContent += '</div>';
            htmlContent += '<div class="song-control">';
            htmlContent += '<div class="song-play" onclick="playSong(\'' + song.link + '\')"><i class="fas fa-play fa-lg"></i></div>';
            htmlContent += '<div class="song-detail" onclick=""><i class="fas fa-info fa-lg"></i></div>';
            htmlContent += '<div class="song-share" onclick=""><i class="fas fa-share-alt fa-lg"></i></div>';
            htmlContent += '</div>';
            htmlContent += '</div>';
        }
        document.getElementById('list-song').innerHTML += htmlContent;
    } else if (xhr.readyState == 4) {
        var responseData = JSON.parse(xhr.responseText);
        alert('Có lỗi xảy ra' + responseData.error);
    }
};
xhr.open('GET', API, true);
xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('token-key'));
xhr.send();
// }

