export default {
  setResturantNameByAsync: (context, payload) => {
    setTimeout(() => {
      context.commit('setResturantName', payload);
    }, 3000);
  },
  setResturantNameByAsyncAjax: (context, payload) => {
    let _this = payload._this;
    _this.axios.post(_this.axios.urls.SYSTEM_USER_Vuex, null).then((resp) => {
        console.log(resp.data.name);
        let a = resp.data.name;
        context.commit('setResturantName',{
              resturantName:a
        })
    }).catch((error) => {
         console.log(error);
    })
  }
}
