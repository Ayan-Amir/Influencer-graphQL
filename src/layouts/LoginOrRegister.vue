<template>
    <div class="LoginRegister">
        <div class="container">
            <header role="banner">
                <div class="header__logo">
                    <a href="#">
                        <img
                        src="@/assets/images/svg/logo.svg"
                        class="img-fluid"
                        alt=" logo"
                    />
                    </a>
                </div>
            </header>
            <div class="contentWrapper">
                <router-view />
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
    .LoginRegister{
        min-height: 100vh;
        background: linear-gradient(90deg, #F3F3F6 50%, #9637F1 50%);
        padding-bottom:rem(40px);
        .header__logo{
            color: red;
            /deep/ svg{
                width: 200px;
                height: auto;
                color:red;
            }
        }
        .container{
            @media screen and (min-width: 1200px){
                max-width: 1110px !important;
            }
            
        }
        .contentWrapper{
            height: 100%;
            @include flex(center,flex-start);
            padding-top:rem(45px);
        }
    }
</style>