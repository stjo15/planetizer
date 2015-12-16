Planetizer jQuery plugin

Installation:

Go to the plugin GitHub page.
        Download the folder and add it to your project.
        Add <script src='js/planetize.js'><script> to your html with the appropriate path.
        Add the sample images in a /img folder in your webroot. If you want your own images, you need to add a custom path/filename
        to your images.
        Simply use .planetize() on your chosen <div> element as you would any other jQuery method!
        Example simple code:

            $('#space').planetize();

Customization:

        No need to customize, simply use .planetize() if you want the default appearance (Earth).
        Choose between 'blue', 'green' and 'red' atmosphere.
        Choose duration of one full circle in milliseconds (ms).
        Add your own image of a planet, a face or just about anything and .planetize() it!
        Example customization code:

            $('#space').planetize({
                'color': 'blue',
                'duration': 2000,
                'imgurl': 'img/terra.png'
            });

        Simple as that!