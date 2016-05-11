/**
 * ScaleCalculator - The Javascript version
 * 
 * @author franckysolo
 * @version 0.1.0
 * 
 * @see https://github.com/franckysolo/scales-calculator The PHP version
 * @see https://github.com/franckysolo/jscales-calculator
 */
(function(window, factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    window.returnExports = factory(window);
  }  
} (this, function () {
  
  /**
   * Scale parameters
   */
  var ScaleParams =  {     
     MAJOR: 'major',
     MINOR: {
        HARMONIC: 'minor-harmonic',
        MELODIC: 'minor-melodic',
     },   
     PENTA: {
        MINOR: 'pentatonic-minor',
        MAJOR: 'pentatonic-major',
     },    
     flats: ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'],
     sharps: ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],
     scales:{ // [intervals]
       'major': [0, 2, 4, 5, 7, 9, 11, 0],
       'minor-harmonic': [0, 2, 3, 5, 7, 8, 11, 0],
       'minor-melodic': [0, 2, 3, 5, 7, 9, 11, 0],
       'pentatonic-major':[0, 2, 4, 7, 11, 0],
       'pentatonic-minor':[0, 3, 5, 8, 10, 0],
       // add modes and others scales intervals
     }
  };
  
  var ScaleCalculator = function () {
    
    /**
     * Returns the number of musics notes
     * 
     * @return integer
     */
    var max = function () {
      return ScaleParams.flats.length;
    };
  
    /**
     * Returns the scales array
     * 
     * @return Array
     */
    var getScales = function () {
      return ScaleParams.scales;
    };
 
    /**
     * Returns the notes of the scale in string format
     * 
     * @return String
     */
    var getScale = function (index) {
      
      if (undefined !== ScaleParams.scales[index]) {
        return ScaleParams.scales[index];
      }
      
      return '';
    };
    
    /**
     * Returns a note from the flats array
     * 
     * @return String
     */
    var getFlat = function (index) {
      
      if (undefined !== ScaleParams.flats[index]) {
        return ScaleParams.flats[index];
      }
      
      return '';
    };
    
    /**
     * Returns a note from the sharps array
     * 
     * @return String
     */
    var getSharp = function (index) {
      
      if (undefined !== ScaleParams.sharps[index]) {
        return ScaleParams.sharps[index];
      }
      
      return '';
    };
   
    /**
     * Calculate the notes of the scale 
     * from the root note
     * & color of the scale
     * @return String
     */
    var transpose = function (key, index, prefix) {

      var scale   = []
      ,   current = []
      ,   prefix = prefix || ' - ';
                    
      if (undefined === ScaleParams.scales[index]) {
        console.error(index + ' scale color not supported');
        return '';
      }
      
      switch (key) {
        case 0:
        case 1:
        case 3:
        case 5:
        case 6:
        case 8:
        case 10:
          current = ScaleParams.flats;
        break;
             
        default:
          current = ScaleParams.sharps;
        break;
      }
      
      for (var i in ScaleParams.scales[index]) {
        var note = ScaleParams.scales[index][i];
        var k = (key + note) % 12;
        scale.push(current[k]);
      }
      
      return scale.join(prefix);
    };
        
    return {
      params: ScaleParams,
      scales: ScaleParams.scales, 
      scale: getScale,
      sharps: ScaleParams.sharps, 
      sharp: getSharp,
      flats: ScaleParams.flats,
      flat: getFlat,
      max: max,
      transpose: transpose
    };   
  };
  
  return ScaleCalculator;
  
}));
