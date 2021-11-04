const products = [
    {
        "name": "Savannah SGD-10 Dreadnought Acoustic Guitar Satin Sunburst" ,
        "description": "Want a fun, no-stress acoustic for camping and beach bonfire trips or just want to get the hang of the acoustic guitar? This super affordable Savannah SGD-10 offers you the popular dreadnought body with a basswood top and a comfortable thin C neck profile neck with fully bound rosewood fingerboard." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/J13212000003000-02-2000x2000.jpg" ,
        "stock": 5,
        "price": 2699,
        "brand": "Savannah",
        "model": "SGD-10",
        "category": "Acoustic Guitars"
    },
    {
        "name": "Hendrix Drums Perfect Ply Series Walnut 3-Piece Shell Pack" ,
        "description": "Walnut drums are especially coveted by jazz and fusion drummers as a softer, punchier wood with deep tone, and Hendrix Drums has met that demand with this Perfect Ply walnut 3-piece shell pack. Crafted from 4 plies of genuine black walnut wood, these 5 mm thin rack tom, floor tom and kick drum shells deliver distinctive punchy sound that helps them sing at low volumes. Harder reinforcement rings keep the construction rigid enough for rock music as well, delivering a powerful tone when you lay into the drums with all you've got." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/Perfect-Ply-Series-Walnut-3-Piece-Shell-Pack-Fusion-Sizes-Gloss/L71518000000002-00-500x500.jpg" ,
        "stock": 3,
        "price": 3199,
        "brand": "Hendrix Drums",
        "model": "Fusion Sizes Gloss",
        "category": "Drum Kits"
    },
    {
        "name": "Rogue RD80 Dreadnought Acoustic Guitar Black" ,
        "description": "The Rogue RD80 Dreadnought acoustic guitar is an epic bargain; you can't beat the features you get for the price. Mahogany stained back and sides with a bound blonde basswood top. The RD80 also features a nato neck with a bound sonokelin fingerboard and bridge. Top it all off with chrome hardware and you have a great starter guitar at a killer price." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/H80040000002000-05-500x500.jpg" ,
        "stock": 8,
        "price": 1699,
        "brand": "Rogue",
        "model": "RD80",
        "category": "Acoustic Guitars"
    },
    {
        "name": "Taylor 255ce 12 Strings Electro-Acoustic Guitar" ,
        "description": "For those guitarists looking to broaden their musical palette, this 254ce makes a strong case as the ideal 12-string for players in all situations. Layered rosewood back and sides combine with a solid Sitka spruce top to produce a vivid, octave-rich tone layered with overtonal complexity. Shimmering, cascading highs blend smoothly with a rich low end, offering a versatile tone that performs beautifully in solo settings or as an accompanying instrument played alongside a larger ensemble. The spruce top delivers top-end clarity that helps the 254ce cut through any mix, while layered back and sides make this an ideal option for travel and practice sessions. Appointed with crisp white binding, a three-ring rosette, 4mm Dot inlays, and a Venetian cutaway, this guitar ships with ES2 electronics in a hardshell gig bag." ,
        "image":"https://www.taylorguitars.com/sites/default/files/responsive-guitar-detail/Taylor-254ce-frl-2020_0.png" ,
        "stock": 10,
        "price": 1099,
        "brand": "Taylor",
        "model": "255ce",
        "category": "Electro-Acoustic Guitars"
    },
    {
        "name": "Taylor 214ce DLX Electro-Acoustic Guitar" ,
        "description": "With a solid Sitka spruce top and layered Indian rosewood back and sides, this Grand Auditorium guitar delivers a rich, nuanced tone profile punctuated by high-end sparkle and midrange punch. The patented Taylor neck and Venetian cutaway provide a comfortable playing experience across a broad range of musical styles, and with an Expression System 2 pickup and preamp highlighting the quality and depth of the guitar’s natural sound, the 214ce DLX is ready to perform in any environment. It’s appointed with white binding, Italian acrylic Small Diamond inlays, and a full-gloss body, and ships in a deluxe hardshell case." ,
        "image":"https://www.taylorguitars.com/sites/default/files/responsive-guitar-detail/Taylor-214ce-DLX-RW-fr-2020.png" ,
        "stock": 10,
        "price": 1399,
        "brand": "Taylor",
        "model": "214ce",
        "category": "Electro-Acoustic Guitars"
    },
    {
        "name": "Taylor GS Mini Rosewood Electro-Acoustic Guitar" ,
        "description": "An exciting new entry in our lineup of ultra-popular short-scale guitars, this rosewood edition of the GS Mini brings the beauty and resonance of the all-star acoustic tonewood to a comfortable, easy-to-transport package. With its reduced size and slender, comfortable neck, the GS Mini offers an inviting, intimate playing experience for guitarists of all styles and levels of ability. Thanks to the GS Mini’s bold tone and projection, you’ll have everything you need for practice, jam sessions, and even live performances—it even comes with a durable structured gig bag." ,
        "image":"https://www.taylorguitars.com/sites/default/files/responsive-guitar-detail/Taylor-GSMini-e-RW-frl-2019-1_0.png" ,
        "stock": 10,
        "price": 599,
        "brand": "Taylor",
        "model": "GS Mini Rosewood",
        "category": "Electro-Acoustic Guitars"
    },
    {
        "name": "Gibson ES 335 Electric Guitar",
        "description": "The Gibson ES-335 DOT is the cornerstone of the Gibson ES line-up. From its inaugural appearance in 1958, the Gibson ES-335 set an unmatched standard. The pearloid dot inlay rosewood fingerboard on a hand-rolled Rounded 'C' mahogany neck remind players where it all started. Gibson's Calibrated T-Type humbucking pickups are paired with our hand-wired control assembly. The result is that versatile Gibson ES tone that players have craved for over 60 years. Tuning stability and precise intonation are provided by the Vintage Deluxe tuners with Keystone buttons, paired with light weight Aluminum ABR-1 bridge and Stop Bar tailpiece, anchored by steel thumb-wheels and tailpiece studs." ,
        "image":"https://static.gibson.com/product-images/USA/USAVLJ627/Sixties%20Cherry/front-banner-1600_900.png" ,
        "stock": 10,
        "price": 3299,
        "brand": "Gibson",
        "model": "ES 335",
        "category": "Electric Guitars"
    },
    {
        "name": "Gibson Les Paul Standard '50s - Gold Top Electric Guitar" ,
        "description": "The new Les Paul Standard returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50's has a solid mahogany body with a maple top, a rounded 50's-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic bridge, aluminum stop bar tailpiece, vintage deluxe tuners with keystone buttons, and aged gold tophat knobs. The calibrated Burstbucker 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with AlNiCo II magnets, audio taper potentiometers and orange drop capacitors." ,
        "image":"https://static.gibson.com/product-images/USA/USAUBC849/Gold%20Top/front-banner-1600_900.png" ,
        "stock": 10,
        "price": 2699,
        "brand": "Gibson",
        "model": "Les Paul Standard '50s - Gold Top",
        "category": "Electric Guitars"
    },
    {
        "name": "Music Man  StyngRay 4String - H Electric Bass" ,
        "description": "First introduced in 1976, the StingRay has been revered as one of the most iconic bass guitars in history. The StingRay was the first production four string bass to feature onboard active equalization. The flagship of the Music Man line, today's StingRay retains the same signature features that it had some forty years ago, including a solid roadworthy construction, iconic oval pickguard, 3+1 tuning key configuration, and the ever-popular Music Man humbucker — all of which combine to produce a look, feel, and sound that is remarkably unmistakable." ,
        "image":"https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-74.png?1630695140" ,
        "stock": 10,
        "price": 2699,
        "brand": "Music Man",
        "model": "StyngRay",
        "category": "Electric Bass"
    },
    {
        "name": "Yamaha PSR-EW310 Digital Keyboard" ,
        "description": "PSR-EW310 is a 76-key, standard model of Portable Keyboard for those who touch keyboard instrument for the first time, or even for players for performance usage. It is loaded with versatile functions, an expressive touch-sensitive keyboard action and many convenient functions so that even beginners can enjoy playing it right away." ,
        "image":"https://es.yamaha.com/es/files/Image-Index_PSR-EW310_1080x1080_64276b31b197950dbdf53f68c51b8a4b.jpg?impolicy=resize&imwid=1080&imhei=1080" ,
        "stock": 10,
        "price": 599,
        "brand": "Yamaha",
        "model": "PSR-EW310",
        "category": "Digital Keyboards"
    },
    {
        "name": "Yamaha DTX6K-X Digital Drum" ,
        "description": "The DTX6 Series features the innovative KIT MODIFIER, which sparks creativity and delivers superb performance in a compact configuration. The original Yamaha TCS (Textured Cellular Silicone) head used in the flagship models combines with real sound and ambience recorded in a world-renowned studio to provide an authentic playing experience.The DTX6 Series is recommended for all drummers who want to have fun, play like a pro and hope to easily transfer their skills to acoustic drums" ,
        "image":"https://usa.yamaha.com/files/DTX6K-X_f_0001_657901ae9c778e17d01ef7ca7fcc0208.jpg?impolicy=resize&imwid=735&imhei=735" ,
        "stock": 10,
        "price": 1360,
        "brand": "Yamaha",
        "model": "DTX6K-X",
        "category": "Digital Drums"
    },
    {
        "name": "Yamaha AV5-SKU Acoustic Violin" ,
        "description": "The AV5-SKU Series features the innovative KIT MODIFIER, which sparks creativity and delivers superb performance in a compact configuration. The original Yamaha TCS (Textured Cellular Silicone) head used in the flagship models combines with real sound and ambience recorded in a world-renowned studio to provide an authentic playing experience.The DTX6 Series is recommended for all drummers who want to have fun, play like a pro and hope to easily transfer their skills to acoustic drums" ,
        "image":"https://usa.yamaha.com/files/12860D429D03487A9566646B9352F275_12073_1200x480_c1a88ee3506853b29089dd1ae0815177.jpg" ,
        "stock": 10,
        "price": 1095,
        "brand": "Yamaha",
        "model": "AV5-SKU",
        "category": "Acoustic Violin"
    },
    {
        "name": "Yamaha YEV-105 Electric Violin" ,
        "description": "A new kind of electric violin taking its design inspiration from the organic beauty of wood, the simplicity of clean lines, and the comfort of light weight, combined with innovative Yamaha sound to create this gorgeous live-performance instrument. (5-string model)" ,
        "image":"https://www.electricviolinshop.com/media/magefan_blog/2016/01/YEV_blog.jpg" ,
        "stock": 10,
        "price": 2095,
        "brand": "Yamaha",
        "model": "YEV-105",
        "category": "Electric Violin"
    },
    {
        "name": "Kremona 90th Anniversary Nylon-String Guitar Natural" ,
        "description": "Handcrafted in Bulgaria, the Romida Classical Guitar represents the culmination of over 80 years of guitar building by Kremona. With all-solid woods and impeccable workmanship, this guitar will satisfy anyone looking for a superior nylon-string guitar.The Romida features solid rosewood back and sides and a solid German spruce top for a bright and full sound. The Spanish cedar neck has an ebony fingerboard and 25 5/8' scale length leading to a ebony bridge." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/H72431000001000-02-2000x2000.jpg" ,
        "stock": 5,
        "price": 2999,
        "brand": "Kremona",
        "model": "Romida Classical ",
        "category": "Nylon/Classical Guitars"
    },
    {
        "name": "Fender American Original '60S Electric Guitar" ,
        "description": "Beloved by country players and indie rockers alike for its semi-hollow warmth, rounder twang and elegant appearance, the Telecaster® Thinline is a classic in its own right within the venerable Telecaster lineup. The American Original '60s Telecaster Thinline recreates this sophisticated six-string with tastefully modernised playability." ,
        "image":"https://www.fmicassets.com/Damroot/LgJpg/10001/0110172834_gtr_frt_001_rr.jpg" ,
        "stock": 10,
        "price": 2500,
        "brand": "Fender",
        "model": "AMERICAN ORIGINAL '60S TELECASTER THINLINE",
        "category": "Electric Guitars"
    },
    {
        "name": "Nord Piano 5 Digital Keyboard" ,
        "description": "The latest edition of our award-winning Piano series is equipped with dual piano engines, dual sample synths and twice the memory of the previous generation. With the combination of a premium Triple Sensor keybed and our exclusive Virtual Hammer Action Technology, the portable Nord Piano 5 delivers an exceptional playing experience." ,
        "image":"https://www.nordkeyboards.com/sites/default/files/styles/308x160/public/files/products/nord-piano-5/NP5-overview.jpg?itok=YIIX_IAO" ,
        "stock": 10,
        "price": 1500,
        "brand": "Nord",
        "model": "Piano 5",
        "category": "Digital Keyboards"
    },
    {
        "name": "Nord Drum 3p Digital Drum" ,
        "description": "The super compact new Nord Drum 3P combines stunning playability with unlimited sound design possibilities! New features include integrated multi-pad, Reverb and Delay effects, a simplified sound selection mode and new Sound Banks for quickly creating custom kits on the fly." ,
        "image":"https://www.nordkeyboards.com/sites/default/files/files/products/nord-drum-3p/images/Nord%20Drum%203P%20Top.jpg" ,
        "stock": 10,
        "price": 900,
        "brand": "Nord",
        "model": "Drum 3p",
        "category": "Digital Drums"
    },
    {
        "name": "Taylor T5 Classic Electric Guitar" ,
        "description": "Mahogany-top guitars aren’t exclusive to Taylor’s acoustic line. The character-rich hog-top T5 Classic shows off a dark, earthy look that’s underscored by a satin classic mahogany finish and an unbound body. The hollowbody hybrid’s three-pickup configuration features an acoustic body sensor, a concealed neck humbucker, and a visible bridge humbucker, plus five-way switching and onboard tone controls that give players a truly full-range performance guitar. Additional appointments include Small Diamond inlays and nickel hardware. The guitar ships in a Taylor gig bag." ,
        "image":"https://cdn.mos.cms.futurecdn.net/c764c2a25cb16145479c7bb014e9a2b4-1200-80.jpg.webp" ,
        "stock": 10,
        "price": 1899,
        "brand": "Taylor",
        "model": "T5 Classic",
        "category": "Electric Guitars"
    },
    {
        "name": "Nord Lead A1 Digital Keyboard" ,
        "description": "This is the new Nord Lead A1 analog modeling synthesizer – a stunning sounding synthesizer with a simplified yet hugely powerful front panel interface. Producing stand-out sounds for live or for the studio, the Lead A1 is ideal for all musical genres. Thanks to its carefully thought-out user interface, the Lead A1 encourages experimentation, allows for far speedier programming than would otherwise be possible, and ultimately delivers sensational sonic results." ,
        "image":"https://www.nordkeyboards.com/sites/default/files/files/products/nord-lead-a1/images/models-leada1.jpg" ,
        "stock": 10,
        "price": 1800,
        "brand": "Nord",
        "model": "Lead A1",
        "category": "Digital Keyboards"
    },
    {
        "name": "Jasmine S-34C Cutaway Acoustic Guitar Natural" ,
        "description": "The Jasmine S-34C is a stylish grand orchestra-style guitar with a rich, well-balanced sound and a graceful Venetian-style cutaway that represent exceptional value. Great for any player seeking a well-built and easy-playing guitar, the S-34C features a select spruce top with Jasmine's Advanced 'X' Bracing, and sapele back and sides. The slim neck and full 25-1/2' scale length provide comfortable feel and excellent playability, and the smooth satin finish maximizes resonance for optimal sound quality." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/H96926000001000-02-2000x2000.jpg" ,
        "stock": 10,
        "price": 1499,
        "brand": "Jasmine",
        "model": "S-34C",
        "category": "Acoustic Guitars"
    },
    {
        "name": "Lucero LC100 Classical Guitar Natural" ,
        "description": "The Lucero LC100 Classical Guitar features a laminated spruce top and mahogany back and sides. An excellent guitar for the beginner. Case sold separately." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/518978000010000-03-2000x2000.jpg" ,
        "stock": 10,
        "price": 1499,
        "brand": "Lucero",
        "model": "LC100",
        "category": "Nylon/Classical Guitars"
    },
    {
        "name": "Kremona 90th Anniversary Nylon-String Guitar Natural" ,
        "description": "The Kremona 90th Anniversary nylon-string guitar is a concept model steeped in tradition with an eye toward the future. Pau ferro has been selected for the back and sides, a closed pore species with exemplary projection. The top is of narrow-grained cedar, specially-bladed to 1.8 mm and supported by stiff, ultralight carbon-fused bracing. This approach amplifies bass frequencies, expanding the instrument's overall volume with increased sensitivity. A dual-channeled Honduran cedar neck retains musicality while providing physics-proven stability without the necessity of a truss rod. Each 90th Anniversary model is individually numbered as part of a limited run." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/J12687000001000-02-2000x2000.jpg" ,
        "stock": 10,
        "price": 2899,
        "brand": "Kremona",
        "model": "90th Anniversary",
        "category": "Nylon/Classical Guitars"
    },
    {
        "name": "Mitchell D120 Dreadnought Acoustic Guitar Sunburst" ,
        "description": "The workhorse of the Mitchell acoustic line, the D120 Dreadnought acoustic guitar features a select spruce top with a lighter finish, and a mahogany neck and jatoba fretboard. Its mahogany back and sides, thinner finish and advanced, forward-shifted scalloped bracing give the D120 a solid, rich tone and outstanding projection that is ideal for stage and studio. A modern, slim-profile neck design makes the D120 a breeze to play on any position on the neck, ideal for both chording and solo work. The attractive, multi-ply binding on the neck and body, and chrome, high-ratio tuners complete the outstanding looks of this traditional instrument. Comes complete with a limited lifetime warranty." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/J41398000003000-07-500x500.jpg" ,
        "stock": 10,
        "price": 1699,
        "brand": "Mitchell",
        "model": "D120",
        "category": "Acoustic Guitars"
    },
    {
        "name": "Rogue 5-Piece Complete Drum Kit Wine Red" ,
        "description": "The result of working with pro drum instructors, the new Rogue 5-Piece Complete drum set includes everything a starting drummer needs to begin their musical journey. This all-inclusive, adult-size kit comes with two rack toms and a floor tom, a tunable snare drum and a bass drum. Comes complete with cymbals, stands and pedals, including a chain-drive bass drum pedal, hi-hat stand/pedal, snare stand and adjustable double braced boom cymbal stand—even a black powder-coated drum throne and high-quality drum sticks. And to help put it all together, Rogue includes a drum key and an easy-to-follow assembly manual. Available in an attractive Wine Red with bright chrome hardware." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/5-Piece-Complete-Drum-Set-Wine-Red/J56102000001000-00-500x500.jpg" ,
        "stock": 4,
        "price": 2899,
        "brand": "Rogue",
        "model": "Wine Red",
        "category": "Drum Kits"
    },
    {
        "name": "Sound Percussion Labs UNITY II 5-Piece Complete Drum Kit" ,
        "description": "The SPL D5522 5-piece, all-in-one drum kit is the unity of performance and expression. It’s everything you need to start playing right out of the box. The 6-ply poplar shells are first heat-formed then cut, sanded, wrapped and hardware is assembled by hand, providing consistent strength and projection, while the Arch Tech bearing edges round out tone and allow for easier tuning. Custom designed hardware, including Unity II drum lugs and comfortable wing nuts throughout provide a new level of practical functionality and ease of positioning." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/UNITY-II-5-Piece-Complete-Drum-Set-With-Hardware-Cymbals-and-Throne-Pine-Green-Glitter/L59015000004000-00-500x500.jpg" ,
        "stock": 4,
        "price": 2799,
        "brand": "Sound Percussion Labs",
        "model": "Throne Pine Green Glitter",
        "category": "Drum Kits"
    },
    {
        "name": "Williams Symphony Grand Digital Piano" ,
        "description": "Williams redefines affordable elegance with the best-in-class Symphony Grand digital piano. This micro-grand style, 88-key, hammer-action instrument offers realistic sound and feel, complemented by a luxurious ebony gloss finish. The newly designed keybed provides an authentic response and playability." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/J26300000003000-02-500x500.jpg" ,
        "stock": 2,
        "price": 2499,
        "brand": "Williams",
        "model": "Symphony",
        "category": "Grand Piano"
    },
    {
        "name": "Suzuki MDG-330 Mini Grand Digital Piano" ,
        "description": "Suzuki introduces a Mini-Grand Digital Piano that's beautiful to look at and fun for the whole family. A powerful musical instrument, the MDG-330 is packed with features that combine technically advanced performance with traditional elegance and a hand-rubbed lacquer cabinet. Perfectly proportioned, the MDG-330 fits most room sizes and decor preferences. Hundreds of prerecorded music files are available to download to set just the right mood." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/J19266000000000-00-2000x2000.jpg" ,
        "stock": 2,
        "price": 2899,
        "brand": "Suzuki",
        "model": "MDG-330",
        "category": "Grand Piano"
    },
    {
        "name": "Suzuki VG-88 Vertical Grand Piano" ,
        "description": "The classic upright piano takes on the whole new dimension with the Suzuki VG-88 vertical grand console digital piano. Designed to create exciting music performances at home or school, the VG-88 has an impressive list of professional features not the least of which is affordability. Priced below any comparable Digital Piano in its class, the VG-88 includes state of the art electronics housed in a beautiful furniture quality cabinet. Teacher and student share the keyboard with twin function. An amazing 9 layer, 1GB Grand Piano Voice is projected through 4 way enhanced stereo sound delivery system." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/VG-88-Vertical-Grand-Console-Digital-Piano/L33920000000000-00-500x500.jpg" ,
        "stock": 2,
        "price": 3899,
        "brand": "Suzuki",
        "model": "VG-88",
        "category": "Vertical Piano"
    },
    {
        "name": "B.C. Rich Mockingbird Heritage Classic Electric Bass" ,
        "description": "The B.C. Rich Mockingbird Heritage Classic Electric Bass features neck-thru design, AAA quilted maple top and an ebony fingerboard with cloud inlays. This remarkable bass is equipped with active EQ for greater clarity and punch, one master volume, one treble, one bass and one blend control. What makes each B.C. Rich instrument instantly recognizable is its bold and unique design. This Mockingbird Heritage Classic 4-string bass is an excellent example of what happens when eye-catching looks meet powerful tone. You won't be disappointed." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/L71546000002000-02-2000x2000.jpg" ,
        "stock": 6,
        "price": 1399,
        "brand": "B.C.Rich",
        "model": "Trans Red",
        "category": "Electric Bass"
    },
    {
        "name": "Mitchell EZB Super Short-Scale Acoustic-Electric Bass" ,
        "description": "Designed for any bass player who wants an easier-playing acoustic bass guitar, the Mitchell EZB is a super short-scale mini-bass that provides a small-footprint instrument that is a breeze to play — ideal for those with smaller hands and beginning to intermediate players and students. In addition, the EZB is a great solution for anyone who wants a portable instrument for travel. This robust instrument is addictive to play and a convenient go-anywhere tool for study, songwriting, recording and performance." ,
        "image":"https://media.musiciansfriend.com/is/image/MMGS7/L54665000001000-02-2000x2000.jpg" ,
        "stock": 10,
        "price": 1299,
        "brand": "Mitchell",
        "model": "EZB",
        "category": "Acoustic-Electric Bass"
    }
]

