Page({

  /**
   * 页面的初始数据
   */
  data: {

    noramalData: [{
        "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190306144842/1001.png",
        "CoverHeight": 467,
        "CoverWidth": 350
      },
      {
        "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
        "CoverHeight": 771,
        "CoverWidth": 672
      },
      {
        "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190306144842/1001.png",
        "CoverHeight": 467,
        "CoverWidth": 350
      },
      {
        "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
        "CoverHeight": 771,
        "CoverWidth": 672
      },
      {
        "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190306144842/1001.png",
        "CoverHeight": 467,
        "CoverWidth": 350
      },
      {
        "Cover": "http://dashus.oss-cn-shenzhen.aliyuncs.com/DefaultImage/Game/20190313090409/完美9.png",
        "CoverHeight": 771,
        "CoverWidth": 672
      }
    ],

    leftList: [],
    rightList: [],
    leftHight: 0,
    rightHight: 0
  },
  onLoad: function(options) {
    var that = this;
    var allData = that.data.noramalData;
    var leftH = that.data.leftHight;
    var rightH = that.data.rightHight;
    var leftData = [];
    var rightData = [];
    for (let i = 0; i < allData.length; i++) {
      var currentItemHeight = parseInt(Math.round(allData[i].CoverHeight * 345 / allData[i].CoverWidth));
      allData[i].CoverHeight = currentItemHeight + "rpx"; 
      if (leftH == rightH || leftH < rightH) { 
        leftData.push(allData[i]);
        leftH += currentItemHeight;
      } else {
        rightData.push(allData[i]);
        rightH += currentItemHeight;
      }
    }

    that.setData({
      leftHight: leftH,
      rightHight: rightH,
      leftList: leftData,
      rightList: rightData
    })
  },
})