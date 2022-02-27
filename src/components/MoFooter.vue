<template>
    <div class="mofooter">
        <h3 class="logo">M-diner</h3>
        <div class="socials">
            <h4>Socials:</h4>
            <a href="https://www.facebook.com/moody.eldedy" target="_blank">Facebook</a>
            <span><img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" alt=""> :01027629029</span>
        </div>
        <span class="copy">mohamed elhadidy &copy;2022</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.mofooter{
    background: #262E34;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 29px;
    .logo{
        margin: 0;
        font-size: 4ch;
    }
    .socials{
            display: flex;
            justify-content: center;
            align-items: center;
            h4{font-size: 2.5ch;}
            a{
                text-decoration: none;
                color: #676767;
                font-weight: 600;
                padding: 8px 8px;
                margin: 0 10px;
                border-radius: 10px;
                background: #fff;
                transition: all 250ms ease-in;
            }
            a:hover{background:#676767;color: #fff;}
            span{
                display: flex;
                align-items: center;
                img{width:30px;margin-right: 6px;}
            }
        }
        .copy{
            font-size: 2ch;
            text-transform: capitalize;
            color: #ededed4f;
        }
}
@media screen and (max-width:750px) {
    .mofooter{
        flex-direction:column;
        .socials{
            flex-direction: column;
            h4{margin: 0;}
        }
        .socials > * {padding:15px;}
    }
}
@media screen and (max-width:300px) {
    .mofooter{
        .copy{font-size: 1.8ch;}
    }
}

</style>