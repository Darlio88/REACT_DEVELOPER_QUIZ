var sugar;
var fudge;
var amt;
var recipe;
var SPANISH_FUDGE;
var ENGLISH_FUDGE;
var FRENCH_FUDGE;
var chocolate;

if (recipe == "SPANISH") {
  fudge = SPANISH_FUDGE;
  amt = base * SPANISH_FUDGE;
} else if (recipe == "FRENCH") {
  fudge = FRENCH_FUDGE;
  amt = base * fudge;

  chocolate = 7;
} else if (recipe == "ENGLISH") {
  fudge = ENGLISH_FUDGE;
  amt = base * fudge;
} else {
  fudge = 1;
  amt = base;
}
sugar = 2 * bottom(amt) + top(amt) * 1.17;
