setTimeout(function()
{
   alert("Press 'Enter' twice to start the game");
},100)
var player_1_score=0;
var player_2_score=0;

var rod_1=document.getElementById('bar-1');
var rod_2=document.getElementById('bar-2');

rod_1.style.left=rod_1.offsetLeft+'px';
rod_2.style.left=rod_2.offsetLeft+'px';
var count=0;
window.addEventListener('keypress',function(event)
{
    if(event.key=="Enter" && count==0) 
    {
        count++;
        moveball();  
    }
    move_rods(event.key);
});

// ---------------------------winnner--------------------
function check()
{
    if(player_1_score==5)
    {
      //  alert('Game over');
        document.getElementById('back').innerText=document.getElementById('player_1').value+' is the winner';
        return true;
    }
    else if(player_2_score==5)
    {
      

        document.getElementById('back').innerText=document.getElementById('player_2').value+' is the winner';

        return true;
    }
    else 
    return false;
}
// --------------------------for forms------------------
// var but=document.getElementById('but');
var input=document.getElementById('form');
function shrink()
{
    console.log('hi');
    input.style.height='0px';
    input.style.width='0px';
    document.getElementById('b1').innerText=document.getElementById('player_1').value;
    document.getElementById('b2').innerText=document.getElementById('player_2').value;
    
    
}

// --------------------------for the ball-------------------
var ball=document.getElementById('ball');
ball.style.left=ball.offsetLeft +'px';
ball.style.top=ball.offsetTop+'px';

// var m=(Math.random() * 2) -1;
// var chance=Math.floor((Math.random()*100)+1);
function moveball()
{
    main();
}
function main_1()                              //this main is for moving downwards
{
    ball.classList.add('blue');
    ball.classList.remove('red');
    var m=(Math.random() * 2) -1;
    console.log(m);
      var b=setInterval(function()
      {
          let left=parseInt(ball.style.left);
          let top=parseInt(ball.style.top);

          if(m>0)
          {
              ball.style.left=(left-5)+'px';
              ball.style.top=(top+m*(5))+'px';
          }
          else
          {
              ball.style.left=(left+5)+'px';
              ball.style.top=(top + m*(-5))+'px';
          }

          if(ball.offsetLeft<=2)
          {
              clearInterval(b);
              rebound_1(1,m);
          }

          if(ball.offsetLeft>(window.innerWidth-ball.offsetWidth))
          {
              clearInterval(b);
              rebound_1(2,m);
          }
           let h=rod_1.offsetHeight;
            let l=rod_1.offsetWidth;
            let left1=rod_1.offsetLeft;
            let Left1=ball.offsetLeft;
            
            if(ball.offsetTop>(window.innerHeight-(40)) && (Left1-left1>0) && (left1+l)>Left1 && ball.offsetTop<window.innerHeight )
            {
                console.log('andar');
                clearInterval(b);
                main();
            }

            if(ball.offsetTop>=window.innerHeight)
            {
                ball.style.top=(window.innerHeight-(25+(ball.offsetWidth))) +'px';
                ball.style.left=(left1+50)+'px';
                clearInterval(b);
                player_1_score++;
                document.getElementById('m1').innerText=player_1_score;
                setTimeout(main,1000);

            }
            if(check()==true)
            {
                clearInterval(b);
            }


      },15)

}                                            
function main()                           //this main is for moving upwards
{
    ball.classList.add('red');
    ball.classList.remove('blue');
    var m=(Math.random() * 2) -1;
    var x=setInterval(function(){
        count++;
        let left=parseInt(ball.style.left);
        let top=parseInt(ball.style.top);
        
        if(m>0)
        {
            ball.style.left=(left+5)+'px';
            ball.style.top=(top + m*(-5))+'px';
    
        }
        else
        {
            ball.style.left=(left-5)+'px';
            ball.style.top=(top + m*(5))+'px';
        }
         if(ball.offsetLeft<=2)
         {
             clearInterval(x);
             rebound(1,m);
         }
         if(ball.offsetLeft>(window.innerWidth-ball.offsetWidth))
         {
             clearInterval(x);
             rebound(2,m);
         }

            let h=rod_1.offsetHeight;
            let l=rod_1.offsetWidth;
            let left1=rod_1.offsetLeft;
            let Left1=ball.offsetLeft;

            if(ball.offsetTop<h+7 && (Left1-left1>0) && (left1+l)>Left1 && ball.offsetTop>0 )
            {
                console.log('back');
                console.log('off');
                clearInterval(x);
                main_1();
                // main();
            }
            if(ball.offsetTop<=0)
            {
                console.log('galat');
                ball.style.top='25px';
                ball.style.left=(left1+50)+'px';
                clearInterval(x);
                player_2_score++;
                document.getElementById('m2').innerText=player_2_score;
                setTimeout(main_1,1000);
            }
            if(check()==true)
            {
                clearInterval(x);
            }
        //  console.log('hi');
    },15);
    
}
// ----------------function rebound--------------------

function rebound_1(y,m1)
{
    let m2=-(1/m1);

    if(y==1)
    {
        console.log(m2);
        if(m2<-5)
        {
            m2=-1.2;
        }

        var a =setInterval(function(){
            let left=parseInt(ball.style.left);
            let top=parseInt(ball.style.top);

            ball.style.left=(left+5)+'px';
            ball.style.top=(top+ m2*(-1.5))+'px';
            
            if(ball.offsetLeft>(window.innerWidth-ball.offsetWidth))
            {
                clearInterval(a);
                rebound_1(2,m2);
            }
            console.log("left");
            let h=rod_1.offsetHeight;
            let l=rod_1.offsetWidth;
            let left1=rod_1.offsetLeft;
            let Left1=ball.offsetLeft;
            
            if(ball.offsetTop>(window.innerHeight-(40)) && (Left1-left1>0) && (left1+l)>Left1 && ball.offsetTop<window.innerHeight)
            {
                console.log('andar');
                clearInterval(a);
                main();
            }
            
            if(ball.offsetTop>=window.innerHeight)
            {
                ball.style.top=(window.innerHeight-(25+(ball.offsetWidth))) +'px';
                ball.style.left=(left1+50)+'px';
                clearInterval(a);
                player_1_score++;
                document.getElementById('m1').innerText=player_1_score;
                setTimeout(main,1000);

            }
            if(check()==true)
            {
                clearInterval(a);
            }


        },15);

    }
    if(y==2)
    {
        if(m2>5)
        {
            m2=1.3;
        }
        console.log(m2);
        var b=setInterval(function()
        {
            let left=parseInt(ball.style.left);
            let top=parseInt(ball.style.top);

            ball.style.left=(left-5)+'px';
            ball.style.top=( top + m2*(1.5))+'px';

            if(ball.offsetLeft<=2)
            {
                clearInterval(b);
                rebound_1(1,m2);
            }
            let h=rod_1.offsetHeight;
            let l=rod_1.offsetWidth;
            let left1=rod_1.offsetLeft;
            let Left1=ball.offsetLeft;
            
            if(ball.offsetTop>(window.innerHeight-(40)) && (Left1-left1>0) && (left1+l)>Left1 && ball.offsetTop<window.innerHeight)
            {
                console.log('andar');
                clearInterval(b);
                main();
            }
            
            if(ball.offsetTop>=window.innerHeight)
            {
                ball.style.top=(window.innerHeight-(25+(ball.offsetWidth))) +'px';
                ball.style.left=(left1+50)+'px';
                clearInterval(b);
                player_1_score++;
                document.getElementById('m1').innerText=player_1_score;
                setTimeout(main,1000);

            }
            if(check()==true)
            {
                clearInterval(b);
            }

        },15)
    }
}

function rebound(y,m1)                    //this rebound function is used when ball is moving upwards
{
    let m2=-(1/m1);
    // console.log("rebound in");
    // y=1 is for rebounce from left side 
    // y=2 is for rebounce from right side
    
    if(y==1)
    {


        if(m2>5)
        {
            m2=1.2;
        }
        console.log(m2);
        var z=setInterval(function()
        {
            let left=parseInt(ball.style.left);
            let top=parseInt(ball.style.top);

            ball.style.left=(left+5)+'px';
            ball.style.top=(top +m2*(-1))+'px';
            if(ball.offsetLeft>(window.innerWidth-ball.offsetWidth))
            {
               clearInterval(z);
               rebound(2,m2);
            }
            
            let h=rod_1.offsetHeight;
            let l=rod_1.offsetWidth;
            let left1=rod_1.offsetLeft;
            let Left1=ball.offsetLeft;

            if(ball.offsetTop<h+7 && (Left1-left1>0) && (left1+l)>Left1 && ball.offsetTop>0)
            {
                console.log('off');
                clearInterval(z);
                main_1();
                // main();
            }

            if(ball.offsetTop<=0)
            {
                console.log('galat');
                clearInterval(z);
                ball.style.top='25px';
                ball.style.left=(left1+50)+'px';
                player_2_score++;
                document.getElementById('m2').innerText=player_2_score;
                setTimeout(main_1,1000);
            }

            if(check()==true)
            {
                clearInterval(z);
            }


        },15)
    }
    if(y==2)
    {
        if(m2<-5)
        {
            m2=-1.2;
        }
        console.log(m2);
        var a=setInterval(function()
        {
            let left=parseInt(ball.style.left);
            let top=parseInt(ball.style.top);
           
            ball.style.left=(left-5)+'px';
            ball.style.top=(top +m2*(1))+'px';
            if(ball.offsetLeft<=2)
            {
                clearInterval(a);
                rebound(1,m2);
            }
            let h=rod_1.offsetHeight;
            let l=rod_1.offsetWidth;
            let left1=rod_1.offsetLeft;
            let Left1=ball.offsetLeft;
            
            if(ball.offsetTop<h+7 && (Left1-left1>0) && (left1+l)>Left1 && ball.offsetTop>0)
            {
                console.log('off2');
                clearInterval(a);
                main_1();
                // main();
            }
            if(ball.offsetTop<=0)
            {
                console.log('galat');
                clearInterval(a);
                ball.style.top='25px';
                ball.style.left=(left1+50)+'px';
                player_2_score++;
                document.getElementById('m2').innerText=player_2_score;
                setTimeout(main_1,1000);
            }
            if(check()==true)
            {
                clearInterval(a);
            }
           
        },15);

    }
}


// ------------------------for rods---------------
function move_rods(Key)
{
     let left=parseInt(rod_1.style.left);
     if(Key=='a')
     {
         if(left>0)
         {
             rod_1.style.left=(left-13)+'px';
             rod_2.style.left=(left-13)+'px';

         }
     }
     else if(Key=='d')
     {
         if(left<window.innerWidth-rod_1.offsetWidth)
         {
             rod_1.style.left=(left+13)+'px';
             rod_2.style.left=(left+13)+'px';

         }
     }
}


