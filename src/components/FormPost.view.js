import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import {makeStyles, Paper} from "@material-ui/core"
import foot from "components/images/logo-white.svg"

const ContactFormView = ({contact = {}, users=[], onSubmit, error}) => {
  const classes = useStyles()
  return(
    <Paper variant="prop" square elevation={0} className={classes.Comm}>
      <div className={classes.content}>
        <div class="card-header justify-content-left">
          <h1 class="card-header-title text-dark">Contáctanos</h1>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col">
              <Formik initialValues={contact} onSubmit={onSubmit}>
              {({ values, setFieldValue }) => (
                <Form>
                  <div class="mb-2">
                    <div className={classes.r1}>
                      <Field name="name" className={classes.input} placeholder="Nombre"/>&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <Field name="lastname" className={classes.input} placeHolder="Apellido"/>
                    </div>
                    <div className={classes.r2}>
                      <Field name="email" className={classes.input2} placeholder="Correo Electrónico"/>
                    </div>
                    <div className={classes.r3}>
                      <Field name="business" className={classes.input} placeholder="Empresa"/>&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <Field name="position" className={classes.input} placeHolder="Puesto"/>
                    </div>
                    <div className={classes.r4}>
                      <div>
                        <Field as="select" name="user_id" className={classes.combo}>
                          <option value=""> Usuario</option>
                          {users.map((e, idx) => (
                            <option key={`process_${idx}`} value={e.id}>
                              {e.id}
                            </option>
                          ))}
                        </Field>
                      </div>
                      <div className={classes.r5}>
                        <Field as = "textarea" name="comment" className={classes.ta} placeholder="Comentarios">
                        </Field>
                      </div>
                    </div>
                  </div>
                  {error ? (
                    <div class="alert alert-soft-danger"> {error} </div>
                  ) : null}
                  <button type="submit" class="btn btn btn-primary btn-sm active float-right">
                    Enviar
                  </button>
                </Form>
              )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.foot}>
          <img src = {foot} className = {classes.footerImg} alt="Pie de Página"></img> 
          <div className={classes.space}></div>
      </div>
    </Paper>
  )
}
    

ContactFormView.propTypes = {
  contact: PropTypes.object,
  users:PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error:PropTypes.string,
};

const useStyles = makeStyles((theme)=>({
  Comm:{
    backgroundColor:"#F7FAFF",
  },

  content:{
    display:"block",
    position:"absolute",
    left:"30%",
    border:"0.0625rem solid #e7eaf3",
    borderRadius:"1rem",
    width:"40%",
    height:"auto",
    backgroundColor:"#fff",
    boxShadow:"5px 5px 15px gray"
  },

  r1:{
    display:"flex",
  },

  input:{
    paddingLeft:theme.spacing(2),
    border:"0.0625rem solid #e7eaf3",
    borderRadius:"0.3125rem",
    width:"48%",
    height:"calc(1.6em + 1.225rem)",
    fontSize:"1rem"
  },

  r2:{
    paddingTop: theme.spacing(1)
  },

  input2:{
    paddingLeft:theme.spacing(2),
    border:"0.0625rem solid #e7eaf3",
    borderRadius:"0.3125rem",
    width:"99%",
    height:"calc(1.6em + 1.225rem)",
    fontSize:"1rem"
  },

  r3:{
    paddingTop:theme.spacing(1)
  },

  combo:{
    paddingLeft:theme.spacing(2),
    border:"0.0625rem solid #e7eaf3",
    borderRadius:"0.3125rem",
    width:"48%",
    height:"calc(1.6em + 1.225rem)",
    fontSize:"1rem"
  },

  r4:{
    paddingTop:theme.spacing(1)
  },

  input3:{
    paddingLeft:theme.spacing(2),
    border:"0.0625rem solid #e7eaf3",
    borderRadius:"0.3125rem",
    width:"99%",
    height:"calc(1.6em + 2.25rem)",
    fontSize:"1rem"
  },

  r5:{
    paddingTop:theme.spacing(1)
  },

  ta:{
    width:"99%",
    height:"calc(1.6em + 4.25rem)",
    addingLeft:theme.spacing(2),
    border:"0.0625rem solid #e7eaf3",
    borderRadius:"0.3125rem",
    fontSize:"1rem",
    paddingLeft:theme.spacing(2),
  },

  foot:{
    backgroundColor: "#1B4373",
    width:"100%",
    paddingTop:theme.spacing(65),
  },

  footerImg:{
    width:"10%",
    position:"relative",
    left:"45%"
  },
  
  space:{
    paddingTop:theme.spacing(5)
  }

}))

export default ContactFormView;