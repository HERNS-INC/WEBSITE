const toggle = document.getElementById('menu-toggle');
            const navbar = document.getElementById('navbar-2');

            toggle.addEventListener('click', () => {
                navbar.classList.toggle('active');
            });

            document.querySelectorAll('.accordion-item').forEach(item => {
                item.querySelector('.question').addEventListener('click', () => {
                    const openItem = document.querySelector('.accordion-item.open');
                    if (openItem && openItem !== item) {
                        openItem.classList.remove('open');
                    }
                    item.classList.toggle('open');
                });
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
              