(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/scramble-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrambleText",
    ()=>ScrambleText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$scramble$2f$dist$2f$use$2d$scramble$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-scramble/dist/use-scramble.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrambleText(param) {
    let { text, className = "", speed = 0.5, tick = 1, step = 1, scramble = 5, seed = 3 } = param;
    _s();
    const { ref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$scramble$2f$dist$2f$use$2d$scramble$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScramble"])({
        text,
        speed,
        tick,
        step,
        scramble,
        seed,
        overdrive: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/scramble-text.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_s(ScrambleText, "6t7IkcmcKvEvRWfp9gsczdEP63I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$scramble$2f$dist$2f$use$2d$scramble$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScramble"]
    ];
});
_c = ScrambleText;
var _c;
__turbopack_context__.k.register(_c, "ScrambleText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/use-scramble/dist/use-scramble.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScramble",
    ()=>useScramble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomChar(range) {
    var rand = 0;
    if (range.length === 2) {
        rand = getRandomInt(range[0], range[1]);
    } else {
        rand = range[getRandomInt(0, range.length - 1)];
    }
    return String.fromCharCode(rand);
}
var useScramble = function useScramble(props) {
    var _props$playOnMount = props.playOnMount, playOnMount = _props$playOnMount === void 0 ? true : _props$playOnMount, _props$text = props.text, text = _props$text === void 0 ? '' : _props$text, _props$speed = props.speed, speed = _props$speed === void 0 ? 1 : _props$speed, _props$seed = props.seed, seed = _props$seed === void 0 ? 1 : _props$seed, _props$step = props.step, step = _props$step === void 0 ? 1 : _props$step, _props$tick = props.tick, tick = _props$tick === void 0 ? 1 : _props$tick, _props$scramble = props.scramble, scramble = _props$scramble === void 0 ? 1 : _props$scramble, _props$chance = props.chance, chance = _props$chance === void 0 ? 1 : _props$chance, _props$overflow = props.overflow, overflow = _props$overflow === void 0 ? true : _props$overflow, _props$range = props.range, range = _props$range === void 0 ? [
        65,
        125
    ] : _props$range, _props$overdrive = props.overdrive, overdrive = _props$overdrive === void 0 ? true : _props$overdrive, onAnimationStart = props.onAnimationStart, onAnimationFrame = props.onAnimationFrame, onAnimationEnd = props.onAnimationEnd, _props$ignore = props.ignore, ignore = _props$ignore === void 0 ? [
        ' '
    ] : _props$ignore;
    var prefersReducedMotion = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
    if (prefersReducedMotion) {
        step = text.length;
        chance = 0;
        overdrive = false;
    }
    // text node ref
    var nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // animation frame request
    var rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // compute
    var elapsedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var fpsInterval = 1000 / (60 * speed);
    // scramble step
    var stepRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // current character index ref
    var scrambleIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // scramble controller
    var controlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // overdrive control index
    var overdriveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var setIfNotIgnored = function setIfNotIgnored(value, replace) {
        return ignore.includes("" + value) ? value : replace;
    };
    // pick random character ahead in the string, and add them to the randomizer
    var seedForward = function seedForward() {
        if (scrambleIndexRef.current === text.length) return;
        for(var i = 0; i < seed; i++){
            var index = getRandomInt(scrambleIndexRef.current, controlRef.current.length);
            if (typeof controlRef.current[index] !== 'number' && typeof controlRef.current[index] !== 'undefined') {
                controlRef.current[index] = setIfNotIgnored(controlRef.current[index], getRandomInt(0, 10) >= (1 - chance) * 10 ? scramble || seed : 0);
            }
        }
    };
    // add `step` characters to the randomizer, and increase the scrambleIndexRef pointer
    var stepForward = function stepForward() {
        for(var i = 0; i < step; i++){
            if (scrambleIndexRef.current < text.length) {
                var currentIndex = scrambleIndexRef.current;
                var shouldScramble = getRandomInt(0, 10) >= (1 - chance) * 10;
                controlRef.current[currentIndex] = setIfNotIgnored(text[scrambleIndexRef.current], shouldScramble ? scramble + getRandomInt(0, Math.ceil(scramble / 2)) : 0);
                scrambleIndexRef.current++;
            }
        }
    };
    var resizeControl = function resizeControl() {
        if (text.length < controlRef.current.length) {
            controlRef.current.pop();
            controlRef.current.splice(text.length, step);
        }
        for(var i = 0; i < step; i++){
            if (controlRef.current.length < text.length) {
                controlRef.current.push(setIfNotIgnored(text[controlRef.current.length + 1], null));
            }
        }
    };
    var onOverdrive = function onOverdrive() {
        if (!overdrive) return;
        for(var i = 0; i < step; i++){
            var max = Math.max(controlRef.current.length, text.length);
            if (overdriveRef.current < max) {
                controlRef.current[overdriveRef.current] = setIfNotIgnored(text[overdriveRef.current], String.fromCharCode(typeof overdrive === 'boolean' ? 95 : overdrive));
                overdriveRef.current++;
            }
        }
    };
    var onTick = function onTick() {
        stepForward();
        resizeControl();
        seedForward();
    };
    /**
   * Control the animation framerate, from the speed prop
   *
   * if speed is 0, stop the animation
   */ var animate = function animate(time) {
        if (!speed) return;
        rafRef.current = requestAnimationFrame(animate);
        onOverdrive();
        var timeElapsed = time - elapsedRef.current;
        if (timeElapsed > fpsInterval) {
            elapsedRef.current = time;
            if (stepRef.current % tick === 0) {
                onTick();
            }
            draw();
        }
    };
    /**
   * Redraw text on every animation frame
   */ var draw = function draw() {
        if (!nodeRef.current) return;
        var result = '';
        for(var i = 0; i < controlRef.current.length; i++){
            var controlValue = controlRef.current[i];
            switch(true){
                /**
         * a positive integer value, get a random character
         */ case typeof controlValue === 'number' && controlValue > 0:
                    result += getRandomChar(range);
                    if (i <= scrambleIndexRef.current) {
                        // reduce scramble index only if it's past the scrambleIndexRef
                        controlRef.current[i] = controlRef.current[i] - 1;
                    }
                    break;
                /**
         * a string from the previous text
         */ case typeof controlValue === 'string' && (i >= text.length || i >= scrambleIndexRef.current):
                    result += controlValue;
                    break;
                /**
         * before scramble index, and equal to the string
         */ case controlValue === text[i] && i < scrambleIndexRef.current:
                    result += text[i];
                    break;
                /**
         * scramble has finished
         */ case controlValue === 0 && i < text.length:
                    result += text[i];
                    controlRef.current[i] = text[i];
                    break;
                default:
                    result += '';
            }
        }
        // set text
        nodeRef.current.innerHTML = result;
        onAnimationFrame && onAnimationFrame(result);
        /**
     * Exit if the result is equal to the input
     *
     * - Trim control to text length
     * - fire onAnimationEnd
     */ if (result === text) {
            controlRef.current.splice(text.length, controlRef.current.length);
            onAnimationEnd && onAnimationEnd();
            cancelAnimationFrame(rafRef.current);
        }
        stepRef.current++;
    };
    /**
   * Reset scramble controls
   *
   * if overflow is true, overflow the control to the an empty array, the size of the text input. This will cause the animation to play from an empty string
   */ var reset = function reset() {
        stepRef.current = 0;
        scrambleIndexRef.current = 0;
        overdriveRef.current = 0;
        if (!overflow) {
            controlRef.current = new Array(text == null ? void 0 : text.length);
        }
    };
    /**
   * Restarts the animation
   *
   * Cancels the current animation frame, resets the scramble index and other controls, and requests a new animation
   */ var play = function play() {
        cancelAnimationFrame(rafRef.current);
        reset();
        onAnimationStart && onAnimationStart();
        rafRef.current = requestAnimationFrame(animate);
    };
    /**
   * reset scramble when text input is changed
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScramble.useEffect": function() {
            reset();
        }
    }["useScramble.useEffect"], [
        text
    ]);
    /**
   * start or stop animation when text and speed change
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScramble.useEffect": function() {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(animate);
            // cancel raf on unmount
            return ({
                "useScramble.useEffect": function() {
                    cancelAnimationFrame(rafRef.current);
                }
            })["useScramble.useEffect"];
        }
    }["useScramble.useEffect"], [
        animate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScramble.useEffect": function() {
            if (!playOnMount) {
                controlRef.current = text.split('');
                stepRef.current = text.length;
                scrambleIndexRef.current = text.length;
                overdriveRef.current = text.length;
                draw();
                cancelAnimationFrame(rafRef.current);
            }
        }
    }["useScramble.useEffect"], []);
    return {
        ref: nodeRef,
        replay: play
    };
};
;
 //# sourceMappingURL=use-scramble.esm.js.map
}),
]);

//# sourceMappingURL=_2d911633._.js.map