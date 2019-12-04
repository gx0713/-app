<template>
        <div class="header">
            <div class="content-wrapper">
                <div class="avatar">
                    <img :src="seller.avatar" alt="">
                </div>
                <div class="content">
                    <div class="title">
                        <span class="brand"></span>
                        <span class="name">
                            {{ seller.name }}
                        </span>
                    </div>
                    <div class="description">
                            {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
                    </div>
                    <!-- 当数据请求过来在渲染 -->
                    <div class="support" v-if="seller.supports" >
                        <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                        <span class="text">{{ seller.supports[0].description }},满50减10</span>
                    </div>
                </div>
                <div class="support-count" v-if="seller.supports" @click="showDetail()">
                    <span class="count">{{ seller.supports.length }}个</span>
                    <i class="icon-keyboard_arrow_right"></i>
                </div>
            </div>
            <div class="bulletin-wrapper" @click="showDetail()">
                    <span class="bulletin-title"></span>
                    <span class="bulletin-text">{{ seller.bulletin }}</span>
                    <i class="icon-keyboard_arrow_right"></i>
            </div>
            <div class="background">
                <img :src="seller.avatar" width="100%" height="100%" alt=""> 
            </div>
            <div class="detail" v-show="detailShow">
                <div class="datail-wrapper clearfix">
                    <div class="detail-main">
                        <h1 class="name">{{ seller.name }}</h1>
                        <div class="star-wrapper">
                            <!-- <star></star> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
 
<script>
export default {
    props:{
        seller:{
            type:Object,
            required:true
        }
    },
    data () {
        return {
            detailShow:false
        }
    },
    methods: {
        showDetail(){
            this.datailShow = true;
        },
        hideDetail(){
            this.datailShow = false;
        }
    },
    created () {
        this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    }
}
</script>
<style lang="scss" scoped>
@import "../../common/mixin";

    .header{
        // background-image: url("./img/avatar.jpg");
        position: relative;
        color: #fff;
        background-color:rgba(7,17,27,0.5);
        overflow: hidden;
        font-size:0;
        .content-wrapper{
            position: relative;
            padding: .24rem .12rem .18rem .24rem;
            .avatar{
                display: inline-block;
                width: .64rem;
                height:.64rem;
                img{
                    width: 100%;
                    height: 100%;
                    vertical-align: top;
                    border-radius: 2px;
                }
            }
            .content{
                display: inline-block;
                margin:.02rem 0 .02rem .16rem; 
                vertical-align: top;
                font-size: 0; 
                .title{
                    margin-bottom:.08rem; 
                    .brand{
                        display: inline-block;
                        margin-right: .06rem; 
                        width: .3rem;
                        height: .18rem;
                        vertical-align: top;
                        @include bg-image('./img/brand');
                        background-size:100% 100%; 
                    }
                    .name{
                        vertical-align: top;
                        font-size: .16rem;
                        line-height: .18rem;
                        font-weight: bold;
                    }
                }
                .description{
                    font-size: .12rem;
                    line-height: .12rem;
                    font-weight: 200;
                    margin-bottom: .10rem;
                }
                .support{
                    .icon{
                        display: inline-block;
                        vertical-align: top;
                        margin-right: .04rem;
                        width: .12rem;
                        height: .12rem;
                        &.decrease{
                            @include bg-image('./img/decrease_1');
                        }
                        &.discount{
                            @include bg-image('./img/discount_1');
                        }
                        &.guarantee{
                            @include bg-image('./img/guarantee_1');
                        }
                        &.invoice{
                            @include bg-image('./img/invoice_1');
                        }
                        &.special{
                            @include bg-image('./img/special_1');
                        }
                    }
                    .text{
                        font-size:.1rem;
                        line-height: .12rem;
                        font-weight: 200;
                    }
                }
            }
            .support-count{
                display: flex;
                align-items: center;
                position: absolute;
                bottom: .14rem;
                right: .12rem;
                padding: 0 .08rem;
                height: .24rem;
                border-radius: .14rem;
                background-color: rgba(0, 0, 0, .2);
                font-size: 0;
                .count{
                    line-height: .12rem;
                    font-size:.1rem;
                    font-weight: 200;
                }
                .icon-keyboard_arrow_right{
                    font-size: .1rem;
                    font-weight: 200;
                }
                
            }
        }
        .bulletin-wrapper{
            display: flex;
            align-items: center;
            height: .28rem;
            padding: 0 .12rem;
            background-color:rgba(7,17,27,0.2);
            .bulletin-title{
                width: .22rem;
                height: .12rem;
                @include bg-image('./img/bulletin');
            }
            .bulletin-text{
                width: 90%;
                margin: 0 .04rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: .1rem;
                font-weight: 200;
            } 
            .icon-keyboard_arrow_right{
                font-size: .1rem;
            }
        }
        .background{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:1.34rem;
            z-index:-1;
            filter:blur(10px);
        }
        .detail{
            position: relative;
            z-index: 100;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background: rgba(7,17,27,0.8);
            .detail-wrapper{
                min-height: 100%;
            }
        }
    }   
</style>