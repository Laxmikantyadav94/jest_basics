
var timmerModule ={
    timerGame:function (callback) {
        console.log('Ready....go!');
        setTimeout(() => {
          console.log('Times up -- stop!');
          callback && callback();
        }, 2000);
      }
}

module.exports=timmerModule;