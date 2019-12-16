import express from 'express';


const router = express.Router();


router.post('/users', (req, res): void => {
  res.send('protected route');
});

export default router;
