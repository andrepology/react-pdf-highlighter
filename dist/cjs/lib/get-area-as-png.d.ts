import type { LTWHP } from "../types.js";
export declare const getAreaAsPNG: (canvas: HTMLCanvasElement, position: LTWHP, extendedRenderer?: ((newCanvas: CanvasRenderingContext2D) => void) | undefined) => string;
export declare const getAreaAsPngWithContext: (canvas: HTMLCanvasElement, position: LTWHP, contextPosition: LTWHP) => string;
