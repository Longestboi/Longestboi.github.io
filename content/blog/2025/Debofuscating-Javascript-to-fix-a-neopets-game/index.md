---
title: "Deobfuscating JavaScript To Fix a Neopets Game"
date: 2025-04-30
authors: Andrew Long
type: blog
tags: ["Neopets", "Reverse Engineering"]
summary: "A Neopets game doesn't work too good, so I learned how to deobfuscate JavaScript to fix it."
draft: true
toc: false
---

# IceCream Machine
When I was a kid, I used to play this one flash game on Neopets, IceCream Machine. It's a relatively simple game where you snake your way between columns of floating ice cream scoops that get progressively faster, but I always sucked at it because of my stupid kid motor skills (a lack thereof, rather).

A few years ago, I heard about flash being depreciated and purged from all major browsers and thought back to all the games I used to play on AddicingGames, CoolMathGames, NewGrounds, and a number of other sites that definitely (re-)hosted them with permision.

Then I thought about Neopets, and I couldn't stop thinking about Neopets, so much so that I decided to make a new account and check out how it was going. Now, [ruffle](https://ruffle.rs/) was available at the time, so the flash games were still available to play, but I saw that they ported some of these older flash games to the more modern HTML5!

I went and played some of them and I was _severely_ dissapointed.

They were all full of bugs, mostly incomplete, and featured "upgrades" for mobile that couldn't be turned off while playing on desktop. And worse, my beloved childhood game has been reduced to a _10 FPS_, bug addled game that was clearly ported by someone who barely had understood what they were doing and just threw it on the site so they could say it was there. It was one of the worst experiences I've had in a while.

I went through this journey in 2023 and told myself that it would absouletly get better in the future. It's 2025 now and nothing has changed. The games are in the same state they were in back then and it feels like Neopets as a whole is a ship on fire that the owners are attempting to put out by spitting on it. And I thought to myself: "Surely it can't be to hard to fix this mess of a game?" And I was right, _sorta_.

In order to get to the bug fixing, I would have to get through multiple layers of... _JavaScript Deobfuscation_.

For those unfamilliar, JavaScript is an interpreted language, meaning throughout the pipeline of writing the code to running it, it doesn't get translated to binary that is directly ran by the CPU; Rather, the source code is read in and gets converted to [bytecode](https://en.wikipedia.org/wiki/Bytecode) and is then executed by an interpreter. This is a massive oversimplification (as [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) does exist), but it demonstrates why you're able to get the full JavaScript source code of a website, except if they use obfuscation.

Obfuscation is the act of taking JavaScript source code and modifying it in order to hide how it executes and to protect it from outside modification. There are multiple ways to obfuscate code, and I'll be covering a few used in this post.

Now, I know some JavaScript --- I wrote this whole website practically from scratch (thank you [hugo](https://gohugo.io/)) --- but I'm more comfortable in the land of the compiled, so I wasn't so sure I could get enough of the original JavaScript code from the obfuscated code to do any bug fixing.

But, I'm rather hard headed, so I got to work.


## Deobfuscation
To begin with, I searched for enterprise level JavaScript obfuscators, this was mostly to get an undertanding what I'd have to do. The second solution I came across was [JScrambler](https://jscrambler.com/) and it looks like this:

{{< figure src="https://jscrambler.com/images/jscrambler-profiling-protected-code.png" width="75%" attr="From: [Jscrambler 101 Profiling](https://jscrambler.com/blog/jscrambler-101-profiling)" >}}

{{< nobottommargin >}}Meanwhile, the obfuscated game code looks like this:{{< /nobottommargin >}}
```js
Y833.M3r=window;Y833.M90=o1MM(Y833.M3r);Y833.e5e=A9ii(Y833.M3r);Y833.R3kk=R3kk;Y833.U2O=u4DD(Y833.M3r);Y833.N0l=...;
```
It's not exactly the same, but it sorta matches and I can catch a glimps of a state machine in the exact same format that appears everywhere in our obfuscated JavaScript files.

This isn't super useful information, but it does give a small heads up about what I'm gonna be dealing with, like domain locking and anti-debugging.

### Start
{{< nobottommargin >}}So, IceCream Machine is made up of 5 files:{{< /nobottommargin >}}

 - cone_class.js
 - game_class.js
 - gamecontrol.js
 - graphics.js
 - index.js

When looking through these files, some of them have some semblance semi-unobfuscated code, and others look like they are entirely obfuscated. I'm gonna start with the easiest and smallest file, `gamecontrol.js`.

{{< nobottommargin >}}After formatting the code to be more readable, I found some code that looks like this:{{< /nobottommargin >}}
```js
game_class[y2U.U0l(20)][y2U.S0l(9)]();
```
So `game_class` is a object --- technically it's a function, but all functions are objects so... --- and the code is trying to index into `game_class` with the result of `y2U.S0l(20)`. `y2U` is a variable set further up the scope, `var y2U = Y833;`.

lets run this function and see what it gives!

![`THE RESULT OF RUNNING y2U.S0l(20) HERE`](./Obf_result.webp "The result of running y2U.S0l(20)")

{{< nobottommargin >}}Ah, so these functions return the name of a property, then using [bracket notation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation), returns the property with that name! So the above line is equivalent to:{{< /nobottommargin >}}
```js
game_class.instance.endGame()
```

### Property Decoder
You could execute `y2U.U0l` in a loop _x_ amount of time, but that may end with us missing a property or two, so I will continue to deobfuscate.

As it turns out, both `Y833.S0l()` and `Y833.U0l()` execute the same function, which traces back to a function in an object: `Y833.N0l.W1O`. This function is _heavily_ obfuscated using multiple nested state machines to obscure control flow.

{{< details summary="_Click to reveal obfuscated source code_" >}}
```js
function () {
    var i1S = 2;
    for (; i1S !== 1; ) {
      switch (i1S) {
        case 2:
          return {
            W1O: (
              function (M1O) {
                var W0l = 2;
                for (; W0l !== 10; ) {
                  switch (W0l) {
                    case 4:
                      W0l = X1O < p1O.length ? 3 : 6;
                      break;
                    case 5:
                      var X1O = 0,
                      B1O = 0;
                      W0l = 4;
                      break;
                    case 7:
                      (X1O++, B1O++);
                      W0l = 4;
                      break;
                    case 11:
                      return l1O;
                      break;
                    case 9:
                      B1O = 0;
                      W0l = 8;
                      break;
                    case 2:
                      var J1O = function (e1O) {
                        var Q0l = 2;
                        for (; Q0l !== 13; ) {
                          switch (Q0l) {
                            case 5:
                              Q0l = F1O < e1O.length ? 4 : 9;
                              break;
                            case 4:
                              O1O.A4DD(K4DD.w4DD(e1O[F1O] + 54));
                              Q0l = 3;
                              break;
                            case 8:
                              r1O = O1O.v4DD(
                                function () {
                                  var E0l = 2;
                                  for (; E0l !== 1; ) {
                                    switch (E0l) {
                                      case 2:
                                        return 0.5 - R4DD.y4DD();
                                        break;
                                    }
                                  }
                                }
                              ).q4DD('');
                              Q0l = 7;
                              break;
                            case 6:
                              Q0l = !u1O ? 8 : 14;
                              break;
                            case 1:
                              var F1O = 0;
                              Q0l = 5;
                              break;
                            case 9:
                              var r1O,
                              u1O;
                              Q0l = 8;
                              break;
                            case 7:
                              u1O = Y833[r1O];
                              Q0l = 6;
                              break;
                            case 14:
                              return u1O;
                              break;
                            case 3:
                              F1O++;
                              Q0l = 5;
                              break;
                            case 2:
                              var O1O = [];
                              Q0l = 1;
                              break;
                          }
                        }
                      };
                      var Q1O = '',
                      p1O = o4DD(J1O([53,
                      28,
                      53,
                      - 3]) ());
                      W0l = 5;
                      break;
                    case 3:
                      W0l = B1O === M1O.length ? 9 : 8;
                      break;
                    case 8:
                      Q1O += K4DD.w4DD(p1O.c4DD(X1O) ^ M1O.c4DD(B1O));
                      W0l = 7;
                      break;
                    case 6:
                      Q1O = Q1O.Z4DD('=');
                      var n1O = 0;
                      var l1O = function (m1O) {
                        var V0l = 2;
                        for (; V0l !== 16; ) {
                          switch (V0l) {
                            case 9:
                              V0l = n1O === 2 &&
                              m1O === 32 ? 8 : 7;
                              break;
                            case 14:
                              V0l = n1O === 4 &&
                              m1O === 38 ? 13 : 12;
                              break;
                            case 2:
                              V0l = n1O === 0 &&
                              m1O === 31 ? 1 : 4;
                              break;
                            case 20:
                              Q1O.f4DD.S4DD(Q1O, Q1O.D4DD( - 5, 5).D4DD(0, 3));
                              V0l = 5;
                              break;
                            case 6:
                              Q1O.f4DD.S4DD(Q1O, Q1O.D4DD( - 4, 4).D4DD(0, 3));
                              V0l = 5;
                              break;
                            case 8:
                              Q1O.f4DD.S4DD(Q1O, Q1O.D4DD( - 9, 9).D4DD(0, 8));
                              V0l = 5;
                              break;
                            case 19:
                              V0l = n1O === 7 &&
                              m1O === 19 ? 18 : 17;
                              break;
                            case 12:
                              V0l = n1O === 5 &&
                              m1O === 17 ? 11 : 10;
                              break;
                            case 17:
                              l1O = h1O;
                              V0l = 5;
                              break;
                            case 7:
                              V0l = n1O === 3 &&
                              m1O === 16 ? 6 : 14;
                              break;
                            case 4:
                              V0l = n1O === 1 &&
                              m1O === 9 ? 3 : 9;
                              break;
                            case 5:
                              return (n1O++, Q1O[m1O]);
                              break;
                            case 18:
                              Q1O.f4DD.S4DD(Q1O, Q1O.D4DD( - 6, 6).D4DD(0, 5));
                              V0l = 5;
                              break;
                            case 13:
                              Q1O.f4DD.S4DD(Q1O, Q1O.D4DD( - 6, 6).D4DD(0, 5));
                              V0l = 5;
                              break;
                            case 10:
                              V0l = n1O === 6 &&
                              m1O === 27 ? 20 : 19;
                              break;
                            case 11:
                              Q1O.f4DD.S4DD(Q1O, Q1O.D4DD( - 6, 6).D4DD(0, 5));
                              V0l = 5;
                              break;
                            case 1:
                              Q1O.f4DD.S4DD(Q1O, Q1O.D4DD( - 4, 4).D4DD(0, 3));
                              V0l = 5;
                              break;
                            case 3:
                              Q1O.f4DD.S4DD(Q1O, Q1O.D4DD( - 3, 3).D4DD(0, 2));
                              V0l = 5;
                              break;
                          }
                        }
                      };
                      var h1O = function (L2O) {
                        var D0l = 2;
                        for (; D0l !== 1; ) {
                          switch (D0l) {
                            case 2:
                              return Q1O[L2O];
                              break;
                          }
                        }
                      };
                      W0l = 11;
                      break;
                  }
                }
              }
            ) ('PMLUEC')
          };
          break;
      }
    }
  }
```
{{< /details >}}
Yeah, that looks like a mess, let's try and flatten it down to get some easily understood control flow.

#### Simple State Machine Flattening
{{< nobottommargin >}}Here's the first and seemingly easiest state machine to replace:{{< /nobottommargin >}}
```js
r1O = O1O.v4DD(
  function () {
    var E0l = 2;
    for (; E0l !== 1; ) {
      switch (E0l) {
        case 2:
          return 0.5 - R4DD.y4DD();
          break;
      }
    }
  }
).q4DD('');
```

The state machine in this example is entirely useless as it returns immediately; It's equivalent to: `return 0.5 - R4DD.y4DD();`.

{{< nobottommargin >}}Lets flatten its logic:{{< /nobottommargin >}}
```js
r1O = O1O.v4DD( function () { return 0.5 - R4DD.y4DD(); } ).q4DD('');
```

`O1O` is an array defined in a previous state, so lets find out what these functions are.

![`THE ACTUAL FUNCTION BEHIND [].v4DD`](./function_obf.webp "The actual function behind [].v4DD")

Ah, I'm assuming this is an other form of obfuscation employed by the obfuscation tooling, I'll do this for the rest of them when they come up.

{{< nobottommargin >}}The fully cleaned up function looks like this:{{< /nobottommargin >}}
```js
r1O = O1O.sort( function () { return 0.5 - Math.random(); } ).join('');
```
Not all state machines are this easy to flatten, so let's get into a more difficult one!

#### More State Machine Flattening
Coincidentally, the last state machine I flattened was nested inside a more complex state machine, so lets go with that one.
{{< details summary="_Click to reveal obfuscated state machine_" >}}
```js
var J1O = function (e1O) {
  var Q0l = 2;
  for (; Q0l !== 13; ) {
    switch (Q0l) {
      case 2:
        var O1O = [];
        Q0l = 1;
        break;
      case 1:
        var F1O = 0;
        Q0l = 5;
        break;
      case 5:
        Q0l = F1O < e1O.length ? 4 : 9;
        break;
      case 4:
        O1O.push(String.fromCharCode(e1O[F1O] + 54));
        Q0l = 3;
        break;
      case 3:
        F1O++;
        Q0l = 5;
        break;
      case 9:
        var r1O, u1O;
        Q0l = 8;
        break;
      case 8:
        r1O = O1O.sort( function () { return 0.5 - Math.random(); } ).join('');
        Q0l = 7;
        break;
      case 7:
        u1O = Y833[r1O];
        Q0l = 6;
        break;
      case 6:
        Q0l = !u1O ? 8 : 14;
        break;
      case 14:
        return u1O;
        break;
    }
  }
};
```
{{< /details >}}

Reading state 1 through 3 of this state machine, it looks like it inits' `F1O`, goes to state 5 and checks if `F1O` is less than the length of the function argument `e1O`, branches to 4 if it is, and branches to 9 if not. In state 4, it pushes a decoded char into the `O1O` array, branches to 3, where it increments `F1O` by one, then heads back to state 5.

{{< nobottommargin >}}You know that sounds like? A for loop! Let's annotate our theorized for loop's states.{{< /nobottommargin >}}
```js
case 1:
  // <i-loop> init
  var F1O = 0;
  Q0l = 5;
  break;
case 5:
  // <i-loop> branch
  Q0l = F1O < e1O.length ? 4 : 9;
  break;
case 4:
  // <i-loop> body
  O1O.push(String.fromCharCode(e1O[F1O] + 54));
  Q0l = 3;
  break;
case 3:
  // <i-loop> increment
  F1O++;
  Q0l = 5;
  break;
```
Cool, now lets do the rest of the state machine!

{{< nobottommargin >}}It looks like state 9 to state 14 is some kind of do-while loop, let's annotate it too:{{< /nobottommargin >}}
```js
case 9:
  // <w-loop> declaration
  var r1O, u1O;
  Q0l = 8;
  break;
case 8:
  // <w-loop> body 1
  r1O = O1O.sort( function () { return 0.5 - Math.random(); } ).join('');
  Q0l = 7;
  break;
case 7:
  // <w-loop> body 2
  u1O = Y833[r1O];
  Q0l = 6;
  break;
case 6:
  // <w-loop> branch
  Q0l = !u1O ? 8 : 14;
  break;
case 14:
  return u1O;
  break;
```

{{< nobottommargin >}}Alright, let's flatten this state machine and keep the annotations:{{< /nobottommargin >}}
```js
// state 2
var O1O = [];

// <i-loop> 1, 5, 3
for (var F1O = 0; F1O < e1O.length; F1O++) {
  // state 4
  O1O.push(String.fromCharCode(e1O[F1O] + 54));
}

// <w-loop> 9
var r1O, u1O;

do {
  // <w-loop> 8
  r1O = O1O.sort( function () { return 0.5 - Math.random(); } ).join('');
  // <w-loop> 7
  u1O = Y833[r1O];
// <w-loop> 6
} while(!u1O);

// state 14
return u1O;
```

I'm sure this could be refactored to be even smaller, but this is fairly understandable.

It looks like it's decoding 4 'encoded' chars in an array, then pushing them into a new array. It then randomizes this array, joins them together, and uses bracket notation to find a property with that name and returns the property! This code seems really inefficent as you could get lost in a near infinite loop, but it only runs once so I guess it's not too bad.

The property it returns, `R3kk`, is actually a function which returns a string that looks to be encoded. Once I flatten this whole state machine, we'll see how it decodes this string.

#### Final State Machine Flattened
There is another state machine nested within this overarching state machine, but it's a rather simple _else if_ chain, so I'll skip over that and get to the flattening of this main state machine.

Now we have a relatively flat state machine, using the previous techniques, let's flatten it one more time.

{{< details summary="___Click to reveal nearly flattened state machine___" >}}
```js
W1O: (
  function (M1O) {
    var W0l = 2;
    for (; W0l !== 10; ) {
      switch (W0l) {
        case 2:
          var J1O = function (e1O) {
            var O1O = [];

            for (var F1O = 0; F1O < e1O.length; F1O++) {
              O1O.push(String.fromCharCode(e1O[F1O] + 54));
            }

            var r1O, u1O;
            do {
              r1O = O1O.sort( function () { return 0.5 - Math.random(); } ).join('');
              u1O = Y833[r1O];
            } while(!u1O);

            return u1O;
          };
          var Q1O = '', p1O = o4DD(J1O([53, 28, 53, - 3]) ());
          W0l = 5;
          break;
        case 5:
          var X1O = 0, B1O = 0;
          W0l = 4;
          break;
        case 4:
          W0l = X1O < p1O.length ? 3 : 6;
          break;
        case 3:
          W0l = B1O === M1O.length ? 9 : 8;
          break;
        case 9:
          B1O = 0;
          W0l = 8;
          break;
        case 8:
          Q1O += String.fromCharCode(p1O.charCodeAt(X1O) ^ M1O.charCodeAt(B1O));
          W0l = 7;
          break;
        case 7:
          (X1O++, B1O++);
          W0l = 4;
          break;
        case 6:
          Q1O = Q1O.Z4DD('=');
          var n1O = 0;
          var l1O = function (m1O) {
            if (n1O === 0 && m1O === 31) {
              Q1O.unshift.apply(Q1O, Q1O.splice(-4, 4).splice(0, 3));
            } else if (n1O === 1 && m1O === 9) {
              Q1O.unshift.apply(Q1O, Q1O.splice(-3, 3).splice(0, 2));
            } else if (n1O === 2 && m1O === 32) {
              Q1O.unshift.apply(Q1O, Q1O.splice(-9, 9).splice(0, 8));
            } else if (n1O === 3 && m1O === 16) {
              Q1O.unshift.apply(Q1O, Q1O.splice(-4, 4).splice(0, 3));
            } else if (n1O === 4 && m1O === 38) {
              Q1O.unshift.apply(Q1O, Q1O.splice(-6, 6).splice(0, 5));
            } else if (n1O === 5 && m1O === 17) {
              Q1O.unshift.apply(Q1O, Q1O.splice(-6, 6).splice(0, 5));
            } else if (n1O === 6 && m1O === 27) {
              Q1O.unshift.apply(Q1O, Q1O.splice(-5, 5).splice(0, 3));
            } else if (n1O === 7 && m1O === 19) {
              Q1O.unshift.apply(Q1O, Q1O.splice(-6, 6).splice(0, 5));
            } else {
              l1O = h1O;
            }

            return (n1O++, Q1O[m1O]);
          };

          var h1O = function (L2O) {
            return Q1O[L2O];
          };
          W0l = 11;
          break;
        case 11:
          return l1O;
          break;
      }
    }
  }
) ('PMLUEC')
```
{{< /details >}}

Looking over the state machine, it seems that state 5 through 7 is a loop that decodes the encoded string returned by `R3kk`.

{{< nobottommargin >}}Employing the same techniques above, here's the state machine flattened down to a typical function control flow and with renamed variables:{{< /nobottommargin >}}
```js
W1O: (function (key) {
    var get_encoded_ciphered_properties_function = function (coded_chars) {
        var function_chars = [];

        for (var i = 0; i < coded_chars.length; i++) {
            function_chars.push(String.fromCharCode(coded_chars[i] + 54));
        }

        var potention_property_name, potention_property;
        do {
            potention_property_name = function_chars.sort( function () { return 0.5 - Math.random(); } ).join('');
            potention_property = Y833[potention_property_name];
        } while(!potention_property);

        return potention_property;
    };
                      // cipher_text = decodeURI(R3kk());
    var properties = '', cipher_text = decodeURI(get_encoded_ciphered_properties_function([53, 28, 53, - 3])());

    for (var ci = 0, ki = 0; ci < cipher_text.length; ci++, ki++){
        if (ki === key.length) { ki = 0; }

        properties += String.fromCharCode(cipher_text.charCodeAt(ci) ^ key.charCodeAt(ki));
    }

    properties = properties.split('=');

    var i = 0;
    var retrieve_property = function (property_index) {
        if (i === 0 && index === 31) {
            properties.unshift.apply(properties, properties.splice(-4, 4).splice(0, 3));
        } else if (i === 1 && property_index === 9) {
            properties.unshift.apply(properties, properties.splice(-3, 3).splice(0, 2));
        } else if (i === 2 && property_index === 32) {
            properties.unshift.apply(properties, properties.splice(-9, 9).splice(0, 8));
        } else if (i === 3 && property_index === 16) {
            properties.unshift.apply(properties, properties.splice(-4, 4).splice(0, 3));
        } else if (i === 4 && property_index === 38) {
            properties.unshift.apply(properties, properties.splice(-6, 6).splice(0, 5));
        } else if (i === 5 && property_index === 17) {
            properties.unshift.apply(properties, properties.splice(-6, 6).splice(0, 5));
        } else if (i === 6 && property_index === 27) {
            properties.unshift.apply(properties, properties.splice(-5, 5).splice(0, 3));
        } else if (i === 7 && property_index === 19) {
            properties.unshift.apply(properties, properties.splice(-6, 6).splice(0, 5));
        } else {
            retrieve_property = expended_shift_retrieve_property;
        }

        return (i++, properties[property_index]);
    };

    var expended_shift_retrieve_property = function (index) {
        return properties[index];
    };

    return retrieve_property;
}) ('PMLUEC')
```

Now that the function is easier to read, let's figure out what it does.

First it calls a function that returns some URI encoded cipher text. It then takes that cipher text and decodes it with the key `PMLUEC` using a repeating-key XOR decryption scheme. Next it takes the plain text string, and splits it along a delimiter to get all of the properties into a list.

The end of this function is fairly interesting, if you were to start replacing all the `Y833.S0l()` function calls with the element in the argument, all the replacements will be wrong. The function initially defined in `retrieve_property` shifts and removes some entries based on the index passed into `W1O` and a value incremented every function call. If the function is not called with the indexes 31, 9, 32, 16, 38, 17, 27, 19 sequentially, the function will fail to position all properties correctly.

When I first saw this, I thought I would have to track down where the function was called the first time and get the value that it returns so I could replace the function call with the actual property. But thankfully, a little further down the file, an obfuscated function calls `Y833.S0l()` in sequence properly.

#### Streamlining
To streamline the process of decoding the properties, I wrote a function that allows me to automatically decode, find the delimiter, split it along the delimiter into an array, and finally unshift the array to retrieve the full properties list:
{{< details summary="___Click to reveal Properties Decoder Script___" >}}
```js
function retrieve_shifted_properties_list(cypher_text, key, shift_rules) {
    cypher_text = decodeURI(cypher_text);

    plain_text = '';

    for (var ci = 0, ki = 0; ci < cypher_text.length; ci++, ki++) {
        if (ki === key.length) {
            ki = 0;
        }

        plain_text += String.fromCharCode(cypher_text.charCodeAt(ci) ^ key.charCodeAt(ki));
    }

    function get_delimiter(str) {
        var chars = {};

        // Count all non-alphanumeric characters (I believe delimiters are always non-alphanumeric)
        for (const c of str) {
            var code = c.charCodeAt(0);

            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                    if (chars[c]) {
                        chars[c]++;
                    } else {
                        chars[c] = 1;
                    }
                }
        }

        var largest = 0;
        var most_occurrent_char = 'e';

        // Find most occurrent character
        for (const [k, v] of Object.entries(chars)) {
            if (largest == 0) {
                largest = v;
                most_occurrent_char = k;
            } else {
                if (largest < v) {
                    largest = v;
                    most_occurrent_char = k;
                }
            }
        }

        return most_occurrent_char;
    }

    properties = plain_text.split(get_delimiter(plain_text));

    // Property shifter
    // ex: [[[-8, 8], [0, 7]], [[-5, 5], [0, 3]], [[-5, 5], [0, 3]], [[-4, 4], [0, 2]], [[-10, 10], [0, 8]], [[-6, 6], [0, 4]], [[-8, 8], [0, 7]]]
    if (shift_rules) {
        for (const shift_rule of shift_rules) {
            properties.unshift.apply(properties, properties.splice(shift_rule[0][0], shift_rule[0][1]).splice(shift_rule[1][0], shift_rule[1][1]));
        }
    }

    return properties;
}

```
{{< /details >}}

{{< nobottommargin >}}The arguments to this function correspond with a number of things in the property decoder deobfuscated previously.{{< /nobottommargin >}}
```js
retrieve_shifted_properties_list(R3kk(), 'PMLUEC', [[[-4, 4], [0, 3]], [[-3, 3], [0, 2]], [[-9, 9], [0, 8]], [[-4, 4], [0, 3]], [[-6, 6], [0, 5]], [[-6, 6], [0, 5]], [[-5, 5], [0, 3]], [[-6, 6], [0, 5]]]);
```

The first two arguments are simple, it's the cipher text returning function and the key, `PMLUEC`. But the last argument is the sequence of unshifts in the `retrieve_property` function: `... properties.splice(-4, 4).splice(0, 3) ...`.

{{< nobottommargin >}}Finally, to replace the properties in the file more efficiently, I wrote a bespoke python function using some Regex to find and replace all instances of the `Y833.S0l()` function calls with the corresponding property.{{< /nobottommargin >}}
```python
import re
from typing import List
"""
file: path to file
regex: raw literal regex pattern with one group
replacements: list of things
replacement_string: formatable string
"""
def mass_indexed_replace(file: str, regex: str, replacements: List[str], replacement_string = "\"{0}\""):
    with open(file, "r") as big_file:
        regex_match = re.compile(regex)

        readin = big_file.readlines()
        result = []
        for elem in readin:
            line = elem
            for match in regex_match.finditer(elem):
                line = line.replace(match.group(0), replacement_string.format(replacements[int(match.group(1))]))
            result.append(line)
            with open(file[:file.rindex('.')] + ".reduced" + file[file.rindex('.'):], "w") as sub_file:
                sub_file.write("".join(result))
```

{{< nobottommargin >}}Example:{{< /nobottommargin >}}
```python
mass_indexed_replace("gamecontrol.js", r"Y833\.[US]0l\((\d+?)\)", ["gGame", "mousedown", "getTime", "addChild", "Sound", "buthelp", "mouseChildren", ...])
```

### Some loose ends
#### If Guards
{{< nobottommargin >}}In some of the functions there are these if statements that check against a bunch of seemingly random numbers.{{< /nobottommargin >}}
```js
var M2U = [arguments];
  M2U[6] = -1627974560;
  M2U[2] = -999255069;
  M2U[5] = 1400892870;
  if (
    !(
      y2U.k9X(0, !1, 211226) !== M2U[6] &&
      y2U.O9X(0, !1, 577795) !== M2U[2] &&
      y2U.k9X(0, !!0, 663643) !== M2U[5] &&
      !Y833.w7a()
    )
  )
```
The function being called is almost entirely unobfuscated, and it looks to be a hashing function. Instead of trying to understand that, I just replaced the array indexes with the data they reference and pasted it into firefox's JavaScript input interpreter. Every single time I did this it returned as `true` and I removed them.

#### Domain Enforcement
When deobfuscating a whole file, I came across some a function that was sprinkled in a few places was checking the domain where the JavaScript file was being executed. I decided that instead of figuring out what it was doing, I would remove every reference to the function as it was a fair bit easier than trying to 'defuse' it. Then again, with FireFox's 'Script Override' feature, I didn't really need to stop the script from doing any domain checking.

#### Fully Obfuscated Files
Fully obfuscated files like `game_class.js` and `graphics.js` have all of their code encoded. Even further, using all of my previous dynamic analysis techniques do not work as I think the function self verifying, meaning I can't modify it at all without stripping out the verification method.

This would seem to be a dead end, but the obfuscation tooling didn't do enough to obfuscate it's own execution. Using FireFox's JavaScript debugger you can stop execution at any time.

Since this function does some decoding of our encoded code, we should look for some `eval` function then stop execution just before it to retrive the plain text code.

![`DECODED CLASS FROM EVAL`](./decoded_code.webp "Decoded class from eval statement")

There's the actual code for the `game_class` function. Copy it down and replace the entire `var game_class` assignment with it and continue with deobfuscation as we did above.

## Bug Fixing
Now that all of the code is deobfuscated --- sorta, some of the original ActionScript code was originally obfuscated when they initially ported it to JavaScript, and I won't be deobfuscating this as it's not super important --- we can start bug fixing!

### Missing Level Names
For some reason, after level 10 the names of the scoop flavors don't show up.
This is a pretty easy fix because the level names were just never included.

#### Before
{{< nobottommargin >}}This bug displays itself like this:{{< /nobottommargin >}}
![`*BEFORE FIXING MISSING FLAVOR NAMES IMAGE HERE*`](./missing-names_before.webp "Before fixing missing flavor names")


{{< nobottommargin >}}And this is the code responsible for the bug:{{< /nobottommargin >}}
```js
createjs.IDS_level_9 = "Vanilla Chocolate Swirl";
createjs.IDS_level_10 = "Double Chocolate"; // More flavor names should come immediately after this
createjs.IDS_game_over = "GAME OVER";
createjs.IDS_congrats = "CONGRATULATIONS!";
```

#### After
{{< nobottommargin >}}The fix is this simple, just add the names:{{< /nobottommargin >}}
```js
createjs.IDS_level_9 = "Vanilla Chocolate Swirl";
createjs.IDS_level_10 = "Double Chocolate";
createjs.IDS_level_11 = "Tigersquash";
createjs.IDS_level_12 = "Rainbowberry";
createjs.IDS_level_13 = "Garlicky Bratwurst";
createjs.IDS_game_over = "GAME OVER";
createjs.IDS_congrats = "CONGRATULATIONS!";
```
{{< nobottommargin >}}And...{{< /nobottommargin >}}

![`*AFTER FIXING MISSING FLAVOR NAMES IMAGE HERE*`](./missing-names_after.webp "After fixing missing flavor names")

Success!!!

### Sendscore Button Not Changing Graphics When Interacted With
{{< nobottommargin >}}On the ending screens, the "Send Score" button does not highlight and return to normal on hover and unhover.{{< /nobottommargin >}}
~*SHOW HOVER NOT WORKING*~

{{< nobottommargin >}}For this issue, I went to the `taskoneButtonsHandler` in `gamecontrol.js` and looked at the 'mouseover' and 'mouseout' button events. I didn't see anything that looked like the name of the send score button:{{< /nobottommargin >}}
```js
if (this.name == "buthelp" || this.name == "butplay" || this.name == "butsound" || this.name == "butback" || this.name == "restart")
```

so I went into the `graphics.js` file to find its name.

{{< nobottommargin >}}Since the "Restart" button works, I searched for its name and found this section of code:{{< /nobottommargin >}}
```js
this.frame_0 = function() {
  this.stop();
  addButtonEvents([this.restart, "restart"]);
  addButtonEvents([this.sendscore, "sendscore"]);
};
```

Here we can see the reset and send score buttons add themself to the button event handler function.

{{< nobottommargin >}}Since we found the name for the send score button, let's add it to the 'mouseover' and 'mouseout' button events.{{< /nobottommargin >}}
```js
if (this.name == "buthelp" || this.name == "butplay" || this.name == "butsound" || this.name == "butback" || this.name == "restart" || this.name == "sendscore")
```

{{< nobottommargin >}}After adding it, both hover and unhovering works as expected!{{< /nobottommargin >}}
~*SHOW HOVER WORKING*~

### Next Level Screen Background Not Being Set Properly
This issue is a bit more complex than the previous two issues. It goes like this, the code below attempts to change the the state of the `splash`, however it does this before it gets added as a child of the main object. This game uses a framework called [createjs](https://createjs.com/) to translate between the ActionScript API to HTML5. `splash` is an object made from that class `MovieClip`, which has a property called `autoReset` which resets the `MovieClip` to its first frame when it gets added.

{{< nobottommargin >}}There was an attempt at fixing this issue by executing a function after it's added to the main object, but it doesn't always get added before the 10ms is up, and `splash` reverts back to its first frame.{{< /nobottommargin >}}
```js
setTimeout(function() {
    Z56[2].splash.gotoAndStop(Z56[3] - 1);
    Z56[2].tfield1.text = createjs.levelHead;
    Z56[2].tfield1_1.text = createjs.levelText;
    Z56[2].tfield2.text = "NUMBER OF SCOOPS:";

    Z56[2].tfield2_1.text = createjs.goalText;
    Z56[2].tfield3.text = "PRESS SPACE TO CONTINUE...";
}, 10);
```

However, all you have to do is set `Z56[2].splash.autoReset = false;`

{{< nobottommargin >}}Effectively, replace the entire code section above with:{{< /nobottommargin >}}
```js
Z56[2].splash.autoReset = false;
Z56[2].splash.gotoAndStop(Z56[3] - 1);
Z56[2].tfield1.text = createjs.levelHead;
Z56[2].tfield1_1.text = createjs.levelText;
Z56[2].tfield2.text = "NUMBER OF SCOOPS:";

Z56[2].tfield2_1.text = createjs.goalText;
Z56[2].tfield3.text = "PRESS SPACE TO CONTINUE...";
```

{{< nobottommargin >}}And you consistently get:{{< /nobottommargin >}}
![`*AFTER FIXING WRONG BACKGROUND IMAGE IMAGE HERE*`](./wrong-bkg_after.webp "After fixing wrong background image")

### Win Screen Not Appearing
This is also a fairly trivial issue to solve. A simple mistake was made when attempting to set the main game state to `st_gamebeat`. Instead of setting the game class instance's state, it set `this.game_state`.

```js
case game_class.instance.st_countdown1:
  if (!game_class.instance.zz()) {
    this.game_state = game_class.instance.st_gamebeat;
  } else {...}
```

{{< nobottommargin >}}The fix is:{{< /nobottommargin >}}
```js
case game_class.instance.st_countdown1:
  if (!game_class.instance.zz()) {
    game_class.instance.game_state = game_class.instance.st_gamebeat;
  } else {...}
```

{{< nobottommargin >}}Now the win screen shows up, but there's another issue:{{< /nobottommargin >}}
~*ADD IMAGE OF GAMEOVER SCREEN BEING SHOWN INSTEAD OF WIN SCREEN*~

This is just the game over screen, why is it not congratulating me on my win? Well, after tapping it out, the game over and win screen use the same function to throw a screen up on the ending state. But, the function only has code for the game over screen, so lets rewrite it to add the congratulations text.

{{< nobottommargin >}}This is pretty simple, so I won't show the code.{{< /nobottommargin >}}
~*ADD IMAGE OF WIN SCREEN*~

### Win Screen Background Not Being Set Properly
Ah, now the background refuses to be set to the "Garlicky Bratwurst" splash screen. Initially, I thought it was the same issue that the next level screen had, but when I tried to turn off the `autoReset`, it did nothing.

I had to go searching though the graphics code to fix this.

{{< nobottommargin >}}Thankfully, the code in the game over function constructs the graphics object:{{< /nobottommargin >}}
```js
createjs.mcGameOver = new lib.mcGameOver();
```
so searching through that graphics class, I found a property called `splash`.

{{< nobottommargin >}}It uses the same graphics class that the next level screen uses, and a few lines after instantiation, this line appears:{{< /nobottommargin >}}
```js
this.splash.cache(-2, -2, 734, 594);
```
{{< nobottommargin >}}This stood out to me instantly. Reading through the createjs documentation for the method [cache](https://createjs.com/docs/easeljs/classes/MovieClip.html#method_cache) it says:{{< /nobottommargin >}}
"Draws the display object into a new element, which is then used for subsequent draws"

That's exactly why it's not changing! Removing this one line fixes it completely.
## Improvements
Now that I fixed all the bugs I could find, lets improve somethings.

### Reverting '_Vanilla Topping_' back to '_Caramel Topping_'
This is a very small change, but I feel it's good to have accuracy in the areas that are not super changed for user experience purposes.

{{< rawhtml >}}
<style>
    img[src*="caramel.svg"] {
        width: 25%;
    }
</style>
{{< /rawhtml >}}
{{< nobottommargin >}}Does this really look like _Vanilla Topping_?{{< /nobottommargin >}}
![`*CARAMEL TOPPING*`](./caramel.svg "Caramel Topping")
### 30 Frames Per Second!
{{< nobottommargin >}}The game runs at an ungodly low framerate. Looking around for the main loop runner, I found this line of code:{{< /nobottommargin >}}
```js
mainLoopInterval = setInterval(game_class.instance.mainLoop, 100);
```

Looking at the `setInterval` documentation on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval), the second argument is the delay between each function execution in _milliseconds_.

To set the framerate you typically write something like this: `1 second / FPS`. Since `setInterval` uses milliseconds we need to use `1000 / FPS`.

The only way to get 100 from `1000 / FPS` is `1000 / 10`, meaning the game runs at 10 FPS!

The easy fix for this is to replace `100` with `1000 / 30` to get 30 FPS.

I would like to replace the `setInterval` function with something like [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame), that way the framerate of the game matches the refresh rate of the browser, but I feel like that's a pretty large refactor to do right now, so I'll leave it alone for now.

### Full Settings Menu & Storing Settings Locally
This is one of the most complex sections of this post. Thankfully, I didn't have to code a bunch of things together, but it was still an ordeal to get working.

The basic premise of adding a settings menu was to make sure the user experience was customizable. If a person wanted to have the character float above the mouse or directly underneath it, the should have that choice.

#### Mockup
{{< nobottommargin >}}I started by making a mockup of the settings menu in InkScape:{{< /nobottommargin >}}
![`*SETTINGS MOCKUP*`](./settings-mock-up.webp "Settings Mockup")

It certainly doesn't look perfect, but it gets the job done.

#### Start
{{< nobottommargin >}}Firstly, I create a custom class called `settings_menu` that extends the createjs class `MovieClip` and add it into the main menu class.{{< /nobottommargin >}}
```js
class settings_menu extends MovieBase {
  ...
}

(f8s[8].intro = function(p31, D31, j31) {
  ...
  this.settings_menu = new settings_menu();
  this.settings_menu.parent = this;
  ...
}
```

Next, I replaced the music toggle button on the main menu screen. But first, I need to make the settings button.

{{< nobottommargin >}}To create the "settings" button, I copied the definition for the music toggle button class, changed the text, then replaced the music button in the main menu. Resulting in this:{{< /nobottommargin >}}
![`*SETTINGS BUTTON*`](./settings-button.webp "Settings Button")

{{< nobottommargin >}}Then, in the `taskoneButtonsHandler`, I added a section in the `pressup` for the settings button that makes the settings menu visible:{{< /nobottommargin >}}
```js
if (this.name == "butsettings") {
  contmc.content_mc.intro_mc.settings_menu.visible = true;
}
```

#### Creating The Settings Menu
After creating the base for the settings menu, I started by creating the background. And I immediately ran into a problem, createjs doesn't take svg commands, rather, it has its own way of constructing shapes.

Createjs allows developers to construct graphics by calling drawing functions via the fluent interface design pattern. Notably, you can also [encode a path](https://createjs.com/docs/easeljs/classes/Graphics.html#method_decodePath) to a base64 string, but there is no prebuilt svg path encoder, so I had to go with something else.

Thankfully, somebody has made an [svg to createjs path](https://github.com/StueyKent/svg-to-createjs-path) self-deployable webapp, which --- if it wasn't obvious from its name --- converts SVG paths to createjs drawing functions. It's quite old, the last commit to the repo was 8 years ago, but it still worked!

It only does _paths_, so I'll have to translate the text and regular shapes by hand.

##### Checkbox Prefab
{{< nobottommargin >}}For the checkboxes, I need to make a reuseable checkbox class that has an unset, set, and hovered state.{{< /nobottommargin >}}
```js
class imp_checkbox extends MovieBase {
  constructor(Z31, u31, b31) {
    // super(new createjs.Rectangle(0, 0, 22, 22), null);
    super(null, null);
    this.initialize(Z31, u31, b31, {});

    this.frame_0 = function() { this.stop(); }
    this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1));

    // Checkbox
    this.checkbox = new createjs.Shape();
    this.checkbox.graphics.setStrokeStyle(2).beginStroke("#ffffff").moveTo(4.34646, 0.94488001).lineTo(17, 0.94488001).bezierCurveTo(18.884, 0.945, 20.402, 2.462, 20.402, 4.346).lineTo(20.402, 17).bezierCurveTo(20.402, 18.884, 18.885, 20.402, 17, 20.402).lineTo(4.34646, 20.402).bezierCurveTo(2.462, 20.402, 0.945, 18.885, 0.945, 17).lineTo(0.945, 4.34645).bezierCurveTo(0.945, 2.462, 2.462, 0.945, 4.347, 0.945).endStroke();

    this.checkbox.parent = this;

    // Toggled "X"
    this.check = new createjs.Text("X", "28px 'Mufferaw Rg'", "#ff0000");
    this.check.parent = this;
    this.check.align = "center";
    var check_bounds = this.check.getBounds();
    this.check.setTransform(11, 11, 1, 1, 0, 0, 0, check_bounds.width / 2, check_bounds.height / 2);

    // Hover "X"
    this.check_hover = new createjs.Text("X", "28px 'Mufferaw Rg'", "#ffff00");
    this.check_hover.parent = this;
    this.check_hover.align = "center";
    var check_bounds = this.check_hover.getBounds();
    this.check_hover.setTransform(11, 11, 1, 1, 0, 0, 0, check_bounds.width / 2, check_bounds.height / 2);

    this.timeline.addTween(createjs.Tween.get({}).to({ state: [ { t: this.checkbox } ]}).wait(1).to({ state: [ { t: this.check_hover }, {t: this.checkbox }] }).wait(1).to({ state: [ { t: this.check }, {t: this.checkbox }] }).wait(1));
  }
}
```

{{< nobottommargin >}}this checkbox it then followed up with a `ToggleButton` class that implements all the logic for the button, adds a text label, and a bounding box:{{< /nobottommargin >}}
```js
class ToggleButton extends MovieBase {
  constructor(label_text, font, color, x, y, padding, Z31, u31, b31) {
    super(new createjs.Rectangle(0, 0, 505, 544.1), null);
    this.initialize(Z31, u31, b31, {});

    this.toggled = false;
    this.padding = padding;
    this.frame_0 = function() { this.stop(); };
    this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1));

    this.toggle_box = new imp_checkbox();
    this.toggle_box.autoReset = false;
    this.toggle_box.setTransform(0, 0);
    this.timeline.addTween(createjs.Tween.get(this.toggle_box).wait(1));

    this.label = new createjs.Text(label_text, font, color,);
    this.label.setTransform(30, 0);
    this.timeline.addTween(createjs.Tween.get(this.label).wait(1));

    this.bounding_box = create_bounding_box(x, this.toggle_box, this.label, padding);
    this.timeline.addTween(createjs.Tween.get(this.bounding_box).wait(1));
    this.setTransform(x, y);
  }

  left_no_bb() {
    let bounds = this.getBounds();
    return {x: (this.x + this.padding) + (bounds.width - (this.padding * 2)), y: this.y }
  }

  set_state(toggled) {
    this.toggled = toggled;
    this.toggle_box.gotoAndStop((toggled) ? 2 : 0);
  }

  toggle() {
    if (this.toggled) {
      this.toggled = false;
      this.toggle_box.gotoAndStop(0);
    } else {
      this.toggled = true;
      this.toggle_box.gotoAndStop(2);
    }
  }
}
```

This `ToggleButton` needs to have a bounding box, as if it didn't, the button would only work if you hover of the defined shapes.

There's also supporting logic that allows a dev to toggle the button and set its state.

The function `left_no_bb` is useful when positioning the checkbox as the bounding box offsets the top-left position.

##### The Rest of The Layout
Now that the one reuseable thing has been implemented, I can get on to the rest of the layout.

The settings box background is easy to translate over, but the transparent background gave me some trouble in the svg path tool; Breaking it down into 4 individual paths made it work, though.

To make things easier on myself, I collected related objects down into containers so all elements can be positioned easier.

I'm not going to go into much more detail, as the code can speak for itself:
{{< details summary="___Click to Reveal Full Settings Menu Code___" >}}
```js
class settings_menu extends MovieBase {
  constructor(Z31, u31, b31) {
    super(new createjs.Rectangle(0, 0, 505, 544.1), null);
    this.initialize(Z31, u31, b31, {});
    this.frame_0 = function() { this.stop(); };
    this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1));

    var text_color = "#ffffff";

    this.settings_label = new createjs.Text("settings", "32px 'Mufferaw Rg'", text_color);
    this.settings_label.parent = this;
    this.settings_label.setTransform(56, 193);
    this.timeline.addTween(createjs.Tween.get(this.settings_label).wait(1));

    class SoundToggle extends createjs.Container {
      constructor(x, y) {
        super();
        this.sound_label = new createjs.Text("sound:", "24px 'Mufferaw Rg'", text_color);
        this.sound_label.setTransform(0, 3);

        this.sound_on_toggle = new ToggleButton("on", "24px 'Mufferaw Rg'", text_color, 95, 3, 3);
        this.sound_off_toggle = new ToggleButton("off", "24px 'Mufferaw Rg'", text_color, this.sound_on_toggle.left_no_bb().x + 40, 3, 3);
        this.addChild(this.sound_label, this.sound_on_toggle, this.sound_off_toggle);

        this.setTransform(x, y);
      }
    }

    this.sound_toggle = new SoundToggle(64, 228);
    this.sound_toggle.parent = this;
    this.timeline.addTween(createjs.Tween.get(this.sound_toggle).wait(1));

    class FPSToggle extends createjs.Container {
      constructor(x, y) {
        super();
        this.fps_label = new createjs.Text("fps:", "24px 'Mufferaw Rg'", text_color);
        this.fps_label.setTransform(0, 3);

        this.fps_10_toggle = new ToggleButton("10", "24px 'Mufferaw Rg'", text_color, 95, 3, 3);
        this.fps_30_toggle = new ToggleButton("30", "24px 'Mufferaw Rg'", text_color, 164 - 3, 3, 3);
        this.addChild(this.fps_label, this.fps_10_toggle, this.fps_30_toggle);

        this.setTransform(x, y);
      }
    }

    this.fps_toggle = new FPSToggle(64, 258);
    this.fps_toggle.parent = this;
    this.timeline.addTween(createjs.Tween.get(this.fps_toggle).wait(1));

    class HoverSelection extends createjs.Container {
      constructor(x, y) {
        super();
        this.hover_label = new createjs.Text("adee hover distance:", "28px 'Mufferaw Rg'", text_color);
        this.hover_label.setTransform(5, 0);

        this.device_toggle = new ToggleButton("device", "24px 'Mufferaw Rg'", text_color, 0, 33, 3);
        this.mobile_toggle = new ToggleButton("mobile", "24px 'Mufferaw Rg'", text_color, 140 - 3 * 2, 33, 3);
        this.desktop_toggle = new ToggleButton("desktop", "24px 'Mufferaw Rg'", text_color, 262 - 3 * 2, 33, 3);
        this.addChild(this.hover_label, this.device_toggle, this.mobile_toggle, this.desktop_toggle);

        this.setTransform(x, y);
      }
    }

    this.hover_selection = new HoverSelection(55, 294);
    this.hover_selection.parent = this;
    this.timeline.addTween(createjs.Tween.get(this.hover_selection).wait(1));

    class ExitButton extends MovieBase {
      constructor(Z31, u31, b31) {
        super(null, null);
        this.initialize(Z31, u31, b31, {});
        this.frame_0 = function() { this.stop(); }
        this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1));

        this.exit_static = new createjs.Text("exit", "40px 'Mufferaw Rg'", "#ffffff");
        this.exit_static.parent = this;
        this.exit_static.align = "center";

        this.exit_hover = new createjs.Text("exit", "40px 'Mufferaw Rg'", "#ffff00");
        this.exit_hover.parent = this;
        this.exit_hover.align = "center";

        this.exit_clicked = new createjs.Text("exit", "40px 'Mufferaw Rg'", "#ff0000");
        this.exit_clicked.parent = this;
        this.exit_clicked.align = "center";

        var exit_bounds = this.exit_static.getBounds();
        this.rect = new createjs.Shape();
        this.rect.graphics.beginFill("#ffffff").drawRect(exit_bounds.x - 2.5, exit_bounds.y - 2.5, exit_bounds.width + 5, exit_bounds.height + 5);
        this.rect.parent = this;
        this.rect.alpha = .01;

        this.timeline.addTween(createjs.Tween.get({}).to({ state: [ { t: this.rect }, { t: this.exit_static } ]}).wait(1).to({ state: [ { t: this.rect }, { t: this.exit_hover } ]}).wait(1).to({ state: [ { t: this.exit_clicked } ]}).wait(1));
      }
    }

    // Exit button
    this.exit_button = new ExitButton();
    this.exit_button.parent = this;
    this.exit_button.setTransform(214, 358);
    this.timeline.addTween(createjs.Tween.get(this.exit_button).wait(1));

    this.bkg = new createjs.Shape();
    this.bkg.parent = this;
    this.bkg.graphics.beginFill("#000000").moveTo(51.961859, 179.97162).lineTo(448.03815, 179.97162).bezierCurveTo(453.813, 179.972, 458.461, 184.802, 458.461, 190.803).lineTo(458.461, 386).bezierCurveTo(458.461, 392, 453.812, 396.831, 448.038, 396.831).lineTo(51.961859, 396.831).bezierCurveTo(46.187, 396.831, 41.539, 392, 41.539, 386).lineTo(41.539, 190.80259).bezierCurveTo(41.539, 184.802, 46.188, 179.972, 51.962, 179.972).endFill();
    this.bkg.alpha = 0.85;
    this.timeline.addTween(createjs.Tween.get(this.bkg).wait(1));

    // Clicking on the background exits the settings menu
    this.bkg_exit = new createjs.Shape();
    this.bkg_exit.parent = this;
    this.bkg_exit.graphics.beginFill("black").moveTo(41.5388, 0).lineTo(458.461, 0).lineTo(458.461, 191).bezierCurveTo(458, 191, 458, 180.739, 447.577, 180.032).lineTo(51.9619, 180.032).bezierCurveTo(41.532, 180.872, 41.539, 190.863, 41.539, 190.863).moveTo(41.538796, 385.76003).bezierCurveTo(41.539, 385.76, 41.466, 395.773, 51.962, 396.591).lineTo(448.03815, 396.591).bezierCurveTo(458.159, 396.016, 458.461, 385.76, 458.461, 385.76).lineTo(458.45989, 540).lineTo(41.538796, 540).drawRect(0, 0, 41.539, 538.613).drawRect(458.461, 0, 41.539, 538.613).endFill();
    this.bkg_exit.alpha = 0.50;

    this.timeline.addTween(createjs.Tween.get(this.bkg_exit).wait(1));

    this.visible = false;
  }
}
f8s[8].settings_menu = settings_menu;
```
{{< /details >}}

##### Button Logic
Some of the options are mutually exclusive --- like running at 10 FPS or 30 FPS --- and I need to ensure they are not selectable at the same time, to do this, I modify `taskoneButtonsHandler`.

I could have added a new handler for the settings menu buttons, but the buttons below the settings screen still work and need to be disabled while the settings menu is up.

This method was a bit spaghetti, and looking back, I could have used a global bool to track when you're inside the settings menu and stop the main menu buttons from working accordingly, but it works right now so I'm not gonna mess with it.

{{< nobottommargin >}}Otherwise, the logic for keeping the buttons mutually exclusive is pretty simple: if one box is clicked, set its state to 'on' and set all other mutually exclusive buttons to their 'off' state.{{< /nobottommargin >}}
```js
device_toggle.set_state(true);
mobile_toggle.set_state(false);
desktop_toggle.set_state(false);
```

Now we have this:
![`*SETTINGS MOCKUP*`](./settings_menu.webm)
##### Settings Logic & data
