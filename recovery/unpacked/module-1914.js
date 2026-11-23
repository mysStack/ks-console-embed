import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module837 from "./module-837.js";
import module186 from "./module-186.js";
import { findParent } from "./module-453.js";
import Module1170 from "./module-1170.js";
import { processData } from "./module-4752.js";
import Module4753 from "./module-4753.js";
import Module4755 from "./module-4755.js";
import Module4759 from "./module-4759.js";
import module4772 from "./module-4772.js";
const S = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.handleWrapperClick = function(e) {
            if (e && findParent(e.target, "ks-app-component") === null && r.state.selectedType === "app") {
                const t = r.draggerRef.current.content.querySelector(`[data-component='${r.state.selectedData.name}']`);
                if (t && !t.contains(e.target)) {
                    r.setState({
                        selectedData: {},
                        selectedType: "",
                        selectedEdges: []
                    });
                }
            }
        };
        r.toggleFullScreen = function() {
            r.setState(function(e) {
                return {
                    fullScreen: !e.fullScreen
                };
            });
        };
        r.handleRefresh = function() {
            r.props.onFetch();
        };
        r.handleSelect = function(selectedData, selectedType) {
            r.setState({
                selectedData,
                selectedType,
                selectedEdges: [].concat(module61(selectedData.edges.in.map((e)=>e.data.id)), module61(selectedData.edges.out.map((e)=>e.data.id)))
            });
        };
        r.state = {
            graph: processData(e.data, e.health),
            selectedData: {},
            selectedEdges: [],
            selectedType: "",
            fullScreen: false
        };
        r.draggerRef = createRef();
        return r;
    }
    module37(a, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    selectedData: this.state.selectedData,
                    selectedType: this.state.selectedType,
                    onSelectApp: this.handleSelect
                };
            }
        }
    ]);
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const _this = this;
                if (!module837(this.props.data, e.data) || !module837(this.props.health, e.health)) {
                    const graph = processData(this.props.data, this.props.health);
                    this.setState({
                        graph
                    });
                    if (this.state.selectedData && this.state.selectedData.name) {
                        const selectedData = graph.nodes.find((e)=>e.name === _this.state.selectedData.name);
                        this.setState({
                            selectedData
                        });
                    }
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { store, loading, className } = props;
                const state = this.state;
                const { graph, selectedType, selectedData, selectedEdges, fullScreen } = state;
                return <div className={module3(className, module4772.graph, module31({}, module4772.fullScreen, fullScreen))}><div className={module4772.loading}><module186.Loading spinning={loading}/></div><Module1170 className={module4772.dragger} contentClassName={module4772.mainContent} ref={this.draggerRef} onClick={this.handleWrapperClick} initialScale={0.6} onFullScreen={this.toggleFullScreen} controlStyle={{
                    right: selectedType ? 420 : 20
                }} onRefresh={this.handleRefresh}><div className={module4772.graphContent}>{graph.nodes.map((e)=><Module4755 key={e.name} data={e}/>)}<svg className={module4772.edgeWrapper}>{graph.edges.map((e)=><Module4753 key={e.data.id} data={e} selected={selectedEdges.includes(e.data.id)}/>)}</svg></div></Module1170>{selectedType && <Module4759 className={module4772.detail} type={selectedType} data={selectedData} store={store} fullScreen={fullScreen}/>}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default S;
S.propTypes = {
    data: module1.shape({
        nodes: module1.arrayOf(module1.object),
        edges: module1.arrayOf(module1.object)
    }),
    health: module1.object
};
S.defaultProps = {
    data: {
        nodes: [],
        edges: []
    },
    health: {}
};
S.childContextTypes = {
    wrapperRef: module1.object,
    selectedData: module1.object,
    selectedType: module1.string,
    onSelectApp: module1.func
};
