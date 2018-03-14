/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./error.component";
import * as i3 from "./error.service";
var styles_ErrorComponent = [".backdrop[_ngcontent-%COMP%] {\n        background-color: rgba(0,0,0,0.6);\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100vh;\n    }"];
var RenderType_ErrorComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_ErrorComponent, data: {} });
export { RenderType_ErrorComponent as RenderType_ErrorComponent };
export function View_ErrorComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, [" \n"])), (_l()(), i0.ɵeld(1, 0, null, null, 2, "div", [["class", "backdrop"]], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(3, { "display": 0 }), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(5, 0, null, null, 31, "div", [["class", "modal"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), i0.ɵdid(6, 278528, null, 0, i1.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(7, { "display": 0 }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(9, 0, null, null, 26, "div", [["class", "modal-dialog"], ["role", "document"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(11, 0, null, null, 23, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(13, 0, null, null, 8, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(15, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onErrorHandled() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(16, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(19, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), i0.ɵted(20, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(23, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(25, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(26, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(29, 0, null, null, 4, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(31, 0, null, null, 1, "button", [["class", "btn btn-default"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onErrorHandled() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["Close"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.display); _ck(_v, 2, 0, currVal_0); var currVal_1 = _ck(_v, 7, 0, _co.display); _ck(_v, 6, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.error == null) ? null : _co.error.title); _ck(_v, 20, 0, currVal_2); var currVal_3 = ((_co.error == null) ? null : _co.error.message); _ck(_v, 26, 0, currVal_3); }); }
export function View_ErrorComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-error", [], null, null, null, View_ErrorComponent_0, RenderType_ErrorComponent)), i0.ɵdid(1, 114688, null, 0, i2.ErrorComponent, [i3.ErrorService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ErrorComponentNgFactory = i0.ɵccf("app-error", i2.ErrorComponent, View_ErrorComponent_Host_0, {}, {}, []);
export { ErrorComponentNgFactory as ErrorComponentNgFactory };
