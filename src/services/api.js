export async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Error de red');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}