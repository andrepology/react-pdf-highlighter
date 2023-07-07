"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAreaAsPngWithContext = exports.getAreaAsPNG = void 0;
const pdfjs_dom_1 = require("./pdfjs-dom");
const getAreaAsPNG = (canvas, position, extendedRenderer) => {
    const { left, top, width, height } = position;
    const doc = canvas ? canvas.ownerDocument : null;
    // @TODO: cache this?
    const newCanvas = doc && doc.createElement("canvas");
    if (!newCanvas || !(0, pdfjs_dom_1.isHTMLCanvasElement)(newCanvas)) {
        return "";
    }
    newCanvas.width = width;
    newCanvas.height = height;
    const newCanvasContext = newCanvas.getContext("2d");
    if (!newCanvasContext || !canvas) {
        return "";
    }
    const dpr = window.devicePixelRatio;
    newCanvasContext.drawImage(canvas, left * dpr, top * dpr, width * dpr, height * dpr, 0, 0, width, height);
    extendedRenderer != null && extendedRenderer(newCanvasContext);
    return newCanvas.toDataURL("image/png");
};
exports.getAreaAsPNG = getAreaAsPNG;
const getAreaAsPngWithContext = (canvas, position, contextPosition) => {
    const pixelRatio = window.devicePixelRatio;
    return (0, exports.getAreaAsPNG)(canvas, contextPosition, (newCanvas) => {
        newCanvas.globalAlpha = 0.2;
        newCanvas.fillStyle = "#7025B3";
        newCanvas.fillRect(position.left * pixelRatio, position.top * pixelRatio, position.width * pixelRatio, position.height * pixelRatio);
        newCanvas.globalAlpha = 1.0;
    });
};
exports.getAreaAsPngWithContext = getAreaAsPngWithContext;
//# sourceMappingURL=get-area-as-png.js.map