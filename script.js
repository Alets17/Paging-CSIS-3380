document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 10;
    const totalUsers = userData.length;
    let currentPage = 1;
  
    const renderPage = (page) => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pageUsers = userData.slice(startIndex, endIndex);
  
      const contactList = document.querySelector('.contact-list');
      contactList.innerHTML = '';
  
      pageUsers.forEach((user) => {
        const listItem = document.createElement('li');
        listItem.classList.add('contact-item', 'cf');
  
        listItem.innerHTML = `
  <div class="contact-details">
    <img class="avatar" src="${user.image}">
    <h3>${user.name}</h3>
    <span class="email">${user.email}</span>
  </div>
  <div class="joined-details">
    <p>Joined:</p><span class="date">${user.joined}</span>
  </div>
`;

  
        contactList.appendChild(listItem);
      });
    };
  
    const updatePagination = () => {
      const totalPages = Math.ceil(totalUsers / itemsPerPage);
      const paginationContainer = document.querySelector('.pagination');
  
      paginationContainer.innerHTML = '';
  
      for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('li');
        pageLink.textContent = i;
        pageLink.addEventListener('click', () => {
          currentPage = i;
          renderPage(currentPage);
          updatePagination();
        });
  
        if (i === currentPage) {
          pageLink.classList.add('active');
        }
  
        paginationContainer.appendChild(pageLink);
      }
    };
  
    renderPage(currentPage);
    updatePagination();

    const updateContactCount = () => {
        const totalContacts = userData.length;
        const totalContactsElement = document.querySelector('.page-header h3');
        totalContactsElement.textContent = `Total: ${totalContacts}`;
      };
    
      renderPage(1);
      updatePagination();
      updateContactCount();

  });

  
  