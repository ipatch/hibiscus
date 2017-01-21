import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';
import OrbitControls from '../orbit-controls';

class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    // added values by chris jones
    // const camera;
    // this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );

    // this.controls = new THREE.OrbitControls( camera );


    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        ),
      });
    };
    
  }
  // Did not work in this location

  // setUpControls(cameraRef) {
  //     new OrbitControls(cameraRef);
  // }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      // this.controls = new THREE.OrbitControls( camera );

      // <perspectiveCamera ref={this.setUpControls}/>

      // onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          ref={this.setUpControls}

          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>);
  }

  // Did not work in this location

  // setUpControls(cameraRef) {
  //     new OrbitControls(cameraRef);
  //   }
}

// default
ReactDOM.render(<Simple/>, document.getElementById('app'));
 
export default Simple;

// ReactDOM.render(<Simple/>, document.querySelector('#mount'));