import { connect } from "../../libs/dva-giga/connect.js";
import { store } from "../../libs/dva-giga/store.js";
import model from "./model.js";

function initData () {
  this.dispatch({
    type: `${model.namespace}/rGet`,
    payload: {
      pageIndex: 0,
      pageSize: 10,
      city: "深圳市"
    },
    callback: () => {
      // console.log(this.data);
    }
  });
}

Page(
  connect(model)({

    data: {},

    onReceiveProps(nextData) {
      // console.log('onReceiveProps', nextData);
      /*
      const data = {};
      if (nextData.a !== this.data.a) {
        data = { ...data, a: nextData.a };
      }
      if (nextData.b !== this.data.b) {
        data = { ...data, b: nextData.b };
      }
      this.setData(data);
      */
    },

    onLoad(options) {
      
    },

    onReady() {
      /*
      console.log("onReady");
      */
    },

    onShow() {
      /*
      console.log("onShow");
      */
      initData.call(this);
    },

    onHide() {
      /*
      console.log("onHide");
      */
    },

    onUnload() {},

    onPullDownRefresh() {},

    onReachBottom() {},

    onShareAppMessage() {},

    onTap() {
      initData.call(this);
    },

  })
);
