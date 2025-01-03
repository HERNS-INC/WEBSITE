const toggle = document.getElementById('menu-toggle');
            const navbar = document.getElementById('navbar-2');

            toggle.addEventListener('click', () => {
                navbar.classList.toggle('active');
            });
            function change_style_1() {
                document.getElementById("details-4").id = "details-1";
                document.getElementById("details-5").id = "details-2";
                document.getElementById("details-6").id = "details-3";
              }
              
              function change_style_2() {
                document.getElementById("details-1").id = "details-4";
                document.getElementById("details-2").id = "details-5";
                document.getElementById("details-3").id = "details-6";
              }
              
              function change_style_3() {
                document.getElementById("tl-btn-4").id = "tl-btn-1";
                document.getElementById("tl-btn-5").id = "tl-btn-2";
                document.getElementById("tl-btn-6").id = "tl-btn-3";
              }
              
              function change_style_4() {
                document.getElementById("tl-btn-1").id = "tl-btn-4";
                document.getElementById("tl-btn-2").id = "tl-btn-5";
                document.getElementById("tl-btn-3").id = "tl-btn-6";
              }
              document.querySelectorAll('.accordion-item').forEach(item => {
                const button = item.querySelector('.toggle-btn');
                button.addEventListener('click', () => {
                    // Close any open items
                    const openItem = document.querySelector('.accordion-item.open');
                    if (openItem && openItem !== item) {
                        openItem.classList.remove('open');
                    }
                    // Toggle the current item
                    item.classList.toggle('open');
                });
            });

            document.querySelectorAll('.img').forEach((img) => {
              img.addEventListener('click', () => {
                  // Get the modal text and title
                  const text = img.getAttribute('data-modal-text');
                  const title = img.getAttribute('alt');
          
                  // Create the modal
                  const modal = document.createElement('div');
                  modal.classList.add('modal');
                  modal.innerHTML = `
                      <div class="modal-content">
                          <span class="close">&times;</span>
                          <h2>${title}</h2>
                          <p>${text}</p>
                      </div>
                  `;
          
                  // Append the modal to the body
                  document.body.appendChild(modal);
          
                  // Show the modal
                  modal.style.display = 'block';
          
                  // Close the modal on clicking the close button
                  modal.querySelector('.close').addEventListener('click', () => {
                      document.body.removeChild(modal);
                  });
          
                  // Close the modal when clicking outside the content
                  window.addEventListener('click', (event) => {
                      if (event.target === modal) {
                          document.body.removeChild(modal);
                      }
                  });
              });
          });
          