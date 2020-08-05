export default {

	setResturantName:(state,payload)=>{
		state.resturantName=payload.resturantName;
	},

  setCollapsed:(state,payload)=>{
    state.collapsed=payload.collapsed;
  },
  setJwt:(state,payload)=>{
    state.jwt = payload.jwt;
  }
}
