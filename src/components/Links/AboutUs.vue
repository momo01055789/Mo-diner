<template>
    <div class="background">
        <div class="container" id="about">
            <div class="intro">
                <u><h1>About-us</h1></u>
                <p>Modiner is a responsive website created by mohamed elhadidy &copy;2020.Created with <span class="vue">vuejs</span> also used api from <a href="https://rapidapi.com/hub" target="__blank">rapidapi</a>website.I hope you like it :)</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
*{padding: 0;margin: 0;}
.background{
    background: #545760;
    .container{
    width: 85%;
    height: 60vh;
    margin: 0 auto;
    color: #fff;
    .intro{
        padding: 25px 15px;
        h1{
            text-align: center;
            font-size: 6.5ch;
            padding-bottom: 30px;
        }
        P{
            text-align: center;
            font-size: 4ch;
            text-transform: capitalize;
            padding-top: 25px;
            span{color: green;font-family: cursive;}
            a{color:#fff}
            a:hover{color:rgb(85, 165, 197)}
        }
    }
    
    }
}

@media screen and (max-width:900px) {
    .background{
        .container{
            .intro{
                h1{font-size:5ch}
                p{font-size: 3.5ch;}
            }
        }
    }
}
@media screen and (max-width:580px) {
    .background{
        .container{
            .intro{
                h1{font-size:3.8ch}
                p{font-size: 3ch;}
            }
        }
    }
}
@media screen and (max-width:480px) {
    .background{
        .container{
            .intro{
                h1{font-size:3.8ch}
                p{font-size: 2ch;}
            }
        }
    }
}
</style>