import express from "express"
import axios from "axios"

const router = express.Router()

router.post('/', async (req, res) => {
    const { accessToken, phoneNumberId, templateName } = process.env
  
    try {
      const response = await axios.post(
        `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`,
        {
          messaging_product: 'whatsapp',
          to: 919503304568,
          type: 'template',
          template: {
            name: templateName,
            language: { code: 'en' }
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      res.status(200).send(response.data)
    } catch (error) {
      res.status(500).send(error.response.data)
    }
  })
  

export default router