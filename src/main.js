// console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
// import Counter from './Counter';
import Simple from './components/Simple';
import OrbitControls from './OrbitControls';


// ReactDOM.render(<Home />, document.body);

ReactDOM.render(
	<Simple />,
	document.getElementById("app")
	);

// React.createElement(
// 	Simple,
// 	document.getElementById('app')
// 	);
 
// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(Counter),
//     document.getElementById('mount')
//   );
// });



// componentWillMount: function(){
// 	document.body.classList.add('BasicScene');
// }

// React.createElement(BasicScene),
// document.getElementById('mount')
// );