const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Hide all tab contents
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Deactivate all tabs
    tabs.forEach(t => {
      t.classList.remove('active');
    });
    
    // Activate selected tab and content
    tab.classList.add('active');
    tabContents[index].classList.add('active');
  });
});
