<template>
     <div :class="starType" class="star">
        <span 
        v-for="classItem,index in starClasses" 
        class="star-item" 
        :class="classItem"
        :key="index">
        </span>
     </div>

</template>


<script>
const LENGTH = 5;   //用来控制星星的个数的
const CLS_ON = 'on'; //on的class名，全星
const CLS_HALF = 'half'; //half的class名，半星
const CLS_OFF = 'off'; //off的class名，没星

export default {
    props:{
        size:{
            type:Number,
            required:true,
        },
        score:{
            type:Number,
            required:true,
        }
    },
    computed: {
        starType(){  //用来计算不同的  星星尺寸的class名
            return 'star-' + this.size
        },
        starClasses(){ //用来计算不同显示的全星、半星、没星的class名
            let result = [];
            let score = Math.floor(this.score * 2) / 2;  //星星分数
            let floorNum = score % 1 !== 0;  //小数（半颗星）
            let intiger = parseInt(score);  //整颗星

            for(let i = 0;  i < intiger; i++) {
                result.push(CLS_ON);  //整颗星
            }
            if(floorNum) { //半颗星
                result.push(CLS_HALF);
            }
            //没星
            while(LENGTH > result.length) {
                result.push(CLS_OFF);
            }
            
            return result;
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../common/mixin.scss";

    
    .star {
    font-size: 0;
    .star-item {
        display: inline-block;
        &:last-child {
            margin-right: 0 !important;
        }
    }
    &.star-48 > .star-item {
        width: .2rem;
        height: .19rem;
        margin-right: .2rem;
        &.on {
            @include bg-image('./img/star48_on');
        }
        &.half {
            @include bg-image('./img/star48_half');
        }
        &.off {
            @include bg-image('./img/star48_off');
        }
    }
    &.star-36 > .star-item {
        width: .15rem;
        height: .15rem;
        margin-right: .06rem;
        &.on {
            @include bg-image('./img/star36_on');
        }
        &.half {
            @include bg-image('./img/star36_half');
        }
        &.off {
            @include bg-image('./img/star36_off');
        }
    }
    &.star-24 > .star-item {
        width: .1rem;
        height: .1rem;
        margin-right: .03rem;
        &.on {
            @include bg-image('./img/star24_on');
        }
        &.half {
            @include bg-image('./img/star24_half');
        }
        &.off {
            @include bg-image('./img/star24_off');
        }
    }
}
</style>