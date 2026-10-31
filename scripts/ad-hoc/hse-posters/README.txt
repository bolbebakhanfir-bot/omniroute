HSE SAFETY POSTERS — Meryal Water Park / Rixos Premium Qetaifan Island North / Azure Beach Club
57 posters, A3 + A4, generated with Playwright (pre-installed in the cloud session).

Build:          node build.js            -> out/A3, out/A4, out/preview
Combine:        cd out && pdfunite $(ls A3/*.pdf | sort) ALL_57_POSTERS_A3.pdf && pdfunite $(ls A4/*.pdf | sort) ALL_57_POSTERS_A4.pdf
Photos:         drop photos/<NN>.jpg (poster number, e.g. 11.jpg) and rebuild — replaces the drawn scene.
Duty numbers:   NUM in build.js (water park 70807279, hotel 70807278).
Content:        src/posters.js (text), src/scenes.js (drawn fallbacks), src/shots.js (photo brief per poster).
