<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
        <!-- 当数据请求过来在渲染 -->
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }},满50减10</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail=true">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title" @click="showDetail=true"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt />
    </div>
    <transition name="fade">
      <div class="detail" v-if="showDetail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <div class="detail-title">{{ seller.name }}</div>
            <div class="detail-star">
              <star v-if="seller.score" :size="48" :score="seller.score" />
            </div>
            <header-title title="优惠信息" />
            <ul class="detail-supports">
              <li class="supports-item" v-for="item,index in seller.supports">
                <span class="icon" :class="classMap[item.type]"></span>
                <span class="text">{{ item.description }}</span>
              </li>
            </ul>
            <header-title title="商家公告" />
            <div class="detail-buttetin">
              <p class="bulletin">{{ seller.bulletin }}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="showDetail=false">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
 
<script>
import star from "@/components/star/star.vue";
import HeaderTitle from "@/components/headerTitle/headerTitle.vue";

export default {
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDetail: false
    };
  },
  components: {
    star,
    HeaderTitle
  },
  created() {
    this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"];
  }
};
</script>
<style lang="scss" scoped>
@import "../../common/mixin";
.header {
  position: relative;
  color: #fff;
  background-color: rgba(7, 17, 27, 0.5);
  overflow: hidden;
  font-size: 0;
  .content-wrapper {
    position: relative;
    padding: 0.24rem 0.12rem 0.18rem 0.24rem;
    .avatar {
      display: inline-block;
      width: 0.64rem;
      height: 0.64rem;
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      margin: 0.02rem 0 0.02rem 0.16rem;
      vertical-align: top;
      font-size: 0;
      .title {
        margin-bottom: 0.08rem;
        .brand {
          display: inline-block;
          margin-right: 0.06rem;
          width: 0.3rem;
          height: 0.18rem;
          vertical-align: top;
          @include bg-image("./img/brand");
          background-size: 100% 100%;
        }
        .name {
          vertical-align: top;
          font-size: 0.16rem;
          line-height: 0.18rem;
          font-weight: bold;
        }
      }
      .description {
        font-size: 0.12rem;
        line-height: 0.12rem;
        font-weight: 200;
        margin-bottom: 0.1rem;
      }
      .support {
        .icon {
          display: inline-block;
          vertical-align: top;
          margin-right: 0.04rem;
          width: 0.12rem;
          height: 0.12rem;
          &.decrease {
            @include bg-image("./img/decrease_1");
          }
          &.discount {
            @include bg-image("./img/discount_1");
          }
          &.guarantee {
            @include bg-image("./img/guarantee_1");
          }
          &.invoice {
            @include bg-image("./img/invoice_1");
          }
          &.special {
            @include bg-image("./img/special_1");
          }
        }
        .text {
          font-size: 0.1rem;
          line-height: 0.12rem;
          font-weight: 200;
        }
      }
    }
    .support-count {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0.14rem;
      right: 0.12rem;
      padding: 0 0.08rem;
      height: 0.24rem;
      border-radius: 0.14rem;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 0;
      .count {
        line-height: 0.12rem;
        font-size: 0.1rem;
        font-weight: 200;
      }
      .icon-keyboard_arrow_right {
        font-size: 0.1rem;
        font-weight: 200;
      }
    }
  }
  .bulletin-wrapper {
    display: flex;
    align-items: center;
    height: 0.28rem;
    padding: 0 0.12rem;
    background-color: rgba(7, 17, 27, 0.2);
    .bulletin-title {
      width: 0.22rem;
      height: 0.12rem;
      @include bg-image("./img/bulletin");
    }
    .bulletin-text {
      width: 90%;
      margin: 0 0.04rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.1rem;
      font-weight: 200;
    }
    .icon-keyboard_arrow_right {
      font-size: 0.1rem;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.34rem;
    z-index: -1;
    filter: blur(10px);
  }
  .detail {
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
    &.fade-enter-active,
    &.fade-leave-active {
      transition: 0.5s;
    }
    &.fade-leave,
    &.fade-enter-to {
      opacity: 1;
    }
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    .detail-wrapper {
      min-height: 100%;
      .detail-main {
        margin-top: 0.64rem;
        padding-bottom: 0.64rem;
        font-size: 20px;
        .detail-title {
          font-size: 0.16rem;
          line-height: 0.16rem;
          color: #fff;
          font-weight: 700;
          text-align: center;
        }
        .detail-star {
          margin: 0.16rem 0 0.28rem 0;
          text-align: center;
        }
        .detail-supports {
          width: 80%;
          margin: 0 auto 0.28rem;
          .supports-item {
            padding: 0 0.12rem;
            margin-bottom: 0.12rem;
            .icon {
              display: inline-block;
              vertical-align: top;
              margin-right: 0.06rem;
              width: 0.16rem;
              height: 0.16rem;
              &.decrease {
                @include bg-image("./img/decrease_2");
              }
              &.discount {
                @include bg-image("./img/discount_2");
              }
              &.guarantee {
                @include bg-image("./img/guarantee_2");
              }
              &.invoice {
                @include bg-image("./img/invoice_2");
              }
              &.special {
                @include bg-image("./img/special_2");
              }
            }
            .text {
              vertical-align: top;
              line-height: 0.16rem;
              font-size: 0.12rem;
              font-weight: 200;
            }
          }
        }
        .detail-buttetin {
          width: 80%;
          margin: 0 auto;
          .bulletin {
            padding: 0 0.12rem;
            line-height: 0.24rem;
            font-size: 0.12rem;
            font-weight: 200;
            text-align: justify; /*字体两端对齐*/
          }
        }
      }
    }
    .detail-close {
      position: relative;
      margin: -0.64rem auto 0 auto;
      font-size: 0.32rem;
      width: 0.32rem;
      height: 0.32rem;
      clear: both;
    }
  }
}
</style>