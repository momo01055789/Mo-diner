<template>
    <div>
        <div class="pic">
            <div class="over-lay">
              <div class="nav-bar">
                <ul>
                    <li><router-link
                    class="fancy-link" to="/recipes">Recipes</router-link></li>
                    <h6 class="logo">Mo-Diner</h6>
                    <li><router-link
                    class="fancy-link" to="/aboutus#about">About us</router-link></li>
                    <li class="res-box" @click="active"><div class="bars"></div></li>
                </ul>
              </div>
           </div>
           <div class="intro">
            <h3><span>Mo</span>-diner</h3>
            <p><q>What can I get ya?</q></p>
           </div>
        </div>
    </div>
</template>

<script>
window.addEventListener('scroll',function(){
    let navbar = document.querySelector('.nav-bar')
    navbar.classList.toggle('sticky',window.scrollY > 0)
});
window.addEventListener('resize',function(){
    if (window.innerWidth > 650) {
        let navbar = document.querySelector('.nav-bar')
        navbar.classList.remove('active')
    }
});
window.onload = function(){
let open = document.querySelector('.res-box')
    open.addEventListener('click',function(){
        open.classList.toggle('open')
    });
    window.addEventListener('resize',function(){
        if (open.classList.contains('open')) {
            open.classList.remove('open')
        }
    })
}
    export default {
        components: {},
        methods: {
            active() {
                let navbar = document.querySelector('.nav-bar')
                navbar.classList.toggle('active')
            }
        },
    }
</script>

<style lang="scss" scoped>
.pic{
    background-image: url("https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .over-lay{
        background-image: linear-gradient(black, transparent);
        height: 75vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .nav-bar{
            background:#fff;
            width:80%;
            margin:0 auto;
            border-radius:20px;
            transition:.5s;
            position: fixed;
            left: 0;
            right: 0;
            top:15px;
            .logo{
                font-size: 2.5ch;
                border: 2px double #ddd;
                color: #676767;
                margin: 0 15px;
                padding: 5px 3px;
                font-family: 'Nunito', sans-serif;
            }
             ul{
                position:relative;
                display:flex;
                justify-content: space-around;
                align-items: center;
                padding:10px 0;
                margin:0;
                font-size:3ch;
                font-family: Arial, Helvetica, sans-serif;
                li{
                    list-style: none;
                    .fancy-link::after{
                        content: '';
                        position: absolute;
                        height:2px;
                        width:100%;
                        left:0;
                        bottom:0;
                        background:#000;
                        transform: scaleX(0); 
                        transform-origin: right;   
                        transition: transform 250ms ease-in;            
                    }
                    .fancy-link:hover::after{
                        transform: scaleX(1);
                        transform-origin: left;  
                    }
                    a{
                        text-decoration: none;
                        color:#676767;
                        position:relative;
                        padding:10px 0;
                    }
                }
            }
            .res-box{
                width: 35px;
                height:35px;
                border-radius: 10px;
                margin: 0 15px;
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
                transition: 450ms;
                .bars{
                    width: 90%;
                    height: 4px;
                    background: #676767;
                    position: absolute;
                    border-radius:10px;
                }
                .bars::after,
                .bars::before{
                    content: '';
                    position:absolute;
                    width:100%;
                    height: 4px;
                    background:#676767;
                    border-radius:10px;
                    transition: all .5s ease-in-out;
                }
                .bars::after{transform: translateY(9px);}
                .bars::before{transform: translateY(-9px);}
            }
            .res-box.open{
                position: absolute;
                right: 0;
            }
            .res-box.open .bars{
                transition:450ms;
                transform:translateX(-50px);
                background: transparent;
            }
            .res-box.open .bars::after{
                transform: rotate(45deg) translate(35px, -35px);
            }
            .res-box.open .bars::before{
                transform: rotate(-45deg) translate(35px, 35px);
            }
        }
        }
        .nav-bar.sticky{
            width:100%;
            border-radius: 0;
            top:0;
            z-index: 10;
        }
        .nav-bar.active{
            height:auto;
            width: 100%;
            border-radius: 0;
            top:0;
            ul{
                flex-direction: column;
                .logo{display: none;}
            }
        }
    }
    .intro{
    position: absolute;
    top: 35%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        margin:0;
        color: #38483C;
        font-size:10ch;
        span{color:#fff;}
    }
    p{
        font-size: 4ch;
        text-align: center;
        color: #fff;
    }
    
}


@media screen and (max-width:950px){
    .pic{
        .over-lay{
            .nav-bar{
                ul{
                    justify-content: space-between;
                    .logo{font-size: 2ch;}
                    li {display: none;}
                    .res-box{display: flex;}
                }
            }
            .nav-bar.active{
                ul{
                    li{display:flex}
                }
            }
        }
        .intro{
            h3{font-size: 8ch;}
        }
    }
    
}
@media screen and (max-width:600px) {
    .pic{
        .intro{
            h3{font-size: 6.8ch;}
        }
    }
}
@media screen and (max-width:300px) {
    .pic{
        background-position:right;
        .over-lay{
            .nav-bar{
                ul{
                    .logo{font-size: 1.5ch;}
                }
            }
        }
        .intro{
            h3{font-size: 4.8ch;}
            p{font-size: 2.8ch;}
        }
    }
}
</style>