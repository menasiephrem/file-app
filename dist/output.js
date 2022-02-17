import { jsx, jsxs } from 'react/jsx-runtime';
import { createElement } from 'react';
import TreeMenu from 'react-simple-tree-menu';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.0.22 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;tab-size:4}body{line-height:inherit}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.ml-0{margin-left:0}.ml-6{margin-left:1.5rem}.ml-10{margin-left:2.5rem}.ml-auto{margin-left:auto}.flex{display:flex}.h-screen{height:100vh}.h-8{height:2rem}.max-h-\\[80vh\\]{max-height:80vh}.w-\\[302px\\]{width:302px}.w-20{width:5rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.overflow-y-scroll{overflow-y:scroll}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded-md{border-radius:.375rem}.border-2{border-width:2px}.border-b-\\[1px\\]{border-bottom-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-task-blue{--tw-bg-opacity:1;background-color:rgb(38 155 247/var(--tw-bg-opacity))}.bg-\\[\\#DFF0FE\\]{--tw-bg-opacity:1;background-color:rgb(223 240 254/var(--tw-bg-opacity))}.bg-\\[\\#269BF7\\]{--tw-bg-opacity:1;background-color:rgb(38 155 247/var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.px-1{padding-left:.25rem}.pr-1,.px-1{padding-right:.25rem}.pr-3{padding-right:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[8px\\]{font-size:8px}.text-base{font-size:1rem;line-height:1.5rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.leading-5{line-height:1.25rem}.leading-4{line-height:1rem}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-task-blue{--tw-text-opacity:1;color:rgb(38 155 247/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-yellow-300{--tw-text-opacity:1;color:rgb(253 224 71/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0}.task-shadow{box-shadow:0 0 7px 2px #0000001c}.left{transform:rotate(-90deg)}.down,.left{border:1px solid #000;height:4px;width:8px}.down{position:absolute}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:transform-gpu:hover{transform:translate3d(var(--tw-translate-x),var(--tw-translate-y),0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}";
styleInject(css_248z,{"insertAt":"top"});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const hasOwn = {}.hasOwnProperty;

function classNames(...args) {
    const classes = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (!arg) {
            continue;
        }

        const argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes.push((this && this[arg]) || arg);
        } else if (Array.isArray(arg)) {
            classes.push(classNames.apply(this, arg));
        } else if (argType === 'object') {
            for (const key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push((this && this[key]) || key);
                }
            }
        }
    }
    return classes.join(' ');
}

var styleClass$1 = {
    root: function (secondary) {
        return classNames("h-8 w-20 task-shadow flex bg-white font-medium text-xs justify-center items-center leading-4 hover:transform-gpu hover:scale-105", !secondary
            ? "bg-white text-task-blue border-eq-red border-2 "
            : "bg-task-blue text-white ");
    },
};
var Button = function (_a) {
    var children = _a.children, classNames = _a.classNames, onClick = _a.onClick, secondary = _a.secondary, rest = __rest(_a, ["children", "classNames", "onClick", "secondary"]);
    return (jsx("button", __assign({}, rest, { onClick: onClick, className: styleClass$1.root(secondary !== null && secondary !== void 0 ? secondary : false) + classNames }, { children: children }), void 0));
};

var MaterialIcon = function (_a) {
    var _b;
    var icon = _a.icon, className = _a.className, rest = __rest(_a, ["icon", "className"]);
    return jsx("span", __assign({}, rest, { className: (_b = " material-icons " + className) !== null && _b !== void 0 ? _b : "" }, { children: icon }), void 0);
};

var styleClass = {
    root: function (level, active) {
        return classNames("flex items-center px-1 hover:bg-gray-100", level === 0 && "ml-0", level === 1 && "ml-6", level === 2 && "ml-10", active && "bg-[#DFF0FE]");
    },
    label: function (active) {
        return classNames("font-normal text-sm truncate", active ? "text-task-blue" : "text-black");
    },
    badge: function (active) {
        return classNames("text-[8px] px-1 rounded-md ml-auto", active ? "bg-[#269BF7] text-white" : " bg-gray-300");
    },
    file: function (isFile, iconClass) {
        return classNames("flex items-center text-sm pr-3 material-icon-outlined", !iconClass && isFile ? "text-yellow-300" : "text-task-blue", iconClass && iconClass);
    },
};
var ToggleIcon = function (_a) {
    var on = _a.on;
    return (jsx(MaterialIcon, { className: "text-base pr-3", icon: on ? "expand_more" : "chevron_right" }, void 0));
};
var ItemComponent = function (_a) {
    var _b = _a.hasNodes, hasNodes = _b === void 0 ? false : _b, _c = _a.isOpen, isOpen = _c === void 0 ? false : _c, onClick = _a.onClick, toggleNode = _a.toggleNode, active = _a.active, _d = _a.label, label = _d === void 0 ? "unknown" : _d, _e = _a.numbers, numbers = _e === void 0 ? "" : _e, level = _a.level, file = _a.file, icon = _a.icon, iconClass = _a.iconClass;
    return (jsxs("li", __assign({ className: styleClass.root(level, active), role: "button", "aria-pressed": active, onClick: onClick }, { children: [hasNodes && (jsx("div", __assign({ className: "flex items-center", onClick: function (e) {
                    toggleNode === null || toggleNode === void 0 ? void 0 : toggleNode();
                    e.stopPropagation();
                } }, { children: jsx(ToggleIcon, { on: isOpen }, void 0) }), void 0)), !hasNodes && (jsx("span", __assign({ className: "" }, { children: jsx(MaterialIcon, { className: styleClass.file(file, iconClass), icon: icon ? icon : file ? "insert_drive_file" : "folder" }, void 0) }), active ? "1" : "2")), jsx("span", __assign({ title: label, className: styleClass.label(false) }, { children: label }), void 0), jsx("span", __assign({ className: styleClass.badge(active) }, { children: numbers }), void 0)] }), void 0));
};

var FileSelector = function (_a) {
    var data = _a.data, onItemClick = _a.onItemClick, initialActiveKey = _a.initialActiveKey;
    return (jsx(TreeMenu, __assign({ data: data, initialActiveKey: initialActiveKey, debounceTime: 125 }, { children: function (_a) {
            var items = _a.items;
            return (jsx("div", { children: jsx("ul", { children: items.map(function (_a) {
                        var key = _a.key, props = __rest(_a, ["key"]);
                        return (jsx("span", __assign({ onClick: onItemClick }, { children: createElement(ItemComponent, __assign({}, props, { key: key })) }), key));
                    }) }, void 0) }, void 0));
        } }), void 0));
};

var File = function (_a) {
    var header = _a.header, data = _a.data, onItemClick = _a.onItemClick, maxHeight = _a.maxHeight;
    return (jsxs("div", __assign({ className: "flex w-[302px] flex-col shadow bg-white task-shadow" }, { children: [header && jsxs("div", __assign({ className: "flex bg-white justify-between  border-b-[1px] border-gray-300 px-4 py-6" }, { children: [jsx("span", __assign({ className: "text-black flex items-center font-bold text-lg leading-5" }, { children: header.title }), void 0), jsxs(Button, __assign({ onClick: header.onClick }, { children: [jsx(MaterialIcon, { className: "pr-1 text-sm", icon: "add" }, void 0), " ", header.buttonText] }), void 0)] }), void 0), jsx("div", __assign({ style: { maxHeight: maxHeight }, className: "px-4 py-3 overflow-y-scroll max-h-[80vh]" }, { children: jsx(FileSelector, { data: data, onItemClick: onItemClick }, void 0) }), void 0)] }), void 0));
};

export { File as FileTree };
