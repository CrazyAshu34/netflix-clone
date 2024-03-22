// Accordion

function toggleAccordion(index) {
  var content = document.querySelectorAll('.accordion-content');
  content.forEach(function (item, i) {
    if (i === index) {
      item.style.display = item.style.display === 'block' ? 'none' : 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

