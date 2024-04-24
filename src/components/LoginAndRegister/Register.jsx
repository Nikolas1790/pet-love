import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ContentContainer } from 'common/GiobalStyles';
import desctopRegisterDog from '../../img/loginAndRegister/DesctopRegisterCat.jpg';
import { AuthorizationLink, AuthorizationLinkSpan, Container, EyeSvg, FormContainer, FormConteiner, FormField, FormFieldConteiner, FormFields, PetImg, SecureMessage, Text, Title, TopRightSvg } from './RegisterAndLogin.styled';
// import { useDispatch } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { useState } from 'react';
import ButtonOrange from 'components/Buttons/ButtonOrange/ButtonOrange';
// import { toast } from 'react-toastify';

const initialValues = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
  
const schema = Yup.object({
  userName: Yup.string().required('Required'),
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
                          error={errors.userName && touched.userName ? "true" : "" } 
                          right={touched.userName && !errors.userName ? "true" : ""}
                        />
                        {touched.userName && (
                          errors.userName ? (
                            <TopRightSvg>
                              <use href={`${sprite}#icon-cross-small`} />
                            </TopRightSvg>
                          ) : (
                            <TopRightSvg>
                              <use href={`${sprite}#icon-check`} />
                            </TopRightSvg>
                          )
                        )}
                       {touched.userName && !errors.userName && <SecureMessage error={errors.userName && touched.userName ? "true" : "" }>Name is secure</SecureMessage>}
                       {touched.userName && errors.userName && <SecureMessage error={errors.userName && touched.userName ? "true" : "" }>Enter a valid Name</SecureMessage>}
                      </FormFieldConteiner>
                        
                      <FormFieldConteiner>
                        <FormField 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="Email" 
                          error={errors.email && touched.email ? "true" : "" } 
                          right={touched.email && !errors.email ? "true" : ""}
                        />
                        {touched.email && (
                          errors.email ? (
                            <TopRightSvg>
                              <use href={`${sprite}#icon-cross-small`} />
                            </TopRightSvg>
                          ) : (
                            <TopRightSvg>
                              <use href={`${sprite}#icon-check`} />
                            </TopRightSvg>
                          )
                        )}
                       {touched.email && !errors.email && <SecureMessage  error={errors.email && touched.email ? "true" : "" } >Email is secure</SecureMessage>}
                       {touched.email && errors.email && <SecureMessage  error={errors.email && touched.email ? "true" : "" }>Enter a valid Email</SecureMessage>}
                      </FormFieldConteiner>
                        
                      <FormFieldConteiner>
                        <FormField 
                          id="password" 
                          name="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Password" 
                          error={errors.password && touched.password ? "true" : "" } 
                          right={touched.password && !errors.password ? "true" : ""}
                        />
                        {touched.password && (
                          errors.password ? (
                            <TopRightSvg right="50px" >
                              <use href={`${sprite}#icon-cross-small`} />
                            </TopRightSvg>
                          ) : (
                            <TopRightSvg right="50px" >
                              <use href={`${sprite}#icon-check`} />
                            </TopRightSvg>
                          )
                        )}
                       {touched.password && !errors.password && <SecureMessage error={errors.password && touched.password ? "true" : "" } >Password is secure</SecureMessage>}
                       {touched.password && errors.password && <SecureMessage error={errors.password && touched.password ? "true" : "" }>Enter a valid Password</SecureMessage>}
                       
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
                          error={errors.confirmPassword && touched.confirmPassword ? "true" : "" } 
                          right={touched.confirmPassword && !errors.confirmPassword ? "true" : ""}
                        />
                        {touched.confirmPassword && (
                          errors.confirmPassword ? (
                            <TopRightSvg  right="50px">
                              <use href={`${sprite}#icon-cross-small`} />
                            </TopRightSvg>
                          ) : (
                            <TopRightSvg  right="50px">
                              <use href={`${sprite}#icon-check`} />
                            </TopRightSvg>
                          )
                        )}
                       {touched.confirmPassword && !errors.confirmPassword && <SecureMessage error={errors.confirmPassword && touched.confirmPassword ? "true" : "" } >Confirm password is secure</SecureMessage>}
                       {touched.confirmPassword && errors.confirmPassword && <SecureMessage error={errors.confirmPassword && touched.confirmPassword ? "true" : "" }>Enter a valid Confirm password</SecureMessage>}

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
                    <ButtonOrange label='Registration' />
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