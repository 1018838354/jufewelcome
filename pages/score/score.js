// score.js
var Rank = {
  "list": [
    { "year": 2016, "score": "未知" },
    { "year": 2016, "score": 37599 },
    { "year": 2015, "score": 40100 },
    { "year": 2014, "score": 41389 },
    { "year": 2013, "score": 0 },
    { "year": 2012, "score": 0 },
    { "year": 2011, "score": 0 },

  ]
};

const date = new Date()
const years = []
const months = []
const days = []
const score = ["未知"]

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1],
    score: score
  },

  bindChange: function (e) {


    const val = e.detail.value
    
    for (var i = 0; i < Rank.list.length;i++){
      if (Rank.list[i].year == this.data.years[val[0]]){
        this.setData({
          year: this.data.years[val[0]],
          score:Rank.list[i].score
        })
      }
    }
   
  },


  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }


})