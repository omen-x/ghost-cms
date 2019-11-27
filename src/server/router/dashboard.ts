import express from 'express';


const router = express.Router();

router.use('/', express.static('build/app', { extensions: ['html'] }));

router.get('/', (req, res): void => {
  res.sendFile('dashboard.html', { root: 'build/app' });
});


export default router;
