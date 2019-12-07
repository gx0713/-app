<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item" v-for="item in goods">
          <span class="text border-1px">
            <span v-if="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
        
    </div>
  </div>
</template>
<script>
import getData from "@/api/header.js"
import Vue from "vue";
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: []
    }
  },
  async created () {
        this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"];
        this.goods = await getData('/api/goods') ;
  },
  // computed: {

  // },
//   created() {
//     //实例化创建完成之后的钩子函数
//     this.classMap1 = [
//       "decrease",
//       "discount",
//       "special",
//       "guarantee",
//       "invoice"
//     ];
//   }
  // methods: {

  // }
};
</script>
<style lang="scss" scoped>
@import "../../common/mixin.scss";
.goods {
  display: flex;
  position: absolute;
  top: 1.74rem;
  bottom: 0.48rem;
  width: 100%;
  overflow: hidden;
  height: 100%;
  .menu-wrapper {
    flex: 0 0 0.8rem;
    width: 0.8rem;
    background: #f3f5f7;
    .menu-item {
      padding: 0 0.12rem;
      display: table;
      height: 0.54rem;
    //   width: 0.56rem;
      line-height: 0.14rem;
      
      .text{
          display: table-cell;
          font-weight: 200;
          font-size: .12rem;
          line-height: .14rem;
          vertical-align: middle;
          @include border-1px(rgba(7,17,27,0.1));
      }
      .icon{
          display: inline-block;
          margin-right:0.02rem;
          vertical-align: top;
          width: .12rem;
          height: .12rem; 
          &.decrease{
              @include bg-image('./img/decrease_3');
          }
          &.discount{
              @include bg-image('./img/discount_3');
          }
          &.guarantee{
              @include bg-image('./img/guarantee_3');
          }
          &.invoice{
              @include bg-image('./img/invoice_3');
          }
          &.special{
              @include bg-image('./img/special_3');
          }
          
      }
    }
  }
  .foods-wrapper {
    flex: 1;
  }
}
</style>