import util from './../../utils/util.js';
Page({
  data: {
    showtab:0,  //顶部选项卡索引
    showtabtype:'', //选中类型
    showfootertab:0,  //底部标签页索引
    tabnav:{},  //顶部选项卡数据
    questionsall:[],  //所有问题
    questions:[], //问题列表
    showquestionindex:null, //查看问题索引,
    uploadimgs:[], //上传图片列表
    editable: false //是否可编辑
  },
  onLoad: function () {
    this.setData({
      tabnav:{
        tabnum:5,
        tabitem:[
          {
            "id":0,
            "type":"",
            "text":"全部"
          },
          {
            "id":1,
            "type":"A",
            "text":"入学线路"
          },
          {
            "id":2,
            "type":"B",
            "text":"校园线路"
          },
          {
            "id":3,
            "type":"C",
            "text":"活动咨询"
          },
          {
            "id":4,
            "type":"D",
            "text":"生活问题"
          }
        ]
      },
      uploadimgs:[]
    })
    this.fetchQuestions();
  },
  chooseImage:function() {
    let _this = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function(res) {
        if (!res.cancel) {
          if(res.tapIndex == 0){
            _this.chooseWxImage('album')
          }else if(res.tapIndex == 1){
            _this.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseWxImage:function(type){
    let _this = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        _this.setData({
          uploadimgs: _this.data.uploadimgs.concat(res.tempFilePaths)
        })
      }
    })
  },
  editImage:function(){
    this.setData({
      editable: !this.data.editable
    })
  },
  deleteImg:function(e){
    console.log(e.currentTarget.dataset.index);
    const imgs = this.data.uploadimgs
    // Array.prototype.remove = function(i){
    //   const l = this.length;
    //   if(l==1){
    //     return []
    //   }else if(i>1){
    //     return [].concat(this.splice(0,i),this.splice(i+1,l-1))
    //   }
    // }
    this.setData({
      uploadimgs: imgs.remove(e.currentTarget.dataset.index)
    })
  },
  questionSubmit:function(){
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      image: '',
      duration: 0,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
    setTimeout(function () {
      wx.navigateBack();
    }, 1300)
  },
  fetchQuestions:function(){  //获取问题列表
    const newquestions = [{
      "id":  1,
      "type": util.getRandomArrayElement(["A", "B", "C", "D"]),
      "q": "在哪里买生活用品",
      "a": "十二生肖广场两侧是学校商业街，里面有很多的门店，商业街尽头，靠近一食堂方向有一个比较大的超市，里面能买到所有的生活用品，当然可选的种类并不多。你也可以坐520公交到枫林那有个乐买佳超市，它更大，去了你还可以在周围逛逛，那边有很多美食。"
    }, {
      "id": 2,
      "type": util.getRandomArrayElement(["A", "B", "C", "D"]),
      "q": "如何开通寝室网",
      "a": "图文信息楼一楼，就是图书馆楼下（图书馆又在那？打了江西财经大学招牌的那栋楼。），进去后，大概在中心位置的那个门，你可以看到网络中心的门牌，进去就有人接待你了，完成开户，你就可以在门口看到立在那有几台机子，注意两条机子不一样，一台是充值校园卡，一台是充值网费的。看清楚再排队，充完钱就可以上网了。"
      }, {
        "id":3,
        "type": util.getRandomArrayElement(["A", "B", "C", "D"]),
        "q": "有哪些食堂，口味怎么样",
        "a": "二食堂一楼，是比较大众化的地方，可以变换一下口味；一食堂一楼、一食堂二楼其实是一样的，很常规的校园伙食，蔬菜好吃."
    }, {
      "id": 3,
      "type": util.getRandomArrayElement(["A", "B", "C", "D"]),
      "q": "上课教室具体在那？",
      "a": "看到你的课表，每个字母开头代表那个学院的开头拼音，例如G102表示工商学院102号室，全是数字时，首字母代表一教、二教还是三教，一教、二教在图书馆前面；三教在北区那栋高大上的就是了。"
      }, {
        "id": 3,
        "type": util.getRandomArrayElement(["A", "B", "C", "D"]),
        "q": "在哪里交电费",
        "a": "祥庐入口的右手边，去了记得不要直接排队，因为你需要准备一张纸，写上你的寝室号，充钱人和充钱金额。这样虽然有些麻烦，但可能用书面的形式充钱更不容易弄错吧。具体样式去了你就能看到的。"
    }, {
      "id": 3,
      "type": util.getRandomArrayElement(["A", "B", "C", "D"]),
      "q": "空调需要缴费吗",
      "a": "要的，女生宿舍和庐一楼，空调卡1000元"
      }, {
        "id": 3,
        "type": util.getRandomArrayElement(["A", "B", "C", "D"]),
        "q": "能不能用大功率电器，会不会跳闸",
        "a": "一般功率的电器都能承受，吹风机，洗衣机，空调都能够用。就是要注意你联的设备保持通风，排插尽量买的功率大一点。"
    }, {
      "id": 3,
      "type": util.getRandomArrayElement(["A", "B", "C", "D"]),
      "q": "寝室网络不好，或者路由器出问题怎么办",
      "a": "呃...这问题对于我们来说意义重大，但学校可不管，路由器出不了问题，要是出了，软通小哥哥会帮您解决。如果真的没有网了，那就去图文信息楼一楼有网络维护中心吧。"
      }, {
        "id": 3,
        "type": util.getRandomArrayElement(["A", "B", "C", "D"]),
        "q": "周围交通",
        "a": "北区校门门口就是520路公共汽车汽车，这是我们出门经常做的车，它会进过我门其他两个校区和地铁站，232路离学校有以小段距离，他可以直接坐到火车站哦。"
      }];
    this.setData({
      questions:newquestions,
      questionsall:newquestions
    })
  },
  setTab:function(e){ //设置选项卡选中索引
    const edata = e.currentTarget.dataset;
    this.setData({
      showtab: edata.tabindex,
      showtabtype: edata.type,
      questions: !edata.type ? this.data.questionsall:this.data.questionsall.filter(l=>l.type === edata.type),
      showquestionindex: this.data.showtab==edata.tabindex?this.data.showquestionindex:null
    })
  },
  showTab:function(e){  //切换选项卡
    const eindex = e.currentTarget.dataset.index;
    if(eindex==1&&!this.data.questions){
      console.log("text");
    }
    wx.setNavigationBarTitle({
      title:eindex==1?"常见问题":"问题反馈"
    })
    this.setData({
      showfootertab:eindex
    });
  },
  foldQuestion:function(e){ //展开收起问题
    const eindex = e.currentTarget.dataset.qindex;
    const oldqindex = this.data.showquestionindex;
    this.setData({
      showquestionindex: eindex===oldqindex?null:eindex
    })
  },
  callContact: function(e){  //拨打电话
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.ponenumber
    })
  }
})
