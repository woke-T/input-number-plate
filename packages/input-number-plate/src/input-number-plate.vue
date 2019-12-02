<template>
  <div class="wrapper">
    <div @click="cancel()" v-if="visible" class="back-bord" />
    <!--支持插槽-->
    <slot></slot>

    <!--默认输入框-->
    <div ref="inputBlock" @click="open()" v-if="defaultType" class="data-show">
      <div
        :class="['data-show-block', { active: inputValue.length === n - 1 }]"
        v-for="n in 8"
        :key="n"
      >
        {{ inputValue[n - 1] }}
      </div>
    </div>

    <!--键盘-->
    <transition name="keybordSlide">
      <div v-if="visible" class="keybord-wrap">
        <header class="keybord-header">
          <span @click.stop="cancel()">取消</span>
          <span
            :class="[{ gray: inputValue.length !== 8 }]"
            @click.stop="submit()"
            >完成</span
          >
        </header>

        <div class="keybord-keys">
          <ul class="keybord-keys-word-wrap" v-if="keybordType === '字'">
            <li
              @click.stop="inputWord(item)"
              class="button"
              v-for="item in wordList.slice(0, 30)"
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
                v-for="item in abcList.slice(0, 10)"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
            <ul class="keybord-keys-abc-wrap">
              <li
                @click.stop="inputWord(item)"
                class="button"
                v-for="item in abcList.slice(10, 20)"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
            <ul class="keybord-keys-abc-wrap-short">
              <li
                @click.stop="inputWord(item)"
                class="button"
                v-for="item in abcList.slice(20, 29)"
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
              <li class="button" v-for="item in judgeList" :key="item">
                {{ item }}
              </li>
            </ul>
            <div @click.stop="deleteOne()" class="big-button">
              <img
                src="data:image/png;base64,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"
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
      placehoderDom: null,
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
      this.$emit("submit", this.inputValue.join(""));
    },
    // 完成
    submit() {
      if (this.inputValue.length !== 8) return;
      this.$emit("submit", this.inputValue.join(""));
    },
    // 打开键盘
    open() {
      this.visible = true;
    },
    //判断展示框是否被键盘挡住
    checkInputLocation() {
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const inputTopHeight = this.$refs.inputBlock.getBoundingClientRect().top;
      const inputHeight = this.$refs.inputBlock.scrollHeight;
      //如果键盘被挡住，并且页面没有滚动条,返回true
      if (
        inputHeight + 250 + inputTopHeight >= clientHeight &&
        scrollHeight === clientHeight
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.placehoderDom = document.createElement("div");
    this.placehoderDom.style.cssText =
      "height: 260px;width: 100%;background: red;opacity:0";
    this.placehoderDom.style.display = "none";
    document.body.appendChild(this.placehoderDom);
  },
  watch: {
    inputValue(key) {
      if (this.inputValue.length === 0) this.keybordType = "字";
      if (this.inputValue.length > 0 && this.inputValue.length < 8)
        this.keybordType = "ABC";
    },
    visible(type) {
      if (type) {
        //键盘唤醒并且键盘挡住输入框,同时页面无滚动条时，占位块展示出来从而使页面可以通过scrllTo()来滚动
        if (this.checkInputLocation()) {
          this.placehoderDom.style.display = "block";
        }
        window.scrollTo(0, 250);
      } else {
        document.body.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
        this.placehoderDom.style.display = "none";
      }
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
  height: calc(100vh + 250px);
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
  column-count: 8;
  column-gap: 5px;
  min-width: 200px;
  .data-show-block {
    display: flex;
    height: 0;
    align-items: center;
    justify-content: center;
    border: 1px solid #87909b;
    padding: 50% 0;
    color: #87909b;
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
  height: 250px;
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
    height: 20px;
  }
}
</style>
