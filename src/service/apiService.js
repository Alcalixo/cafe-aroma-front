import axios from 'axios';

export const fetchProtectedData = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found');
    return;
  }
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/admin/usuarios`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error al obtener datos protegidos:', error.response ? error.response.data.message : error.message);
  }
};
