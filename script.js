const button = document.getElementById('go-btn');
       button.addEventListener("click",validateSelecion);
       function validateSelecion() {
        const userInput = document.getElementById('searchInput').value.toLowerCase();
        const redirects={
            "google": "https://www.google.com/",
            "instagram":"https://www.instagram.com/",
            "linked in":"https://www.linkedin.com",
            "youtube":"https://www.youtube.com/",
            "snapchat":"https://www.snapchat.com/",
            "twitter":"https://x.com/home?lang=en",
            "hashnode":"https://hashnode.com/",
            "pinterest":" https://www.pinterest.com",
            "whatsapp":"https://www.whatsapp.com",
            "Reddit":"https://www.reddit.com"
        };
        if(redirects[userInput]){
            window.location.href=redirects[userInput];
        }else{
            alert("enter valid details");
        }
       }
       const toggleButton = document.getElementById('themeToggle');
            toggleButton.addEventListener("click" , ()=>{
            document.body.classList.toggle('dark-mode');
       });