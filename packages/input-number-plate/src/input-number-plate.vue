<template>
  <div class="wrapper">
    <div @click="cancel()" v-if="visible" class="back-bord" />
    <!--支持插槽-->
    <slot></slot>

    <!--默认输入框-->
    <div ref="inputBlock" @click="open()" v-if="defaultType" class="data-show">
      <div
        :class="['data-show-block', { active: showLength === n }]"
        v-for="n in 8"
        :key="n"
      >
        {{ inputValue[n] || "" }}
      </div>
    </div>

    <!--键盘-->
    <transition name="keybordSlide">
      <div v-if="visible" class="keybord-wrap">
        <header class="keybord-header">
          <span @click.stop="cancel()">取消</span>
          <span :class="[{ gray: showLength !== 8 }]" @click.stop="submit()"
            >完成</span
          >
        </header>

        <div class="keybord-keys">
          <ul class="keybord-keys-word-wrap" v-if="keybordType === '字'">
            <li
              @click.stop="inputWord(item)"
              class="button"
              v-for="item in lineOneToThree"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
          <div v-else>
            <ul class="keybord-keys-abc-wrap">
              <li
                @click.stop="inputWord(item)"
                class="button"
                v-for="item in abcLineOne"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
            <ul class="keybord-keys-abc-wrap">
              <li
                @click.stop="inputWord(item)"
                class="button"
                v-for="item in abcLineTwo"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
            <ul class="keybord-keys-abc-wrap-short">
              <li
                @click.stop="inputWord(item)"
                class="button"
                v-for="item in abcLineThree"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="keybord-keys-bottom">
            <div @click.stop="toggle()" class="big-button">
              {{ keybordType }}
            </div>
            <ul class="keybord-keys-bottom-line">
              <li
                @click.stop="inputWord(item)"
                class="button"
                v-for="item in judgeList"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
            <div @click.stop="deleteOne()" class="big-button">
              <img
                src="@/static/images/delete.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "InputCar",
  props: {
    defaultType: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      keybordType: "字",
      inputValue: [],
      visible: false,
      wordList: [
        "京",
        "津",
        "渝",
        "沪",
        "冀",
        "晋",
        "辽",
        "吉",
        "黑",
        "苏",
        "浙",
        "皖",
        "闽",
        "赣",
        "鲁",
        "豫",
        "鄂",
        "湘",
        "粤",
        "琼",
        "川",
        "贵",
        "云",
        "陕",
        "甘",
        "青",
        "蒙",
        "桂",
        "宁",
        "新",
        "藏",
        "使",
        "领",
        "警",
        "学",
        "港",
        "澳"
      ],
      abcList: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M"
      ]
    };
  },
  computed: {
    judgeList() {
      if (this.keybordType === "ABC") {
        return this.abcList.slice(29, 36);
      } else {
        return this.wordList.slice(30, 37);
      }
    },
    showLength() {
      return this.inputValue.length;
    },
    lineOneToThree() {
      return this.wordList.slice(0, 30);
    },
    abcLineOne() {
      return this.abcList.slice(0, 10);
    },
    abcLineTwo() {
      return this.abcList.slice(10, 20);
    },
    abcLineThree() {
      return this.abcList.slice(20, 29);
    }
  },
  methods: {
    // 键盘类型切换
    toggle() {
      if (
        this.inputValue.length === 0 ||
        (this.inputValue.length > 0 && this.inputValue.length < 7)
      )
        return;
      this.keybordType = this.keybordType === "ABC" ? "字" : "ABC";
    },
    // 文字输入
    inputWord(word) {
      if (this.inputValue.length === 8) return;
      this.inputValue.push(word);
    },
    // 删除一个字符
    deleteOne() {
      this.inputValue.pop();
    },
    // 取消
    cancel() {
      this.visible = false;
      this.inputValue = [];
    },
    // 完成
    submit() {
      if (this.inputValue.length !== 8) return;
      this.$emit("submit", this.inputValue.join(""));
      this.visible = false;
    },
    // 打开键盘
    open() {
      this.visible = true;
    }
  },
  watch: {
    inputValue(key) {
      if (this.inputValue.length === 0) this.keybordType = "字";
      if (this.inputValue.length > 0 && this.inputValue.length < 8)
        this.keybordType = "ABC";
    }
  }
};
</script>

<style scoped lang="less">
.keybordSlide-enter-active,
.keybordSlide-leave-active {
  transition: all 0.2s linear;
  transform: translateY(0px);
}
.keybordSlide-enter, .keybordSlide-leave-to /* .keybordSlide-leave-active below version 2.1.8 */ {
  transform: translateY(250px);
}

.back-bord {
  width: 100vw;
  overflow-y: scroll;
  height: calc(100vh);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}

.gray {
  color: gray;
}

.data-show {
  position: relative;
  z-index: 99;
  width: 100%;
  display: flex;
  justify-content: space-around;
  min-width: 375rpx;
  .data-show-block {
    flex: 1;
    text-align: center;
    height: 50rpx;
    line-height: 50rpx;
    border: 1px solid #87909b;
    color: #87909b;
    font-size: 12px;
    margin-left: 5rpx;
  }
  .active {
    border: 1px solid #4ad5c2;
  }
}

.keybord-wrap {
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 500rpx;
  background: rgb(192, 192, 196);
  .keybord-header {
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    background: rgb(240, 240, 240);
  }

  .keybord-keys {
    padding: 5px 5px 15px 5px;
    box-sizing: border-box;
    .keybord-keys-word-wrap {
      list-style: none;
      padding: 0;
      margin: 0;
      column-count: 10;
      column-gap: 5px;
    }
    .keybord-keys-abc-wrap {
      list-style: none;
      padding: 0;
      margin: 0;
      column-count: 10;
      column-gap: 5px;
    }
    .keybord-keys-abc-wrap-short {
      list-style: none;
      padding: 0;
      margin: 0;
      column-count: 9;
      column-gap: 5px;
      padding: 0 13px;
    }
    .keybord-keys-bottom {
      display: flex;
      justify-content: space-between;
      .keybord-keys-bottom-line {
        width: 100%;
        margin: 0;
        padding: 0 5px;
        list-style: none;
        column-count: 7;
        column-gap: 5px;
      }
    }
  }
}

.button {
  &:active {
    background: rgb(240, 237, 237);
  }
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-radius: 5px;
  background: white;
  color: black;
  margin-bottom: 7px;
}

.big-button {
  &:active {
    background: white;
  }
  width: 15vw;
  height: 40px;
  background: rgb(139, 138, 138);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  img {
    width: 65%;
    height: 40rpx;
  }
}
</style>
