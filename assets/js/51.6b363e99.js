(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{463:function(t,_,v){"use strict";v.r(_);var e=v(2),l=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"_1-初始化阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化阶段"}},[t._v("#")]),t._v(" 1. 初始化阶段")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("初始化阶段的生命周期函数调用顺序")]),t._v(" "),_("ul",[_("li",[t._v("constructor")]),t._v(" "),_("li",[t._v("static getDerivedStateFromProps")]),t._v(" "),_("li",[t._v("render")]),t._v(" "),_("li",[t._v("componentDidMount")])])]),t._v(" "),_("li",[_("p",[t._v("初始化阶段的生命周期函数调用时机")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("constructor")]),t._v(" "),_("ul",[_("li",[t._v("初始化state")]),t._v(" "),_("li",[t._v("绑定事件")])])]),t._v(" "),_("li",[_("p",[t._v("static getDerivedStateFromProps")]),t._v(" "),_("ul",[_("li",[t._v("初始化state")])])]),t._v(" "),_("li",[_("p",[t._v("render")]),t._v(" "),_("ul",[_("li",[t._v("渲染UI")])])]),t._v(" "),_("li",[_("p",[t._v("componentDidMount")])])]),t._v(" "),_("h3",{attrs:{id:"_2-更新阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-更新阶段"}},[t._v("#")]),t._v(" 2. 更新阶段")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("static getDerivedStateFromProps")]),t._v(" "),_("ul",[_("li",[t._v("初始化state")])])]),t._v(" "),_("li",[_("p",[t._v("shouldComponentUpdate")]),t._v(" "),_("ul",[_("li",[t._v("判断是否需要更新")])])]),t._v(" "),_("li",[_("p",[t._v("render")]),t._v(" "),_("ul",[_("li",[t._v("渲染UI")])])]),t._v(" "),_("li",[_("p",[t._v("getSnapshotBeforeUpdate")]),t._v(" "),_("ul",[_("li",[t._v("获取更新前的快照")])])]),t._v(" "),_("li",[_("p",[t._v("componentDidUpdate")]),t._v(" "),_("ul",[_("li",[t._v("更新后的操作")])])])]),t._v(" "),_("h3",{attrs:{id:"_3-卸载阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-卸载阶段"}},[t._v("#")]),t._v(" 3. 卸载阶段")]),t._v(" "),_("ul",[_("li",[t._v("componentWillUnmount")]),t._v(" "),_("li",[t._v("卸载组件")])]),t._v(" "),_("h3",{attrs:{id:"_4-错误处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-错误处理"}},[t._v("#")]),t._v(" 4. 错误处理")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("static getDerivedStateFromError")]),t._v(" "),_("ul",[_("li",[t._v("初始化state")])])]),t._v(" "),_("li",[_("p",[t._v("componentDidCatch")]),t._v(" "),_("ul",[_("li",[t._v("捕获错误")])])])]),t._v(" "),_("h3",{attrs:{id:"_5-总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[t._v("#")]),t._v(" 5. 总结")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("初始化阶段：constructor -> static getDerivedStateFromProps -> render -> componentDidMount")])]),t._v(" "),_("li",[_("p",[t._v("更新阶段：static getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate")])]),t._v(" "),_("li",[_("p",[t._v("卸载阶段：componentWillUnmount")])]),t._v(" "),_("li",[_("p",[t._v("错误处理：static getDerivedStateFromError -> componentDidCatch")])])]),t._v(" "),_("h3",{attrs:{id:"_6-生命周期函数的替代方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-生命周期函数的替代方案"}},[t._v("#")]),t._v(" 6. 生命周期函数的替代方案")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("getDerivedStateFromProps")])]),t._v(" "),_("li",[_("p",[t._v("getSnapshotBeforeUpdate")])]),t._v(" "),_("li",[_("p",[t._v("替代方案")]),t._v(" "),_("ul",[_("li",[_("ol",[_("li",[t._v("获取更新前的状态")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("获取更新前的状态")])]),t._v(" "),_("li",[_("p",[t._v("更新state")])]),t._v(" "),_("li",[_("p",[t._v("返回更新前的状态")])])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"2"}},[_("li",[t._v("获取更新前的DOM")])])]),t._v(" "),_("li",[_("ol",{attrs:{start:"3"}},[_("li",[t._v("获取更新前的数据")])])])])])])])])])}),[],!1,null,null,null);_.default=l.exports}}]);