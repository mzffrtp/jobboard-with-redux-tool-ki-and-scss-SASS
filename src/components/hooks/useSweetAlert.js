import Swal from 'sweetalert2';
import { useState } from 'react';

const useSweetAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const showSuccessAlert = (title, message) => {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      showConfirmButton: false,
      timer: 2000
    });
  };

  const showErrorAlert = (title, message) => {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonColor: '#f44336'
    });
  };

  const showConfirmationAlert = (title, message, onConfirm) => {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    });
  };

  return {
    showAlert,
    setShowAlert,
    showSuccessAlert,
    showErrorAlert,
    showConfirmationAlert
  };
};

export default useSweetAlert;
