<script>
    const circles = document.querySelectorAll('a');
    circles.forEach(circle => {
        circle.addEventListener('mouseover', () => {
            circle.style.transform = 'scale(1.1)';
        });
        circle.addEventListener('mouseout', () => {
            circle.style.transform = 'scale(1)';
        });
    });
</script>
