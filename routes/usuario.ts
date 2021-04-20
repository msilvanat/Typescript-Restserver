import { Router } from 'express';
import { postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios';
import{ getUsuario, getUsuarios } from '../controllers/usuarios';


const router = Router();

router.get('/', getUsuarios );
router.get('/:id', getUsuario );
router.post('/', postUsuario );
router.put('/:id', putUsuario );
router.delete('/:id', deleteUsuario );


export default router;