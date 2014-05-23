(function() {
    var textarea = document.getElementById('content');

    function resizeTextarea() {
        // The "6" delta is to fit perfectly in the window.
        textarea.style.height = (window.innerHeight - 6) + 'px';
        textarea.style.width = (window.innerWidth - 6) + 'px';
    }

    window.onresize = resizeTextarea;
    resizeTextarea();
}());
