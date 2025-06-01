var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/XlsFormFiller/XlsFormFiller.tsx
import { createContext, useContext, useEffect as useEffect2, useMemo as useMemo3, useState as useState4 } from "react";
import { seq as seq2 } from "@axanc/ts-utils";
import { Box as Box6, Button as Button3, Icon as Icon4, MenuItem, Select } from "@mui/material";

// src/engine/path/Path.ts
import get from "lodash.get";
var Path = class _Path {
  constructor(tokens = []) {
    __publicField(this, "value");
    this.value = tokens;
  }
  get() {
    return this.value;
  }
  add(token) {
    return new _Path([...this.value, token]);
  }
  parentPath() {
    return new _Path(this.value.length > 0 ? this.value.slice(0, -1) : []);
  }
  collectDeeply(values, name) {
    const results = [];
    const traverse = (node) => {
      if (Array.isArray(node)) {
        for (const item of node) {
          traverse(item);
        }
      } else if (typeof node === "object" && node !== null) {
        for (const key in node) {
          if (key === name) {
            results.push(node[key]);
          } else {
            traverse(node[key]);
          }
        }
      }
    };
    traverse(values);
    return results.length > 0 ? results : void 0;
  }
  searchInBranch(values, name) {
    let cursor = this;
    for (; ; ) {
      const fullPath = [...cursor.toLodashPath(), name];
      const value = get(values, fullPath);
      if (value !== void 0) return value;
      if (cursor.value.length === 0) return;
      cursor = cursor.parentPath();
    }
  }
  // private findPrimitiveKey(obj: any, key: string): string | undefined {
  //   if (!obj || typeof obj !== 'object') return undefined
  //   if (key in obj && typeof obj[key] === 'string') return obj[key]
  //   return undefined
  // }
  get last() {
    return this.value[this.value.length - 1];
  }
  get first() {
    return this.value[0];
  }
  toString() {
    return this.value.flatMap((_) => `${_.repeatGroupName}[${_.index}]`).join(".");
  }
  toLodashPath() {
    return this.value.flatMap((_) => [_.repeatGroupName, _.index]);
  }
};

// src/XlsFormFiller/XlsFormFiller.tsx
import cloneDeep from "lodash.clonedeep";
import set from "lodash.set";
import get2 from "lodash.get";

// src/utils/helpers.ts
var isValidDateString = (d) => {
  return /^\d{4}-\d{2}-\d{2}/.test(d);
};
var formatDateTime = (_) => _.toISOString();
var formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = bytes / Math.pow(1024, i);
  return `${size.toFixed(2)} ${sizes[i]}`;
};
function nestGroups(flat) {
  const stack = [];
  const result = [];
  for (const item of flat) {
    if (item.type === "begin_group" || item.type === "begin_repeat") {
      const group = { ...item, children: [] };
      stack.push(group);
    } else if (item.type === "end_group" || item.type === "end_repeat") {
      const completed = stack.pop();
      if (!completed) {
        throw new Error("Unmatched end_group found");
      }
      if (stack.length > 0) {
        stack[stack.length - 1].children.push(completed);
      } else {
        result.push(completed);
      }
    } else {
      if (stack.length > 0) {
        stack[stack.length - 1].children.push(item);
      } else {
        result.push(item);
      }
    }
  }
  return result;
}

// src/XlsFormFiller/Question.tsx
import { memo, useEffect, useMemo as useMemo2 } from "react";
import { Checkbox, FormControlLabel, FormGroup, Input as Input3, Radio, RadioGroup } from "@mui/material";

// src/XlsFormFiller/layout/QuestionLayout.tsx
import { alpha, Box, Collapse, styled, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Root = styled(Box)(({ theme, error }) => ({
  background: error ? alpha(theme.palette.error.light, 0.15) : theme.palette.background.paper,
  // border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius + "px",
  // border: error ? `2px solid ${theme.palette.error.main}` : undefined,
  borderLeft: error ? `2px solid ${theme.palette.error.main}` : void 0,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  marginBottom: theme.spacing(0.5),
  // py: 1,
  // px: 2,
  // mb: .5,
  "&:not(:first-of-type)": {
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px"
  },
  "&:not(:last-of-type)": {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px"
  }
}));
var QuestionLayout = ({
  label,
  hint,
  children,
  visible,
  error
}) => {
  const t = useTheme();
  return /* @__PURE__ */ jsx(Collapse, { in: visible, unmountOnExit: true, children: /* @__PURE__ */ jsxs(Root, { error: !!error, children: [
    /* @__PURE__ */ jsxs(Box, { sx: { mb: children ? 1 : 0 }, children: [
      /* @__PURE__ */ jsx(Box, { sx: { fontWeight: t.typography.fontWeightBold }, children: /* @__PURE__ */ jsx(ReactMarkdown, { components: { p: ({ children: children2 }) => /* @__PURE__ */ jsx(Fragment, { children: children2 }) }, children: label }) }),
      hint && /* @__PURE__ */ jsx(Box, { sx: { color: t.palette.text.secondary }, children: /* @__PURE__ */ jsx(ReactMarkdown, { components: { p: ({ children: children2 }) => /* @__PURE__ */ jsx(Fragment, { children: children2 }) }, children: hint }) })
    ] }),
    children,
    /* @__PURE__ */ jsx(Box, { sx: { color: t.palette.error.main }, children: error })
  ] }) });
};

// src/XlsFormFiller/layout/GroupLayout.tsx
import { useState } from "react";
import { Box as Box3, Collapse as Collapse2, Icon, IconButton, useTheme as useTheme3 } from "@mui/material";

// src/XlsFormFiller/layout/Title.tsx
import { Box as Box2, useTheme as useTheme2 } from "@mui/material";
import { jsx as jsx2 } from "react/jsx-runtime";
var Title = ({
  sx,
  ...props
}) => {
  const t = useTheme2();
  return /* @__PURE__ */ jsx2(Box2, { sx: { fontSize: "1.25em", fontWeight: t.typography.fontWeightBold, ...sx }, ...props });
};

// src/XlsFormFiller/layout/GroupLayout.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var GroupLayout = ({
  label,
  hint,
  children
}) => {
  const t = useTheme3();
  const [open, setOpen] = useState(true);
  return /* @__PURE__ */ jsxs2(Box3, { sx: { position: "relative", mb: 2 }, children: [
    /* @__PURE__ */ jsxs2(Box3, { sx: { display: "flex", alignItems: "center", mb: 1 }, children: [
      /* @__PURE__ */ jsx3(IconButton, { size: "small", onClick: () => setOpen((_) => !_), children: /* @__PURE__ */ jsx3(Icon, { children: open ? "keyboard_arrow_down" : "keyboard_arrow_right" }) }),
      /* @__PURE__ */ jsx3(Title, { children: label })
    ] }),
    /* @__PURE__ */ jsx3(Collapse2, { in: open, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsx3(Box3, { sx: {
      position: "relative",
      pl: 1,
      ml: "14px",
      "&:before": {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        content: '" "',
        width: "1px",
        background: t.palette.divider
      }
    }, children }) })
  ] });
};

// src/XlsFormFiller/Question.tsx
import { mapFor } from "@axanc/ts-utils";

// src/XlsFormFiller/layout/RepeatLayout.tsx
import { Box as Box4, useTheme as useTheme4 } from "@mui/material";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var RepeatLayout = ({
  children,
  index,
  hint,
  label
}) => {
  const t = useTheme4();
  return /* @__PURE__ */ jsxs3(Box4, { sx: { position: "relative", p: 1, mb: 1, boxShadow: t.shadows[1], borderRadius: t.shape.borderRadius + "px" }, children: [
    /* @__PURE__ */ jsx4(Title, { sx: { mb: 1 }, children: label }),
    /* @__PURE__ */ jsx4(
      Box4,
      {
        sx: {
          color: t.palette.info.contrastText,
          position: "absolute",
          fontSize: "0.75em",
          fontWeight: t.typography.fontWeightBold,
          top: t.spacing(1),
          right: t.spacing(1),
          borderRadius: 50,
          background: t.palette.info.main,
          width: 20,
          height: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: index + 1
      }
    ),
    children
  ] });
};

// src/engine/ast/astEval.ts
import jsep from "jsep";

// src/engine/ast/functions.ts
import { seq } from "@axanc/ts-utils";
var now = /* @__PURE__ */ new Date();
var Function = class {
  constructor(params) {
    this.params = params;
  }
  get localName() {
    return this.params.localName;
  }
  get signature() {
    return this.params.signature;
  }
  get call() {
    return this.params.call;
  }
};
var functions = {
  regex: new Function({
    localName: "regex",
    call: (env, args) => {
      return new RegExp(args[1]).test(args[0]);
    }
  }),
  selected: new Function({
    localName: "selected",
    call: (env, args) => {
      return args[0]?.split(/\s+/).includes(args[1]);
    }
  }),
  if: new Function({
    localName: "if",
    call: (env, args) => {
      return args[0] ? args[1] : args[2];
    }
  }),
  sum: new Function({
    localName: "sum",
    call: (env, [args]) => {
      return args.reduce((sum, _) => {
        if (isNaN(_)) return sum;
        return sum + +_;
      }, 0);
    }
  }),
  countSelected: new Function({
    localName: "count-selected",
    call: (env, args) => {
      return args[0]?.split(" ").length ?? 0;
    }
  }),
  indexedRepeat: new Function({
    localName: "indexed-repeat",
    call: (env, args) => {
      return new RegExp(args[1]).test(args[0]);
    }
  }),
  position: new Function({
    localName: "position",
    call: (env, args) => {
      console.log("position", args);
      return args[0];
    }
  }),
  today: new Function({
    localName: "today",
    call: (env, args) => {
      return now.toISOString().substring(0, 10);
    }
  }),
  int: new Function({
    localName: "int",
    call: (env, [int]) => {
      if (typeof int !== "number") throw new AstError.InvalidInteger();
      return int > 0 ? Math.floor(int) : Math.ceil(int);
    }
  }),
  substr: new Function({
    localName: "substr",
    signature: [
      { arityType: "required" },
      { arityType: "required", type: "number" },
      { arityType: "optional", type: "number" }
    ],
    call: (env, [string, start, end]) => {
      const { length } = string ?? "";
      if (length === 0) {
        return "";
      }
      end = end ?? length;
      if (start < 0) {
        start = length + start;
      }
      if (end < 0) {
        end = length + end;
      }
      end = Math.min(Math.max(0, end), length);
      start = Math.min(Math.max(0, start), length);
      return start <= end ? string.substring(start, end) : "";
    }
  }),
  ...seq([
    "abs",
    "acos",
    "asin",
    "atan",
    "ceil",
    "cos",
    "exp",
    "floor",
    "log",
    "log10",
    "round",
    "sin",
    "sqrt",
    "tan"
  ]).reduceObject((method) => [
    method,
    new Function({
      localName: method,
      call: (env, [number]) => {
        if (Number.isNaN(number)) {
          return number;
        }
        return Math[method](number);
      }
    })
  ]),
  stringLength: new Function({
    localName: "string-length",
    signature: [{ arityType: "optional", type: "string" }],
    call: (env, [expression]) => {
      return expression?.toString().length;
    }
  }),
  substringAfter: new Function({
    localName: "substring-after",
    signature: [
      { arityType: "required", type: "string" },
      { arityType: "required", type: "string" }
    ],
    call: (env, [haystack, needle]) => {
      if (haystack === "") {
        return "";
      }
      if (needle === "") {
        return haystack;
      }
      const needleIndex = haystack.indexOf(needle);
      return needleIndex === -1 ? "" : haystack.slice(needleIndex + 1);
    }
  }),
  substringBefore: new Function({
    localName: "substring-before",
    signature: [{ arityType: "required" }, { arityType: "required", type: "string" }],
    call: (env, [haystack, needle]) => {
      if (haystack === "") {
        return "";
      }
      const needleIndex = haystack.indexOf(needle);
      return needleIndex === -1 ? "" : haystack.slice(0, needleIndex);
    }
  }),
  formatDateTime: new Function({
    localName: "format-date-time",
    signature: [
      { arityType: "required", type: "string" },
      { arityType: "required", type: "string" }
    ],
    call: (env, [value, format]) => {
    }
  })
};

// src/engine/ast/astEval.ts
import { duration } from "@axanc/ts-utils";
var AstError;
((AstError2) => {
  class Base extends Error {
  }
  AstError2.Base = Base;
  class UndefinedParentIndex extends Base {
  }
  AstError2.UndefinedParentIndex = UndefinedParentIndex;
  class InvalidInteger extends Base {
  }
  AstError2.InvalidInteger = InvalidInteger;
  class FunctionNotImplemented extends Base {
    constructor(fnName) {
      super(fnName);
    }
  }
  AstError2.FunctionNotImplemented = FunctionNotImplemented;
})(AstError || (AstError = {}));
var dateTypes = /* @__PURE__ */ new Set([
  "date",
  "datetime",
  "today",
  "start",
  "end"
]);
var is = {
  binary: (expr) => expr.type === "BinaryExpression",
  call: (expr) => expr.type === "CallExpression",
  identifier: (expr) => expr.type === "Identifier",
  literal: (expr) => expr.type === "Literal",
  unary: (expr) => expr.type === "UnaryExpression"
};
var AstFormEvaluator = class {
  constructor(env) {
    this.env = env;
    __publicField(this, "preprocessedFormula", (formula) => {
      let parsed = formula.replace(/position\(\.\.\)/g, () => {
        const index = this.env.path?.last?.index;
        if (index === void 0) throw new AstError.UndefinedParentIndex();
        return index + 1 + "";
      }).replace(/(?<=^|[^\w])\.(?=$|[^\w])/g, this.env.thatName).replace(/\bnot\(/g, "!(").replace(/[^<>!]=/g, "==").replace(/\bdiv\b/g, " / ").replace(/\bmod\b/g, " % ").replace(/\band\b/g, " && ").replace(/\bor\b/g, " || ").replace(/\$\{([^}]+)}/g, (_, name) => name);
      Object.entries(functions).forEach(([functionName, prototype]) => {
        parsed = parsed.replace(new RegExp(`${prototype.localName}`, "g"), functionName);
      });
      return parsed;
    });
    __publicField(this, "isTypeDate", (questionName) => dateTypes.has(this.env.questionsMap[questionName].type));
    __publicField(this, "evaluate", (node, context) => {
      if (is.literal(node)) {
        return node.value;
      }
      if (is.identifier(node)) {
        return this.resolveVar(node.name, context);
      }
      if (is.binary(node)) {
        return this.applyBinary(node.operator, this.evaluate(node.left), this.evaluate(node.right));
      }
      if (is.unary(node)) {
        return this.applyUnary(node.operator, this.evaluate(node.argument));
      }
      if (is.call(node)) {
        const fnName = node.callee.name;
        const args = node.arguments.map((_) => this.evaluate(_, { inFunction: fnName }));
        return this.callFunction(fnName, args);
      }
      throw new Error(`Unknown node type: ${node.type}`);
    });
    __publicField(this, "resolveVar", (name, context) => {
      const fnResolvingDeeply = [
        "sum"
      ];
      const resolveDeeply = fnResolvingDeeply.includes(context?.inFunction);
      if (resolveDeeply)
        return this.env.path?.collectDeeply(this.env.values, name);
      return this.env.path?.searchInBranch(this.env.values, name);
    });
    // private parseValue(name?: string): any {
    //   if (!name) return undefined
    //   return this.env.values?.[name]
    // }
    __publicField(this, "applyBinary", (op, left, right) => {
      if (isValidDateString(left)) left = duration(+new Date(left)).toDays;
      if (isValidDateString(right)) right = duration(+new Date(right)).toDays;
      switch (op) {
        case "+":
          return left + right;
        case "-": {
          return left - right;
        }
        case "*":
          return left * right;
        case "/":
          return left / right;
        case "%":
          return left % right;
        case "==":
          return left == right;
        case "===":
          return left === right;
        case "!=":
          return left != right;
        case "!==":
          return left !== right;
        case ">":
          return left > right;
        case "<":
          return left < right;
        case ">=":
          return left >= right;
        case "<=":
          return left <= right;
        case "&&":
          return left && right;
        case "||":
          return left || right;
        default:
          throw new Error(`Unsupported operator: ${op}`);
      }
    });
    __publicField(this, "applyUnary", (op, arg) => {
      switch (op) {
        case "+":
          return +arg;
        case "-":
          return -arg;
        case "!":
          return !arg;
        default:
          throw new Error(`Unsupported unary operator: ${op}`);
      }
    });
    __publicField(this, "callFunction", (name, args) => {
      const fn = functions[name];
      if (!fn) {
        throw new AstError.FunctionNotImplemented(name);
      }
      return fn.call(this.env, args);
    });
  }
  eval(formula) {
    if (!formula || formula === "") return;
    const cleanFormula = this.preprocessedFormula(formula);
    try {
      const ast = jsep(cleanFormula);
      const result = this.evaluate(ast);
      return result;
    } catch (e) {
      console.error("Eval error:", cleanFormula, e);
      return;
    }
  }
  indexedRepeat(field, group, index) {
    return this.env.values?.[group]?.[index - 1]?.[field];
  }
};

// src/XlsFormFiller/type/QuestionLocation.tsx
import { useState as useState2 } from "react";
import { Box as Box5, Button, Icon as Icon2, Input, Typography, useTheme as useTheme5 } from "@mui/material";
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var QuestionLocation = ({
  value,
  onChange
}) => {
  const t = useTheme5();
  const ctx = useXlsFormFillerContext();
  const [error, setError] = useState2(null);
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        onChange([position.coords.latitude, position.coords.longitude]);
        setError(null);
      },
      (err) => {
        setError(`Error: ${err.message}`);
        onChange(null);
      }
    );
  };
  return /* @__PURE__ */ jsxs4(Fragment2, { children: [
    /* @__PURE__ */ jsx5(
      Button,
      {
        variant: "contained",
        color: "primary",
        onClick: handleGetLocation,
        startIcon: /* @__PURE__ */ jsx5(Icon2, { children: "my_location" }),
        children: ctx.labels.getMyLocation
      }
    ),
    location && /* @__PURE__ */ jsxs4(Box5, { sx: { mt: 1, display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ jsx5(
        Input,
        {
          value: value?.[0],
          sx: { mr: 1 },
          startAdornment: /* @__PURE__ */ jsx5(Box5, { sx: { fontWeight: t.typography.fontWeightBold }, children: "Lat:\xA0" }),
          fullWidth: true,
          type: "number",
          disabled: true
        }
      ),
      /* @__PURE__ */ jsx5(
        Input,
        {
          disabled: true,
          startAdornment: /* @__PURE__ */ jsx5(Box5, { sx: { fontWeight: t.typography.fontWeightBold }, children: "Lon:\xA0" }),
          value: value?.[1],
          fullWidth: true,
          type: "number"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx5(Box5, { mt: 2, children: /* @__PURE__ */ jsx5(Typography, { variant: "body1", color: "error", children: error }) })
  ] });
};

// src/XlsFormFiller/type/QuestionFile.tsx
import { Icon as Icon3, IconButton as IconButton2, styled as styled2, TextField } from "@mui/material";
import { useMemo, useRef } from "react";
import { Fragment as Fragment3, jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var ImageContainer = styled2("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  fontWeight: theme.typography.fontWeightBold,
  position: "relative",
  width: "100%",
  border: `1px solid ${theme.palette.divider}`,
  maxWidth: "100%",
  maxHeight: 200,
  objectFit: "contain",
  borderRadius: theme.shape.borderRadius - 4 + "px",
  display: "flex",
  justifyContent: "center"
}));
var Image = styled2("img")(({ theme }) => ({
  margin: "auto",
  height: "100%",
  maxHeight: 200
}));
var DeleteBtn = styled2(IconButton2)(({ theme }) => ({
  marginRight: theme.spacing(-1),
  marginLeft: theme.spacing(1)
}));
var QuestionFile = ({
  onClear,
  file,
  onChange,
  type
}) => {
  const ctx = useXlsFormFillerContext();
  const fileInputRef = useRef(null);
  const previewUrl = useMemo(() => {
    if (type !== "image" || !file) return;
    return URL.createObjectURL(file);
  }, [file]);
  const handleFile = (file2) => {
    onChange(file2);
  };
  const handleDelete = () => {
    onClear();
    fileInputRef.current.value = "";
  };
  return /* @__PURE__ */ jsxs5(Fragment3, { children: [
    /* @__PURE__ */ jsx6(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: type === "image" ? "image/*" : "",
        style: { display: "none" },
        onChange: (e) => {
          const file2 = e.target.files?.[0];
          if (file2) handleFile(file2);
        }
      }
    ),
    /* @__PURE__ */ jsx6(
      TextField,
      {
        variant: "standard",
        fullWidth: true,
        helperText: file ? formatFileSize(file.size) : "",
        value: file?.name ?? "",
        slotProps: {
          input: {
            startAdornment: /* @__PURE__ */ jsx6(Icon3, { color: "disabled", sx: { mr: 1 }, children: type === "image" ? "image" : "description" }),
            endAdornment: file && /* @__PURE__ */ jsx6(
              DeleteBtn,
              {
                "aria-label": "delete",
                color: "primary",
                onClick: (e) => {
                  handleDelete();
                  e.stopPropagation();
                },
                size: "small",
                children: /* @__PURE__ */ jsx6(Icon3, { fontSize: "small", children: "delete" })
              }
            )
          }
        },
        onClick: () => fileInputRef.current?.click(),
        placeholder: type === "image" ? file ? ctx.labels.changeImage : ctx.labels.selectImage : file ? ctx.labels.changeFile : ctx.labels.selectFile
      }
    ),
    previewUrl && /* @__PURE__ */ jsx6(ImageContainer, { children: /* @__PURE__ */ jsx6(
      Image,
      {
        src: previewUrl,
        alt: "Preview"
      }
    ) })
  ] });
};

// src/XlsFormFiller/Question.tsx
import { Fragment as Fragment4, jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var parseChoiceFilter = (q) => {
  if (!q.choice_filter) return;
  const [, key, questionName] = q.choice_filter.match(/([^=]*)=\$\{(.*?)}/) ?? [];
  return { key, questionName };
};
var getFilteredList = ({
  q,
  choicesMap,
  value
}) => {
  const choiceFilter = parseChoiceFilter(q);
  let choices = choicesMap[q.select_from_list_name] ?? [];
  if (choiceFilter) {
    choices = choices.filter((_) => _[choiceFilter.key] === value);
  }
  return choices;
};
var Question = memo(({
  q,
  path
}) => {
  const ctx = useXlsFormFillerContext();
  const logic = useMemo2(() => {
    const engine = new AstFormEvaluator({
      values: ctx.values,
      path,
      thatName: q.name,
      questionsMap: ctx.questionsMap
    });
    const relevant = q.relevant ? engine.eval(q.relevant) ?? false : true;
    return relevant ? {
      relevant,
      calculation: engine.eval(q.calculation),
      defaultValue: engine.eval(q.default),
      valid: engine.eval(q.constraint) ?? true,
      repeated: engine.eval(q.repeat_count)
    } : { relevant };
  }, [ctx.values]);
  const onChange = (value2) => {
    ctx.updateValues([...path.toLodashPath(), q.name], value2);
  };
  const getLabel = (property) => {
    return property?.[ctx.langIndex] ?? "";
  };
  const layout = {
    visible: logic.relevant,
    label: getLabel(q.label),
    hint: getLabel(q.hint),
    error: logic.valid ? void 0 : getLabel(q.constraint_message)
  };
  const value = useMemo2(() => {
    return ctx.getValue(path, q.name);
  }, [path, q.name]);
  useEffect(() => {
    if (logic.defaultValue !== void 0 && value !== logic.defaultValue) {
      onChange(logic.defaultValue);
    }
    if (logic.calculation !== void 0 && value !== logic.calculation) {
      onChange(logic.calculation);
    }
  }, [logic.defaultValue, value, logic.calculation]);
  switch (q.type) {
    case "begin_group": {
      return /* @__PURE__ */ jsx7(GroupLayout, { ...layout, children: q.children.map(
        (q2) => /* @__PURE__ */ jsx7(Question, { q: q2, path }, q2.name)
      ) });
    }
    case "begin_repeat": {
      if (logic.repeated <= 0) return /* @__PURE__ */ jsx7(Fragment4, {});
      return mapFor(logic.repeated, (i) => /* @__PURE__ */ jsx7(RepeatLayout, { index: i, ...layout, children: q.children.map(
        (_) => /* @__PURE__ */ jsx7(
          Question,
          {
            path: path.add({ index: i, repeatGroupName: q.name }),
            q: _
          },
          i
        )
      ) }, i));
    }
    case "note": {
      return /* @__PURE__ */ jsx7(QuestionLayout, { ...layout, children: logic.calculation && /* @__PURE__ */ jsx7(Input3, { value, disabled: true }) });
    }
    case "date": {
      return /* @__PURE__ */ jsx7(QuestionLayout, { ...layout, children: /* @__PURE__ */ jsx7(
        Input3,
        {
          value,
          required: q.required,
          fullWidth: true,
          type: "date",
          onChange: (e) => onChange(e.target.value)
        }
      ) });
    }
    case "text": {
      return /* @__PURE__ */ jsx7(QuestionLayout, { ...layout, children: /* @__PURE__ */ jsx7(
        Input3,
        {
          value,
          required: q.required,
          fullWidth: true,
          onChange: (e) => onChange(e.target.value)
        }
      ) });
    }
    case "integer": {
      return /* @__PURE__ */ jsx7(QuestionLayout, { ...layout, children: /* @__PURE__ */ jsx7(
        Input3,
        {
          value,
          required: q.required,
          fullWidth: true,
          type: "number",
          onChange: (e) => onChange(e.target.value)
        }
      ) });
    }
    case "select_one": {
      const choices = getFilteredList({ choicesMap: ctx.choicesMap, q, value });
      return /* @__PURE__ */ jsx7(QuestionLayout, { ...layout, children: /* @__PURE__ */ jsx7(
        RadioGroup,
        {
          value: ctx.getValue(path, q.name) ?? "",
          onChange: (e) => onChange(e.target.value),
          children: choices.map((c) => {
            return /* @__PURE__ */ jsx7(FormControlLabel, { label: c.label?.[ctx.langIndex] ?? "", control: /* @__PURE__ */ jsx7(Radio, {}), value: c.name }, c.name);
          })
        }
      ) });
    }
    case "select_multiple": {
      const choices = getFilteredList({ choicesMap: ctx.choicesMap, q, value });
      const selectedValues = ctx.getValue(path, q.name)?.split(" ") ?? [];
      return /* @__PURE__ */ jsx7(QuestionLayout, { ...layout, children: /* @__PURE__ */ jsx7(FormGroup, { children: choices.map((c) => {
        const value2 = c.name;
        const label = c.label?.[ctx.langIndex] ?? "";
        const checked = selectedValues.includes(value2);
        return /* @__PURE__ */ jsx7(
          FormControlLabel,
          {
            label,
            control: /* @__PURE__ */ jsx7(
              Checkbox,
              {
                checked,
                onChange: (e) => {
                  if (e.target.checked)
                    onChange([...selectedValues, value2].join(" ").trim());
                  else
                    onChange(selectedValues.filter((v) => v !== value2).join(" ").trim());
                }
              }
            )
          },
          value2
        );
      }) }) });
    }
    case "geopoint": {
      return /* @__PURE__ */ jsx7(QuestionLayout, { ...layout, children: /* @__PURE__ */ jsx7(QuestionLocation, { value, onChange }) });
    }
    case "file":
    case "image": {
      return /* @__PURE__ */ jsx7(QuestionLayout, { ...layout, children: /* @__PURE__ */ jsx7(
        QuestionFile,
        {
          type: q.type,
          file: ctx.attachments.get(value),
          onClear: () => {
            onChange(void 0);
            ctx.attachments.clearAttachmentByName(value);
          },
          onChange: (file) => {
            ctx.attachments.saveAttachment(file);
            onChange(file.name);
          }
        }
      ) });
    }
    case "start":
    case "end":
    case "calculate": {
      return /* @__PURE__ */ jsx7(Fragment4, {});
    }
    default: {
      return /* @__PURE__ */ jsxs6("div", { children: [
        "TODO ",
        q.type,
        " ",
        q.name
      ] });
    }
  }
});

// src/XlsFormFiller/useAttachments.ts
import { useState as useState3 } from "react";
var useAttachments = () => {
  const [attachments, setAttachments] = useState3({});
  const save = (file) => {
    setAttachments((prev) => ({ ...prev, [file.name]: file }));
  };
  const clearByName = (fileName) => {
    setAttachments((prev) => {
      const copy = { ...prev };
      delete copy[fileName];
      return copy;
    });
  };
  const get3 = (fileName) => {
    return attachments[fileName];
  };
  return {
    get: get3,
    list: attachments,
    saveAttachment: save,
    clearAttachmentByName: clearByName
  };
};

// src/XlsFormFiller/XlsFormFiller.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var Context = createContext({});
var useXlsFormFillerContext = () => useContext(Context);
var XlsFormFiller = ({
  survey,
  onSubmit,
  labels = {
    submit: "Submit",
    getMyLocation: "Get my location",
    selectImage: "Click to select an image...",
    changeImage: "Click to change the image...",
    selectFile: "Click to select an file...",
    changeFile: "Click to change the file..."
  }
}) => {
  const [langIndex, setLangIndex] = useState4(0);
  const [values, setValues] = useState4({});
  const attachments = useAttachments();
  useEffect2(() => {
    console.log("default", survey.translations.indexOf(survey.settings.default_language));
    setLangIndex(survey.translations.indexOf(survey.settings.default_language));
  }, [survey]);
  const {
    groupedSurvey,
    choicesMap,
    questionsMap
  } = useMemo3(() => {
    return {
      groupedSurvey: nestGroups(survey.survey),
      choicesMap: seq2(survey.choices).groupBy((_) => _.list_name),
      questionsMap: seq2(survey.survey).groupByFirst((_) => _.name)
    };
  }, [survey]);
  const getValue = (path, name) => {
    return get2(values, [...path.toLodashPath(), name]);
  };
  const updateValues = (path, value) => {
    setValues((prev) => {
      const clone = cloneDeep(prev);
      set(clone, path, value);
      return clone;
    });
  };
  return /* @__PURE__ */ jsxs7(Context.Provider, { value: {
    labels,
    values,
    getValue,
    updateValues,
    langIndex,
    choicesMap,
    questionsMap,
    attachments
  }, children: [
    /* @__PURE__ */ jsxs7(Box6, { sx: { width: "100%" }, children: [
      /* @__PURE__ */ jsx8(Select, { sx: { mb: 1 }, size: "small", value: langIndex, onChange: (e) => setLangIndex(+e.target.value), variant: "outlined", children: survey.translations.map(
        (_, i) => /* @__PURE__ */ jsx8(MenuItem, { value: i, children: _ }, i)
      ) }),
      groupedSurvey.map(
        (q) => /* @__PURE__ */ jsx8(Question, { q, path: new Path() }, q.name)
      )
    ] }),
    /* @__PURE__ */ jsx8(Box6, { sx: { mt: 1, display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ jsx8(
      Button3,
      {
        onClick: () => {
          const answers = { ...values };
          if (questionsMap.start && !values.start) {
            answers.start = formatDateTime(now);
          }
          if (questionsMap.end) {
            answers.end = formatDateTime(/* @__PURE__ */ new Date());
          }
          onSubmit({
            answers,
            attachments: Object.values(attachments.list)
          });
        },
        startIcon: /* @__PURE__ */ jsx8(Icon4, { children: "send" }),
        variant: "contained",
        children: labels.submit
      }
    ) })
  ] });
};
export {
  XlsFormFiller
};
//# sourceMappingURL=index.js.map