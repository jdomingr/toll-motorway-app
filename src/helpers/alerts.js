import Swal from 'sweetalert2';


export const confirmAlert = (text, confirmButtonText) => {
    return Swal.fire({
        title: 'Are you sure?',
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText
      })
}

export const customAlert = (icon, title, text) => {
    Swal.fire({
        icon,
        title,
        text
    });
}