(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1060:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return p}));var a=s(163),n=s.n(a),i=s(1061),c=s.n(i),o=s(294),r=s.n(o),d=(s(169),s(53)),h=s(270),l=s(0),u=(s(1067),s(11));class p extends l.Component{constructor(t){super(t),this.init=async()=>{console.log(d.b),window.ethereum&&await d.c.eth.getAccounts((t,e)=>{this.setState({address:e[0]})});try{const t=await fetch("https://api.thegraph.com/subgraphs/name/galaxyplanproject/galaxy_graph",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n               query {\n                noders{\n                    account\n                    power\n                  }\n              }\n          "})}),e=await t.json();console.log(e.data.noders);const s=e.data.noders;let a=[];for(let t=0;t<s.length;t++)Number(s[t].power>=1)&&a.push({address:s[t].account});this.setState({List:a})}catch(t){}},this.setInput1=t=>{this.setState({input1:t.target.value})},this.cancle=()=>{this.init()},this.changeValue=t=>{this.setState({power:t})},this.submit=async()=>{""!=this.state.input1&&(console.log(this.state.power),console.log(d.b),this.setState({loading:!0}),d.b.Nodes.methods.setNoderPower(this.state.input1,this.state.power).send({from:this.state.address}).on("receipt",t=>{Object(h.a)("设置成功","success"),this.setState({loading:!1}),this.init()}).on("error",t=>{Object(h.a)("取消","error")}),this.setState({loading:!1}))},this.state={address:"",loading:!1,input1:"",input2:"",power:"1",List:[]}}async componentDidMount(){await this.init()}render(){const t=this.state;return Object(u.jsxs)("div",{className:"ido",children:[Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{className:"title",children:"添加节点分红"}),Object(u.jsxs)("div",{className:"same-item",children:["地址：",Object(u.jsx)(r.a,{value:t.input1,onInput:this.setInput1})]}),Object(u.jsxs)("div",{className:"same-item",children:["权重：",Object(u.jsxs)(c.a,{defaultValue:t.power,onChange:this.changeValue,children:[Object(u.jsx)(c.a.Option,{value:"1",children:"有"}),Object(u.jsx)(c.a.Option,{value:"0",children:"无"})]})]}),Object(u.jsx)("div",{className:"item",id:"language-change",children:Object(u.jsx)(n.a,{loading:t.loading,className:"same-btn",onClick:this.submit,children:"添加"})})]}),Object(u.jsx)("div",{className:"box list",children:t.List.map((t,e)=>Object(u.jsx)("div",{children:t.address},e))})]})}}},1067:function(t,e,s){}}]);