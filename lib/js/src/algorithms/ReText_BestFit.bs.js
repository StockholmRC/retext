// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var ReText_Model = require("../ReText_Model.bs.js");

var p = /* Penalty */Block.__(2, [/* record */[
      /* width */0,
      /* cost : Must_break */0,
      /* flagged : Unflagged */1
    ]]);

function init(ls) {
  var _ls = ls;
  var _acc = /* [] */0;
  while(true) {
    var acc = _acc;
    var ls$1 = _ls;
    if (ls$1) {
      var els = ls$1[1];
      if (els) {
        _acc = /* :: */[
          ls$1[0],
          acc
        ];
        _ls = els;
        continue ;
      } else {
        return acc;
      }
    } else {
      return acc;
    }
  };
}

function last(ls, el) {
  var match = List.length(ls) === 0;
  if (match) {
    return el;
  } else {
    return List.nth(ls, List.length(ls) - 1 | 0);
  }
}

function handle_glue(glue, lines) {
  return Pervasives.$at(init(lines), /* :: */[
              last(lines, /* :: */[
                    p,
                    /* [] */0
                  ]),
              /* :: */[
                /* :: */[
                  /* Glue */Block.__(1, [glue]),
                  /* [] */0
                ],
                /* [] */0
              ]
            ]);
}

function handle_box(box, lines, desired_width) {
  var current_element = /* Box */Block.__(0, [box]);
  var tentative_next_cumulated_width = ReText_Model.MeasuredWidth[/* measure */0](Pervasives.$at(last(lines, /* :: */[
                p,
                /* [] */0
              ]), /* :: */[
            current_element,
            /* [] */0
          ]));
  var can_break = desired_width > tentative_next_cumulated_width[/* min */1] && desired_width < tentative_next_cumulated_width[/* max */2];
  if (can_break) {
    var match = last(last(lines, /* :: */[
              p,
              /* [] */0
            ]), p);
    var tmp;
    switch (match.tag | 0) {
      case 1 : 
          tmp = init(last(lines, /* :: */[
                    p,
                    /* [] */0
                  ]));
          break;
      case 0 : 
      case 2 : 
          tmp = last(lines, /* :: */[
                p,
                /* [] */0
              ]);
          break;
      
    }
    return Pervasives.$at(init(lines), /* :: */[
                tmp,
                /* :: */[
                  /* :: */[
                    current_element,
                    /* [] */0
                  ],
                  /* [] */0
                ]
              ]);
  } else {
    return Pervasives.$at(init(lines), /* :: */[
                Pervasives.$at(last(lines, /* :: */[
                          p,
                          /* [] */0
                        ]), /* :: */[
                      current_element,
                      /* [] */0
                    ]),
                /* [] */0
              ]);
  }
}

function $$break(elements, width) {
  var _elements = elements;
  var _lines = /* [] */0;
  while(true) {
    var lines = _lines;
    var elements$1 = _elements;
    if (elements$1) {
      var match = elements$1[0];
      switch (match.tag | 0) {
        case 0 : 
            _lines = handle_box(match[0], lines, width);
            _elements = elements$1[1];
            continue ;
        case 1 : 
            _lines = handle_glue(match[0], lines);
            _elements = elements$1[1];
            continue ;
        case 2 : 
            _elements = elements$1[1];
            continue ;
        
      }
    } else {
      return lines;
    }
  };
}

exports.p = p;
exports.init = init;
exports.last = last;
exports.handle_glue = handle_glue;
exports.handle_box = handle_box;
exports.$$break = $$break;
/* No side effect */