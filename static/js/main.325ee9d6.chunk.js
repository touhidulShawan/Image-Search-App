(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{17:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(10),c=a.n(r),i=(a(17),a(2)),l=a(11),m=a.n(l),o=e=>{var t=Object(s.useState)(e.searchValue),a=Object(i.a)(t,2),r=a[0],c=a[1],l=e.onHandleSearch;return n.a.createElement("div",{className:"ui segment",style:{marginTop:"10px"}},n.a.createElement("form",{action:"",className:"ui form",onSubmit:e=>{e.preventDefault(),l(r)}},n.a.createElement("div",{className:"field"},n.a.createElement("input",{type:"text",value:r,onChange:e=>{c(e.target.value)},placeholder:"Enter your keyword..."}))))};a(36);class p extends s.Component{constructor(...e){super(...e),this.state={spans:0},this.imageRef=n.a.createRef(),this.setSpan=()=>{var e=this.imageRef.current.clientHeight,t=Math.ceil(e/10);this.setState({spans:t})}}componentDidMount(){this.imageRef.current.addEventListener("load",this.setSpan)}render(){return n.a.createElement("div",{className:"image-card",style:{gridRowEnd:"span ".concat(this.state.spans)}},n.a.createElement("img",{src:this.props.image.urls.regular,alt:this.props.image.description,ref:this.imageRef}))}}var u=p,d=e=>{var t=e.images.map((e=>n.a.createElement(u,{key:e.id,image:e})));return n.a.createElement("div",{className:"image-list"},t)},h=()=>{var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)("mountains"),l=Object(i.a)(c,2),p=l[0],u=l[1];Object(s.useEffect)((()=>{var e;e=p,m.a.get("https://api.unsplash.com/search/photos",{params:{query:e,per_page:30},headers:{Authorization:"Client-ID 3daa1c358646b6d4d27e8c541251c2c78047e4ffb3fe2bad5cdd08daf4a0753f"}}).then((e=>{console.log(e.data.results),r(e.data.results)}))}),[p]);return n.a.createElement("div",{className:"App ui container"},n.a.createElement("h1",{style:{textAlign:"center",padding:"0.5rem",color:"cadetblue"}},"Image Seach App"),n.a.createElement(o,{searchValue:p,onHandleSearch:e=>{u(e)}}),n.a.createElement(d,{images:a}))};c.a.render(n.a.createElement(h,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.325ee9d6.chunk.js.map