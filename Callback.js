function download(compress) {
    setTimeout(function () {
        console.log('downloaded');
        compress(upload);
    },3000);


}

function compress(upload) {
    setTimeout(function () {
        console.log("Compressed")
        upload();
    },1000);


}
function upload() {
    setTimeout(function () {
        console.log("uploaded")

    },500);

}
function othertasks() {
    console.log('other tasks')

}

download(compress);

othertasks();
