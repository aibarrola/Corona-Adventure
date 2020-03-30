function darkmode() {

        var title = document.getElementById('title');
        var intro = document.getElementById('intro');
        var button = document.getElementById('button');

        document.body.style.backgroundColor = "black";
        
        title.style.fontFamily = "Fantasy";
        title.innerHTML = "CORONA VIRUS EVOLUTION";

        intro.style.fontFamily = "Fantasy";
        intro.innerHTML = "Warning. COVID-19 has evolved into COVID-20. Donald Trump has put the country on an emergency lockdown. Today is the last day to grab all essential needs for your household for the next 280 days. Please be safe.";

        button.style.backgroundColor = "black";
        button.style.color = "#993300";
        button.style.border = "none";
        button.style.fontFamily = "Fantasy";
        button.innerHTML = "Start";

    }