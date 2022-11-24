var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')

router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre, novedades

    });
});

/* Diseño Agregar*/
router.get('/agregar', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/agregar', {
        layout: 'admin/layout',
        persona: req.session.nombre, novedades

    });
});

/* insertar Novedad*/

router.post('/agregar', async (req, res, next) => {
    try {
        console.log(req.body);/* Muestra los valores del formulario */
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'Todos los campos son requeridos'
        })
        }
        
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo la novedad'
        })
    }
})
/* Eliminar */
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades');
});
/* Modificar */

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadesById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    });
});

/* Actualizacion */
router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }        
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    }
    catch (error) {
        res.render('admin/modificar', {
        layout: 'admin/layout',
        error: true, message: 'No se modifico la novedad'
        
    })
    }
})

module.exports = router;