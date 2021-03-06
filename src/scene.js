class scene {

	constructor(engine, args={}) {

        this.engine = engine;
        this.canvas = this.engine.canvas;
        this.gameObjects = [];
        this.layerOrder = [];
        this.layers = {};
        this.intervals = [];
        this.gameState = {};
        this.setup(args);

	}

	setup(args) {
	 // instantiate game objects here and connect their object references
	 // this method is meant to be overridden, it's literally the only thing that needs to change besides like name
	}

    switchScene(scene, args) {
        for (var i = 0; i < this.intervals.length; i++) {
            clearInterval(this.intervals[i]);
        }
        console.log(this.intervals);
        this.engine.switchScene(scene, args);
    }

	update(delta) {
      for (var i = 0; i < this.gameObjects.length; i++) { 
          this.gameObjects[i].update(delta);
      }
	}

	draw(interpolationPercentage) {
        var curLayer;
        for (var i = 0; i < this.layerOrder.length; i++) {
            curLayer = this.layers[this.layerOrder[i]];
            for (var j = 0; j < curLayer.length; j++) {
                curLayer[j].draw(interpolationPercentage);
            }
        }
    }

 }

export default scene;
