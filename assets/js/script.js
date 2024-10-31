const toggle = document.getElementById('menu-toggle');
            const navbar = document.getElementById('navbar-2');

            toggle.addEventListener('click', () => {
                navbar.classList.toggle('active');
            });