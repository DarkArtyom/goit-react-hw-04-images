// import { Component } from 'react';
// import { Backdrop, ModalWindow } from './Modal.styled';

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keyup', this.handleEsc);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keyup', this.handleEsc);
//   }

//   handleEsc = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackDropClick = evt => {
//     if (evt.currentTarget === evt.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <Backdrop onClick={this.handleBackDropClick}>
//         <ModalWindow>{this.props.children}</ModalWindow>
//       </Backdrop>
//     );
//   }
// }
