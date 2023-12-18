document.addEventListener("DOMContentLoaded", function () {
    var getStartedAccordionItem = document.getElementById('getStartedAccordionItem');

    getStartedAccordionItem.addEventListener('click', function () {
        // Toggle the visibility of the accordion content
        var infoAccordion = document.getElementById('infoAccordion');
        infoAccordion.style.display = infoAccordion.style.display === 'none' ? 'block' : 'none';
    });

    // Collapse all accordion items on page load
    var accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(function (item) {
        var accordionCollapse = item.querySelector('.accordion-collapse');
        if (accordionCollapse) {
            accordionCollapse.classList.remove('show');
        }
    });
});
