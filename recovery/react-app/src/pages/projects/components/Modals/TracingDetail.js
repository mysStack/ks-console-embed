import "unpacked/module-15.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-319.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module63 from "unpacked/module-63.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module837 from "unpacked/module-837.js";
import Module788 from "components/Base/Modal";
import { getLocalTime } from "utils/index";
import { COORD_COUNT, createViewedBoundsFunc, formatDuration } from "utils/tracing";
import Module4778 from "pages/projects/components/Modals/TracingDetail/Span";
import Module4780 from "pages/projects/components/Modals/TracingDetail/SpanDetail";
import Module4782 from "pages/projects/components/Modals/TracingDetail/SpanGraph";
import module4785 from "unpacked/module-4785.js";
const O = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
    })(r);
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleMouseDown = function(e) {
            if (e.offsetY < 4) {
                t.originPos = e.y;
                document.addEventListener("mousemove", t.handleResize, false);
            }
        };
        t.handleMouseUp = function() {
            document.removeEventListener("mousemove", t.handleResize, false);
        };
        t.handleResize = function(e) {
            const a = t.originPos - e.y;
            t.originPos = e.y;
            const current = t.detailPane.current;
            const n = parseInt(getComputedStyle(current.parentNode, "").height, 10);
            const l = parseInt(getComputedStyle(current, "").height, 10);
            if (l + a < n - 83) {
                current.style.height = `${l + a}px`;
                if (t.listPane && t.listPane.current) {
                    t.listPane.current.style.bottom = `${l + a}px`;
                }
            }
        };
        t.handleSpanClick = function(selectSpan) {
            t.setState({
                selectSpan
            });
        };
        t.hideSpanDetail = function() {
            t.setState({
                selectSpan: {}
            });
        };
        t.handleRangeChange = function(e) {
            t.getViewedBounds = createViewedBoundsFunc({
                min: t.props.detail.startTime,
                max: t.props.detail.endTime,
                viewStart: e.viewStart,
                viewEnd: e.viewEnd
            });
            t.setState(e);
        };
        t.state = {
            selectSpan: {},
            viewStart: 0,
            viewEnd: 1
        };
        t.getViewedBounds = createViewedBoundsFunc({
            min: e.detail.startTime,
            max: e.detail.endTime,
            viewStart: 0,
            viewEnd: 1
        });
        t.listPane = createRef();
        t.detailPane = createRef();
        t.originPos = 0;
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                const detail = this.props.detail;
                if (!module837(detail, e.detail)) {
                    this.getViewedBounds = createViewedBoundsFunc({
                        min: detail.startTime,
                        max: detail.endTime,
                        viewStart: 0,
                        viewEnd: 1
                    });
                    this.setState({
                        selectSpan: {},
                        viewStart: 0,
                        viewEnd: 1
                    });
                }
                if (this.detailPane && this.detailPane.current) {
                    if (!module63(this.state.selectSpan) && module63(t.selectSpan)) {
                        this.detailPane.current.addEventListener("mousedown", this.handleMouseDown, false);
                        document.addEventListener("mouseup", this.handleMouseUp, false);
                    } else if (module63(this.state.selectSpan) && !module63(t.selectSpan)) {
                        this.detailPane.current.removeEventListener("mousedown", this.handleMouseDown, false);
                        document.removeEventListener("mouseup", this.handleMouseUp, false);
                        document.removeEventListener("mousemove", this.handleResize, false);
                    }
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.detailPane && this.detailPane.current) {
                    this.detailPane.current.removeEventListener("mousedown", this.handleMouseDown, false);
                    document.removeEventListener("mouseup", this.handleMouseUp, false);
                    document.removeEventListener("mousemove", this.handleResize, false);
                }
            }
        },
        {
            key: "getCoords",
            value: function() {
                const e = 100 / COORD_COUNT;
                const t = [];
                for(let a = 0; a < COORD_COUNT; a++){
                    t.push({
                        percent: `${a * e}%`
                    });
                }
                t.push({
                    percent: "100%"
                });
                return t;
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const detail = this.props.detail;
                const { traceName, traceID, duration, startTime, services, spans } = detail;
                if (!spans) {
                    return null;
                }
                let i = 0;
                spans.forEach((e)=>{
                    i = Math.max(i, e.depth);
                });
                return <div className={module4785.header}><module186.Icon name="target" size={40}/><div className={module4785.title}><div className={module4785.name}>{traceName} <span>{traceID}</span></div><ul><li><span>{t("START_TIME")}: </span><span>{getLocalTime(startTime / 1000).format("YYYY-MM-DD HH:mm:ss")}</span></li><li><span>{t("DURATION")}: </span><span>{formatDuration(duration)}</span></li><li><span>{t("CALLED_SERVICES")}: </span><span>{services.length}</span></li><li><span>{t("CALL_DEPTH")}: </span><span>{i}</span></li></ul></div><div className={module4785.close} onClick={this.props.onCancel}><module186.Icon name="close" size={20} type="light"/></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, detail, onCancel } = props;
                const selectSpan = this.state.selectSpan;
                const o = this.getCoords();
                return <Module788 visible={visible} bodyClassName={module4785.body} onCancel={onCancel} hideHeader hideFooter fullScreen>{this.renderHeader()}<div className={module4785.content}><div className={module4785.wrapper}><module186.Columns className="is-gapless"><module186.Column className="is-3"><div className={module4785.leftPane}><div className={module4785.timelineTitle}>{t("SERVICES_AND_OPERATIONS")}</div></div></module186.Column><module186.Column><div className={module4785.rightPane}><div className={module4785.timelineSelect}><Module4782 data={detail} viewRange={this.viewRange} onRangeChange={this.handleRangeChange}/></div><svg className={module4785.coords}>{o.map((e)=><line key={e.percent} y1="0%" y2="100%" x1={e.percent} x2={e.percent}/>)}</svg></div></module186.Column></module186.Columns><ul className={module4785.listPane} ref={this.listPane} style={{
                    bottom: module63(selectSpan) ? 0 : "50%"
                }}>{detail.spans && detail.spans.map((span)=><Module4778 key={span.spanID} span={span} selected={selectSpan.spanID === span.spanID} color={detail.serviceColorMap[span.process.serviceName]} getViewedBounds={_this.getViewedBounds} onClick={_this.handleSpanClick}/>)}</ul>{!module63(selectSpan) && <div className={module4785.detailPane} ref={this.detailPane}><Module4780 span={selectSpan} onClose={this.hideSpanDetail}/></div>}</div></div></Module788>;
            }
        },
        {
            key: "viewRange",
            get: function() {
                return {
                    viewStart: this.state.viewStart,
                    viewEnd: this.state.viewEnd
                };
            }
        }
    ]);
    return r;
})(Component);
export default O;
O.propTypes = {
    visible: module1.bool,
    detail: module1.object,
    onCancel: module1.func
};
O.defaultProps = {
    visible: false,
    detail: {},
    onCancel: function() {}
};
