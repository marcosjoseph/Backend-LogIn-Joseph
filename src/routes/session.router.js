import {Router} from "express";
import {UserModel} from "../dao/models/user.model.js";
import {auth} from "../middlewares/index.js";

const router = Router();

router.get("/", (req,res) => {
    res.render("session", {
    })
});

router.post("singup", async (req, res) => {
    const {first_name, last_name, email, password, age} = req.body;

    const newUser = {first_name, last_name, email, password, age, role:"user",}

    const user = new UserModel(newUser);

    const result = await user.save();

    if (result === null) {
        res.status(400).json({
            error: "Error al crear el usuario"
        })
    } else {
        req.session.user = email;
        req.session.role = newUser.role || "user";
        res.status(201).json({
            respuesta:"Usuario creado con éxito"
        })
    }
})

export default router;