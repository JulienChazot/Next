export default function handler(req, res) {
    const { method } = req;
  
    if (method === 'GET') {
      res.status(200).json({ message: 'GET request to the API' });
      console.log('OK GET');
    } else if (method === 'POST') {
      res.status(200).json({ message: 'POST request to the API' });
      console.log('OK POST');
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
      console.log('PAS OK');
    }
  }