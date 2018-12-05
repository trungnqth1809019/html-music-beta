document.forms['song-form']['btn-submit'].onclick = function () {

    if (validateForm()){
        saveSong();
    }
};
//ham kiem tra form
function validateForm() {
    var validateInformation = false;
    var validateName = false;
    var validateSinger = false;
    var validateAuthor = false;
    var validateThumbnail = false;
    var validateLink = false;
    //lay thong tin trong form
    var name = document.forms['song-form']['name'];
    var msgName = document.querySelector("[class*='msgName']");
    var singer = document.forms['song-form']['singer'];
    var msgSinger = document.querySelector("[class*='msgSinger']");
    var author = document.forms['song-form']['author'];
    var msgAuthor = document.querySelector("[class*='msgAuthor']");
    var thumbnail = document.forms['song-form']['thumbnail'];
    var msgThumbnail = document.querySelector("[class*='msgThumbnail']");
    var link = document.forms['song-form']['link'];
    var msgLink = document.querySelector("[class*='msgLink']");
    //kiem tra ten bai hat
    if (name.value == null || name.value.length === 0){
        msgName.classList.add('msg-error');
        msgName.classList.remove('msg-success');
        msgName.innerHTML = 'Không được để trống mục này';
        validateName = false;
    }else{
        msgName.innerHTML = 'Hợp lệ';
        msgName.classList.add('msg-success');
        msgName.classList.remove('msg-error');
        validateName = true;
    }
    //kiem tra ca sy
    if (singer.value == null || singer.value.length == 0){
        msgSinger.innerHTML = 'Không được để trống mục này';
        msgSinger.classList.add('msg-error');
        msgSinger.classList.remove('msg-success');
        validateSinger = false;
    }else{
        msgSinger.innerHTML = 'Hợp lệ';
        msgSinger.classList.add('msg-success');
        msgSinger.classList.remove('msg-error');
        validateSinger = true;
    }
    //kiem tra nhac si
    if (author.value == null || author.value.length == 0){
        msgAuthor.innerHTML = 'Không được để trống mục này';
        msgAuthor.classList.add('msg-error');
        msgAuthor.classList.remove('msg-success');
        validateAuthor = false;
    }else{
        msgAuthor.innerHTML = 'Hợp lệ';
        msgAuthor.classList.add('msg-success');
        msgAuthor.classList.remove('msg-error');
        validateAuthor = true;
    }
    //kiem tra anh
    if (thumbnail.value == null || thumbnail.value.length == 0){
        msgThumbnail.innerHTML = 'Không được để trống mục này';
        msgThumbnail.classList.add('msg-error');
        msgThumbnail.classList.remove('msg-success');
        validateThumbnail = false;
    }else{
        msgThumbnail.innerHTML = 'Hợp lệ';
        msgThumbnail.classList.add('msg-success');
        msgThumbnail.classList.remove('msg-error');
        validateThumbnail = true;
    }
    //kiem tra link
    if (link.value == null || link.value.length == 0){
        msgLink.innerHTML = 'Không được để trống mục này';
        msgLink.classList.add('msg-error');
        msgLink.classList.remove('msg-success');
        validateLink = false;
    }else{
        msgLink.innerHTML = 'Hợp lệ';
        msgLink.classList.add('msg-success');
        msgLink.classList.remove('msg-error');
        validateLink = true;
    }
    validateInformation = validateName && validateSinger && validateAuthor && validateThumbnail && validateLink;
    return validateInformation;
}
//ham gui thong tin luu bai hat
function saveSong() {
    var name = document.forms['song-form']['name'].value;
    var singer = document.forms['song-form']['singer'].value;
    var author = document.forms['song-form']['author'].value;
    var thumbnail = document.forms['song-form']['thumbnail'].value;
    var link = document.forms['song-form']['link'].value;
    var song = {
        name: name,
        singer: singer,
        author: author,
        thumbnail: thumbnail,
        link: link,
    };
    var sendData = JSON.stringify(song);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {//khi trang thai thay doi// thuowng duoc gan bang mot ham vo danh
        if (xhr.readyState == 4 && xhr.status == 201) {
            alert('Lưu bài hát hoàn tất');
            document.forms['song-form'].reset();
            msgName.innerHTML = '';
            msgAuthor.innerHTML = '';
            msgSinger.innerHTML = '';
            msgThumbnail.innerHTML = '';
            msgLink.innerHTML = '';
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/post-free', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}