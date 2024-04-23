import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ContentContainer } from 'common/GiobalStyles';
import desctopRegisterDog from '../../img/loginAndRegister/DesctopRegisterCat.jpg';
import { AuthorizationLink, AuthorizationLinkSpan, Container, EyeSvg, FormContainer, FormConteiner, FormField, FormFieldConteiner, FormFields, PetImg, Text, Title } from './RegisterAndLogin.styled';
// import { useDispatch } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { useState } from 'react';
// import { toast } from 'react-toastify';

const initialValues = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
  
const schema = Yup.object({
  userName: Yup.string().required('Required').min(2, "The name must have at least 2 letters"),
  email: Yup.string().matches(/^\w+([.-]?\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(7, "Password must be at least 7 characters"),
  confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };  
  const toggleConfigPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  }; 
  
  const handleSubmit = async (values) => {
    try {
      // await dispatch(register(values)).unwrap();
      // navigate('/dashboard');
    } catch (error) {
      // if (error === "Request failed with status code 409") {
      //   toast.error("User with this email already exists.");
      // } else {
      //   toast.error("Registration failed. Please try again later.");
      // }
    }
  }

  return (
    <ContentContainer>
      <Container>
        <PetImg srcSet={desctopRegisterDog} alt="cat" />

        <FormContainer>
          <Title>Registration</Title>          
          <Text>Thank you for your interest in our platform. </Text>





            <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >
              {({ errors, touched }) => (
                <Form>
                  <FormFields>  
                    <FormConteiner>  
              
                      <FormFieldConteiner>
                        <FormField
                          id="userName" 
                          name="userName" 
                          type="userName" 
                          placeholder="Name" 
                          error={errors.userName && touched.userName ? "true" : "false" } 
                          style={{
                            borderColor: touched.userName && errors.userName ? "red" : 
                                         touched.userName && !errors.userName ? "green" : "defaultColor",
                          }}
                        />
                      </FormFieldConteiner>
                        
                      <FormFieldConteiner>
                        <FormField 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="Email" 
                          error={errors.email && touched.email ? "true" : "false" } 
                          style={{
                            borderColor: touched.email && errors.email ? "red" : 
                                         touched.email && !errors.email ? "green" : "defaultColor",
                          }}
                        />
                      </FormFieldConteiner>
                        
                      <FormFieldConteiner>
                        <FormField 
                          id="password" 
                          name="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Password" 
                          style={{
                            borderColor: touched.password && errors.password ? "red" : 
                                         touched.password && !errors.password ? "green" : "defaultColor",
                          }}
                        />
                        {showPassword ? (
                          <EyeSvg onMouseDown={(e) => {
                            e.preventDefault(); 
                            togglePasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye`} />
                          </EyeSvg>
                        ) : (
                          <EyeSvg onMouseDown={(e) => {
                            e.preventDefault(); 
                            togglePasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye-off`} />
                          </EyeSvg>
                        )}
                      </FormFieldConteiner>

                      <FormFieldConteiner>
                        <FormField 
                          id="confirmPassword" 
                          name="confirmPassword" 
                          type={showConfirmPassword ? "text" : "password"} 
                          placeholder="Confirm password" 
                          style={{
                            borderColor: touched.confirmPassword && errors.confirmPassword ? "red" : 
                                         touched.confirmPassword && !errors.confirmPassword ? "green" : "defaultColor",
                          }}
                        />
                        {showConfirmPassword ? (
                          <EyeSvg onMouseDown={(e) => {
                            e.preventDefault(); 
                            toggleConfigPasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye`} />
                          </EyeSvg>
                        ) : (
                          <EyeSvg onMouseDown={(e) => {
                            e.preventDefault(); 
                            toggleConfigPasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye-off`} />
                          </EyeSvg>
                        )}
                      </FormFieldConteiner>
                            
                    </FormConteiner>   

                    <button>btn</button>  
                  </FormFields>                    
                </Form>
              )}
            </Formik>
            
            <AuthorizationLink to="/login" >Already have an account? <AuthorizationLinkSpan>Login</AuthorizationLinkSpan></AuthorizationLink>
       





















        </FormContainer>        
      </Container>
    </ContentContainer>
  );
}