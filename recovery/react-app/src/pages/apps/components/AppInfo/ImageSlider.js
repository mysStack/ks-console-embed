import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-319.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module836 from "components/Base/Image";
import module3189 from "unpacked/module-3189.js";
const g = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
        t.handleClickImage = function(e) {
            const idx = e.currentTarget.dataset.idx;
            t.stopAnimation();
            t.setState({
                showOverlay: true,
                currentIdx: parseInt(idx, 10) || 0
            });
        };
        t.closeOverlay = function() {
            t.setState({
                showOverlay: false
            });
        };
        t.getPrevNextIdx = function(e = "next") {
            const currentIdx = t.state.currentIdx;
            const length = t.props.images.length;
            if (e === "next") {
                if (currentIdx + 1 >= length) {
                    return 0;
                }
                return currentIdx + 1;
            }
            if (currentIdx - 1 < 0) {
                return length - 1;
            }
            return currentIdx - 1;
        };
        t.showNextPic = function() {
            t.setState({
                currentIdx: t.getPrevNextIdx()
            });
        };
        t.handleClickPrev = function() {
            t.goToIdx(t.getPrevNextIdx("prev"));
        };
        t.handleClickNext = function() {
            t.goToIdx(t.getPrevNextIdx());
        };
        t.handleClickIndicator = function(e) {
            t.goToIdx(e);
        };
        t.goToIdx = function(currentIdx) {
            t.stopAnimation();
            t.setState({
                currentIdx
            });
        };
        t.state = {
            showOverlay: false,
            currentIdx: e.defaultIdx || 0
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                const currentIdx = this.state.currentIdx;
                if (currentIdx !== t.currentIdx) {
                    this.props.onChangeImage(this.props.images[currentIdx]);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.stopAnimation();
            }
        },
        {
            key: "stopAnimation",
            value: function() {
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }
        },
        {
            key: "renderOverlay",
            value: function() {
                const state = this.state;
                const { showOverlay, currentIdx } = state;
                const r = this.props.images[currentIdx];
                if (showOverlay) {
                    return <div className={module3189.overlay}><div className={module3189.closeOverlay} onClick={this.closeOverlay}><module186.Icon name="close" size={24} type="dark"/></div><div className={module3189.viewCont}><label className={module3189.pre} onClick={this.handleClickPrev}><module186.Icon name="chevron-left" size={24} type="dark"/></label><label className={module3189.next} onClick={this.handleClickNext}><module186.Icon name="chevron-right" size={24} type="dark"/></label><div className={module3189.overlayPic}><Module836 src={r}/></div></div></div>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { images, className } = props;
                const currentIdx = this.state.currentIdx;
                const o = 210 * images.length;
                const i = 210 * currentIdx;
                if (images.length) {
                    return <div className={module3(module3189.slider, className)}><label className={module3189.pre} onClick={this.handleClickPrev}><module186.Icon name="chevron-left" size={24} type="dark"/></label><label className={module3189.next} onClick={this.handleClickNext}><module186.Icon name="chevron-right" size={24} type="dark"/></label>{images.length > 2 && <div className={module3189.dotList}>{images.map((t, a)=><label key={`${t}-${a}`} className={module3189.dot} onClick={function() {
                            return _this.handleClickIndicator(a);
                        }}><span className={module3(module31({}, module3189.active, currentIdx === a))}/></label>)}</div>}<div className={module3189.listOuter}><ul className={module3189.pictureList} style={{
                        width: `${o}px`,
                        left: `-${i}px`
                    }}>{images.map((t, a)=><li className={module3189.pictureOuter} key={a}><div className={module3189.picture} data-idx={a} onClick={_this.handleClickImage}><Module836 src={t}/></div></li>)}</ul></div>{this.renderOverlay()}</div>;
                }
                return <div className={module3189.slider}>{t("NONE")}</div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default g;
g.propTypes = {
    images: module1.array.isRequired,
    onChangeImage: module1.func,
    defaultIdx: module1.number
};
g.defaultProps = {
    images: [],
    onChangeImage: function() {},
    defaultIdx: 0
};
