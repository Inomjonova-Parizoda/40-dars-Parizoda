window.addEventListener('load', function(){
    var text1 = document.querySelector('.text1');
    var text2 = document.querySelector('.text2');
    var text3 = document.querySelector('.text3');
    var text4 = document.querySelector('.text4');

    text1.addEventListener('mouseover', blue);
    text1.addEventListener('mouseout', darkblue);
    function blue(){
        this.style.backgroundColor = "blue";
    }
    function darkblue(){
        this.style.backgroundColor = "darkblue";
    }

    text2.addEventListener('mouseover', violet);
    text2.addEventListener('mouseout', darkviolet);
    function violet(){
        this.style.backgroundColor = "violet";
    }
    function darkviolet(){
        this.style.backgroundColor = "darkviolet";
    }

    text3.addEventListener('mouseover', slategray);
    text3.addEventListener('mouseout', darkslategray);
    function slategray(){
        this.style.backgroundColor = "slategray";
    }
    function darkslategray(){
        this.style.backgroundColor = "darkslategray";
    }

    text4.addEventListener('mouseover', red);
    text4.addEventListener('mouseout', darkred);
    function red(){
        this.style.backgroundColor = "red";
    }
    function darkred(){
        this.style.backgroundColor = "darkred";
    }
})