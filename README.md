Vue Christmas Ornaments
========================
This is a vue version of some Christmas ornaments that have been floating around the web for a few years. The original source is unknown, as is the original license. This vue project has an MIT license.


Installation
-------------
Install with yarn or npm:

    yarn install vue-christmas-ornaments


Usage
------
First, import the module:

    import 'vue-christmas-ornaments'

Copy the assets (image and media files) to your public folder. By default, it will look for them in images/holiday.

    cp -r node_modules/vue-christmas-ornaments/assets public/images/holiday

Then, use it in your vue files. To use all defaults, just enter:

    <christmas-ornaments></christmas-ornaments>

These props can be set:

path
: set the path to the asset files (default: /images/holiday)

sound
: turn the sound effect on or off (default: true)

balls
: set the position of each ball shown

branches
: set the position of each extra branch shown. These fill in the spaces in the background image, and appear to partially occlude the balls.

height
: set the height of the object.

sectionWidth
: set the width of each section (eg, the width of the overall background image)

