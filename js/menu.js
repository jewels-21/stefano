<script>
    document.addEventListener("DOMContentLoaded", function () {
        var currentPage = window.location.pathname.split("/").pop();
        var links = document.querySelectorAll("#menu2 a");
        links.forEach(function (link) {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("current");
            }
        });
    });
</script>
