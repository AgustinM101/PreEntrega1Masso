import { TextField, Snackbar, Alert } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

const Formulario = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      telefono: "",
    },
    onSubmit: (data) => {
      setLoading(true);
      setTimeout(() => {
        console.log(data);
        setLoading(false);
        setOpen(true);
        // la logica que hacemos para enviar al backend
      }, 2000); // Simula un delay de 2 segundos
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("campo requerido")
        .min(2, "minimo 2 caracteres"), // se agrega la validacion de los campos
      email: Yup.string().required("campo requerido").email("email invalido"), // se agrega la validacion de los campos
      telefono: Yup.string().required("campo requerido"),
    }),
    validateOnChange: false, // se agrega la validacion de los campos y se desactiva la validacion al cambiar
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      //clickaway es cuando se hace click fuera del snackbar
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* se agrega el atributo name en los input para poder acceder a los valores */}
        <TextField
          label="Nombre"
          variant="filled"
          name="name"
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          margin="normal"
          sx={{
            "& .MuiInputLabel-root": { color: "#fff" }, // color del label
            "& .MuiInputBase-input": { color: "#fff" }, // color del texto
            "& .MuiFormHelperText-root": { color: "#ffcccb" }, // color del texto de ayuda (errores)
          }}
          fullWidth
        />
        <TextField
          label="Email"
          variant="filled"
          name="email"
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          margin="normal"
          sx={{
            "& .MuiInputLabel-root": { color: "#fff" }, // color del label
            "& .MuiInputBase-input": { color: "#fff" }, // color del texto
            "& .MuiFormHelperText-root": { color: "#ffcccb" }, // color del texto de ayuda (errores)
          }}
          fullWidth
        />
        <TextField
          label="Teléfono"
          variant="filled"
          name="telefono"
          onChange={handleChange}
          error={Boolean(errors.telefono)}
          helperText={errors.telefono}
          margin="normal"
          sx={{
            "& .MuiInputLabel-root": { color: "#fff" }, // color del label
            "& .MuiInputBase-input": { color: "#fff" }, // color del texto
            "& .MuiFormHelperText-root": { color: "#ffcccb" }, // color del texto de ayuda (errores)
          }}
          fullWidth
        />
        <Button
          style={{ marginTop: "30px" }}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          disabled={loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : "Enviar"}
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Datos enviados exitosamente!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Formulario;
