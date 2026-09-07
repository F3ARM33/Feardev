Vendored from https://github.com/dashersw/liquid-glass-js (MIT, (c) Armagan Amcalar)
Commit: 78cb6ccb0b9987bb60a88b14ccbd13a9e6e8ab2a
Files: button.js, container.js, glass.css. Demo/controls/styles.css omitted (not required).
Runtime dep: html2canvas 1.4.1 must be loaded first.

Local patch: ignoreElements also skips <canvas>. html2canvas throws
InvalidStateError on any zero-sized canvas, which aborts the whole snapshot.
See the LOCAL PATCH comment in container.js.
