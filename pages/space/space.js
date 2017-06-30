Page({
  data: {
    spacedata:{},
    spaceimgs:[],
    currentIndex:0,
    showfootertab: 0  ,//底部标签页索引
    showTab: true,
    showTab1: false
  },
  onLoad: function () {
    this.setData({
      spacedata:{
        "ParkCode": "ZCKJ20160831200444",
        "ParkName": "软件与通信学院",
        "FeeScale": "8.2",
        "FeeScaleUnit": "元/月",
        "FeeScaleUnitValue": 2,
        "FeeScaleRoom": 0,
        "FeeScaleRoomUnit": "公顷",
        "FeeScaleRoomUnitValue": "2",
        "Address": "江西财经大学麦庐校区",
        "TagIDs": ["软件工程","物联网","电子信息"],
        "latitude": 28.7256400000,
        "longitude": 115.8139500000,
        "TotalBulidingArea": '39万平方米',
        "TotalWorkstation": 214,
        "TotalRoom": 8,
        "RoomRate": 65,
        "Summary": "江西财经大学软件与通信工程学院即用友软件学院，成立于2002年6月。2009年，与江西财经大学电子学院合并，更名为江西财经大学软件与通信工程学院，具有学历教育和学位教育办学资格，是江西财经大学直接领导和管理的本科专业性学院。",
        "Policy": ""

      },
      spaceimgs: ["./../../images/001.jpg",
       "./../../images/001.jpg",
       "./../../images/001.jpg"]
    })  
  },
  setCurrent: function(e){  //当前图片索引
    this.setData({
      currentIndex:e.detail.current+1
    })
  },
  imgPreview: function(){ //图片预览
    const imgs = this.data.spaceimgs;
    wx.previewImage({
      current: imgs[this.data.currentIndex-1], // 当前显示图片的http链接
      urls: imgs // 需要预览的图片http链接列表
    })
  },
  getAddress:function(e){
    const d = e.currentTarget.dataset;
    const address = d.address;
    const latitude = d.latitude;
    const longitude = d.longitude;
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 18,
      // name: address,
      address: address,
      success:function(res){
        console.log(res);
      },
      fail:function(res){
        console.log(res);
      },
      success:function(res){
        console.log(res);
      }
    })
  },
  goApply: function(){
    wx.navigateTo({
      url: '../spacereserve/spacereserve'
    })
  },
  conectuser:function(){
    wx.navigateTo({
      url: '../apply/apply'
    })
  },
  showTab: function (e) {  //切换选项卡
    this.setData({
      showTab1: false,
      showTab: true
    });
  },
  showTab1:function(e){
    this.setData({
      showTab: false,
      showTab1: true
    });
  }
  // formateNumber:function(n){
  //   return n>9?n:'0'+n
  // }
})
